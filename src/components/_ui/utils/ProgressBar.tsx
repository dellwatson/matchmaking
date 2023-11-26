import { Transition } from "@headlessui/react";

export default function ProgressBar({
  rounded = "xl",
  title = "progress",
  progress = 40,
}) {
  return (
    <Transition
      show={progress > 0} // Show when progress is greater than 0
      enter="transition-opacity duration-150"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {/* {(ref) => ( */}
      <div
        // ref={ref}
        className={`w-full bg-gray-900 overflow-hidden mb-2 alternative rounded-${rounded} `}
      >
        <div
          className={`h-full ${
            progress !== 100 ? "bg-green-600" : "bg-blue-600"
          } p-2 uppercase text-xs font-bold rounded-${rounded}`}
          style={{ width: `${progress}%` }}
        >
          {title}
        </div>
      </div>
      {/* )} */}
    </Transition>
  );
}
