import NavBar from "./layout/NavBar"
import SideBar from "./layout/SideBar"
import { useState } from "react"
import { Collapse } from "bootstrap"
const Dashboard = (props) => {
    const [collapseSideBar, setCollapseSideBar] = useState(false)

    return (
        <div className="pageWrapper">
            <SideBar />
            <NavBar />
            {props.children}
        </div>
    );
}

export default Dashboard