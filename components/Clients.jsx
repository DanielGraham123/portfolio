"use client";
import React, { useEffect } from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";
import { useQuery } from "@tanstack/react-query";
import { getCompanies, getTestimonials } from "@/sanity/actions";
import Loading from "@/app/loading";

const Clients = () => {
  const { data: testimonialsData, isLoading } = useQuery({
    queryKey: ["testimonials"],
    queryFn: getTestimonials,
  });

  const { data: companiesData, isLoading: isLoadingCpny } = useQuery({
    queryKey: ["companies"],
    queryFn: getCompanies,
  });

  useEffect(() => {
    console.log("testimonialsData: ", testimonialsData);

    console.log("companiesData: ", companiesData);
  }, [testimonialsData, companiesData]);

  if (isLoading || isLoadingCpny) return <Loading />;

  return (
    <div id="testimonials" className="py-20">
      <h1 className="heading">
        {testimonialsData?.title}{" "}
        <span className="text-purple">{testimonialsData?.purpleText}</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonialsData?.testimonials}
          speed="slow"
          direction="right"
        />

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companiesData?.companies?.map(
            ({ _key: id, img, name, nameImg }, index) => (
              <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
                <img src={img} alt={name} className="md:w-10 w-5" />
                <img
                  src={nameImg}
                  alt={name}
                  width={index + 1 === 4 || index + 1 === 5 ? 100 : 150}
                  className="md:w-24 w-20"
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Clients;
