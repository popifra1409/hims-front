
const PageHeading = ({heading}) => {
    return (
        <div className="col">
            <h5 className="d-flex nav-heading"> 
            <p>{heading}</p>
            <p className="fw-light" style={{marginLeft:'12px'}}>|</p>
            </h5>
        </div>
    )
}

export default PageHeading
