import React from "react";
import { Box } from "../Box";
import MenuItem from "../MenuItem/MenuItem";
import StyledSubMenuItems from "./styles";
import { SubMenuItemsProps } from "./types";

const SubMenuItems: React.FC<React.PropsWithChildren<SubMenuItemsProps>> = ({ items = [], activeItem, ...props }) => {
  return (
    <StyledSubMenuItems justifyContent="center" {...props}>
      {items.map(
        ({ label, href }) =>
          label && (
            <Box key={label} mr="10px" ml="10px">
              <MenuItem href={href} isActive={href === activeItem} variant="subMenu">
                {label}
              </MenuItem>
            </Box>
          )
      )}
    </StyledSubMenuItems>
  );
};

export default SubMenuItems;
