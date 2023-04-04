import React from "react";
import { PhoneIcon, MapIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

export default function ContectMe({}: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-5xl px-10 justify-evenly mx-auto items-center ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ml-8 md:mx-auto">
        Contact
      </h3>

      <div className="flex flex-col space-y-10 md:justify-between">
        <h4 className="md:text-2xl text-lg font-semibold text-center md:mt-28">
          I have got what you need.{" "}
          <span className="decoration-[#F7AB0A]/80 underline">Let's Talk</span>
        </h4>

        <div className="md:flex md:flex-row space-y-14">
          <div className="space-y-10">
            <div className="items-center justify-center flex text-center space-x-5 md:mt-28 ">
              <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="md:text-2xl">+1234567890</p>
            </div>

            <div className="items-center justify-center flex text-center space-x-5">
              <MapIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="md:text-2xl">123 Developer Lane</p>
            </div>

            <div className="items-center justify-center flex text-center space-x-5">
              <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="md:text-2xl">pratap2501.pk@gmail.com</p>
            </div>
          </div>

          <form className="flex flex-col space-y-2 mx-auto w-fit">
            <div className="flex space-x-2">
              <input className="contactInput" placeholder="Name" type="text" />
              <input
                className="contactInput"
                placeholder="Email"
                type="email"
              />
            </div>
            <input className="contactInput" placeholder="Subject" type="text" />
            <textarea className="contactInput" placeholder="Message" />
            <button
              className="bg-[#F7AB0A]/80 p-2 tracking-[20px] text-gray-600 uppercase font-semibold"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
