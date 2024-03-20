import { SiSololearn } from "react-icons/si";
import { PiWarningCircleFill } from "react-icons/pi";
import { MdTask } from "react-icons/md";
import { Label, Subtitle, Title } from "@/_ui/Typography";

const CardEvent = ({
  icon: Icon = SiSololearn,
  title = "SOLO SURVIVAL",
  subtitle = "Random Zone",
  bgColor = "bg-gradient-to-r from-gray-900 to-blue-800",
  labelEvent = "New Event in: 3d 12h",
  disabled = false,
  //   iconEvent = "",
  className = "",
  bottomImgUrl = "",
  bottomPart = false,
  quests = [],
  ticket = [],
  isTicket = true,
  ...props
}) => {
  return (
    <div
      className={` relative lg:min-w-[500px] rounded-md ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      } ${className}`}
      {...props}>
      <div className="mb-1 bg-slate-900 flex justify-between rounded-md">
        <div className="relative">
          {/* length upto 4 */}
          {!!quests?.length && (
            <MdTask
              size={32}
              className="absolute bottom-0 -rotate-20 text-orange-400"
            />
          )}
        </div>
        <div className="flex">
          <Label className="mr-10 !font-bold">{labelEvent}</Label>
          <div className="relative">
            <PiWarningCircleFill
              className="absolute text-red-500 right-0 bottom-0 rotate-10"
              size={32}
            />
          </div>
        </div>
      </div>
      <div
        className={`${bgColor} relative lg:min-w-[500px] flex items-center ${
          bottomPart ? "rounded-t-md" : `rounded-md`
        } backdrop-blur-xl `}>
        <div className="opacity-30 rounded-md w-full h-full absolute -z-1" />

        <div className="mx-6">
          <Icon size={40} className="animate-spin" />
        </div>
        <div className="p-2 lg:p-4">
          <Title className="!font-bold capitalize">{title}</Title>
          <Subtitle className="!text-green-400 !font-bold font-italic capitalize">
            {subtitle}
          </Subtitle>
        </div>
      </div>
      {bottomPart && (
        <div
          className={`bg-green-800 relative h-24 lg:min-w-[500px] flex rounded-b-md backdrop-blur-xl overflow-hidden`}>
          {bottomImgUrl && (
            <img
              src={bottomImgUrl}
              className="w-full h-full"
              style={{
                objectFit: "cover",
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default CardEvent;
