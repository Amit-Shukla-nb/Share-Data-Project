import React from 'react'
import { FaCloudUploadAlt } from "react-icons/fa";

import './Heading.styles.scss'

const Heading = () => {
  return (
    <div className='data'>
        <span ><FaCloudUploadAlt className='cloud-icon'/></span>
        <h7 className='para'>Share Data</h7>   
    </div>
  )
}

export default Heading;
