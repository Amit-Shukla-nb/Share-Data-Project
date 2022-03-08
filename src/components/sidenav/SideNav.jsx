import React,{ useState } from 'react';
import '../sidenav/SideNavStyle.scss';
import { BsFillLightbulbFill as Solution } from 'react-icons/bs';
import { MdMenuBook as ClientDirectory } from 'react-icons/md';
import { MdSupervisedUserCircle as CommandCenterUsers } from 'react-icons/md';
import { MdInsights as PlatformAnalytics } from 'react-icons/md';
import { BsFileCodeFill as PlatformAdmin } from 'react-icons/bs';
import { MdPublish as ImportCenter } from 'react-icons/md';
import { MdSettingsApplications } from 'react-icons/md';
import { FaCloudUploadAlt as SharedData } from 'react-icons/fa';
import { BsFileBarGraphFill as Reporting } from 'react-icons/bs';
const SideNav = () => {
    const[style, setStyle] = useState("icon");
    const changeStyle = () => {
        setStyle("cont2");
        }
    return (
        <div className="sidenav-container">
            <ClientDirectory className="icon"  />
            <CommandCenterUsers className="icon" />
            <PlatformAnalytics className="icon" />
            <PlatformAdmin className={style} onClick={changeStyle} />
            <ImportCenter className="icon dividing-line" />
            <MdSettingsApplications className="icon"/>
            <SharedData className="icon" />
            <Solution className="icon"/>
            <Reporting className="icon" />
        </div>
    )
}
export default SideNav;