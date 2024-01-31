import { useWallet, useAllWallets } from "useink";

export default function InkWallet() {
  // const wallets = useAllWallets();
  // const { isConnected, connect, disconnect, setAccount } = useWallet();
  const { account, accounts, setAccount } = useWallet();
  console.log(account, "account");

  // if (isConnected) return <button onClick={disconnect}>Disconnect</button>;

  // console.log(wallets, "wallets");
  return null;
  // return (
  //   <div className="flex justify-center items-center text-center  w-full ">
  //     INK Wallets
  //     {wallets.map((w) => (
  //       <li key={w.title}>
  //         {w.installed ? (
  //           <button onClick={() => connect(w.extensionName)}>
  //             <img src={w.logo.src} alt={w.logo.alt} />
  //             Connect to {w.title}
  //           </button>
  //         ) : (
  //           <a href={w.installUrl}>
  //             <img src={w.logo.src} alt={w.logo.alt} />
  //             Install {w.title}
  //           </a>
  //         )}
  //       </li>
  //     ))}
  //   </div>
  // );
}
