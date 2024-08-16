"use client";
import { projects } from "@/data";
import React, { useEffect } from "react";
import { PinCard } from "./ui/PinCard";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import { getProjects } from "@/sanity/actions";
import Loading from "@/app/loading";

const RecentProjects = () => {
  const { data: projectsData, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  useEffect(() => {
    console.log("Projects", projectsData);
  }, [projectsData]);

  if (isLoading) return <Loading />;

  return (
    <div id="projects" className="py-20">
      <h1 className="heading">
        {projectsData?.title}{" "}
        <span className="text-purple">{projectsData?.purpleText}</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projectsData?.projects?.map(
          ({ _key: id, title, des, image, icons, link }, index) => (
            <div
              className="lg:min-h-[32.5rem] sm-h-[41rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
              key={id}
            >
              <PinCard title={link} href={link}>
                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[40vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={image}
                    alt="cover"
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {icons?.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinCard>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default RecentProjects;
