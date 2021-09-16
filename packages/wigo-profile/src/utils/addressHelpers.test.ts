import addresses from "../constants/contracts";
import { MAINNET_CHAIN_ID, TESTNET_CHAIN_ID } from "../constants/common";
import { getWigoProfileAddress } from "./addressHelpers";

describe("addressHelpers", () => {
  it("getAddress returns correct mainnet address", () => {
    const profileAddress = getWigoProfileAddress(MAINNET_CHAIN_ID);
    expect(profileAddress).toBe(addresses.wigoProfile[MAINNET_CHAIN_ID]);
  });
  it("getAddress returns correct testnet address", () => {
    const profileAddress = getWigoProfileAddress(TESTNET_CHAIN_ID);
    expect(profileAddress).toBe(addresses.wigoProfile[TESTNET_CHAIN_ID]);
  });
});
