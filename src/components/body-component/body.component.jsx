import React from 'react'
import './body.styles.scss';
import Heading from '../heading/Heading.component';
import Tabcomponent from '../tab-component/Tab.component';
import ResourceTab from '../resource-tab/ResourceTab.component';
import SearchBar from '../search-bar/Search.component';
import SelectComponent from '../select-component/Select.component';

const BodyComponent = () => {
  return (
    <div className='container'>
      <Heading />
      <Tabcomponent />
      <ResourceTab />
      <SearchBar />
      <SelectComponent />
    </div>
  )
}

export default BodyComponent;
