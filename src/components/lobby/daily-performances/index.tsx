import { Title } from "@/components/_ui/text";
import ProgressBar from "@/components/_ui/utils/ProgressBar";

export default function DailyPerformances() {
  return (
    <div className=" f">
      <div className="border-b-1 p-4 px-6 ">
        <Title>MY PERFORMANCE</Title>
      </div>
      <div className="p-4 px-6 border-b-1 pb-8">
        <Title>DAILY TASKS:</Title>
        <br />
        <div>
          {TASKS.map((item, i) => (
            <div key={`task-daily-${i}`} className="">
              <ProgressBar {...item} />
            </div>
          ))}
        </div>
      </div>
      <div className="border-b-1 p-4 px-6 ">
        <Title>STAKING:</Title>
        <br />
      </div>
      <div className=""></div>
    </div>
  );
}

const TASKS = [
  {
    title: "Facility",
    progress: 40,
  },
  {
    title: "Facility",
    progress: 67,
  },
  {
    title: "Facility",
    progress: 90,
  },
  {
    title: "Facility",
    progress: 40,
  },
];
