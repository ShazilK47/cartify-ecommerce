"use client";

import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useUser, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

interface FormDataType {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const { user } = useUser();

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        name: user.fullName || "",
        email: user.primaryEmailAddress?.emailAddress || "",
      }));
    }
  }, [user]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, userId: user?.id }),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: user?.fullName || "",
          email: user?.primaryEmailAddress?.emailAddress || "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("Error sending message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error sending message. Please try again.");
    }
  };

  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>

      <SignedIn>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto max-w-3xl px-6 py-12"
        >
          <h1 className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white">
            Contact Us
          </h1>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-900"
            >
              <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-white">
                <Phone size={22} className="text-red-500" /> Call Us
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                We are available 24/7.
              </p>
              <p className="mt-2 font-medium text-gray-900 dark:text-white">
                +980-987122222
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-900"
            >
              <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-white">
                <Mail size={22} className="text-red-500" /> Write to Us
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Fill out our form, and we will contact you.
              </p>
              <p className="font-medium text-gray-900 dark:text-white">
                customer@excluslive.com
              </p>
            </motion.div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 space-y-4 rounded-lg bg-white p-6 shadow-md dark:bg-gray-900"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-md border p-3 dark:bg-gray-800 dark:text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-md border p-3 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <input
              type="text"
              name="phone"
              placeholder="Your Phone *"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full rounded-md border p-3 dark:bg-gray-800 dark:text-white"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full rounded-md border p-3 dark:bg-gray-800 dark:text-white"
              required
            />
            <button
              type="submit"
              className="w-full rounded-md bg-red-500 py-3 font-semibold text-white transition hover:bg-red-600"
            >
              Send Message
            </button>
            {status && (
              <p className="mt-2 text-center text-sm text-gray-700 dark:text-white">
                {status}
              </p>
            )}
          </motion.form>
        </motion.div>
      </SignedIn>
    </>
  );
}
