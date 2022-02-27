import Metamask from "../../components/Svg/Icons/Metamask";
import WalletConnect from "../../components/Svg/Icons/WalletConnect";
import TrustWallet from "../../components/Svg/Icons/TrustWallet";
import MathWallet from "../../components/Svg/Icons/MathWallet";
import TokenPocket from "../../components/Svg/Icons/TokenPocket";
import Coinbase from "../../components/Svg/Icons/Coinbase";
import SafePal from "../../components/Svg/Icons/SafePal";
import Coin98 from "../../components/Svg/Icons/Coin98";

import { Config, ConnectorNames } from "./types";

const connectors: Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
    priority: 1,
  },
  {
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: ConnectorNames.WalletConnect,
    priority: 2,
  },
  {
    title: "Trust Wallet",
    icon: TrustWallet,
    connectorId: ConnectorNames.Injected,
    priority: 3,
  },
  {
    title: "SafePal",
    icon: SafePal,
    connectorId: ConnectorNames.Injected,
    priority: 4,
  },
  {
    title: "MathWallet",
    icon: MathWallet,
    connectorId: ConnectorNames.Injected,
    priority: 5,
  },
  {
    title: "TokenPocket",
    icon: TokenPocket,
    connectorId: ConnectorNames.Injected,
    priority: 6,
  },
  {
    title: "Coin98",
    icon: Coin98,
    connectorId: ConnectorNames.Injected,
    priority: 7,
  },
  {
    title: "Coinbase Wallet",
    icon: Coinbase,
    connectorId: ConnectorNames.Injected,
    priority: 8,
  },
];

export default connectors;
export const connectorLocalStorageKey = "connectorIdv2";
export const walletLocalStorageKey = "wallet";
