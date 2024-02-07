import Image from "next/image";

import Logo from "/public/static/images/om-oss.svg";

export default function About() {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-6 bg-secondary-light rounded-lg my-20 items-center max-w-[90ch] mx-auto">
      <div className="p-5">
        <h1 className="text-primary text-5xl text-center">Om oss</h1>
        <p className="text-lg lg:text-base">
          Lillestortinget ble formet av annet Sigurd Sætre i 2014. Siden den
          gang har det foregått her på Lillestrøm VGS hvert år. I år starter vi
          opp 13. mars og holder det gående i rundt to uker. Lillestrotinget er
          et politisk rollespill der alle elever på vg1 ST, 2MK, og 2MD deltar.
          Vi har også inkludert flere elever fra ulike klassetrinn, samt
          deltakere fra politikk- og menneskerettighetsklassen. Noen av
          programfagsklassene har gjesteroller i løpet av prosjektperioden. Vi
          har som formål og gi økt kunnskap om demokratiet i Norge, og hvordan
          man jobber på Stortinget. Elevene vil få innsikt i hvordan kunnskap
          innenfor spesifikke fagområder, samt erfaringer fra ulike fagområder,
          spiller en betydelig rolle i prosessen med å ta beslutninger.
        </p>
      </div>
      <Image src={Logo} alt="logo" width={400} height={400} />
    </div>
  );
}
