import React from "react";
import { baseColors, darkColors } from "../../theme/colors";
import { Flex, Box } from "../Box";
import { Link } from "../Link";
import {
  StyledFooter,
  StyledIconMobileContainer,
  StyledList,
  StyledListItem,
  StyledSocialLinks,
  StyledToolsContainer,
  StyledFooterBorder,
} from "./styles";
import { FooterProps } from "./types";
import WigoPrice from "../WigoPrice/WigoPrice";
import { LogoWhite } from "../Svg";
import { Colors } from "../..";
import { CertikAudit } from "../CertikAudit";
import { marginBottom } from "styled-system";

const MenuItem: React.FC<FooterProps> = ({
  items,
  isDark,
  toggleTheme,
  currentLang,
  langs,
  setLang,
  wigoPriceUsd,
  certikURL,
  buyWigoLabel,
  ...props
}) => {
  return (
    <StyledFooter p={["40px 16px", null, "56px 40px 32px 40px"]} {...props} justifyContent="center">
      <Flex flexDirection="column" width={["100%", null, "1200px;"]}>
        <StyledIconMobileContainer display={["block", null, "none"]}>
          <LogoWhite isDark width="160px" />
        </StyledIconMobileContainer>
        <Flex
          order={[2, null, 1]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
          alignItems="flex-start"
          mb={["-50px", null, "55px"]}
        >
          <Box mt="-6px" display={["none", null, "block"]}>
            <LogoWhite isDark width="185px" />
          </Box>

          {items?.map((item) => (
            <StyledList key={item.label}>
              <StyledListItem>{item.label}</StyledListItem>
              {item.items?.map(({ label, href, isHighlighted = false }) => (
                <StyledListItem key={label}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    color={isHighlighted ? baseColors.wigoBlue : darkColors.text}
                    bold={false}
                  >
                    {label}
                  </Link>
                </StyledListItem>
              ))}
            </StyledList>
          ))}
        </Flex>
        <StyledFooterBorder />
        <StyledToolsContainer
          order={[3, null, 3]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
        >
          <Flex order={[1, null, 1]} mb={["16px", null, "0"]} justifyContent="space-between" alignItems="center">
            <Box mr="25px" display={["block", null, "none"]}>
              <WigoPrice wigoPriceUsd={wigoPriceUsd} color={baseColors.wigoWhite as keyof Colors} />
              <br />
              <CertikAudit certikURL={certikURL} />
            </Box>
            <Box mr="25px" display={["none", null, "block"]}>
              <CertikAudit certikURL={certikURL} />
            </Box>
            <Box display={["none", null, "block"]}>
              <WigoPrice wigoPriceUsd={wigoPriceUsd} color={baseColors.wigoWhite as keyof Colors} />
            </Box>
          </Flex>
          <Flex order={[2, null, 2]} alignItems="center">
            <StyledSocialLinks />
          </Flex>
        </StyledToolsContainer>
      </Flex>
    </StyledFooter>
  );
};

export default MenuItem;
