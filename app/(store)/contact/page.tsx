// pages/contact.tsx
"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useUser, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

interface FormDataType {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const { user } = useUser();

  // Basic form state
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");

  // Prefill user data when user is loaded
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
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
        body: JSON.stringify({
          ...formData,
          // Optionally include userId to track which user sent the message
          userId: user?.id,
        }),
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

  // If user is not signed in, show a sign-in redirect or custom message
  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>

      <SignedIn>
        <div className="mx-auto max-w-screen-xl px-4 py-8">
          <h1 className="mb-6 text-center text-2xl font-bold md:text-left">
            Contact Us
          </h1>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Left Panel */}
            <div className="col-span-1 rounded-md border p-6 shadow-sm">
              <div className="mb-6">
                <h2 className="mb-2 text-xl font-semibold">Call To Us</h2>
                <p className="text-gray-600">
                  We are available 24/7, 7 days a week.
                </p>
                <p className="mt-2 font-medium">Phone: +980-987122222</p>
              </div>
              <div>
                <h2 className="mb-2 text-xl font-semibold">Write To Us</h2>
                <p className="mb-2 text-gray-600">
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p className="text-gray-600">
                  Email:{" "}
                  <span className="font-medium">customer@excluslive.com</span>
                </p>
                <p className="text-gray-600">
                  Email:{" "}
                  <span className="font-medium">support@excluslive.com</span>
                </p>
              </div>
            </div>

            {/* Right Panel - Form */}
            <div className="col-span-2 rounded-md border p-6 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name, Email, Phone */}
                <div className="grid gap-4 md:grid-cols-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border p-2"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border p-2"
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Your Phone *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border p-2"
                  />
                </div>
                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full rounded-md border p-2"
                  required
                />
                {/* Submit Button */}
                <button
                  type="submit"
                  className="rounded-md bg-red-500 px-6 py-2 text-white hover:bg-red-600"
                >
                  Send Message
                </button>
              </form>

              {/* Status message */}
              {status && <p className="mt-4 text-sm text-gray-700">{status}</p>}
            </div>
          </div>
        </div>
      </SignedIn>
    </>
  );
}
