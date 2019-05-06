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
	// get all the instances of the Block on the Page

	// Loop over the blocks to get each one () => {

		// get the Chart Type from the dataset

		// get the chartColors from the Dataset

		const options = {
			chart: {
				toolbar: {
					show: false,
				},
				zoom: {
					enabled: false,
				},
			},
			colors: /* set Chart Colors Here */,
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
		
		const component = () => (
			<Chart
				options={options}
				series={series}
				type={ /* Set Chart Type here */ }
				width={500}
				height={320}
			/>
		)
		
		
		// Render the component on top of the block
	} );
} );
