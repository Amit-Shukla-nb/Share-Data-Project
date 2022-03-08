import React from 'react'
import './Search.styles.scss';
import { FaFilter} from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import ButtonComponent from '../button/button.component';

const SearchBar = () => {
    return (
        <div className='search-bar'>
            <div className='search-box'>
               <BiSearch/>
                <input type="search" placeholder='Search...' />
            </div>
            <div className='fillter'>
                <button className='filter-btn'>
                    <span className='filter-icon'><FaFilter/></span>
                    HIDE FILTER
                </button>
            </div>
            <ButtonComponent />
        </div>
    )
}

export default SearchBar;
