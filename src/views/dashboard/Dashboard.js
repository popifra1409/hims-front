import NavBar from "./layout/NavBar"
import SideBar from "./layout/SideBar"
const Dashboard = (props) => {
    return (
        <div className="pageWrapper">
            <SideBar />
            <NavBar />
            {props.children}
        </div>
    );
}

export default Dashboard