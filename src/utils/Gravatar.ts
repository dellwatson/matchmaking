// https://effigy.im/a/123.png //png |svg

export const GravatarUrl = (eth_address = "", png = true) =>
  `https://effigy.im/a/${eth_address}.${png ? "png" : "svg"}`;
