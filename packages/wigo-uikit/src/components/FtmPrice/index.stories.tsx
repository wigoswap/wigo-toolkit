import React from "react";
import { FtmPrice, FtmPriceProps } from ".";
import { Flex } from "../Box";

export default {
  title: "Components/FtmPrice",
  component: FtmPrice,
};

const Template: React.FC<React.PropsWithChildren<FtmPriceProps>> = ({ ...args }) => {
  return (
    <Flex p="10px">
      <FtmPrice {...args} />
    </Flex>
  );
};

export const Default = Template.bind({});
Default.args = {
  FtmPriceUsd: 2.85,
};
