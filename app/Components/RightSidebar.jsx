'use client';

import React from 'react';

const RightSidebar = ({ sips, years, handleYearChange }) => {
    const monthlyAmt = sips.map(sip => sip.amt).reduce((sum, amt) => sum + amt, 0);

    const totalInvestment = monthlyAmt * 12 * years;

    return (
        <div className="card p-2 h-100 my-2 sidebar-height">
            <h4>Amount</h4>

            {
                sips.length === 0 ?
                <>
                    <div className="h-100 d-flex justify-content-center align-items-center">
                        <h6 className="text-muted lead text-center m-0">No SIP currently. Add SIP using the add icon above.</h6>
                    </div>
                </>:
            <div className="d-flex justify-content-center align-items-center h-100 flex-column">
                <input value={years} onChange={(e) => handleYearChange(e.target.value)} style={{ "width": "80%" }} type="range" className='form-range' min="1" max="100" />
                <p className='my-0'>Years: {years}</p>
                <p className='my-0'>Your Investment: Rs. {totalInvestment.toLocaleString()}</p>
            </div>
            }
        </div>
    )
}

export default RightSidebar;