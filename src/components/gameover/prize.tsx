import React from "react";

export default function Prize() {
  const items = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1,
  ];

  const maxItemsPerRow = 5;
  const totalItems = items.length;
  const remainingItems = totalItems - maxItemsPerRow;

  return (
    <div className="flex w-full justify-center space-x-2 border flex-wrap">
      {items.slice(0, maxItemsPerRow).map((item, i) => (
        <div key={i} className="w-10 h-10 border">
          {/* Render item here */}
        </div>
      ))}
      {totalItems > maxItemsPerRow && (
        <div className="w-10 h-10 border flex items-center justify-center">
          +{remainingItems}
        </div>
      )}
    </div>
  );
}
