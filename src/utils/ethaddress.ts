export function shortenEthAddress(address) {
  if (!address.startsWith("0x")) {
    throw new Error("Invalid Ethereum address");
  }

  if (address.length === 42) {
    return address.substring(0, 8) + "..." + address.substring(38);
  } else if (address.length === 65 || address.length === 66) {
    return (
      address.substring(0, 8) + "..." + address.substring(address.length - 8)
    );
  } else {
    return "Invalid Address";
  }
}
export function shortenEthAddressMobile(address) {
  if (!address.startsWith("0x")) {
    throw new Error("Invalid Ethereum address");
  }

  if (address.length === 42) {
    return address.substring(0, 8) + "...";
  } else if (address.length === 65 || address.length === 66) {
    return address.substring(0, 8) + "...";
  } else {
    return "Invalid Address";
  }
}

export function shortenString(inputString, maxLength) {
  if (inputString.length <= maxLength) {
    return inputString;
  } else {
    return inputString.substring(0, maxLength);
  }
}
