"use client";
import { socialMedia } from "@/data";
import React from "react";
import Contact from "./Contact";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="contact" className="w-full pt-20 pb-6">
      <div className="w-full absolute left-0 -bottom-72 min-h-96 -z-5">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <Contact />

      <div className="flex mt-16 md:flex-row flex-col relative justify-between items-center ">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {new Date().getFullYear()}{" "}
          <Link
            href="https://github.com/DanielGraham123"
            target="_blank"
            className="hover:cursor-pointer hover:underline text-purple"
          >
            @DanielGraham123
          </Link>
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
