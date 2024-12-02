// "use client";

// import React, { useState, useRef, useEffect } from 'react';
// import { Button } from "@/components/ui/button";
// import { ChevronRight, ChevronLeft } from "lucide-react";

// // Menu data with categories and courses
// const menuData = [
//     {
//         name: "Most Popular",
//         slug: "popular",
//         courses: [
//             { id: 1, name: "Agile Scrum Foundation", label: "Best Seller" },
//             { id: 2, name: "PMP", label: "Trending" },
//             { id: 3, name: "CAPM Exam Prep" },
//             { id: 4, name: "Project Management Fundamentals" },
//             { id: 5, name: "Agile Scrum Master (ASM)" },
//         ],
//     },
//     {
//         name: "Agile Courses",
//         slug: "generative-ai",
//         courses: [
//             { id: 6, name: "PMI", label: "Best Seller" },
//             { id: 7, name: "SAFe Scrum Master" },
//             { id: 8, name: "Agile Scrum Foundation" },
//             { id: 9, name: "Agile Scrum Master (ASM)" },
//         ],
//     },
//     {
//         name: "Project Management Courses",
//         slug: "ai-ml",
//         courses: [
//             { id: 10, name: "Project Management Fundamentals", label: "Best Seller" },
//             { id: 11, name: "CAPM Exam Prep" },
//             { id: 12, name: "PMP" },
//             { id: 13, name: "Change management Foundation and Practitioner Certification" },
//         ],
//     },
//     {
//         name: "ITSM Courses",
//         slug: "data-science",
//         courses: [
//             { id: 14, name: "ITIL 4 Foundation", label: "New" },
//             { id: 15, name: "VeriSM™ Foundation" },
//             { id: 16, name: "SIAM Foundation" },
//         ],
//     },
//     {
//         name: "Six Sigma & Quality Management",
//         slug: "cloud-computing",
//         courses: [
//             { id: 18, name: "Lean Six Sigma Yellow Belt", label: "Best Seller" },
//             { id: 19, name: "Value Stream Mapping" },
//             { id: 20, name: "Poka Yoke" },
//             { id: 21, name: "BPM and Six Sigma" },
//         ],
//     },
//     {
//         name: "DevOps Courses",
//         slug: "devops",
//         courses: [
//             { id: 22, name: "DevOps Foundations", label: "Trending" },
//             { id: 23, name: "DevOps Master" },
//             { id: 24, name: "DevOps Professional" },
//             { id: 25, name: "Continuous Delivery Architecture" },
//         ],
//     },
//     {
//         name: "IT Governance Courses",
//         slug: "blockchain",
//         courses: [
//             { id: 26, name: "CGEIT", label: "New" },
//             { id: 27, name: "CRISC" },
//             { id: 28, name: "COBIT 5 Certification" },
//         ],
//     },
 
// ];

// const CategoryCourseList = () => {
//     const [activeTab, setActiveTab] = useState(0);
//     const containerRef = useRef(null);
//     const categoryRefs = useRef([]);

//     const handleArrowClick = (direction) => {
//         let newIndex = activeTab;
//         if (direction === 'left') {
//             newIndex = Math.max(0, activeTab - 1);
//         } else if (direction === 'right') {
//             newIndex = Math.min(menuData.length - 1, activeTab + 1);
//         }
//         setActiveTab(newIndex);
//     };

//     const scrollToCategory = (index) => {
//         if (categoryRefs.current[index]) {
//             categoryRefs.current[index].scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'nearest',
//                 inline: 'center',
//             });
//         }
//     };

//     useEffect(() => {
//         scrollToCategory(activeTab);
//     }, [activeTab]);

//     return (
//         <div className="max-w-6xl mt-8 flex flex-col md:flex-row  overflow-hidden ">
//             {/* Sidebar with Horizontal Scrolling on Mobile */}
//             <div className="relative md:w-1/3 bg-gray-100 shadow-lg rounded-xl">
//                 {/* Left Arrow */}
//                 <button
//                     className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full md:hidden ${
//                         activeTab === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
//                     }`}
//                     onClick={() => handleArrowClick('left')}
//                     disabled={activeTab === 0}
//                 >
//                     <ChevronLeft className="h-5 w-5 text-gray-700" />
//                 </button>

//                 {/* Scrollable Sidebar */}
//                 <div
//                     ref={containerRef}
//                     className="flex md:block overflow-x-auto md:overflow-visible whitespace-nowrap scrollbar-hide"
//                 >
//                     {menuData.map((category, index) => (
//                         <button
//                             key={category.slug}
//                             ref={(el) => (categoryRefs.current[index] = el)}
//                             onClick={() => setActiveTab(index)}
//                             className={`w-full md:w-auto text-left px-6 py-4 text-base font-medium flex justify-between items-center transition-colors ${
//                                 activeTab === index
//                                     ? 'bg-blue-600 text-white'
//                                     : 'text-gray-700 hover:bg-gray-200'
//                             }`}
//                             style={{ backgroundColor: activeTab === index ? '#1D4ED8' : 'transparent' }}
//                         >
//                             {category.name}
//                             <ChevronRight
//                                 className={`h-5 w-5 transition-transform ${
//                                     activeTab === index ? 'transform rotate-90 text-white' : 'text-gray-400'
//                                 }`}
//                             />
//                         </button>
//                     ))}
//                 </div>

//                 {/* Right Arrow */}
//                 <button
//                     className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full md:hidden ${
//                         activeTab === menuData.length - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
//                     }`}
//                     onClick={() => handleArrowClick('right')}
//                     disabled={activeTab === menuData.length - 1}
//                 >
//                     <ChevronRight className="h-5 w-5 text-gray-700" />
//                 </button>
//             </div>

//             {/* Content Area */}
//             <div className="md:w-2/3 bg-white p-6">
//                 <h2 className="text-2xl font-bold mb-6">{menuData[activeTab].name}</h2> 

//                 {menuData[activeTab].courses.length > 0 ? (
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                         {menuData[activeTab].courses.map((course) => (
//                             <div
//                                 key={course.id}
//                                 className="border border-gray-200 p-4 hover:shadow-md transition-shadow rounded-lg"
//                             >
//                                 <h3 className="text-lg font-semibold mb-2">{course.name}</h3>
//                                 {course.label && (
//                                     <span className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full">
//                                         {course.label}
//                                     </span>
//                                 )}
//                                 <p className="mt-2 text-gray-600 text-sm">
//                                     Brief description of the course content goes here.
//                                 </p>
//                                 <Button variant="primary" className="mt-4 text-sm">
//                                     Enroll Now
//                                 </Button>
//                             </div>
//                         ))}
//                     </div>
//                 ) : (
//                     <p className="text-gray-500">No courses available for this category.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default CategoryCourseList;

"use client";

import React, { useState } from 'react';

const CategoryCourseList = () => {
    const [tab, setTab] = useState(0);

    const handleClick = (i) => {
        setTab(i);
    }

    const data = [
        {
            title: 'Tab 1',
            content: 'Tab 1 content: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            title: 'Tab 2',
            content: 'Tab 2 content: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            title: 'Tab 3',
            content: 'Tab 3 content: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }
    ];

    return (
        <div className="max-w-4xl mx-auto mt-8 flex">
            <div className="w-1/4 bg-gray-100 rounded-l-xl">
                {data.map((item, index) => (
                    <button
                        key={`btn-index-${index}`}
                        onClick={() => handleClick(index)}
                        className={`w-full text-left px-4 py-2 text-sm font-medium leading-5 ${
                            tab === index
                                ? 'bg-white text-blue-600 border-r-4 border-blue-600'
                                : 'text-gray-600 hover:bg-gray-200'
                        }`}
                    >
                        {item.title}
                    </button>
                ))}
            </div>

            <div className="w-3/4 bg-white rounded-r-xl p-6">
                {data.map((item, index) => (
                    <div
                        key={`content-index-${index}`}
                        className={tab === index ? 'block' : 'hidden'}
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-gray-600">
                            {item.content}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategoryCourseList;
