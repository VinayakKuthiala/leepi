"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Breadcrumbs } from "@/components/Breadcrumbs";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
  service: string;
};

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const { control, handleSubmit, reset, formState: { errors, isValid } } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      service: "",
    }
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    // Simulate API call
    try {
      // For demo purposes only - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success("Message sent successfully! We'll be in touch soon.");
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  const services = [
    "Business Cards & Stationery",
    "Brochures & Catalogs",
    "Posters & Banners",
    "Signage & Displays",
    "Corporate Gifts",
    "Packaging Solutions",
    "Other Services"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-rose-50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 overflow-hidden opacity-40 pointer-events-none">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full -top-40 -left-20 mix-blend-multiply"></div>
        <div className="absolute w-96 h-96 bg-gradient-to-r from-yellow-200 to-amber-200 rounded-full -top-40 right-20 mix-blend-multiply"></div>
      </div>

      {/* Breadcrumbs */}
      <div className="relative backdrop-blur-sm bg-white/80 shadow-sm z-10">
        <div className="container mx-auto py-4 px-4 md:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Contact Us", href: "#" },
            ]}
          />
        </div>
      </div>

      {/* Page Header */}
      <header className="relative bg-gradient-to-r from-purple-600 to-pink-500 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute inset-y-0 -inset-x-1/2 w-[200%] bg-[radial-gradient(circle_at_top_left,_transparent_0%,_white_25%)] mix-blend-overlay"></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-center tracking-tight">
            Get In Touch
          </h1>
          <p className="text-white/80 text-center mt-4 max-w-2xl mx-auto text-lg">
            Have questions or ready to start your next project? We're here to help you create something amazing.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-16 px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -mr-20 -mt-20 opacity-50"></div>
            
            <div className="p-8 md:p-12 relative">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Fields - Two Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Controller
                      name="firstName"
                      control={control}
                      rules={{ required: "First name is required" }}
                      render={({ field }) => (
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-2">
                            First Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            {...field}
                            type="text"
                            className={`w-full px-4 py-2 rounded-lg border ${
                              errors.firstName ? "border-red-300 bg-red-50" : "border-gray-300"
                            } focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent`}
                          />
                          {errors.firstName && (
                            <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                          )}
                        </div>
                      )}
                    />
                  </div>

                  <div>
                    <Controller
                      name="lastName"
                      control={control}
                      rules={{ required: "Last name is required" }}
                      render={({ field }) => (
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-2">
                            Last Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            {...field}
                            type="text"
                            className={`w-full px-4 py-2 rounded-lg border ${
                              errors.lastName ? "border-red-300 bg-red-50" : "border-gray-300"
                            } focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent`}
                          />
                          {errors.lastName && (
                            <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                          )}
                        </div>
                      )}
                    />
                  </div>
                </div>

                {/* Email and Phone - Two Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Controller
                      name="email"
                      control={control}
                      rules={{ 
                        required: "Email is required", 
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        } 
                      }}
                      render={({ field }) => (
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-2">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            {...field}
                            type="email"
                            className={`w-full px-4 py-2 rounded-lg border ${
                              errors.email ? "border-red-300 bg-red-50" : "border-gray-300"
                            } focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent`}
                          />
                          {errors.email && (
                            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                          )}
                        </div>
                      )}
                    />
                  </div>

                  <div>
                    <Controller
                      name="phone"
                      control={control}
                      rules={{ 
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9\+\-\(\) ]+$/,
                          message: "Invalid phone number"
                        }
                      }}
                      render={({ field }) => (
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-2">
                            Phone <span className="text-red-500">*</span>
                          </label>
                          <input
                            {...field}
                            type="tel"
                            className={`w-full px-4 py-2 rounded-lg border ${
                              errors.phone ? "border-red-300 bg-red-50" : "border-gray-300"
                            } focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent`}
                          />
                          {errors.phone && (
                            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                          )}
                        </div>
                      )}
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <Controller
                    name="company"
                    control={control}
                    render={({ field }) => (
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Company Name
                        </label>
                        <input
                          {...field}
                          type="text"
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                        />
                      </div>
                    )}
                  />
                </div>

                {/* Service Selector */}
                <div>
                  <Controller
                    name="service"
                    control={control}
                    rules={{ required: "Please select a service" }}
                    render={({ field }) => (
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Service You're Interested In <span className="text-red-500">*</span>
                        </label>
                        <select
                          {...field}
                          className={`w-full px-4 py-2 rounded-lg border ${
                            errors.service ? "border-red-300 bg-red-50" : "border-gray-300"
                          } focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent bg-white`}
                        >
                          <option value="">Select a Service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                        {errors.service && (
                          <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
                        )}
                      </div>
                    )}
                  />
                </div>

                {/* Message */}
                <div>
                  <Controller
                    name="message"
                    control={control}
                    rules={{ required: "Please enter your message" }}
                    render={({ field }) => (
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Your Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          {...field}
                          rows={4}
                          className={`w-full px-4 py-2 rounded-lg border ${
                            errors.message ? "border-red-300 bg-red-50" : "border-gray-300"
                          } focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent`}
                        ></textarea>
                        {errors.message && (
                          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                        )}
                      </div>
                    )}
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={submitting || !isValid}
                    className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-all duration-300 
                      ${
                        submitting || !isValid
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-gradient-to-r from-purple-600 to-pink-500 hover:shadow-lg hover:shadow-purple-300 transform hover:-translate-y-1"
                      }`}
                  >
                    {submitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 lg:sticky lg:top-8">
            {/* Info Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full -ml-20 -mt-20 opacity-50"></div>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6 relative">Contact Information</h2>
              
              <div className="space-y-6 relative">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="mt-1 text-gray-600">+91 98765 43210</p>
                    <p className="mt-1 text-gray-600">+91 12345 67890</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="mt-1 text-gray-600">info@leepi.com</p>
                    <p className="mt-1 text-gray-600">support@leepi.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Address</h3>
                    <p className="mt-1 text-gray-600">
                      123 Business Street, Tech Park<br />
                      New Delhi, Delhi 110001<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 overflow-hidden relative">
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full -mr-20 -mb-20 opacity-50"></div>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6 relative">Business Hours</h2>
              
              <div className="relative space-y-3">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-700">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-700">Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Sunday</span>
                  <span className="font-medium text-purple-600">Closed</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 overflow-hidden relative">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Connect With Us</h2>
              
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="h-10 w-10 rounded-full bg-purple-100 hover:bg-purple-200 flex items-center justify-center transition-colors duration-300">
                  <svg className="h-5 w-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="https://twitter.com" className="h-10 w-10 rounded-full bg-purple-100 hover:bg-purple-200 flex items-center justify-center transition-colors duration-300">
                  <svg className="h-5 w-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="https://instagram.com" className="h-10 w-10 rounded-full bg-purple-100 hover:bg-purple-200 flex items-center justify-center transition-colors duration-300">
                  <svg className="h-5 w-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="https://linkedin.com" className="h-10 w-10 rounded-full bg-purple-100 hover:bg-purple-200 flex items-center justify-center transition-colors duration-300">
                  <svg className="h-5 w-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 relative rounded-2xl overflow-hidden shadow-xl h-96 bg-gray-200">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
            <p className="text-gray-600">Map loading... (Replace with actual map component)</p>
          </div>
          {/* Add your map component here */}
        </div>
      </main>
      <ToastContainer 
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
}
