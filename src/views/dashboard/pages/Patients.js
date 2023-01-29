import Dashboard from "../Dashboard"
import Main from "../layout/Main"
import PageHeading from "../components/main/PageHeading"
import PatientsTable from "../components/patient/PatientsTable"

const Patients = () => {
    return (
        <Dashboard>
            <Main>
                < PageHeading heading="Patients" stepName="" />
                <PatientsTable />
            </Main>
        </Dashboard>
    )
}

export default Patients
