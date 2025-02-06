import BlackFridayBanner from "./BlackFridayBanner";
import SideBar from "./SideBar";

function HeroSection() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-[1fr_2fr]  gap-4 items-center px-4">
      <div className="category">
        <SideBar />
      </div>
      <div className="banner">
        <BlackFridayBanner />
      </div>
    </div>
  );
}

export default HeroSection;
