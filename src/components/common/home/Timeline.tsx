"use client";

import { FaBookOpen } from "react-icons/fa";

interface IEvent {
  date: string;
  title: string;
  subtitle: string;
  major: string;
  desc: string;
  icon: React.ReactElement;
}

const events: IEvent[] = [
  {
    date: "2022 - present",
    title: "International University",
    subtitle: "HCMC, Viet Nam",
    major: "Computer Science",
    desc: "",
    icon: <FaBookOpen size={12} />,
  },
];

export function Timeline() {
  return (
    <div className="h-screen">
      <div className="relative w-full max-w-4xl mx-auto py-10 mb-20 h-fit">
        <div className="absolute left-31.5 sm:left-52.5 top-0 bottom-0 w-1 bg-gray-300"></div>

        <div className="flex flex-col gap-10">
          {events.map((event, idx) => (
            <div key={idx} className="flex items-start gap-10">
              <div className="w-19 sm:w-40 text-right font-semibold ">
                {event.date}
              </div>
              <div className="relative">
                <div
                  className={`w-6 h-6 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black`}
                >
                  {event.icon}
                </div>
              </div>

              <div className="flex-1 bg-white rounded-xl shadow p-5">
                <h3 className="text-lg font-bold dark:text-black">
                  {event.title} - {event.major}
                </h3>
                <h4 className="text-gray-600">{event.subtitle}</h4>
                <p className="mt-2 text-gray-700">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
