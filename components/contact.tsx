import Image from "next/image";
import React from "react";
import { PhoneIcon, MapIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

export default function About({}: Props) {
  // using react hook form (search on google)
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    // template of the email (need to write, not in the website)
    window.location.href = `mailto:devpratapkarmakar@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name},${formData.subject} from (${formData.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-5xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ml-8 md:mx-auto">
        contact me
      </h3>

      <div className="-mb-20 md:mb-0 flex-shrink-0 md:-ml-9 object-cover md:rounded-lg space-y-10 md:mt-48">
        <div className="items-center justify-center flex text-center md:text-left space-x-5  ">
          <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <p className="md:text-2xl">+1234567890</p>
        </div>

        <div className="items-center justify-center flex text-center md:text-left space-x-5">
          <MapIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <p className="md:text-2xl">123 Developer Lane</p>
        </div>

        <div className="items-center justify-center flex text-center space-x-5">
          <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <p className="md:text-2xl">pratap2501.pk@gmail.com</p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 mx-auto w-fit md:mt-44 -mt-32 md:-mr-10 -ml-7 "
      >
        <div className="flex space-x-2">
          {/* ... spread operator */}
          <input
            {...register("name")}
            className="contactInput"
            placeholder="Name"
            type="text"
          />
          <input
            {...register("email")}
            className="contactInput"
            placeholder="Email"
            type="email"
          />
        </div>
        <input
          {...register("subject")}
          className="contactInput"
          placeholder="Subject"
          type="text"
        />
        <textarea
          {...register("message")}
          className="contactInput"
          placeholder="Message"
        />
        <button
          className="bg-[#F7AB0A]/80 p-2 tracking-[20px] text-gray-600 uppercase font-semibold"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
