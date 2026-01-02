import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <section className="relative text-center pt-24 sm:pt-16 pb-[420px] min-h-screen overflow-hidden">

      <div className="relative z-10 px-4">
        <HeroBadge />

        <h1 className="
          mt-8 font-bold text-[#1D2026] leading-[120%]
          text-[64px]
          2xl:text-[64px]
          xl:text-[54px]
          md:text-[44px]
          sm:text-[68px]
        ">
          <span className="text-[#007AFF]">iMessage</span> Automation <br />
          for Teams and AI <br />
          Workflows.
        </h1>

        <p className="
          mt-8 max-w-xl mx-auto text-[#000000] leading-[130%]
          text-[18px]
          2xl:text-[18px]
          xl:text-[15px]
          md:text-[15px]
          sm:text-[24px]
        ">
          Coup lets you, your team, or AI workflows send iMessages directly from
          your phone number, running securely on your Mac or Mac Mini.
        </p>

        <HeroButtons />
      </div>

      <HeroBackground />
    </section>
  );
}
