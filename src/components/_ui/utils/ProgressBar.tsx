import { Transition } from "@headlessui/react";

export default function ProgressBar({ progress = 40 }) {
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
        className="w-full bg-gray-900 overflow-hidden mb-2 alternative"
      >
        <div
          className={`h-full bg-green-600 p-2 `}
          style={{ width: `${progress}%` }}
        >
          Progress
        </div>
      </div>
      {/* )} */}
    </Transition>
  );
}
