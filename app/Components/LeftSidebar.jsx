'use client'

import React from 'react';
import SipItem from './SipItem';
import PlusIcon from './Icons/PlusIcon';

const LeftSidebar = ({ sips, handleChange, handleDelete, handleAddSip }) => {
    return (
        <div className="card p-2 h-100 my-2 sidebar-height overflow-y-auto">
            <div className="d-flex justify-content-between">
                <h4>Your SIPs</h4>
                {sips.length < 5 && <span className='text-success' onClick={() => handleAddSip()}><PlusIcon /></span>}
            </div>
            <>
                {
                    sips.length === 0 ?
                        <>
                            <div className="h-100 d-flex justify-content-center align-items-center">
                                <h6 className="text-muted lead text-center m-0">No SIP currently. Add SIP using the add icon above.</h6>
                            </div>
                        </> :
                        sips.map((sip, index) => {
                            return <SipItem sip={sip} key={index} index={index} handleChange={handleChange} handleDelete={handleDelete} />
                        })
                }
            </>
        </div>
    )
}

export default LeftSidebar;