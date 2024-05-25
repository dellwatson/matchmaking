import Interface from "@/_game/hud";
import WrapperInterface from "@/_game/hud/WrapperInterface";
import Layout from "@/components/lobby/LayoutHeader";

// canvas for gameplay
export default function Template() {
  return (
    <div>
      <Layout />
      {/* <WrapperInterface>
 
   <Interface /> */}

      <div
        style={{
          height: "100vh",
          width: "100vw",
          // background: "#00008B",
          background: "transparent",
        }}
        className="w-full h-full"
      >
        <iframe
          src="http://localhost:3000"
          title="Widget"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
        />
      </div>

      {/* </WrapperInterface> */}
    </div>
  );
}
