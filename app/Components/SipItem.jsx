'use client';

import React from 'react';
import TrashIcon from './Icons/TrashIcon';

const SipItem = ({ sip, index, handleChange, handleDelete }) => {
    return (
        <div className="card mt-2 p-2">
            <div className="d-flex justify-content-between">
                <h5 className='fw-bold'>SIP {index+1}</h5>
                <span className='text-danger' onClick={() => handleDelete(index)}><TrashIcon /></span>
            </div>
            <div className="row">
                <div className="col-8">
                    <label className='mb-2' htmlFor="">Monthly investment</label>
                    <input type="text" className="form-control" value={sip.amt} placeholder='Amount per month' onChange={(e) => handleChange(index, { amt: e.target.value, rate: sip.rate })} />
                </div>
                <div className="col-4">
                    <label className='mb-2' htmlFor="">Return% (p.a.)</label>
                    <input type="text" className="form-control" value={sip.rate} placeholder='Rate' onChange={(e) => handleChange(index, { amt: sip.amt, rate: e.target.value })} />
                </div>
            </div>
        </div>
    )
}

export default SipItem;