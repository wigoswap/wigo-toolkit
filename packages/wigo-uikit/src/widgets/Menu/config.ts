import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.wigoswap.io",
      },
      {
        label: "Liquidity",
        href: "https://exchange.wigoswap.io/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
    status: status.LIVE,
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/wigoup",
  },
  {
    label: "Lottery",
    icon: "TicketIcon",
    href: "/lottery",
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
  },
  {
    label: "Team Battle",
    icon: "TeamBattleIcon",
    href: "/competition",
    status: status.SOON,
  },
  {
    label: "Profile & Teams",
    icon: "GroupsIcon",
    status: status.LIVE,
    items: [
      {
        label: "Leaderboard",
        href: "/teams",
        status: status.NEW,
      },
      {
        label: "YourProfile",
        href: "/",
      },
    ],
    calloutClass: "rainbow",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://wigoswap.io",
      },
      {
        label: "Tokens",
        href: "https://wigoswap.io/tokens",
      },
      {
        label: "Pairs",
        href: "https://wigoswap.io/pairs",
      },
      {
        label: "Accounts",
        href: "https://wigoswap.io/accounts",
      },
    ],
  },
  {
    label: "IFO",
    icon: "IfoIcon",
    items: [
      {
        label: "Next",
        href: "/ifo",
      },
      {
        label: "History",
        href: "/ifo/history",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Voting",
        href: "https://voting.wigoswap.io",
      },
      {
        label: "Github",
        href: "https://github.com/wigoswap",
      },
      {
        label: "Docs",
        href: "https://docs.wigoswap.io",
      },
      {
        label: "Blog",
        href: "https://wigoswap.medium.com",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/wigoswap",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/WigoSwapIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/WigoSwap_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/WigoSwapVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/wigoswap_ita",
      },
      {
        label: "русский",
        href: "https://t.me/wigoswap_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/wigoswapturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/WigoSwapPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/WigoswapEs",
      },
      {
        label: "日本語",
        href: "https://t.me/wigoswapjp",
      },
      {
        label: "Français",
        href: "https://t.me/wigoswapfr",
      },
      {
        label: "Announcements",
        href: "https://t.me/WigoSwapAnn",
      },
      {
        label: "Whale Alert",
        href: "https://t.me/WigoSwapWhales",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/wigoswap",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
