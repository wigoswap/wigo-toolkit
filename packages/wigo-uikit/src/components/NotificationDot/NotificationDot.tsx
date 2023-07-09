import React, { cloneElement, Children, ReactElement } from "react";
import styled from "styled-components";
import { NotificationDotProps, DotProps } from "./types";

const NotificationDotRoot = styled.span`
  display: inline-flex;
  position: relative;
`;

const Dot = styled.span<DotProps>`
  display: ${({ show }) => (show ? "inline-flex" : "none")};
  position: absolute;
  top: 10px;
  right: 10px;
  width: 8px;
  height: 8px;
  pointer-events: none;
  border-radius: 50%;
  background-color: ${({ theme, color }) => theme.colors[color]};
`;

const NotificationDot: React.FC<React.PropsWithChildren<NotificationDotProps>> = ({
  show = false,
  color = "failure",
  children,
  ...props
}) => (
  <NotificationDotRoot>
    {Children.map(children, (child: ReactElement) => cloneElement(child, props))}
    <Dot show={show} color={color} />
  </NotificationDotRoot>
);

export default NotificationDot;
