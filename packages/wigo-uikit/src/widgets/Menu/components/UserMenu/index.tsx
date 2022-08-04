import React, { useEffect, useRef, useState } from "react";
import { usePopper } from "react-popper";
import styled from "styled-components";
import Flex from "../../../../components/Box/Flex";
import { ChevronDownIcon } from "../../../../components/Svg";
import isTouchDevice from "../../../../util/isTouchDevice";
import { UserMenuProps, variants } from "./types";
import MenuIcon from "./MenuIcon";
import { UserMenuItem } from "./styles";
import { Box } from "../../../../components/Box";

export const StyledUserMenu = styled(Flex)`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.03);
  border-radius: 20px 10px 10px 20px;
  cursor: pointer;
  display: inline-flex;
  height: 32px;
  padding-left: 40px;
  padding-right: 8px;
  position: relative;

  &:hover {
    opacity: 0.65;
  }
`;

export const LabelText = styled.div`
  color: ${({ theme }) => theme.colors.text};
  display: none;
  font-weight: 400;

  ${({ theme }) => theme.mediaQueries.sm} {
    display: block;
    margin-left: 8px;
    margin-right: 4px;
  }
`;

const Menu = styled.div<{ isOpen: boolean }>`
  background-color: ${({ theme }) => theme.colors.wigoWhite};
  border-radius: 10px;
  pointer-events: auto;
  width: 200px;
  visibility: visible;
  z-index: 1001;
  box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 20%);
}


  ${({ isOpen }) =>
    !isOpen &&
    `
    pointer-events: none;
    visibility: hidden;
  `}

  ${UserMenuItem}:first-child {
    border-radius: 10px 10px 0 0;
  }

  ${UserMenuItem}:last-child {
    border-radius: 0 0 10px 10px;
  }
`;

const UserMenu: React.FC<UserMenuProps> = ({
  account,
  text,
  avatarSrc,
  variant = variants.DEFAULT,
  children,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [targetRef, setTargetRef] = useState<HTMLDivElement | null>(null);
  const [tooltipRef, setTooltipRef] = useState<HTMLDivElement | null>(null);
  const accountEllipsis = account ? `${account.substring(0, 2)}...${account.substring(account.length - 4)}` : null;
  const { styles, attributes } = usePopper(targetRef, tooltipRef, {
    strategy: "fixed",
    placement: "bottom-end",
    modifiers: [{ name: "offset", options: { offset: [0, 0] } }],
  });

  useEffect(() => {
    const showDropdownMenu = () => {
      setIsOpen(true);
    };

    const hideDropdownMenu = (evt: MouseEvent | TouchEvent) => {
      const target = evt.target as Node;
      if (target && !tooltipRef?.contains(target)) {
        setIsOpen(false);
        evt.stopPropagation();
      }
    };

    targetRef?.addEventListener("mouseenter", showDropdownMenu);
    targetRef?.addEventListener("mouseleave", hideDropdownMenu);

    return () => {
      targetRef?.removeEventListener("mouseenter", showDropdownMenu);
      targetRef?.removeEventListener("mouseleave", hideDropdownMenu);
    };
  }, [targetRef, tooltipRef, setIsOpen]);

  return (
    <Flex alignItems="center" minHeight="60px" ref={setTargetRef} {...props}>
      <StyledUserMenu
        onTouchStart={() => {
          setIsOpen((s) => !s);
        }}
      >
        <MenuIcon avatarSrc={avatarSrc} variant={variant} />
        <LabelText title={text || account}>{text || accountEllipsis}</LabelText>
        <ChevronDownIcon color="text" width="24px" />
      </StyledUserMenu>
      <Menu style={styles.popper} ref={setTooltipRef} {...attributes.popper} isOpen={isOpen}>
        <Box onClick={() => setIsOpen(false)}>{children}</Box>
      </Menu>
    </Flex>
  );
};

export default UserMenu;
