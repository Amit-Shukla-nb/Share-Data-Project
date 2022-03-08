import React from 'react'
import './Select.styles.scss';

const SelectComponent = () => {
  return (
    <div id='container'>
    <div className='select-group'>
        <div className='label-option'>
            <div className="label">
                <span className="details">Enterprise</span>
            </div>
            <div>
                <select className='select-btn'>
                    <option>Search/Select</option>
                    <option>Search/Select</option>
                    <option>Search/Select</option>
                </select>
            </div>
        </div>

        <div className='label-option'>
            <div className="label">
                <span className="details">Practice</span>
            </div>
            <div>
                <select className='select-btn'>
                    <option>Search/Select</option>
                </select>
            </div>
        </div>
        <div className='label-option'>
            <div className="label">
                <span className="details">Location</span>
            </div>
            <div >
                <select className='select-btn'>
                    <option>Search/Select</option>
                </select>
            </div>
        </div>
        <div className="fun-btn">
            <button className='ca-btn'>Apply</button>
            <button className='ca-btn'>Clear</button>
        </div>
    </div>

    <div className='main-2'>

        <div className='label-option'>
            <div className="label-2">
                <span className="details">Resource</span>
            </div>
            <div >
                <select className='select-btn'>
                    <option>Search/Select</option>
                </select>
            </div>
        </div>
        <div className='label-option'>
            <div className="label">
                <span className="details">Group</span>
            </div>
            <div >
                <select className='select-btn'>
                    <option>Search/Select</option>
                </select>
            </div>
        </div>

    </div>

</div>

  )
}

export default SelectComponent;
