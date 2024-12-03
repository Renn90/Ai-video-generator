"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";

import { Textarea } from "@/components/ui/textarea";
import realistic from "../../../public/assets/realistic.jpg";
import gta from "../../../public/assets/gta.jpg";
import comic from "../../../public/assets/comic.jpg";
import cartoon from "../../../public/assets/cartoon.jpg";
import waterloo from "../../../public/assets/waterloo.jpg";
import Image from "next/image";
import { AlertDialogTitle } from "@radix-ui/react-alert-dialog";
import loader from '@/public/loading.gif'

const page = () => {
  const [videoStyle, setVideoStyle] = useState(null);
  const [contentType, setContentType] = useState("");
  const [duration, setDuration] = useState("");
  const [customPrompt, setCustomPrompt] = useState("");

  //loadinf state
  const [loading, setLoading] = useState(false);

  const videoStyleData = [
    {
      name: "Realistic",
      image: realistic,
    },
    {
      name: "Cartoon",
      image: cartoon,
    },
    {
      name: "Comic",
      image: comic,
    },
    {
      name: "Waterloo",
      image: waterloo,
    },
    {
      name: "GTA",
      image: gta,
    },
  ];

  const options = [
    "Custom prompt",
    "Random Ai Story",
    "Scary Story",
    "Historical Facts",
    "Bed Time Story",
    "Motivational",
    "Fun Facts",
  ];

  const getVideoScript = async () => {
    setLoading(true);
    const prompt = `Write a script to generate a '${duration} 'video on topic: '${
      contentType !== "Custom prompt" ? contentType : customPrompt
    }' along with Ai image prompt in ${videoStyle} format for each scene and give me result in JSON format with imagePrompt and contentText as fields, No plain text.`;
    try {
      const response = await fetch("/api/get-video-script", {
        body: JSON.stringify({ prompt }),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        const resError = await response.json();
        console.log(resError);
      }
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
    }
  };

  const createClickHandler = () => {
    getVideoScript();
  };

  const emptyCustom = contentType === "Custom prompt" && customPrompt === "";

  const isDisabled =
    !videoStyle ||
    duration === "" ||
    (contentType === "" && contentType !== "CustomPrompt") ||
    emptyCustom;

  return (
    <main className="flex flex-col justify-center items-center mt-6">
      <h1 className="text-primary font-bold text-xl text-center">Create New</h1>
      <div className="shadow-md p-8 flex flex-col gap-y-4 overflow-y-scroll h-[82vh] scrollbar-hide">
        <div className="w-full">
          <h1 className="font-bold text-lg text-primary">Content</h1>
          <p>What is the topic of your video?</p>
          <div className="w-full">
            <Select onValueChange={(value) => setContentType(value)}>
              <SelectTrigger className="w-full mt-2 p-2">
                <SelectValue placeholder="Content Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Content Type</SelectLabel>
                  {options.map((option, index) => (
                    <SelectItem key={index} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <div>
              {contentType === "Custom prompt" && (
                <Textarea
                  onChange={(e) => setCustomPrompt(e.target.value)}
                  className="mt-2"
                  placeholder="Type your prompt here."
                />
              )}
            </div>
          </div>
        </div>
        <div>
          <div>
            <h1 className="font-bold text-lg text-primary">Style</h1>
            <p>Select your video style</p>
            <div className="flex mt-2 flex-wrap">
              {videoStyleData.map((video, index) => (
                <div
                  key={index}
                  onClick={() => setVideoStyle(video.name)}
                  className={`mr-4 cursor-pointer rounded-md overflow-hidden transition-all duration-75 hover:scale-105 ${
                    videoStyle === video.name &&
                    "border-[4px] border-secondary shadow-secondary shadow"
                  }`}
                >
                  <Image
                    className="h-[150px] w-[115px] object-cover shadow"
                    src={video.image}
                    alt={`${video.name} image`}
                  />
                  <p className="bg-black text-white font-semibold text-center text-sm p-1">
                    {video.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full">
          <h1 className="font-bold text-lg text-primary">Content</h1>
          <p>What is the topic of your video?</p>
          <div className="w-full">
            <Select onValueChange={(value) => setDuration(value)}>
              <SelectTrigger className="w-full mt-2 p-2">
                <SelectValue placeholder="Select the duration of your video" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Duration</SelectLabel>
                  <SelectItem value="30 Seconds">30 Seconds</SelectItem>
                  <SelectItem value="60 Seconds">60 Seconds</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <button
          disabled={isDisabled || loading}
          onClick={createClickHandler}
          className="bg-secondary flex items-center justify-center  p-2 w-full rounded-md font-semibold text-primary disabled:bg-opacity-65"
        >
          Create New Video
        </button>
      </div>
      <AlertDialog open={loading}>
        <AlertDialogContent className="flex flex-col justify-center items-center pb-14">
          <Image src={loader} alt="loader" height={150} width={150}/>
          <AlertDialogTitle className="font-semibold mt-[-30px] text-center">Your Ai video is being generated, Please do not refresh...</AlertDialogTitle>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
};

export default page;
