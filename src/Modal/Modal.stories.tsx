import React from "react";
import Modal, { IModal } from "./Modal.component";


export default {
  title: "Modal",
  component: Modal,
};

const options: IModal = {
    maxWidth: '600px',
    maxHeight: '300px',
    children: 'Modal',
    minWidth: '300px',
    minHeight: '',
    onBackdropClick: (e) => { console.log(e.currentTarget) }
};

const Template = (args: IModal) => <Modal {...args} />;

// Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  ...options
};
