import Image from "next/image";
import HeroImage from "/public/static/images/hero.png";
import Logo from "/public/static/images/logo.svg";

export default function Home() {
  return (
    <section className="hero items-center flex flex-col justify-center">
      <div className="flex flex-row gap-4 py-4 w-full justify-center items-center">
        <Image src={Logo} alt="logo" width={100} height={100} />
        <h1 className="uppercase text-primary text-7xl text-center font-serif">
          lillenytt
        </h1>
        <Image src={Logo} alt="logo" width={100} height={100} />
      </div>
      <Image src={HeroImage} alt="hero image" />
    </section>
  );
}
