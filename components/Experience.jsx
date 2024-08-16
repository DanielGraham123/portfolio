"use client";
import { workExperience } from "@/data";
import React, { useEffect } from "react";
import { MBCard } from "./ui/MovingBorder";
import { useQuery } from "@tanstack/react-query";
import { getWorks } from "@/sanity/actions";
import Loading from "@/app/loading";
import Image from "next/image";

const Experience = () => {
  const { data: works, isLoading } = useQuery({
    queryKey: ["works"],
    queryFn: getWorks,
  });

  useEffect(() => {
    console.log("works", works);
  }, [works]);

  if (isLoading) return <Loading />;

  return (
    <div id="experience" className="py-20 w-full">
      <h1 className="heading">
        {works?.title} <span className="text-purple">{works?.purpleText}</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {works?.works?.map(
          ({ _key: id, thumbnail, thumbLqip, title, desc }, index) => (
            <MBCard
              key={id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                <Image
                  src={thumbnail}
                  alt={title}
                  width={40}
                  height={40}
                  placeholder="blur"
                  blurDataURL={thumbLqip}
                  className="lg:w-32 md:w-20 w-16"
                />
                <div className="lg:ms-5">
                  <h1 className="text-start text-xl md:text-2xl font-bold">
                    {title}
                  </h1>
                  <p className="text-start text-white-100 mt-3 font-semibold">
                    {desc}
                  </p>
                </div>
              </div>
            </MBCard>
          )
        )}
      </div>
    </div>
  );
};

export default Experience;
