

import { motion } from "framer-motion";
import taskImage from "../../assets/taskminder.jpg"
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export const Intro = () => {
  return (
    <section className="w-11/12 mx-auto text-center py-16 flex flex-col items-center">
      {/* Hero Section */}
      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Organize Your <span className="text-[#0000ff]">Tasks</span> Like Never Before!
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Boost your productivity with our intuitive task manager. Plan, track, and complete tasks effortlessly.
        </p>
        <Link to="/home">
          <Button className="mt-6 px-6 py-3 text-lg">Get Started</Button>
        </Link>
      </motion.div>

      {/* Image Illustration */}
      <motion.img
        src={taskImage}
        alt="Task Manager Illustration"
        className="mt-10 w-full max-w-xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Features Section */}
      <div className="mt-16 grid md:grid-cols-3 gap-6 w-full max-w-5xl">
        {[
          { title: "Easy Task Management", desc: "Create, edit, and organize tasks with ease." },
          { title: "Smart Reminders", desc: "Get timely reminders to stay on track." },
          { title: "Collaborate & Share", desc: "Work together with your team effortlessly." },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 border rounded-lg shadow-sm bg-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 3 }}
          >
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
