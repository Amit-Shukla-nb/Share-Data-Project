import React from 'react';
import './HeaderStyle.scss';
import { MdMenu as Menu } from 'react-icons/md';
import { ClientList } from '../header/Clientlist/ClientList';
import { UserProfile } from '../header/profile/UserProfile';
import {Links} from '../header/links/Links';
const Header = () => {
    return (
    <>
        <div className="header">
            <div className="menu-item">
                <Menu className="menu-icon" />
            </div>
                <ClientList />
                <UserProfile />
            <div className="link-icon">
                <Links/>
            </div>
        </div>
    </>
    )
}
export default Header;