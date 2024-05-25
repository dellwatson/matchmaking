import { addPlayerToMatch } from "@/_backend/data/loadSupabase";
import useLobbyGame from "@/helpers/hooks/useLobbyGame";
import React, { useState } from "react";

export default function PlayMatch() {
  const { handlePlay, handlePlayTest, gameState, loading } = useLobbyGame();
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };

  return (
    <div>
      PlayMatch:
      <br />
      <button onClick={handlePlay} className="m-4 bg-red-500 p-2">
        gamestart first without{" "}
      </button>
      <br />
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <p>You typed: {inputValue}</p>
      <input
        type="text"
        value={inputValue2}
        onChange={handleInputChange2}
        placeholder="Type something..."
      />
      <p>You typed: {inputValue2}</p>
      {/* <button
        onClick={() => handlePlayTest(inputValue)}
        className="m-4 bg-green-500 p-2"
      >
        route without{" "}
      </button> */}
      <button
        onClick={async () => {
          // handlePlayTest(inputValue)
          await addPlayerToMatch(inputValue, inputValue2);
        }}
        className="m-4 bg-green-500 p-2"
      >
        add playrst{" "}
      </button>
    </div>
  );
}
