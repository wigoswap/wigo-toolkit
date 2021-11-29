import React from "react";
import { Link } from "react-router-dom";
import { Flex } from "../Box";
import AnimatedIconComponent from "../Svg/AnimatedIconComponent";
import { StyledBottomNavItem, StyledBottomNavText } from "./styles";
import { BottomNavItemProps } from "./types";

const BottomNavItem: React.FC<BottomNavItemProps> = ({
  label,
  iconName,
  href,
  showItemsOnMobile = false,
  isActive = false,
  ...props
}) => {
  const bottomNavItemContent = (
    <Flex flexDirection="column" justifyContent="center" alignItems="center" height="100%">
      {iconName && (
        <AnimatedIconComponent
          iconName={iconName}
          height="22px"
          width="21px"
          color={isActive ? "wigoBlue" : "wigoWhite"}
          isActive={isActive}
          activeBackgroundColor="transparent"
        />
      )}
      <StyledBottomNavText
        color={isActive ? "wigoWhite" : "wigoWhite"}
        fontWeight={isActive ? "400" : "400"}
        fontSize="12px"
      >
        {label}
      </StyledBottomNavText>
    </Flex>
  );

  return showItemsOnMobile ? (
    <StyledBottomNavItem type="button" {...props}>
      {bottomNavItemContent}
    </StyledBottomNavItem>
  ) : (
    <StyledBottomNavItem as={Link} to={href} {...props}>
      {bottomNavItemContent}
    </StyledBottomNavItem>
  );
};

export default BottomNavItem;
