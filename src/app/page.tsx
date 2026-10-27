import { Banner } from "@/components/banner";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <Banner />
    </div>
  );
}
