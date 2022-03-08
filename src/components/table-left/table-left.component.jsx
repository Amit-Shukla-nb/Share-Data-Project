import React from 'react'
import './table-left.styles.css'
import DataInfo from './table-left.data'
import { BsArrowUp } from 'react-icons/bs'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { CgPushChevronLeft, CgPushChevronRight } from 'react-icons/cg'


export function TableLeft() {
  return (
    <div className="left-table">
      <table>
        <tbody>
        <tr>
          <th>First Name <BsArrowUp /></th>
          <th>Last Name <BsArrowUp /></th>
        </tr>
        {DataInfo.map((post) => {
          return(
            <>
              <tr className="infor-table">
                <td>{post.firstName}</td>
                <td>{post.lastName}</td>
                <td><IoIosArrowForward /></td>
              </tr>
            </>
          )
        })}
        <tr>
          <td className="item-page">
            <span >Items per page</span>
          </td>
          <td > 
            <select className="box" >
              <option>10</option>
            </select>
            <span className='pag-no'>1-10 0f 10</span>
        
            <CgPushChevronLeft className="arror"/>
            <IoIosArrowBack className="arror" />
            <IoIosArrowForward className="arror" />
            <CgPushChevronRight className="arror" />
            
          </td>
          <td></td>

        </tr>

        </tbody>
      </table>
    </div>
  );
}


export default TableLeft;