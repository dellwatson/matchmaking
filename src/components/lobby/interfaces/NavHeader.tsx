import CornerBox from "@/components/_ui/box/CornerBox";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";

export default function NavHeader() {
  const { address } = useAccount();
  const navigate = useNavigate();

  const PAGES = useMemo(
    () => [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "Shop",
        path: "/shop",
      },
      {
        title: "Inventory",
        path: "/inventory",
        disable: !address,
      },
    ],
    [address]
  );

  return (
    <div className=" flex space-x-4 ">
      {PAGES.map((item, i) => (
        <CornerBox
          key={`navheader-${i}`}
          corner={false}
          border
          background={!item?.disable ? "rgba(132,212,188,0.2)" : "black"}
          className={` p-4 px-6 min-w-[200px] text-center uppercase text-green-400 ${
            !item?.disable ? "cursor-pointer" : "cursor-not-allowed"
          } `}
          onClick={() => {
            if (!item?.disable) {
              navigate(item?.path);
            }
          }}
        >
          {item?.title}
        </CornerBox>
      ))}
    </div>
  );
}
