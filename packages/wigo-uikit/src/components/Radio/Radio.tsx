import styled from "styled-components";
import { space } from "styled-system";
import { RadioProps, scales } from "./types";

const getScale = ({ scale }: RadioProps) => {
  switch (scale) {
    case scales.SM:
      return "20px";
    case scales.MD:
    default:
      return "24px";
  }
};

const getCheckedScale = ({ scale }: RadioProps) => {
  switch (scale) {
    case scales.SM:
      return "14px";
    case scales.MD:
    default:
      return "18px";
  }
};

const Radio = styled.input.attrs({ type: "radio" })<RadioProps>`
  appearance: none;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  display: inline-block;
  height: ${getScale};
  width: ${getScale};
  vertical-align: middle;
  transition: background-color 0.2s ease-in-out;
  border: 0;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.inputSecondary};

  &:after {
    border-radius: 50%;
    content: "";
    height: ${getCheckedScale};
    left: 3px;
    position: absolute;
    top: 3px;
    width: ${getCheckedScale};
  }

  &:hover:not(:disabled):not(:checked) {
    background-color: ${({ theme }) => theme.colors.wigoBlue};
  }

  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.colors.wigoBlue};
  }

  &:checked {
    background-color: ${({ theme }) => theme.colors.inputSecondary};
    &:after {
      background-color: ${({ theme }) => theme.colors.wigoBlue};
    }
  }

  &:disabled {
    cursor: default;
    opacity: 0.6;
  }
  ${space}
`;

Radio.defaultProps = {
  scale: scales.MD,
  m: 0,
};

export default Radio;
