import React, { ChangeEvent } from "react";
import Toogle, { IToogle } from "./Toogle.component";


export default {
  title: "Toogle",
  component: Toogle,
};

const Template = ({...rest}: IToogle) => <Toogle {...rest} />;

export const CheckedToogle = Template.bind({});

CheckedToogle.args = {
    checked: true
};

export const UncheckedToogle = Template.bind({});

UncheckedToogle.args = {
    checked: false
};

export const DisabledUncheckedToogle = Template.bind({});

DisabledUncheckedToogle.args = {
    checked: false,
    disabled: true
};

export const DisabledCheckedToogle = Template.bind({});

DisabledCheckedToogle.args = {
    checked: true,
    disabled: true
};