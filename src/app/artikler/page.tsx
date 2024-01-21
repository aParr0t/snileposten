"use client";

import Image from "next/image";

import BigArticle from "/public/static/images/dummy articles/stor artikkel.png";
import { useState } from "react";

const categories = [
  "Miljø",
  "Arbeidsliv",
  "Helse og omsorg",
  "Næring og økonomi",
  "Kultur",
];

export default function Articles() {
  const [selectedCategory, setSelectedCategory] = useState<null | string>();

  return (
    <div className="flex flex-col place-items-center mx-auto p-3 gap-8 max-w-wideProse">
      <ul className="flex flex-row gap-3">
        {categories.map((category) => {
          const bg =
            selectedCategory === category ? "bg-primary" : "bg-secondary";
          const textColor =
            selectedCategory === category ? "text-secondary" : "text-primary";
          return (
            <li
              className={`${bg} ${textColor} rounded-full py-1 px-4 hover:bg-primary hover:text-secondary transition-colors hover:cursor-pointer`}
              key={category}
              onClick={() => {
                if (selectedCategory === category) {
                  setSelectedCategory(null);
                  return;
                }
                setSelectedCategory(category);
              }}
            >
              {category}
            </li>
          );
        })}
      </ul>
      <div className="flex flex-row gap-20">
        <div>
          <div className="pl-2 mb-6">
            <span className="font-semibold">Kategori</span>
            <h2 className="text-4xl font-bold">Stor nyhetsak</h2>
          </div>
          <Image
            src={BigArticle}
            alt="stor artikkel"
            width={400}
            className="border-l-8 border-tertiary"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-8 border-l-2 border-tertiary px-2">
            <div className="flex-grow basis-0 min-w-0">
              <span className="font-semibold text-sm">Kategori</span>
              <h2 className="font-bold text-xl">Liten artikkel</h2>
            </div>
            <Image
              src={BigArticle}
              alt="liten artikkel"
              width={200}
              height={200}
              className="aspect-square flex-grow basis-0 min-w-0"
            />
          </div>
          <div className="flex flex-row gap-8 border-l-2 border-tertiary px-2">
            <div className="flex-grow basis-0 min-w-0">
              <span className="font-semibold text-sm">Kategori</span>
              <h2 className="font-bold text-xl">Liten artikkel</h2>
            </div>
            <Image
              src={BigArticle}
              alt="liten artikkel"
              width={200}
              height={200}
              className="aspect-square flex-grow basis-0 min-w-0"
            />
          </div>
          <div className="flex flex-row gap-8 border-l-2 border-tertiary px-2">
            <div className="flex-grow basis-0 min-w-0">
              <span className="font-semibold text-sm">Kategori</span>
              <h2 className="font-bold text-xl">Liten artikkel</h2>
            </div>
            <Image
              src={BigArticle}
              alt="liten artikkel"
              width={200}
              height={200}
              className="aspect-square flex-grow basis-0 min-w-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
