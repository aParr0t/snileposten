import Image from "next/image";

import Logo from "/public/static/images/logo.svg";

export default function About() {
  return (
    <div className="flex flex-col justify-center text-primary p-8 max-w-wideProse mx-auto">
      <h1 className="text-4xl text-center">Om oss:</h1>
      <div className="flex flex-col lg:flex-row gap-6 bg-secondary rounded-lg p-3 mt-4 items-center">
        <p className="text-lg lg:text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa at
          vitae nemo rerum dicta obcaecati iste. Nobis eos sint eaque quidem
          ullam quos sit quaerat. Illo, assumenda nam vel provident ut veniam
          aperiam asperiores ipsa deleniti error repellat corporis nihil. Autem
          temporibus vitae inventore consectetur magni nisi distinctio, sint
          quisquam voluptatum maiores saepe tempore necessitatibus sapiente,
          laudantium dignissimos expedita unde a corrupti. Iure assumenda
          officia fugit mollitia velit neque. Cumque hic dolores repellat, rem
          fugiat provident odio laudantium aspernatur porro pariatur earum
          explicabo architecto suscipit perspiciatis quos quasi harum blanditiis
          itaque? Culpa minima iure fuga aliquam placeat consequuntur ipsa
          atque!
        </p>
        <Image src={Logo} alt="logo" width={200} height={200} />
      </div>
    </div>
  );
}
