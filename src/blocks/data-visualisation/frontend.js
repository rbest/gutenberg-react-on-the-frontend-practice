/**
 * External dependencies
 */
import Chart from 'react-apexcharts';

/**
 * WordPress dependencies
 */
import domReady from '@wordpress/dom-ready';
import { render } from '@wordpress/element';

domReady( () => {
	const blocks = document.querySelectorAll(
		'.wp-block-jsadvancers-data-visualisation'
	);

	blocks.forEach( ( block ) => {
		const chartType = block.dataset.chartType;
		const chartColors = block.dataset.chartColors.split( ' ' );

		const options = {
			chart: {
				toolbar: {
					show: false,
				},
				zoom: {
					enabled: false,
				},
			},
			colors: chartColors,
			stroke: {
				curve: 'smooth',
			},

			xaxis: {
				type: 'datetime',
				categories: [
					'2018-09-19T00:00:00',
					'2018-09-19T01:30:00',
					'2018-09-19T02:30:00',
					'2018-09-19T03:30:00',
					'2018-09-19T04:30:00',
					'2018-09-19T05:30:00',
					'2018-09-19T06:30:00',
				],
			},
			tooltip: {
				x: {
					format: 'dd/MM/yy HH:mm',
				},
			},
		};

		const series = [
			{
				name: 'series1',
				data: [ 31, 40, 28, 51, 42, 109, 100 ],
			},
			{
				name: 'series2',
				data: [ 11, 32, 45, 32, 34, 52, 41 ],
			},
		];
		render(
			<Chart
				options={ options }
				series={ series }
				type={ chartType }
				width={ 500 }
				height={ 320 }
			/>,
			block
		);
	} );
} );
