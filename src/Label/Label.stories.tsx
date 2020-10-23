import React from "react";
import styled from "styled-components";
import Label, { ILabel } from "./Label.component";


export default {
  title: "Label",
  component: Label,
};


const Template = ({ children, ...rest }: ILabel) => <Label {...rest}>{children}</Label>

export const SimpleLabel = Template.bind({});

SimpleLabel.args = {
    children: 'Label'
};

export const ComplexLabel = Template.bind({});

const ComplexLabelContainer = styled.div`
    display: flex;
    flex-direction: column;

    h3 {
        margin: 0;
    }

    p {
        margin: 0;
    }
`;

const ComplexLabelChildren = (
    <ComplexLabelContainer>
        <h3>Label Title</h3>
        <p>Label Desription</p>
    </ComplexLabelContainer>
);

ComplexLabel.args = {
    children: ComplexLabelChildren
};