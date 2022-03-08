import React from 'react'
import { GrFormClose } from 'react-icons/gr'
import DataInfo from './table-right.data'
import './table-right.styles.css';

export function TableRight() {
    return (
        <div className="right-table">
          <div className="title">
              Full Name
              <GrFormClose className="icons" /> 
          </div>
          <div className="tabs">
            <div className="">
            {/* checked */}
              <input type="radio" className="tabs__radio" name="tabs-example" id="tab1" />
              <label for="tab1" className="tabs__label">GENERAL INFO</label>
                <div className="tabs__content">
                  
                </div>
                <input type="radio" className="tabs__radio" name="tabs-example" id="tab2" />
                <label for="tab2" className="tabs__label">LOCATIONS</label>
                  <div className="tabs__content">
                  </div>
                <input type="radio" className="tabs__radio" name="tabs-example" id="tab3" />
                <label for="tab3" className="tabs__label">SOLUTIONS</label>
                  <div className="tabs__content">
                  
                </div>
            </div>
          </div>
          <div >
            <input className="edit-button" type="button" value="EDIT" />
          </div>
            <div className="general-info">
              <label className="label-title">First Name</label>
              <div className="info-general-detal">Gandolf</div>
            </div>
          {DataInfo.map((post) => {
            return (  
              <div className="general-form">
                <div className="label-title">{post.label}</div>
                  <div className="info-general-detal">{post.info}</div>
              </div>
            )
          })}
          <div className="general-form">
            <label className="label-title">Groups</label>
            <div className="info-gener`al-detal">Clinical Staff</div>
            <div className="info-general-detal">Virtual Visits</div>
            <div className="info-general-detal">Billing Staff</div>
            <div className="info-general-detal">Command Center User</div>
          </div>
        </div>
      
    )
  }

export default TableRight;