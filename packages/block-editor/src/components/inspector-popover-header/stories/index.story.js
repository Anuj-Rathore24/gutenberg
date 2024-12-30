/**
 * WordPress dependencies
 */
import { box } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import InspectorPopoverHeader from '../';

/*
 * `<InspectorPopoverHeader />` renders a header that is suitable for use in an inspector sidebar popover.
 * For example, it is used to implement the Visibility, Publish, Author, etc. popovers in the post sidebar.
 * It displays a title, optional action buttons, an optional close button, and optional help text.
 */

const meta = {
	title: 'BlockEditor/InspectorPopoverHeader',
	component: InspectorPopoverHeader,
	parameters: {
		docs: {
			description: {
				component:
					'`<InspectorPopoverHeader />` renders a header that is suitable for use in an inspector sidebar popover.',
			},
			canvas: { sourceState: 'shown' },
		},
	},
	argTypes: {
		title: {
			control: 'text',
			description: 'Title to display in the header.',
			table: {
				type: { summary: 'string' },
			},
		},
		help: {
			control: 'text',
			description: 'Text to display at the bottom of the header.',
			table: {
				type: { summary: 'string' },
			},
		},
		actions: {
			control: 'array',
			description:
				'Array of actions to display in the header as a row of buttons.',
			table: {
				type: { summary: 'object' },
			},
		},
		onClose: {
			control: 'function',
			description:
				'Called when the user presses the close button. If not provided, no close button will appear.',
			table: {
				type: { summary: 'function' },
			},
		},
	},
};

export default meta;

export const Default = {
	args: {
		title: 'Post date',
		help: 'This is the post date header description.',
		actions: [
			{
				label: 'Reset',
				icon: box,
				onClick: () => {},
			},
		],
		onClose: () => {},
	},
	render: ( args ) => <InspectorPopoverHeader { ...args } />,
};
