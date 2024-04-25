import { Label, Paragraph, Title } from "@theras_labs/ui/src/Typography";
import React from "react";
import { GiTargeting } from "react-icons/gi"; //logo survival
import { IoTicket } from "react-icons/io5"; // ticket
import { VscWorkspaceUnknown } from "react-icons/vsc"; // logo
import CardEvent from "./CardEvent";
// quest

const MOCK_EVENTS = [
  {
    title: "survival",
    bgColor: "bg-gradient-to-r from-gray-900 to-blue-800",
    desc: "",
    // desc: "Objects in the map get progressively destroyed Objects in the map get progressively destroyed Objects in the map get progressively destroyed",
    icon: GiTargeting,
    terrains: [
      {
        name: "random beta zone",
        quests: [1, 1, 1],
        eventImage:
          "https://effigy.im/a/0xA31A54e4C258B1BE8cE887a2724906BfCe88Cc6A.png",
        // ticket:
        info: "Closed",
        // info: "3d 12h",
      },
      {
        name: <div className="text-orange-400">binance zone</div>,
        quests: [1, 1],
        eventImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0J5kNkqPxviBmYlRQ96wxHnKA6FU7-e1mdQ&usqp=CAU",
        ticket: true,
        info: "Require Ticket",
      },
      // {
      //   name: <div className="text-pruple-400">starknet zone</div>,
      //   quests: [1, 1],
      //   eventImage:
      //     "https://miro.medium.com/v2/resize:fit:1400/0*ierL7m_u-z3q_cSx.jpg",
      //   ticket: true,
      //   info: "Require Ticket",
      // },
      {
        name: <div className="text-blue-400">aptos zone</div>,
        quests: [1, 1],
        eventImage:
          "https://cryptologos.cc/logos/versions/aptos-apt-logo-full.svg?v=029",
        classNameImage: "",
        ticket: true,
        info: "Require Ticket",
      },
    ],
  },
  {
    title: "energy race",
    bgColor: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
    desc: "",
    icon: GiTargeting,
    terrains: [
      {
        name: "Matrix 5D",
        quests: [],
        info: "closed",
        disabled: true,

        // ticket:
        // info:
      },
    ],
  },
  {
    title: "frenzy",
    disabled: true,
    bgColor:
      "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%",
    desc: "",

    icon: GiTargeting,
    terrains: [
      {
        name: "",
        quests: [],
        info: "closed",
        disabled: true,

        // ticket:
        // info:
      },
    ],
  },
  {
    title: "marathon",
    disabled: true,
    bgColor: "bg-gradient-to-r from-orange-500 from-10%  to-emerald-500 to-90%",
    desc: "",

    terrains: [
      {
        name: "",
        quests: [],
        info: "closed",
        disabled: true,

        // ticket:
        // info:
      },
    ],
  },
];
function TabsMode() {
  return (
    <div className="h-full grid grid-cols-4 lg:grid-cols-1">
      {["solo", "pvp", "team battle", "open world"].map((item, i) => (
        <div
          key={i}
          className={`p-2 lg:p-8 lg:px-12 font-bold lg:text-2xl uppercase ${
            i === 0 ? "cursor-pointer " : "cursor-not-allowed text-gray-800"
          }`}>
          {item}
        </div>
      ))}
    </div>
  );
}
export default function ChooseEvent() {
  return (
    <div className=" flex flex-col lg:flex-row   ">
      <TabsMode />
      <div className="flex flex-1 overflow-auto">
        <div className="w-full h-screen  ">
          {MOCK_EVENTS?.map((item, i) => (
            <EventOptions {...item} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

//ranked

// survival
// - random beta zone ,
// --network choices here (ticket)
// race time
// marathon
// frenzy
function EventOptions({
  title = "survival",
  desc = "abcde",
  bgColor = "",
  terrains = [],
  ...props
}) {
  return (
    <div className={` w-full h-auto p-12   `}>
      <Label className="uppercase !font-bold mb-4">{title}</Label>
      <Paragraph className="lg:max-w-1/3 mb-2">{desc}</Paragraph>
      <div className="flex overflow-x-scroll py-4">
        {/* array load */}
        {terrains?.map((item, i) => (
          <CardEvent
            key={i}
            {...item}
            {...{
              className: "mr-4",
              title,
              labelEvent: item?.info,
              bgColor,
              subtitle: item?.name,
              bottomImgUrl: item?.eventImage,
            }}
            bottomPart
            // onClick={() => {}} // disable // need ticket
          />
        ))}
        {/* <CardGameEvent /> */}
      </div>
    </div>
  );
}

//description
// locked

// events
// function CardGameEvent({ bg = "" }) {
//   // new events
//   // warn -> modal info detail
//   // quests ->
//   return (
//     <div className={`${bg} border w-full  max-w-1/4 p-4 rounded-md    `}>
//       Random Zone
//       <div className="overflow-y-scroll">descriptions</div>
//     </div>
//   );
// }
