import { FC } from "react";
import { SvgProps } from "../../components/Svg/types";

export enum ConnectorNames {
  Injected = "injected",
  WalletConnect = "walletconnect",
  WalletLink = "walletlink",
}

export type Login = (connectorId: ConnectorNames) => void;

export interface Config {
  title: string;
  icon: FC<React.PropsWithChildren<SvgProps>>;
  connectorId: ConnectorNames;
  priority: number;
}
