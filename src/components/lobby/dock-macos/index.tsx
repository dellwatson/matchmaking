import { DockCard } from "./DockCard";
import { DockDivider } from "./DockDivider";
import { Dock } from "./Dock";
import useStore from "@/store/lobby-store";
import { CiLock } from "react-icons/ci";
// import styles from "./styles.module.scss";

export default function DockMacos() {
  const { garage, selectShip } = useStore();
  // garage choose
  return (
    <div className="w-500  h-20">
      <Dock>
        {garage.map((src, index) =>
          src ? (
            <DockCard onClick={() => selectShip(src)} key={`dock-mc-${index}`}>
              <div className="flex justify-center items-center">
                {index === 0 ? index + 1 : <CiLock />}
              </div>
            </DockCard>
          ) : (
            <DockDivider key={index} />
          )
        )}
      </Dock>
    </div>
  );
}
