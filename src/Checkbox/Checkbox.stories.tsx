import React, { ChangeEvent } from "react";
import Checkbox, { ICheckbox } from "./Checkbox.component";


export default {
  title: "Checkbox",
  component: Checkbox,
};


const Template = ({ children, ...rest }: ICheckbox) => <Checkbox {...rest} />

export const UncheckedCheckbox = Template.bind({});

UncheckedCheckbox.args = {
    checked: false,
};

export const CheckedCheckbox = Template.bind({});

CheckedCheckbox.args = {
    checked: true,
};

export const DisabledCheckbox = Template.bind({});

DisabledCheckbox.args = {
    disabled: true
};