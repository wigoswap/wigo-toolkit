import React from "react";
import styled from "styled-components";
import { Variant, variants } from "./types";
import { Image } from "../../../../components/Image";
import { LogoIcon, WalletFilledIcon, WarningIcon } from "../../../../components/Svg";
import { Colors } from "../../../../theme/types";
import { Spinner } from "../../../../components/Spinner";

const MenuIconWrapper = styled.div<{ borderColor: keyof Colors }>`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.wigoBlue};
  border-color: white;
  border-radius: 50%;
  border-style: solid;
  border-width: 0;
  display: flex;
  height: 40px;
  justify-content: center;
  left: 0;
  position: absolute;
  top: -4px;
  width: 40px;
  z-index: 102;
`;

const ProfileIcon = styled(Image)`
  left: 0;
  position: absolute;
  top: -4px;
  z-index: 102;

  & > img {
    border-radius: 50%;
  }
`;

export const NoProfileMenuIcon: React.FC<React.PropsWithChildren<unknown>> = () => (
  <MenuIconWrapper borderColor="wigoWhite">
    <WalletFilledIcon color="wigoWhite" width="24px" />
  </MenuIconWrapper>
);

export const PendingMenuIcon: React.FC<React.PropsWithChildren<unknown>> = () => (
  <MenuIconWrapper borderColor="wigoWhite">
    <div style={{ marginTop: "1px" }}>
      <Spinner size={40} color="#FFFFFF" />
    </div>
  </MenuIconWrapper>
);

export const WarningMenuIcon: React.FC<React.PropsWithChildren<unknown>> = () => (
  <MenuIconWrapper borderColor="wigoWhite">
    <WarningIcon color="wigoWhite" width="24px" />
  </MenuIconWrapper>
);

export const DangerMenuIcon: React.FC<React.PropsWithChildren<unknown>> = () => (
  <MenuIconWrapper borderColor="wigoWhite">
    <WarningIcon color="wigoWhite" width="24px" />
  </MenuIconWrapper>
);

const MenuIcon: React.FC<React.PropsWithChildren<{ avatarSrc?: string; variant: Variant }>> = ({
  avatarSrc,
  variant,
}) => {
  if (variant === variants.DANGER) {
    return <DangerMenuIcon />;
  }

  if (variant === variants.WARNING) {
    return <WarningMenuIcon />;
  }

  if (variant === variants.PENDING) {
    return <PendingMenuIcon />;
  }

  if (!avatarSrc) {
    return <NoProfileMenuIcon />;
  }

  return <ProfileIcon src={avatarSrc} height={40} width={40} />;
};

export default MenuIcon;
