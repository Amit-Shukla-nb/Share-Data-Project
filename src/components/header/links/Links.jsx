import React, { useState } from 'react';
import '../links/LinkStyle.scss';
import { MdInsertLink as Link, MdSettingsInputComponent } from 'react-icons/md';
export const Links = () => {
    const [LinkOpen, setValue] = useState(false);
    const OnIconClick = () => {
        setValue(!LinkOpen)
    }
    return (
        <div className="links">
            <Link className="linkicon" onClick={OnIconClick} />
            {
                LinkOpen && (
                    <div className="drop-down">
                        <ul className="list-item">
                            <li className="li">Appointments Dashboard</li>
                            <li className="li">Form Builder</li>
                            <li className="li">Patient Self-Scheduling</li>
                            <li className="li">Practice Portal</li>
                            <li className="li">Virtual Visits</li>
                        </ul>
                    </div>
                )
            }
        </div>
    )
}
