import React from "react";
import { WigoPrice, WigoPriceProps } from ".";
import { Flex } from "../Box";

export default {
  title: "Components/WigoPrice",
  component: WigoPrice,
};

const Template: React.FC<WigoPriceProps> = ({ ...args }) => {
  return (
    <Flex p="10px">
      <WigoPrice {...args} />
    </Flex>
  );
};

export const Default = Template.bind({});
Default.args = {
  wigoPriceUsd: 20.0,
};
