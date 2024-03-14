import { ModalProvider } from "@particle-network/connectkit";
import { Ethereum, EthereumGoerli } from "@particle-network/chains";
import { evmWallets } from "@particle-network/connectors";
import { Areon_testnet, artela_testnet } from "./custom-chains";
import { avalancheFuji } from "viem/chains";

export default function ParticleProvider({ children }) {
  console.log(EthereumGoerli, "EthereumGoerli");
  return (
    <ModalProvider
      options={{
        projectId: "5d68b63a-4c3d-4ead-9571-a4f65e97ac9e",
        clientKey: "ctmkJuPDUnG4gin26xGnXewaSvlorkkN5y4Di258",
        appId: "e38944a9-b367-41ae-bd5c-ef144f98dffc",
        chains: [
          avalancheFuji,
          // artela_testnet,
          // Areon_testnet,
          // Ethereum, EthereumGoerli
        ],
        wallet: {
          //optional: particle wallet config
          visible: true, //display wallet button when connect particle success.
          // supportChains: [Ethereum, EthereumGoerli],
          supportChains: [
            // artela_testnet,
            // Areon_testnet,
            avalancheFuji,

            // Ethereum, EthereumGoerli
          ],
          customStyle: {}, //optional: custom wallet style
        },
        promptSettingConfig: {
          //optional: particle security account config
          //prompt set payment password. 0: None, 1: Once(default), 2: Always
          promptPaymentPasswordSettingWhenSign: 1,
          //prompt set master password. 0: None(default), 1: Once, 2: Always
          promptMasterPasswordSettingWhenLogin: 1,
        },
        connectors: evmWallets({
          projectId: "walletconnect projectId", //replace with walletconnect projectId
          showQrModal: false,
        }),
      }}
      theme={"light"}
      language={"en"} //optional：localize, default en
      walletSort={["Particle Auth", "Wallet"]} //optional：walelt order
    >
      {children}
    </ModalProvider>
  );
}

// use react kit
