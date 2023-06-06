'use client'
import React from "react";
import {
  Button,
  Typography,
} from "@material-tailwind/react";
import {
  ArrowSmallRightIcon,
  PlayCircleIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/outline";

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
              <SpeakerWaveIcon className="h-5"/>
            </Typography>
            <Typography
              color="blue"
              variant="small"
              className="!flex !items-center !font-semibold"
            >
              Get a new virtual card 
              <ArrowSmallRightIcon
                className="ml-1.5 h-4 w-4"
                strokeWidth={3}
              />
            </Typography>
          </div>
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-8 leading-tight lg:text-6xl"
          >
            Work with an amazing
          </Typography>
          <Typography
            variant="lead"
            color="gray"
            className="mx-auto mb-12 w-full px-8 lg:w-10/12 lg:px-12 xl:w-8/12 xl:px-20"
          >
            People are so scared to lose that they don&apos;t even try. Like,
            one thing people can&apos;t say is that I&apos;m not trying, and
            I&apos;m not trying my hardest.
          </Typography>
          <div className="mb-20 flex justify-center gap-3">
            <Button
              variant="outlined"
              color="blue-gray"
              size="lg"
              className="flex items-center"
            >
              <PlayCircleIcon
                className="mr-1.5 -mt-0.5 h-6 w-6"
                strokeWidth={2}
              />
              demo
            </Button>
            <Button size="lg">sign up</Button>
          </div>
        </div>
        <div className="mx-0 pb-8 lg:container lg:mx-auto">
          <img
            src="https://images.unsplash.com/photo-1571715268998-d6e79bed5fc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80"
            alt="credit cards"
            className="h-96 w-full object-cover md:h-[34rem] lg:h-[44rem] lg:rounded-xl"
          />
        </div>
      </header>
    </>
  );
}

export default HeroMain;