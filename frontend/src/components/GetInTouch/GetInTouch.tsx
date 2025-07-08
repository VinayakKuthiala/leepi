"use client";

import { useState } from "react";
import { X, MessageCircle, Phone } from "lucide-react";
import serviceTypesData from "./serviceTypes.json";

const GetInTouch = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedServiceType, setSelectedServiceType] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Handle service type selection to show images
    if (name === "serviceType") {
      setSelectedServiceType(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    closeModal();
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      message: "",
    });
    setSelectedServiceType("");
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
    setSelectedServiceType("");
    // Wait for animation to complete before hiding modal
    setTimeout(() => {
      setIsModalOpen(false);
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
            className={`bg-white rounded-lg shadow-2xl w-full max-w-md my-8 transform transition-all duration-500 ease-out max-h-[90vh] overflow-y-auto ${
              isAnimating
                ? "translate-y-0 opacity-100 scale-100"
                : "-translate-y-full opacity-0 scale-95"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <Phone className="text-blue-600" size={20} />
                <h2 className="text-xl font-semibold text-gray-800">
                  REQUEST A CALL
                </h2>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1 hover:bg-gray-100 rounded-full"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="NAME"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 placeholder-gray-500 text-sm"
                />
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL ID"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 placeholder-gray-500 text-sm"
                />
              </div>

              {/* Phone Field */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="PHONE NUMBER"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 placeholder-gray-500 text-sm"
                />
              </div>

              {/* Service Type Dropdown */}
              <div>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-gray-500 text-sm"
                >
                  <option value="">SERVICE TYPE</option>
                  {serviceTypesData.serviceTypes.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Service Images */}
              {selectedServiceType && (
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                    {serviceTypesData.serviceTypes.find(s => s.id === selectedServiceType)?.title}
                  </h3>
                  <div className="grid grid-cols-4 gap-2">
                    {serviceTypesData.serviceTypes
                      .find(s => s.id === selectedServiceType)
                      ?.images.map((image) => (
                        <div key={image.id} className="text-center">
                          <div className="aspect-square rounded-lg overflow-hidden border border-gray-200 mb-1">
                            <img
                              src={image.url}
                              alt={image.title}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                            />
                          </div>
                          <p className="text-xs text-gray-600 font-medium">
                            {image.title}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {/* Message Field */}
              <div>
                <textarea
                  name="message"
                  placeholder="MESSAGE"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 placeholder-gray-500 text-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-sm uppercase tracking-wide"
                >
                  SEND ENQUIRY
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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
