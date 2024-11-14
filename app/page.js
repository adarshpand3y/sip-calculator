'use client';

import React, { useState } from "react";
import LeftSidebar from "./Components/LeftSidebar";
import RightSidebar from "./Components/RightSidebar";

export default function Home() {
    const [sips, setSips] = useState([]);
    const [years, setYears] = useState(5);

    const handleAddSip = () => {
        const newSip = {
            amt: 1000,
            rate: 10,
        };
        setSips((prevSips) => [...prevSips, newSip]);
    };

    const handleDelete = (index) => {
        setSips((prevSips) => prevSips.filter((_, i) => i !== index));
    };

    const handleChange = (index, updatedData) => {

        if (updatedData.amt === "" || updatedData.rate === "") {
            updatedData.amt = updatedData.amt === "" ? "" : updatedData.amt;
            updatedData.rate = updatedData.rate === "" ? "" : updatedData.rate;
        }

        // If amt or rate are not empty, check if they are numeric
        if ((updatedData.amt && isNaN(updatedData.amt) && updatedData.amt !== "") ||
            (updatedData.rate && isNaN(updatedData.rate) && updatedData.rate !== "")) return;

        // If they are numeric, parse them to int
        if (updatedData.amt !== "") updatedData.amt = parseInt(updatedData.amt, 10);
        if (updatedData.rate !== "") updatedData.rate = parseInt(updatedData.rate, 10);

        setSips((prevSips) =>
            prevSips.map((sip, i) => i === index ? { ...sip, ...updatedData } : sip)
        );
    };

    const handleYearChange = (newValue) => {
        setYears(prevValue => newValue);
    };

    return (
        <div className="container">
            <h2 className="mt-4 mb-2">SIP Calculator</h2>
            <p className='lead fs-5'>Calculate the return on your investments.</p>
            <div className="row">
                <div className="col-md-6"><LeftSidebar sips={sips} handleChange={handleChange} handleDelete={handleDelete} handleAddSip={handleAddSip} /></div>
                <div className="col-md-6"><RightSidebar sips={sips} years={years} handleYearChange={handleYearChange} /></div>
            </div>
        </div>
    );
}
