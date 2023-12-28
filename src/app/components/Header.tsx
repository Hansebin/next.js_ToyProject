import ViewDate from "@/components/ViewDate";
import ViewWeather from "@/components/ViewWeather";

export default function Header() {
  return (
    <div className="flex items-center justify-between w-full h-header px-60 py-26 text-3xl font-semibold shadow-basic rounded-lg">
      <div className="flex items-center gap-2">
        🗓️ <ViewDate />
      </div>
      <ViewWeather />
    </div>
  );
}
