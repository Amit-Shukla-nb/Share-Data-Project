import React from 'react'
import './ResourceTab.styles.scss';
import { MdOutlineHistory } from "react-icons/md";

const ResourceTab = () => {
    return (
        <div className='resource'>
            <div className='heading'>Resources
                <button className='btn'>
                    <MdOutlineHistory className='history-icon' />
                    <span className='activity-history'>Activity History</span>  
                </button>
            </div>
           <div className='paragraph'>
           <p>This list reflects all providers, staff and scheduling resource available in your organization.
                To configure for a specific solution,  visit the solutions page.
            </p>
           </div>
        </div>
    )
}

export default ResourceTab;
