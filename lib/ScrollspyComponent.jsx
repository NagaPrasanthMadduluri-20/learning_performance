"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronUp, ChevronDown, Check } from "lucide-react";

const ScrollspyComponent = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(0);
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const newProgress = (scrollPosition / pageHeight) * 100;
      setProgress(newProgress);

      if (newProgress >= 99) {
        setCompleted(true);
      }

      const current = sectionRefs.current.findIndex((ref) => {
        const rect = ref.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= window.innerHeight / 2;
      });

      if (current !== -1) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="grid grid-cols-12 gap-4 mt-60">
      {/* Sidebar */}
      <div
        className={`col-span-3 ${
          sidebarOpen ? "h-[90vh]" : "h-[120px]"
        }`}
      >
        <div className="sticky top-0 bg-white shadow-lg transition-all">
          <button
            className="absolute top-2 right-2"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <ChevronDown size={24} /> : <ChevronUp size={24} />}
          </button>
          <nav className="p-4 overflow-y-auto h-full">
            {sections.map((section, index) => (
              <a
                key={index}
                href={`#${section.id}`}
                className={`block py-2 ${
                  activeSection === index
                    ? "text-blue-600 font-bold"
                    : "text-gray-600"
                }`}
              >
                {section.title}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Content Area */}
      <div className="col-span-9 bg-slate-100">
        <div className="fixed top-0 left-0 right-0 h-2 bg-gray-200">
          <div
            className="h-full bg-blue-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="p-8 w-full">
          {sections.map((section, index) => (
            <section
              key={index}
              id={section.id}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="mb-8 w-full"
            >
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <p>{section.content}</p>
            </section>
          ))}
        </div>
        {/* {completed && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg">
            <Check size={24} />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ScrollspyComponent;
