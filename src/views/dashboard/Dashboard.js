import NavBar from "./layout/NavBar"
import SideBar from "./layout/SideBar"
import { useState } from "react"
import { Collapse } from "bootstrap"
import Main from "./layout/Main"
const Dashboard = (props) => {
    // const [toggleSideBar, setToggleSideBar] = useState(false)
   const [collapse,setCollapse] = useState()
    const setCollapseSideBar = (data) => {
          setCollapse(data)
        // console.log(collapse)
    }

    return (
        <div className="pageWrapper">
            <SideBar toggle={collapse} />
            <NavBar onToggleSideBar={setCollapseSideBar} />
            <Main toggle={collapse}>
                {props.children}
            </Main>
        </div>
    );
}

export default Dashboard