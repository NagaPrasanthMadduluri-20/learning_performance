import { useState, useEffect } from "react";

const Drawer = ({ isOpen, onClose, children }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isAnimating && !isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ease-in-out ${
        isOpen ? "bg-black bg-opacity-50" : "bg-opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`fixed top-16 left-0 w-[95%] h-[100vh] bg-white dark:bg-popover shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          X
        </button>
        <div className="p-4 h-full overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default Drawer;
