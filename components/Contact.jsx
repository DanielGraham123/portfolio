"use client";

import React from "react";
import GlowingButton from "./ui/GlowingButton";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
const Contact = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="heading lg:max-w-[45vw]">
        Ready to take <span className="text-purple">your</span> digital presence
        to the next level?
      </h1>
      <p className="text-white-200 md:mt-10 my-5 text-center">
        Reach out to me today and let&apos;s discuss how I can help you achieve
        your goals.
      </p>
      <Link href="mailto:boazdanielgraham@gmail.com">
        <GlowingButton
          title="Let's get in touch"
          icon={<FaLocationArrow />}
          position="right"
        />
      </Link>
    </div>
  );
};

export default Contact;
