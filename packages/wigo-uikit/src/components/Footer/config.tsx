import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.wigoswap.finance/contact-us",
      },
      {
        label: "Blog",
        href: "https://wigoswap.medium.com/",
      },
      {
        label: "Community",
        href: "https://docs.wigoswap.finance/contact-us/telegram",
      },
      {
        label: "WIGO",
        href: "https://docs.wigoswap.finance/tokenomics/wigo",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://wigoswap.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.wigoswap.finance/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.wigoswap.finance/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.wigoswap.finance/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/wigoswap",
      },
      {
        label: "Documentation",
        href: "https://docs.wigoswap.finance",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@wigoswap-1/s/wigoswap/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.wigoswap.finance/help/faq#is-wigoswap-safe-has-wigoswap-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.wigoswap.finance/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  // {
  //   label: "Telegram",
  //   icon: "Telegram",
  //   items: [
  //     {
  //       label: "English",
  //       href: "https://t.me/wigoswap",
  //     },
  //     {
  //       label: "Bahasa Indonesia",
  //       href: "https://t.me/WigoSwapIndonesia",
  //     },
  //     {
  //       label: "中文",
  //       href: "https://t.me/WigoSwap_CN",
  //     },
  //     {
  //       label: "Tiếng Việt",
  //       href: "https://t.me/WigoSwapVN",
  //     },
  //     {
  //       label: "Italiano",
  //       href: "https://t.me/wigoswap_ita",
  //     },
  //     {
  //       label: "русский",
  //       href: "https://t.me/wigoswap_ru",
  //     },
  //     {
  //       label: "Türkiye",
  //       href: "https://t.me/wigoswapturkiye",
  //     },
  //     {
  //       label: "Português",
  //       href: "https://t.me/WigoSwapPortuguese",
  //     },
  //     {
  //       label: "Español",
  //       href: "https://t.me/WigoswapEs",
  //     },
  //     {
  //       label: "日本語",
  //       href: "https://t.me/wigoswapjp",
  //     },
  //     {
  //       label: "Français",
  //       href: "https://t.me/wigoswapfr",
  //     },
  //     {
  //       label: "Announcements",
  //       href: "https://t.me/WigoSwapAnn",
  //     },
  //     {
  //       label: "Whale Alert",
  //       href: "https://t.me/WigoSwapWhales",
  //     },
  //   ],
  // },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/wigoswap/",
    items: [],
  },
  {
    label: "Telegram",
    icon: "Telegram",
    href: "https://t.me/wigoswap",
    items: [],
  },
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/wigoswap",
    items: [],
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
