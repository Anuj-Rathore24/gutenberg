/**
 * WordPress dependencies
 */
import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { htmlElementMessages } from '../../utils/messages';

/*
 * Renders the Comments Inspector Controls component.
 *
 * This component allows users to select an HTML element (`tagName`) for rendering
 * the comments placeholder in the WordPress editor.
 *
 * @param {Object} props                             Component properties.
 * @param {Object} props.attributes                  The attributes of the component.
 * @param {string} props.attributes.tagName          The HTML element tag name (e.g., 'div', 'section', 'aside').
 * @param {Function} props.setAttributes             Function to update component attributes.
 * @returns {JSX.Element}                            The Comments Inspector Controls component.
 */
export default function CommentsInspectorControls( {
	attributes: { tagName },
	setAttributes,
} ) {
	return (
		<InspectorControls>
			<InspectorControls group="advanced">
				<SelectControl
					__nextHasNoMarginBottom
					__next40pxDefaultSize
					label={ __( 'HTML element' ) }
					options={ [
						{ label: __( 'Default (<div>)' ), value: 'div' },
						{ label: '<section>', value: 'section' },
						{ label: '<aside>', value: 'aside' },
					] }
					value={ tagName }
					onChange={ ( value ) =>
						setAttributes( { tagName: value } )
					}
					help={ htmlElementMessages[ tagName ] }
				/>
			</InspectorControls>
		</InspectorControls>
	);
}
