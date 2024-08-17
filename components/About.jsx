"use client";
import { useQuery } from "@tanstack/react-query";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";
import { getAbout } from "@/sanity/actions";
import { useEffect } from "react";
import Loading from "@/app/loading";

const About = () => {
  const {
    data: bento,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["bento"],
    queryFn: getAbout,
  });

  useEffect(() => {
    console.log("Bento grid", bento);
  }, [bento]);

  if (isLoading) return <Loading />;

  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {bento?.bentoCards?.map((item, index) => (
          <BentoGridItem
            id={index + 1}
            key={item._key}
            title={item?.title}
            description={item?.description}
            img={item?.image}
            imgClassName={item?.imgClassName}
            className={item?.className}
            titleClassName={item?.titleClassName}
            spareImg={item?.spareImage}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default About;
