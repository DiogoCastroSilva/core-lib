import React, { FC, FormEvent, useState } from "react";
import Tabs, { ITabs, ITab, Tab } from "./Tabs.component";


export default {
  title: "Tab",
  component: Tabs,
};



const item = <p>Tab 1</p>;

const Template = (args: ITab) => <Tab {...args} />;

export const SimpleTab = Template.bind({});

SimpleTab.args = {
  children: item,
  index: 1
};



interface TabContent {
  value: number;
  index: number;
}

const TabContent: FC<TabContent> = ({ children, value, index }) => {
  if (index !== value) return null;

  return (
    <div>
      {children}
    </div>
  )
};


export const TabExemple = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const changeTabHandler = (e: FormEvent, index: number) => {
    console.log(e, index);
    setSelectedTab(index);
  };

  return (
    <>
      <Tabs onchange={changeTabHandler}>
        <Tab index={0} value={selectedTab}>
          Tab 1
        </Tab>
        <Tab index={1} value={selectedTab}>
          Tab 1
        </Tab>
      </Tabs>
        <TabContent value={selectedTab} index={0}>
          <h1>Tab 1</h1>
          <p>You selected tab 1</p>
        </TabContent>
        <TabContent value={selectedTab} index={1}>
          <h1>Tab 2</h1>
          <p>You selected tab 2</p>
        </TabContent>
    </>
  );
};

export const OverflowTabExemple = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [tabs] = useState(new Array(30).fill(null));

  const changeTabHandler = (e: FormEvent, index: number) => {
    console.log(e, index);
    setSelectedTab(index);
  };

  return (
    <>
      <Tabs onchange={changeTabHandler}>
        {tabs.map((_, index) => (
          <Tab index={index} value={selectedTab}>
            Tab {index}
          </Tab>
        ))}
      </Tabs>
        <TabContent value={selectedTab} index={0}>
          <h1>Tab 1</h1>
          <p>You selected tab 1</p>
        </TabContent>
        <TabContent value={selectedTab} index={1}>
          <h1>Tab 2</h1>
          <p>You selected tab 2</p>
        </TabContent>
    </>
  );
};
