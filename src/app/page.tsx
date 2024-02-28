import Image from "next/image";
import HeroImage from "/public/static/images/hero.jpg";
import Logo from "/public/static/images/logo.svg";
import AnniversaryImage from "/public/static/images/jubileum.svg";
import GroupImage from "/public/static/images/gruppebilde.jpg";
import Link from "next/link";

const logoClass = "";

export default function Home() {
  return (
    <section className="hero items-center flex flex-col justify-center max-w-[90ch] mx-auto">
      <div className="flex flex-row gap-4 py-4 w-full justify-center items-center">
        <Image
          src={Logo}
          alt="logo"
          width={100}
          height={100}
          className="aspect-auto w-[50px] md:w-[100px]"
        />
        <h1 className="uppercase text-primary text-4xl md:text-7xl text-center font-serif">
          lillenytt
        </h1>
        <Image
          src={Logo}
          alt="logo"
          width={100}
          height={100}
          className="aspect-auto w-[50px] md:w-[100px]"
        />
      </div>
      <Image
        src={HeroImage}
        alt="hero image"
        width={1000}
        height={1000}
        className="w-full mb-10 md:mb-20"
        priority
      />
      <div className="flex flex-col md:flex-row bg-secondary-light rounded-2xl p-6 gap-4 mb-14">
        <Image src={GroupImage} alt="gruppebilde" width={600} height={600} />
        <div className="flex flex-col justify-center">
          <h2 className="text-primary font-bold text-2xl">
            Her er årets partiledere!
          </h2>
          <p className="text-lg">
            Les mer om partilederne og partienes hjertesaker{" "}
            <Link href="/partier" className="text-primary underline">
              her.
            </Link>
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-14">
        <Image
          src={AnniversaryImage}
          alt="10 års jubileum"
          width={300}
          height={300}
          className="mx-auto"
        />
        <div className="flex flex-col justify-center p-6 bg-secondary-light rounded-2xl">
          <h2 className="text-primary font-bold text-2xl">
            Lillestortingets 10 år jubileum
          </h2>
          <p className="text-lg max-w-prose">
            Lillestrøm videregående arangerer stolt Lillestortinget for det
            tiende året på rad! Lillestortinget er en tradisjon som har som mål
            å øke elevens engasjement innenfor politikk. Les mer om
            lillestortinget{" "}
            <Link href="/om-oss" className="text-primary underline">
              her.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
