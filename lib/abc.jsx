"use client";
import React, { useState } from 'react';

const Abc = () => {
    const [tab, setTab] = useState(0);

    const handleClick = (i) => {
        setTab(i);
    }

    const data = [
        {
            title: 'Tab 1',
            content: 'Tab 1 content'
        },
        {
            title: 'Tab 2',
            content: 'Tab 2 content'
        },
        {
            title: 'Tab 3',
            content: 'Tab 3 content'
        }
    ];

    return (
        <div>
            <div>
                {data.map((item, index) => (
                    <button key={`btn-index-${index}`} onClick={() => handleClick(index)}>
                        {item.title}
                    </button>
                ))}
            </div>

            <div>
                {data.map((item, index) => (
                    <div
                        key={`content-index-${index}`}
                        style={{ visibility: tab === index ? "visible" : "hidden" }}
                    >
                        {item.content}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Abc;
