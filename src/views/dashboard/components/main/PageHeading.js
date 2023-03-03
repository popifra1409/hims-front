
const PageHeading = ({heading,stepName}) => {
    return (
        <div className="col">
            <h5 className="d-flex nav-heading"> 
            <p>{heading}</p>
            <p className="fw-light" style={{marginLeft:'12px'}}>{'>'}</p>
            <span className="ms-3">{stepName}</span>
            </h5>
        </div>
    )
}

export default PageHeading
