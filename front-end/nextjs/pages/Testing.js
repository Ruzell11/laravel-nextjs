import React, { useEffect } from "react";

export default function Testing({backend}) {


    return (
        <>
            <div className="flex justify-start items-center bg-white shadow-md text-black  p-5 ">
                <ul className="flex space-x-3 mx-3 ">
                    <li className="hover:text-gray-400 transition-all duration-500 cursor-pointer">
                        Testing
                    </li>
                    <li className="hover:text-gray-400 transition-all duration-500 cursor-pointer">
                        Testing
                    </li>
                    <li className="hover:text-gray-400 transition-all duration-500 cursor-pointer">
                        Testing
                    </li>
                </ul>
            </div>
            <div className="content">
                <ul className="spce-y-3 font-serif text-xl">
                    {backend.map((item) => (
                      <li key={item.id}>{item.title}</li>      
                    ))}
                </ul>
            </div>
        </>
    );
}

