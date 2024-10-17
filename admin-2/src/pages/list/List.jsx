import React from 'react'
import Sidebar from "../../components/sidebar/SideBar"
import Navbar from "../../components/navbar/NavBar"
import DataTable from "../../components/datatable/DataTable"
import './List.scss'

function List() {
  return (
  
          <div className="list">
            <Sidebar/>
            <div className="listContainer">
              <Navbar/>
              <DataTable/>
            </div>
          </div>
  )
}

export default List