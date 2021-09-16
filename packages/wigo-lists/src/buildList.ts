import fs from "fs";
import path from "path";
import { TokenList } from "@uniswap/token-lists";
import { version as wigoswapDefaultVersion } from "../lists/wigoswap-default.json";
import { version as wigoswapExtendedVersion } from "../lists/wigoswap-extended.json";
import { version as wigoswapTop15Version } from "../lists/wigoswap-top-15.json";
import { version as wigoswapTop100Version } from "../lists/wigoswap-top-100.json";
import wigoswapDefault from "./tokens/wigoswap-default.json";
import wigoswapExtended from "./tokens/wigoswap-extended.json";
import wigoswapTop100 from "./tokens/wigoswap-top-100.json";
import wigoswapTop15 from "./tokens/wigoswap-top-15.json";

export enum VersionBump {
  "major" = "major",
  "minor" = "minor",
  "patch" = "patch",
}

type Version = {
  major: number;
  minor: number;
  patch: number;
};

const lists = {
  "wigoswap-default": {
    list: wigoswapDefault,
    name: "WigoSwap Default",
    keywords: ["wigoswap", "default"],
    logoURI:
      "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",
    sort: false,
    currentVersion: wigoswapDefaultVersion,
  },
  "wigoswap-extended": {
    list: wigoswapExtended,
    name: "WigoSwap Extended",
    keywords: ["wigoswap", "extended"],
    logoURI:
      "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",
    sort: true,
    currentVersion: wigoswapExtendedVersion,
  },
  "wigoswap-top-100": {
    list: wigoswapTop100,
    name: "WigoSwap Top 100",
    keywords: ["wigoswap", "top 100"],
    logoURI:
      "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",
    sort: true,
    currentVersion: wigoswapTop100Version,
  },
  "wigoswap-top-15": {
    list: wigoswapTop15,
    name: "WigoSwap Top 15",
    keywords: ["wigoswap", "top 15"],
    logoURI:
      "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",
    sort: true,
    currentVersion: wigoswapTop15Version,
  },
};

const getNextVersion = (currentVersion: Version, versionBump?: VersionBump) => {
  const { major, minor, patch } = currentVersion;
  switch (versionBump) {
    case VersionBump.major:
      return { major: major + 1, minor, patch };
    case VersionBump.minor:
      return { major, minor: minor + 1, patch };
    case VersionBump.patch:
    default:
      return { major, minor, patch: patch + 1 };
  }
};

export const buildList = (listName: string, versionBump?: VersionBump): TokenList => {
  const { list, name, keywords, logoURI, sort, currentVersion } = lists[listName];
  const version = getNextVersion(currentVersion, versionBump);
  return {
    name,
    timestamp: new Date().toISOString(),
    version,
    logoURI,
    keywords,
    // sort them by symbol for easy readability (not applied to default list)
    tokens: sort
      ? list.sort((t1, t2) => {
          if (t1.chainId === t2.chainId) {
            // WIGO first in extended list
            if ((t1.symbol === "WIGO") !== (t2.symbol === "WIGO")) {
              return t1.symbol === "WIGO" ? -1 : 1;
            }
            return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
          }
          return t1.chainId < t2.chainId ? -1 : 1;
        })
      : list,
  };
};

export const saveList = (tokenList: TokenList, listName: string): void => {
  const tokenListPath = `${path.resolve()}/lists/${listName}.json`;
  const stringifiedList = JSON.stringify(tokenList, null, 2);
  fs.writeFileSync(tokenListPath, stringifiedList);
  console.info("Token list saved to ", tokenListPath);
};
