
"use client";

import { useState } from "react";
import { FiArrowUpRight, FiLoader, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("idle");
    const [feedback, setFeedback] = useState("");

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        setStatus("loading");
        setFeedback("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Unable to send your inquiry.");
            }

            setStatus("success");
            setFeedback("Your inquiry has been sent successfully!");

            setFormData({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            setStatus("error");
            setFeedback(
                error.message || "Something went wrong. Please try again."
            );
        }
    }

    return (
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101612] p-6 shadow-2xl shadow-black/20 sm:p-9">

            {/* Decorative background */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-400/[0.07] blur-[90px]" />

            <div className="relative">

                <div className="mb-8">
                    <p className="mb-3 text-xs font-bold tracking-[0.25em] text-emerald-400">
                        SEND AN INQUIRY
                    </p>

                    <h3 className="text-2xl font-bold text-white sm:text-3xl">
                        Let's start a conversation.
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-400">
                        Tell me a little about your project, opportunity or idea.
                        I'll get back to you as soon as possible.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Name */}
                    <div>
                        <label
                            htmlFor="contact-name"
                            className="mb-2 block text-xs font-semibold text-gray-300"
                        >
                            YOUR NAME
                        </label>

                        <input
                            id="contact-name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                            maxLength={80}
                            autoComplete="name"
                            className="w-full rounded-xl border border-white/10 bg-[#080d09] px-5 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-emerald-400/70 focus:ring-2 focus:ring-emerald-400/10"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="contact-email"
                            className="mb-2 block text-xs font-semibold text-gray-300"
                        >
                            EMAIL ADDRESS
                        </label>

                        <input
                            id="contact-email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            required
                            maxLength={254}
                            autoComplete="email"
                            className="w-full rounded-xl border border-white/10 bg-[#080d09] px-5 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-emerald-400/70 focus:ring-2 focus:ring-emerald-400/10"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label
                            htmlFor="contact-message"
                            className="mb-2 block text-xs font-semibold text-gray-300"
                        >
                            YOUR MESSAGE
                        </label>

                        <textarea
                            id="contact-message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell me about your project or inquiry..."
                            required
                            minLength={10}
                            maxLength={3000}
                            rows={5}
                            className="w-full resize-y rounded-xl border border-white/10 bg-[#080d09] px-5 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-emerald-400/70 focus:ring-2 focus:ring-emerald-400/10"
                        />
                    </div>

                    {/* Feedback */}
                    {feedback && (
                        <div
                            role="status"
                            aria-live="polite"
                            className={`flex items-start gap-3 rounded-xl border p-4 text-sm ${status === "success"
                                ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                                : "border-red-400/20 bg-red-400/10 text-red-300"
                                }`}
                        >
                            {status === "success" ? (
                                <FiCheckCircle className="mt-0.5 shrink-0" />
                            ) : (
                                <FiAlertCircle className="mt-0.5 shrink-0" />
                            )}

                            {feedback}
                        </div>
                    )}

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="group flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-400 px-6 py-4 text-sm font-bold text-[#061009] transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-300 hover:shadow-[0_10px_35px_rgba(52,211,153,0.18)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {status === "loading" ? (
                            <>
                                <FiLoader className="animate-spin" />
                                SENDING INQUIRY...
                            </>
                        ) : (
                            <>
                                SEND INQUIRY
                                <FiArrowUpRight className="text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </>
                        )}
                    </button>

                    <p className="text-center text-[11px] text-gray-600">
                        Your information will only be used to respond to your inquiry.
                    </p>

                </form>
            </div>
        </div>
    );
}
