/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
import InserterListItem from '../';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'core/paragraph', {
	title: 'Paragraph',
} );

/*
 * The `InserterListItem` component represents a single item in the inserter listbox,
 * providing functionality for selection, hover, and optional drag-and-drop.
 * It is used to display blocks or patterns within the WordPress editor environment and
 * supports custom styling and behavior through props.
 */

const meta = {
	title: 'BlockEditor/InserterListItem',
	component: InserterListItem,
	parameters: {
		docs: {
			description: {
				component:
					'`<InserterListItem />` renders a header that is suitable for use in an inspector sidebar popover.',
			},
			canvas: { sourceState: 'shown' },
		},
	},
	argTypes: {
		classname: {
			control: 'text',
			description: 'Additional CSS class to apply to the list item..',
			table: {
				type: { summary: 'string' },
			},
		},
		isFirst: {
			control: 'boolean',
			description: 'Indicates whether this is the first item in its row.',
			table: {
				type: { summary: 'boolean' },
			},
		},
		item: {
			control: 'object',
			description:
				'The block or pattern item to display. Should include properties like `id`, `title`, `icon`, `initialAttributes`, and `innerBlocks`.',
			table: {
				type: { summary: 'object' },
			},
		},
		onSelect: {
			control: 'function',
			description:
				'Callback function invoked when the item is selected. Receives the selected item as an argument.',
			table: {
				type: { summary: 'function' },
			},
		},
		onHover: {
			control: 'function',
			description: 'Callback function invoked when the item is hovered.',
			table: {
				type: { summary: 'function' },
			},
		},
		isDraggable: {
			control: 'boolean',
			description: 'Whether dragging is enabled for this item..',
			table: {
				type: { summary: 'boolean' },
			},
		},
	},
};

export default meta;

const item = {
	name: 'core/paragraph',
	title: 'Paragraph',
	icon: <span>Set</span>,
	initialAttributes: {
		placeholder: 'Write something...',
	},
	innerBlocks: [],
	isDisabled: false,
	syncStatus: 'synced',
};

function onSelect() {}
function onHover() {}
export const Default = {
	args: {
		classname: 'Custom-Class',
		isFirst: true,
		item,
		onSelect,
		onHover,
		isDraggable: true,
	},
	render: ( args ) => {
		return <InserterListItem { ...args } />;
	},
};
