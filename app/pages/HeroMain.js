'use client'
import React from "react";
import {
  Button,
  Typography,
} from "@material-tailwind/react";
import {
  PlayCircleIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/outline";
import Marquee from "react-fast-marquee";
import Exchange from "../components/Exchange";


export function HeroMain() {

  return (
    <>
      <header className="h-full min-h-screen w-screen bg-white pt-20">
        <div className="container mx-auto grid items-center text-center">
          <div className="mx-auto mb-8 inline-flex w-full items-center rounded-full bg-blue-50 py-1 pl-1 pr-3">
            <Typography
              variant="small"
              className="mr-3 rounded-full bg-white px-2 py-0.5 font-medium text-blue-500"
            >
              <SpeakerWaveIcon className="h-5" />
            </Typography>
            <Marquee
            pauseOnHover={true}
            speed={20}
            className="cursor-pointer text-sm">
              The price is not fixed as the price of Neteller Skrill is very high. Find out the price by talking live. If you send money from bKash, rocket, cash, you have to pay 2% cost. If necessary, talk: - WhatsApp or Live chart
            </Marquee>

          </div>
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 leading-tight lg:text-6xl"
          >
            Exchange
          </Typography>
        </div>
        <div className="container mx-auto flex justify-center">
          <Exchange />
        </div>
      </header>
    </>
  );
}

export default HeroMain;