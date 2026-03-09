import React, { useState } from "react";
import "./aboutPage.css";

import { motion } from "framer-motion";

export default function ContactForm() {
  const [msgForm, setMsgForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
            className="text-base border-2 border-black dark:border-white rounded-md w-full p-1"
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
            className="text-base border-2 border-black dark:border-white rounded-md w-full p-1"
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
            className="border-2 border-black dark:border-white rounded-md w-full h-30 p-1"
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
  );
}
