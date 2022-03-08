import React, { Component } from 'react'
import TableLeft from '../components/table-left/table-left.component'
import TableRight from '../components/table-right/table-right.component'
import Header from '../components/header/Header';
import Home from '../components/home/Home';
import BodyComponent from '../components/body-component/body.component';
import FooterInfoComp from '../components/footer/footer.component';
import './shared-data.styles.css'

class SharedData extends Component {
  render() {
    return (
      <div className="1634">
        <Header />
        <Home />
        <BodyComponent />
        <TableLeft />
        <TableRight /> 
        <FooterInfoComp />
      </div>
    )
  }
}

export default SharedData;
