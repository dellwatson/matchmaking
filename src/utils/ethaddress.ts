export function shortenEthAddress(address) {
  if (address.length !== 42 || !address.startsWith("0x")) {
    throw new Error("Invalid Ethereum address");
  }

  return address.substring(0, 8) + "..." + address.substring(38);
}
