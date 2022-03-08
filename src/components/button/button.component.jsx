import React from 'react'
import './button.styles.scss';
import { MdGetApp } from "react-icons/md";
import { MdPublish } from "react-icons/md";

class ButtonComponent extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       disabled: true,
    }
  }
  render(){
    return (
      <div className='btn-group'>
        <button className='export' disabled><MdGetApp />EXPORT</button>
        <button className='import'> <MdPublish />IMPORT</button>
      </div>
      )
    }
}
export default ButtonComponent;
