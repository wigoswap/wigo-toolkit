import React from "react";
import styled from "styled-components";
import WiggyPlaceholder from "../Svg/Icons/WiggyPlaceholder";
import BackgroundImage from "./BackgroundImage";
import { BackgroundImageProps } from "./types";

const StyledProfileAvatar = styled(BackgroundImage)`
  border-radius: 50%;
`;

const StyledWiggyPlaceholder = styled(WiggyPlaceholder)`
  height: 100%;
  width: 100%;
`;

const ProfileAvatar: React.FC<BackgroundImageProps> = (props) => (
  <StyledProfileAvatar loadingPlaceholder={<StyledWiggyPlaceholder />} {...props} />
);

export default ProfileAvatar;
