import React from 'react';
import '../Clientlist/ClientListStyle.scss';
export const ClientList = () => {
    return (
        <>
            <div className="dropdown-container">
                <select className="drop-down-list">
                    <option className="option" color="blue">client1</option>
                    <option className="option" >FAVORITIES</option>
                    <hr className="hrline" />
                    <option className="option">client2</option>
                    <option className="option" >client3</option>
                    <option className="option" >RECENTLY VISITED</option>
                    <hr className="hrline"/>
                    <option className="option" >client1</option>

                </select>
            </div>
        </>
    )
}

export default ClientList;