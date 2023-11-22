import { DockCard } from "./DockCard";
import { DockDivider } from "./DockDivider";
import { Dock } from "./Dock";
import useStore from "@/store/lobby-store";

// import styles from "./styles.module.scss";

const GRADIENTS = [
  "https://products.ls.graphics/mesh-gradients/images/03.-Snowy-Mint_1-p-130x130q80.jpeg",
  "https://products.ls.graphics/mesh-gradients/images/04.-Hopbush_1-p-130x130q80.jpeg",
  "https://products.ls.graphics/mesh-gradients/images/06.-Wisteria-p-130x130q80.jpeg",
  "https://products.ls.graphics/mesh-gradients/images/09.-Light-Sky-Blue-p-130x130q80.jpeg",
  // "https://products.ls.graphics/mesh-gradients/images/36.-Pale-Chestnut-p-130x130q80.jpeg",
];

// const GARAGE = ["glass", "glass", "glass", "glass", "glass"];

export default function DockMacos() {
  const { garage, selectShip } = useStore();
  // garage choose
  return (
    <div className="w-500  h-20">
      <Dock>
        {garage.map((src, index) =>
          src ? (
            <DockCard onClick={() => selectShip(src)} key={`dock-mc-${index}`}>
              <div>{index + 1}</div>
            </DockCard>
          ) : (
            <DockDivider key={index} />
          )
        )}
      </Dock>
    </div>
  );
}
