import React from "react";
import Button, { IButton } from "./Button.component";


export default {
  title: "Button",
  component: Button,
};

const child = 'Button'

const Template = ({ children, ...rest }: IButton) => <Button {...rest}>{children}</Button>;

export const SimpleButton = Template.bind({});
  
SimpleButton.args = {
    children: child,
    rest: null
}