"use client";

import { useState } from "react";
import { X, MessageCircle, Phone } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
  service: string;
};

const GetInTouch = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      service: "",
    },
  });

  const services = [
    "Business Cards & Stationery",
    "Brochures & Catalogs",
    "Posters & Banners",
    "Signage & Displays",
    "Corporate Gifts",
    "Packaging Solutions",
    "Other Services",
  ];

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Message sent successfully! We'll be in touch soon.");
      reset();
      closeModal();
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    // Small delay to trigger opening animation
    setTimeout(() => {
      setIsAnimating(true);
    }, 10);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsAnimating(false);
    // Wait for animation to complete before hiding modal
    setTimeout(() => {
      setIsModalOpen(false);
      reset(); // Reset form when closing
      // Restore body scroll
      document.body.style.overflow = "unset";
    }, 500); // Match the animation duration
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <div
          onClick={openModal}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg cursor-pointer transition-all duration-300 hover:scale-110 group"
        >
          <div className="flex items-center space-x-2">
            <MessageCircle
              size={24}
              className="group-hover:rotate-12 transition-transform duration-300"
            />
            <span className="hidden md:block font-medium">Get In Touch</span>
          </div>
        </div>

        {/* Tooltip for mobile */}
        <div className="md:hidden absolute bottom-full right-0 mb-2 bg-gray-800 text-white text-xs rounded-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Get In Touch
        </div>
      </div>

      {/* Modal Backdrop */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 bg-opacity-10 z-50 flex items-center justify-center p-4 overflow-y-auto transition-opacity duration-500"
          onClick={closeModal}
        >
          {/* Modal Content */}
          <div
            className={`bg-white rounded-2xl shadow-2xl w-full max-w-2xl my-8 transform transition-all duration-500 ease-out max-h-[90vh] overflow-y-auto ${
              isAnimating
                ? "translate-y-0 opacity-100 scale-100"
                : "-translate-y-full opacity-0 scale-95"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-purple-50 to-pink-50">
              <div className="flex items-center space-x-2">
                <MessageCircle className="text-purple-600" size={24} />
                <h2 className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Get In Touch
                </h2>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-2 hover:bg-gray-100 rounded-full"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
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
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.firstName
                              ? "border-red-300 bg-red-50"
                              : "border-gray-300"
                          } focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-colors duration-200`}
                          placeholder="Enter your first name"
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.firstName.message}
                          </p>
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
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.lastName
                              ? "border-red-300 bg-red-50"
                              : "border-gray-300"
                          } focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-colors duration-200`}
                          placeholder="Enter your last name"
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.lastName.message}
                          </p>
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
                        message: "Invalid email address",
                      },
                    }}
                    render={({ field }) => (
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          {...field}
                          type="email"
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.email
                              ? "border-red-300 bg-red-50"
                              : "border-gray-300"
                          } focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-colors duration-200`}
                          placeholder="your.email@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.email.message}
                          </p>
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
                        message: "Invalid phone number",
                      },
                    }}
                    render={({ field }) => (
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                          {...field}
                          type="tel"
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.phone
                              ? "border-red-300 bg-red-50"
                              : "border-gray-300"
                          } focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-colors duration-200`}
                          placeholder="+1 (555) 123-4567"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.phone.message}
                          </p>
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
                        Company Name (Optional)
                      </label>
                      <input
                        {...field}
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-colors duration-200"
                        placeholder="Your company name"
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
                        Service You're Interested In{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <select
                        {...field}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.service
                            ? "border-red-300 bg-red-50"
                            : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent bg-white transition-colors duration-200`}
                      >
                        <option value="">Select a Service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.service.message}
                        </p>
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
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.message
                            ? "border-red-300 bg-red-50"
                            : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-colors duration-200 resize-none`}
                        placeholder="Tell us about your project requirements..."
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.message.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={submitting || !isValid}
                  className={`w-full py-4 px-6 rounded-lg text-white font-medium transition-all duration-300 text-lg
                    ${
                      submitting || !isValid
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-purple-600 to-pink-500 hover:shadow-lg hover:shadow-purple-300 transform hover:-translate-y-1"
                    }`}
                >
                  {submitting ? (
                    <div className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending Message...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideDownIn {
          from {
            transform: translateY(-100vh);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideUpOut {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default GetInTouch;
