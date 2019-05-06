/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { Fragment } from '@wordpress/element';
import { InspectorControls, PanelColorSettings } from '@wordpress/editor';
import { SelectControl } from '@wordpress/components';

const chartTypes = {
	line: 'line',
	area: 'area',
	bar: 'bar',
	scatter: 'scatter',
	bubble: 'bubble',
	heatmap: 'heatmap',
};

const chartTypeOptions = Object.keys( chartTypes ).map( ( key ) => {
	return {
		label: key,
		value: chartTypes[ key ],
	};
} );

registerBlockType( 'jsadvancers/data-visualisation', {
	title: 'Data Visualisation',
	description: 'Gutenberg Block to try out React on the Frontend',
	icon: 'chart-area',
	attributes: {
		chartType: {
			type: 'string',
			default: chartTypes.line,
		},
		color1: {
			type: 'string',
			default: '#2E93fA',
		},
		color2: {
			type: 'string',
			default: '#66DA26',
		},
		color3: {
			type: 'string',
			default: '#546E7A',
		},
		color4: {
			type: 'string',
			default: '#E91E63',
		},
		color5: {
			type: 'string',
			default: '#FF9800',
		},
	},
	category: 'common',
	edit: ( props ) => {
		const {
			className,
			attributes: { chartType, color1, color2, color3, color4, color5 },
			setAttributes,
		} = props;
		return (
			<Fragment>
				<InspectorControls>
					<SelectControl
						label={ __( 'Chart Type', 'jsadvancers' ) }
						value={ chartType }
						options={ chartTypeOptions }
						onChange={ ( newChartType ) => {
							setAttributes( { chartType: newChartType } );
						} }
					/>
					<PanelColorSettings
						title={ __( 'Color Settings' ) }
						colorSettings={ [ color1, color2, color3, color4, color5 ].map(
							( color, key ) => {
								return {
									value: color,
									onChange: ( newColor ) => {
										const name = `color${ key + 1 }`;
										setAttributes( { [ name ]: newColor } );
									},
									label: `Color ${ key + 1 }`,
								};
							}
						) }
					/>
				</InspectorControls>
				<div
					className={ className }
					data-chart-type={ chartType }
					data-chart-colors={ classnames( color1, color2, color3, color4, color5 ) }
				>
					Check the Console :)
				</div>
			</Fragment>
		);
	},
	save: ( props ) => {
		const {
			className,
			attributes: { chartType, color1, color2, color3, color4, color5 },
		} = props;
		return (
			<div
				className={ className }
				data-chart-type={ chartType }
				data-chart-colors={ classnames( color1, color2, color3, color4, color5 ) }
			>
				Go to the Editor and check the Console :)
			</div>
		);
	},
} );
