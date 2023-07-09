import React from "react";
import styled from "styled-components";
import { FtmRoundIcon } from "../Svg";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";

export interface Props {
  color?: keyof Colors;
  ftmPriceUsd?: number;
  showSkeleton?: boolean;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const FtmPrice: React.FC<React.PropsWithChildren<Props>> = ({
  ftmPriceUsd,
  color = "wigoWhite",
  showSkeleton = true,
}) => {
  return ftmPriceUsd ? (
    <PriceLink href="https://wigoswap.io/swap?inputCurrency=0x04068DA6C83AFCFA0e13ba15A6696662335D5B75" target="_blank">
      <FtmRoundIcon width="24px" mr="8px" />
      <Text color={color}>{`$${ftmPriceUsd.toFixed(2)}`}</Text>
    </PriceLink>
  ) : showSkeleton ? (
    <Skeleton width={80} height={22} />
  ) : null;
};

export default React.memo(FtmPrice);
