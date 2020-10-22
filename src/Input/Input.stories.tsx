import React from "react";
import Input, { IInput } from "./Input.component";


export default {
  title: "Input",
  component: Input,
};

const child = 'input'

const Template = ({ children, ...rest }: IInput) => <Input {...rest}>{children}</Input>

export const SimpleInput = Template.bind({});

SimpleInput.args = {

};