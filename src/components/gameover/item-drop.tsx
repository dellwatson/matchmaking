import { useEffect, useRef } from "react";
import { useTrail, animated } from "@react-spring/web";

const items = ["D", "R", "O", "P", "", ""];

export default function ItemDrop() {
  const [trail, api] = useTrail(items.length, () => ({
    rotateX: 0,
  }));

  const isFlipped = useRef(false);

  const flipAnimation = () => {
    if (isFlipped.current) {
      api.start({
        rotateX: 0,
      });
      isFlipped.current = false;
    } else {
      api.start({
        rotateX: 180,
      });
      isFlipped.current = true;
    }
  };

  useEffect(() => {
    // Start the flip animation immediately
    flipAnimation();

    // Set up an interval to flip every 5 seconds
    const intervalId = setInterval(() => {
      flipAnimation();
    }, 2000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      onClick={flipAnimation}
      className="container flex items-center justify-center w-full"
    >
      {trail?.map(({ rotateX }, i) => (
        <div className="relative m-2" key={i}>
          <animated.div
            style={{
              transform: rotateX.to(
                (val) => `perspective(600px) rotateX(${val}deg)`
              ),
              transformStyle: "preserve-3d",
            }}
            className=" border-2 border-green-500 p-6 px-8"
          >
            ?
          </animated.div>
        </div>
      ))}
    </div>
  );
}
