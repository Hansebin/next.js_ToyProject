import ViewDate from "@/components/ViewDate";
import ViewWeather from "@/components/ViewWeather";

export default function HomeInfo() {
  return (
    <>
      <div className="flex items-center justify-start gap-2">
        <ViewDate />
        <div className="w-[2px] h-3 bg-black"></div>
        <ViewWeather />
      </div>
    </>
  );
}
