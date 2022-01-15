import React from "react";
import { CertikAudit, CertikAuditProps } from ".";
import { Flex } from "../Box";

export default {
  title: "Components/CertikAudit",
  component: CertikAudit,
};

const Template: React.FC<CertikAuditProps> = ({ ...args }) => {
  return (
    <Flex p="10px">
      <CertikAudit {...args} />
    </Flex>
  );
};

export const Default = Template.bind({});
Default.args = {
  certikURL: "https://certik.com",
};
