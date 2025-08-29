import React, { useState } from "react";
import "./aboutPage.css";

import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";
import { AiFillLinkedin } from "react-icons/ai";
import { RiGithubFill } from "react-icons/ri";
import { PiReadCvLogoFill } from "react-icons/pi";
import { FaFileLines } from "react-icons/fa6";

import { motion, AnimatePresence } from "framer-motion";

export const ContactCard = () => {
  const [state, setState] = useState(true);

  const toggleState = () => {
    setState((prev) => !prev);
  };

  const [msgForm, setMsgForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setMsgForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", msgForm);
    setMsgForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full p-4">
      <div className="flex justify-center dark:text-white">
        <AnimatePresence mode="wait">
          {state ? (
            <motion.div
              key="front"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.33, 1, 0.68, 1],
                type: "tween",
              }}
              exit={{ y: 30, opacity: 0 }}
              className="inline-flex gap-7 sm:gap-15 items-center flex-col sm:flex-row 
                              border-4 rounded-2xl dark:border-white
                              py-5 px-6 sm:px-10"
            >
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-white">
                Let&apos;s connect
              </h3>
              <div className="flex flex-col gap-6">
                <div className="flex items-center">
                  <IoMail className="h-5 w-5" />
                  <div className="ml-4">
                    <h4 className="text-base sm:text-[18px]">Email</h4>
                    <a
                      href="mailto:huyphantranthanh@gmail.com"
                      className="text-sm sm:text-base text-gray-500"
                    >
                      huyphantranthanh@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaLocationDot className="h-5 w-5" />
                  <div className="ml-4">
                    <h4 className="text-base sm:text-[18px]">Location</h4>
                    <p className="text-sm sm:text-base text-gray-500">
                      Ho Chi Minh City, VietNam
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <IoShareSocialSharp className="h-5 w-5" />
                  <div className="ml-4 flex gap-2">
                    <a
                      href="https://linkedin.com/in/huythanhphan"
                      target="_blank"
                    >
                      <AiFillLinkedin className="w-7 h-7 sm:h-8 sm:w-8" />
                    </a>
                    <a href="https://github.com/Alexspector123" target="_blank">
                      <RiGithubFill className="w-7 h-7 sm:h-8 sm:w-8" />
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaFileLines className="h-5 w-5" />
                  <div className="ml-4 flex items-center">
                    <h4 className="text-[18px]">My Resume </h4>
                    <a
                      href="https://drive.google.com/file/d/1RmGP0RPj3-I1Hwwm-hpodUhQtb7Je8q5/view?usp=sharing"
                      target="_blank"
                    >
                      <PiReadCvLogoFill className="h-8 w-8" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="back"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.33, 1, 0.68, 1],
                type: "tween",
              }}
              exit={{ y: 100, opacity: 0 }}
              className=" w-100
                                        inline-flex gap-7 sm:gap-9 flex-col
                                        border-4 rounded-2xl dark:border-white
                                        py-5 px-5 sm:px-10"
            >
              <h3 className="text-2xl font-medium self-center text-gray-800 dark:text-white">
                Contact me
              </h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="Name" className="text-[18px]">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    value={msgForm.name}
                    onChange={handleChange}
                    className="text-base border-2 border-black dark:border-white rounded-md w-full py-1"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="Email" className="text-[18px]">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={msgForm.email}
                    onChange={handleChange}
                    className="text-base border-2 border-black dark:border-white rounded-md w-full py-1"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="Message" className="text-[18px]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={msgForm.message}
                    onChange={handleChange}
                    className="border-2 border-black dark:border-white rounded-md w-full h-30"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="cursor-pointer transition-all bg-white text-black dark:bg-black dark:text-white
                                                px-6 py-2 
                                                rounded-lg border-black dark:border-white border-2
                                                border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                                active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                >
                  Send
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div
        className="flex justify-center items-center
                            sm:mt-5 mt-10
                            "
      >
        <p className="inline-block dark:text-white ">
          {state ? "You can leave a mail for me via" : ""}{" "}
        </p>
        <button
          className=" ml-2
                                    bg-black dark:bg-white
                                    text-sm text-white dark:text-black
                                    rounded-md
                                    p-2.5
                                    block md:hidden"
          onClick={toggleState}
        >
          <span>{state ? "Click" : "Back"}</span>
        </button>
        <button
          className=" hidden md:block
                                    state-button"
          onClick={toggleState}
        >
          <span>{state ? "Click" : "Back"}</span>
        </button>
      </div>
    </div>
  );
};
