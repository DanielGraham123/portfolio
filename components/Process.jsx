"use client";
import React, { useEffect } from "react";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import { AnimatePresence, motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { getProcess } from "@/sanity/actions";
import Loading from "@/app/loading";

const Process = () => {
  const { data: processData, isLoading } = useQuery({
    queryKey: ["process"],
    queryFn: getProcess,
  });

  useEffect(() => {
    console.log("processData", processData);
  }, [processData]);

  if (isLoading) return <Loading />;

  return (
    <section className="w-full py-20">
      <h1 className="heading">
        {processData?.title}{" "}
        <span className="text-purple">{processData?.purpleText}</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        {processData?.steps?.map((step, index) => (
          <Card
            key={index}
            title={step.title}
            icon={<AceternityIcon order={step.phaseText} />}
            des={step.desc}
          >
            {index === 0 && (
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName={`${step.className} rounded-3xl overflow-hidden`}
              />
            )}
            {index === 1 && (
              <>
                <CanvasRevealEffect
                  animationSpeed={3}
                  containerClassName={`${step.className} rounded-3xl overflow-hidden`}
                  colors={[
                    [255, 166, 158],
                    [221, 255, 247],
                  ]}
                  dotSize={2}
                />
                <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
              </>
            )}
            {index === 2 && (
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName={`${step.className} rounded-3xl overflow-hidden`}
                colors={[[125, 211, 252]]}
              />
            )}
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Process;

const Card = ({ title, icon, children, des }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
         dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl "
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
          group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
           relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white 
           group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
           relative z-10 mt-4 group-hover/canvas-card:text-white text-center
           group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};
const AceternityIcon = ({ order }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
           bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
          justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
