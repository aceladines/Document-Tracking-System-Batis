"use client";
import Image from "next/image";
import Login from "@/components/Login";

export default function page() {
  return (
    <div>
      <div className="z-0">
        <Image
          src={"/login/login-bg.png"}
          alt="SJcityhall"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="flex flex-row flex-wrap justify-around items-center bg-white h-[100vh]">
        <div className="hidden lg:block lg:max-w-lg z-10">
          <Image
            src={"/login/login-left.png"}
            width={500}
            height={500}
            alt="Computer"
          />
        </div>

        <div className="w-full max-w-lg z-10">
          <div className="text-center">
            <Image
              src={"/sj-logo.png"}
              width={180}
              height={180}
              alt="Sanjuan"
              className="m-auto py-2"
            />
            <h1 className="text-xl py-2 md:text-2xl">Barangay Batis</h1>
            <div className="flex flex-row items-center justify-center gap-2 pb-4">
              <h1 className="text-xl py-2 md:text-3xl">
                Document Tracking System
              </h1>
              <h1 className="uppercase text-xs font-bold text-white bg-red-700 px-3 py-1 rounded-md">
                Alpha
              </h1>
            </div>

            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}
