import useStore from "@/_game/store";
import { Title } from "@/components/_ui/text";
import { Dialog, Switch, Transition, Tab } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

export default function ModalPlay({
  isOpen = false,
  setIsOpen = () => {},
  closeModal = () => {},
}) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-gray-400 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-bold text-center font-bold leading-6 text-gray-900"
                  >
                    MODE GAMEPLAY
                  </Dialog.Title>
                  <TabsPlay />

                  <div className="border bg-gray-800 p-4 mt-4 rounded-md font-bold flex justify-between items-center">
                    <div>
                      SEASON PASS:{" "}
                      <span className="text-red-600">INACTIVE</span>
                    </div>

                    <div>
                      TICKET (8) &nbsp;
                      <button className="px-4 p-2 bg-orange-500 rounded-sm">
                        USE
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
function MyToggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="py-16">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function TabsPlay() {
  let [categories] = useState({
    Solo: [],
    PvP: [],
    Objective: [],
  });

  return (
    <div className="w-full max-w-xl px-2 py-16 sm:px-0 ">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                  "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white text-blue-700 shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg- p-3",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 min-h-60"
              )}
            >
              {idx === 0 && (
                <>
                  <Title>Solo Expeditions: Cosmic Survival Challenge</Title>
                  <div className="text-">
                    Navigate a perilous cosmic terrain fraught with obstacles
                    such as menacing rocks, colossal monsters, and formidable
                    boss encounters. As your spacecraft gains incremental speed,
                    test your reflexes and strategic prowess to avoid the
                    impending dangers.
                    <br />
                    <br />
                    Unleash your creativity by utilizing a myriad of items and
                    abilities to extend your survival, accumulating a wealth of
                    items with each passing second. Discover hidden fractions
                    within the game, offering a unique crafting experience that
                    enhances your ship's capabilities. The longer you endure,
                    the greater the rewards, with seasonal leaderboard
                    recognition beckoning the most resilient spacefarers.
                  </div>
                </>
              )}
              {idx === 1 && (
                <>
                  <Title>PvP: Galactic Rivalries Unleashed</Title>
                  <div className="text-">
                    Embark on an adrenaline-fueled journey in the heart of
                    cosmic competition with our PvP mode, "Galactic Rivalries
                    Unleashed." Engage in fierce battle races against players
                    from across the galaxy as you vie for supremacy on the
                    ever-evolving matchmaking leaderboard. The thrill
                    intensifies with seasonal top leaderboard rewards that
                    beckon the most daring pilots. Capture the attention of team
                    sponsors, unlocking a gateway to the prestigious Tour
                    Esports where sponsorships abound. Your mettle in the cosmic
                    race not only earns you bragging rights but also the chance
                    to etch your name in the stars as the undisputed champion of
                    the galactic racing circuit.
                  </div>
                </>
              )}
              {idx === 2 && (
                <>
                  <Title>Objective Gaming</Title>
                  <div className="text-red-900">Disclosure information!</div>
                </>
              )}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
