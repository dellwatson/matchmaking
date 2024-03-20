type TMinted = {
  productId: string;
  network_logo: string;
  address: string;
  blockExplorer: string;
  network: string;
  chainId: string;
  bgChain: string;
  bgIcon: string;
  bgToken: string;
  // tokenId: string;
  // direct
  // wrapped
};

type TPrice = {
  isCrypto: boolean;
  chainId: string;
  network: string;
  token: string;
  currency: string;
  symbol: string;
  symbolUrl: string;
  network_logo: string;
  bgChain: string;
  bgToken: string;
  supply: string;
  price: string;
  weiPrice: string;
  usdPrice: string;
  address: string;
  isNative: boolean;
  fee: string;
  archived: boolean;
  hidden: boolean;
  disable: boolean;
  type: string; //direct, wrapped, custody
};

type TContent = {
  textColor: string;
  bgColor: string;
  htmlTag: string | null;
};

type TDisplay = {
  address: string;
  network: string;
  type: string; //img | 3d mode | video
  assetUrl: string; // portrait
  assetImage: string;
  classNameImage: string;
  prices: TPrice[];
};

type TTrait = {
  title: string;
  subtitle: string;
};

type TListContent = {
  type: string; //3D | image | video
  url: string;
};

type TPayments = {
  network: string;
  network_logo: string;
  bgColor: string;
  bgIcon: string;
  chainId: string; // Could be string or number depending on usage
  layer: number; // Assuming layer is always a number
  current_supply: string; // Assuming this is a string, can be adjusted as needed
  total_supply: string; // Assuming this is a string, can be adjusted as needed
  nft_address: string;
  block_explorer: string;
  payment_options: TPrice[];
};

type TProduct = {
  gameId: string;
  shopId: string;
  productId: string;
  id: string;
  archived: boolean;
  disable: boolean;
  title: string;
  category: string;
  description: string;
  rarity: string;
  supply: string;
  header: TContent;
  body: TContent;
  footer: TContent;
  display: TDisplay;
  traits: TTrait[];
  listContents: TListContent[];
  payments: TPayments;
  // auction: boolean;
};

type TOwnedProduct = {
  gameId: string;
  shopId: string;
  productId: string;
  id: string;
  archived: boolean;
  disable: boolean;
  title: string;
  category: string;
  description: string;
  rarity: string;
  supply: string;
  minted: TMinted;
  header: TContent;
  body: TContent;
  footer: TContent;
  display: TDisplay;
  traits: TTrait[];
  listContents: TListContent[];
};

export {
  TMinted,
  TPrice,
  TContent,
  TTrait,
  TProduct,
  TListContent,
  TDisplay,
  TOwnedProduct,
};
