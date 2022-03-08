import React from 'react'
import './Tab.styles.scss';

const Tabcomponent = () => {
  return (
    // <div className='tabs-menu'>
       <div className="tabs table-headings">
            <div className="">
            {/* checked */}
              <input type="radio" className="tabs__radio" name="tabs-example" id="tab1" />
              <label for="tab1" className="tabs__label">APPOINMENT</label>
                <div className="tabs__content">
                  
                </div>
                <input type="radio" className="tabs__radio" name="tabs-example" id="tab2" />
                <label for="tab2" className="tabs__label">BRANDING</label>
                  <div className="tabs__content">
                  </div>
                <input type="radio" className="tabs__radio" name="tabs-example" id="tab3" />
                <label for="tab3" className="tabs__label">INSURANCE</label>
                  <div className="tabs__content">
                  
                </div>
                <input type="radio" className="tabs__radio" name="tabs-example" id="tab4" />
                <label for="tab4" className="tabs__label">LOCATION</label>
                  <div className="tabs__content">
                  
                </div>
                <input type="radio" className="tabs__radio" name="tabs-example" id="tab5" />
                <label for="tab5" className="tabs__label">PHARMACIES</label>
                  <div className="tabs__content">
                  
                </div>
                <input type="radio" className="tabs__radio" name="tabs-example" id="tab6" />
                <label for="tab6" className="tabs__label">RESOURCES</label>
                  <div className="tabs__content">
                  
                </div>
            </div>
    </div>
  )
}

export default Tabcomponent
