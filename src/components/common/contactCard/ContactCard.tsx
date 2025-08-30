import React, { useState } from "react";
import "./aboutPage.css";

import { AnimatePresence } from "framer-motion";

import ContactSide from "./ContactSide";
import ContactForm from "./ContactFormSide";

export const ContactCard = () => {
  const [state, setState] = useState(true);

  const toggleState = () => {
    setState((prev) => !prev);
  };

  return (
    <div className="w-full p-4">
      <div className="flex justify-center dark:text-white">
        <AnimatePresence mode="wait">
          {state ? <ContactSide /> : <ContactForm />}
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
