
const Pagination = () => {
    return (
        <div className="">
            <div className="paginator">
                <span className="me-1">Show</span>
                <select name='paginate' className='p-1 border rounded'>
                    <option value="5" >5</option>
                    <option value="10">10</option>
                    <option value="15" >15</option>
                    <option value="20">20</option>
                </select>
                <span className="ms-1" >entries</span>
            </div>
        </div>
    )
}

export default Pagination
