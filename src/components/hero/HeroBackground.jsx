import bird from "../../assets/birds/bird.png";
import cloudFront from "../../assets/clouds/Cloud-layer1.svg";
import cloudMiddle from "../../assets/clouds/Cloud-layer2.svg";
import cloudBack from "../../assets/clouds/Cloud-layer3.svg";
import msgBird1 from "../../assets/birds/bird-msg1.svg";
import msgBird2 from "../../assets/birds/bird-msg2.svg";
import msgBird3 from "../../assets/birds/bird-msg3.svg";
import msgBird4 from "../../assets/birds/bird-msg4.svg";

export default function HeroBackground() {
  return (
    <>
      {/* Birds */}
      <img src={bird} className="absolute left-[280px] top-[220px] lg:left-[200px] md:left-[120px] hidden md:block h-4 w-11" />
      <img src={bird} className="absolute left-[470px] top-[280px] lg:left-[360px] md:left-[220px] hidden md:block h-4 w-11" />
      <img src={bird} className="absolute right-[480px] top-[240px] lg:right-[360px] md:right-[220px] hidden md:block h-4 w-10" />
      <img src={bird} className="absolute right-[440px] top-[400px] lg:right-[320px] md:right-[200px] hidden md:block h-4 w-10" />

      {/* Scroll Indicator */}
      <div className="
        absolute left-1/2 -translate-x-1/2 z-20 text-center font-bold
        bottom-[60px] sm:bottom-[40px]
        text-[18px] sm:text-[14px]
      ">
        <p className="opacity-70">Scroll to learn more</p>
        <span className="block mt-1 animate-bounce">↓</span>
      </div>

      {/* Msg Birds */}
      <img src={msgBird1} className="absolute bottom-[80px] left-[340px] lg:left-[260px] md:left-[180px] hidden md:block w-[100px] md:w-[80px] z-20" />
      <img src={msgBird2} className="absolute bottom-[150px] left-[680px] lg:left-[520px] md:left-[360px] hidden md:block w-[100px] md:w-[80px] z-20" />
      <img src={msgBird3} className="absolute bottom-[120px] right-[260px] lg:right-[200px] md:right-[140px] hidden md:block w-[100px] md:w-[80px] z-20" />
      <img src={msgBird4} className="absolute bottom-[60px] right-[500px] lg:right-[360px] md:right-[240px] hidden md:block w-[100px] md:w-[80px] z-20" />

      {/* Flying Birds Animation */}
      <img
        src={msgBird3}
        alt="flying bird left"
        className="absolute bottom-[340px] left-[-120px] w-[120px] z-30 animate-fly-left hidden md:block"
      />
      <img
        src={msgBird4}
        alt="flying bird right"
        className="absolute bottom-[340px] right-[-120px] w-[120px] z-30 animate-fly-right hidden md:block"
      />

      {/* Clouds */}
      <div className="
        absolute bottom-0 left-0 w-full pointer-events-none z-0
        h-[420px] md:h-[360px] sm:h-[280px]
      ">
        <img src={cloudBack} className="absolute bottom-0 w-full opacity-10" />
        <img src={cloudMiddle} className="absolute bottom-0 w-full opacity-10" />
        <img src={cloudFront} className="absolute bottom-0 w-full opacity-10" />
      </div>
    </>
  );
}
