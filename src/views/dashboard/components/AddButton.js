import { Link } from 'react-router-dom'
const AddButton = ({ btnName }) => {
  return (
    <Link to="/dashboard/newPatient" className="ms-md-4 px-2 py-1 border-0 rounded bg-primary text-white text-decoration-none">{btnName}</Link>
  )
}

export default AddButton
