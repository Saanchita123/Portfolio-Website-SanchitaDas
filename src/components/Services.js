import React from "react";

const services = [
  {
    title: "Branding and Identity",
    color: "bg-pink-200 hover:bg-pink-300",
    textColor: "text-gray-700",
  },
  {
    title: "Print Design",
    color: "bg-yellow-200 hover:bg-yellow-300",
    textColor: "text-gray-700",
  },
  {
    title: "Packaging Design",
    color: "bg-blue-200 hover:bg-blue-300",
    textColor: "text-gray-700",
  },
  {
    title: "Illustration and Art",
    color: "bg-pink-200 hover:bg-pink-300",
    textColor: "text-gray-700",
  },
];

function ServiceCard({ title, color, textColor }) {
  return (
    <div
      className={`relative rounded-xl p-8 m-2 cursor-pointer shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl flex items-center justify-center ${color} ${textColor}`}
      tabIndex={0}
      role="button"
      aria-pressed="false"
    >
      <span className="text-lg font-medium text-center">
        {title}
      </span>
      {/* Decorative 'keyring' dot, similar to your image */}
      <span className="absolute top-3 right-3 w-4 h-4 rounded-full bg-white border-2 border-gray-300"></span>
    </div>
  );
}

export default function MyServices() {
  return (
    <section className="max-w-3xl mx-auto py-10 px-4">
      <div className="mb-6 flex items-center gap-2">
        <span className="bg-yellow-200 px-3 py-1 rounded text-sm font-semibold">
          My Services
        </span>
        <span className="ml-2 text-2xl">👋</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {services.map((service, idx) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}
