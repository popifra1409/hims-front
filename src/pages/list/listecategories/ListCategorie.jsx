
import Sidebar from "../../../components/sidebar/Sidebar"
import Navbar from "../../../components/navbar/Navbar"
import CategorieDatatable from "../../../components/datatable/categoriedatatable/CategorieDatatable"
import React from 'react'

const ListCategorie = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <CategorieDatatable/>
      </div>
    </div>
  )
}

export default ListCategorie
