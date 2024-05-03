import { useEffect, useRef, useState } from "react";
import { useTrail, animated } from "@react-spring/web";

// const items = ["D", "R", "O", "P", "", ""];

export default function ItemDrop({ items = [] }) {
  // Ensure max 6 items
  const maxItems = items?.length === 0 ? Array(6).fill(1) : items.slice(0, 6);
  const maxItemsPerRow = 5;
  const totalItems = items.length;
  const remainingItems = totalItems - maxItemsPerRow;

  // Animation setup
  const [trail, api] = useTrail(maxItems.length, () => ({
    rotateX: 0,
  }));

  const isFlipped = useRef(false);
  const [doneFlip, setDoneFlip] = useState(false);

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
    // Set up an interval to flip every 5 seconds
    const intervalId = setInterval(() => {
      flipAnimation();
    }, 1000);

    if (!doneFlip) {
      // Start the flip animation immediately
      flipAnimation();

      setTimeout(() => {
        setDoneFlip(true);
        clearInterval(intervalId); // Clear the interval after 3 seconds
      }, 4000);
    }

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      onClick={flipAnimation}
      className=" flex items-center justify-center w-full overflow-x-auto  ">
      {trail?.map(({ rotateX }, i) => (
        <div
          className="relative m-2"
          // style={{ width: "80px", minHeight: "80px" }}
          key={i}>
          <animated.div
            style={{
              transform: rotateX.to(
                (val) => `perspective(600px) rotateX(${val}deg)`
              ),
              transformStyle: "preserve-3d",
            }}
            className="border-2 w-32 h-32 border-green-500 flex items-center justify-center">
            {items.length > maxItemsPerRow && i === maxItems?.length - 1 ? (
              <div className="flex items-center justify-center h-full">
                +{remainingItems}
              </div>
            ) : (
              <RandomImages revealImage={items.length !== 0} />
            )}
          </animated.div>
        </div>
      ))}
    </div>
  );
}

// ARRAY LIST
const ARRAY_LIST_IMAGES_SOURCES = [
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/blueprint_unknown_a.jpeg",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/blueprint_ship_old_a.jpeg",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/quasarite_ore.jpeg",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/nebulium_crystals.jpeg",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/starforged_steel.jpeg",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/void_silk.jpeg",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/celestial_essence.jpeg",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/dark_matter_alloy.jpeg",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/darkinium.jpeg",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/generotor.jpeg",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/solarium_ingots.jpeg",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/warpstone_fragments.jpeg",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/lunarite_dust.jpeg",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/plasma_resin.jpeg",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/astralium_gems.jpeg",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/pebbler_rocks.jpeg",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/chrono_crystals.jpeg",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/gravityite_gems.jpeg",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/meteoric_fragments.jpeg",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/arcane_energon.jpeg",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/baltazar_gem.jpeg",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/comet_dust.jpeg",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/galactic_foam.jpeg",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/galaxy_stone.jpeg",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/astral_ember_essence.jpeg",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/asterium_ore.webp",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/galactite_crystals.webp",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/meteoric_iron.jpeg",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/cometite.jpeg",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/stardust_quartz.jpeg",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/broken_novaite.jpeg",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/titanium_alloy.jpeg",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/cosmic_diamond.jpeg",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/flame_rock.jpeg",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/nebulium_rock.jpeg",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/solarium_geode.jpeg",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/solarium_geode2.jpeg",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/voidstone.jpeg",
  "https://raw.githubusercontent.com/Theras-Labs/starex-images/master/assets/novaite.jpeg",
];

const RandomImages = ({ time = 4300, revealImage = true }) => {
  const [timeReveal, setTimeReveal] = useState(false);
  const [randomIndex, setRandomIndex] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimeReveal(true);
    }, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [time]);

  useEffect(() => {
    if (timeReveal) {
      const index = Math.floor(
        Math.random() * ARRAY_LIST_IMAGES_SOURCES.length
      );
      setRandomIndex(index);
    }
  }, [timeReveal]);

  return (
    <div>
      {timeReveal && revealImage ? (
        <img
          className="w-full h-full"
          style={{ objectFit: "cover" }}
          src={ARRAY_LIST_IMAGES_SOURCES[randomIndex]}
          alt="Random Image"
        />
      ) : (
        <div>?</div>
      )}
    </div>
  );
};
