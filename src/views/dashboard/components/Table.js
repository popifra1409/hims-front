import AddButton from './AddButton'
import SearchBar from './SearchBar'
import Pagination from './Pagination'

const Table = (props) => (
    <div className="main-content-child">
        <div className="d-flex justify-between ">
            {/* pagination */}
            <Pagination/>
            <div className="d-flex justify-between search-addPatient">
                {/* search */}
                <SearchBar/>
                {/* add button */}
                <AddButton btnName={props.btnName}/>
            </div>
        </div>
        <div className="mt-3 table-responsive" style={{ marginLeft: '-13px' }}>
            {/* table */}
           {props.children}
        </div>
    </div>
)

export default Table
