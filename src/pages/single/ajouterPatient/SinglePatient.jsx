import "../single.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import Chart from "../../../components/chart/Chart";
import List from "../../../components/table/Table";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PatientService from "../../../services/PatientService";


const SinglePatient = () => {
    const { idPatient } = useParams();
    const [patient, setPatient] = useState({
        idPatient:idPatient,
        adresse: "",
        email: "",
        patientAge: "",
        patientBarCode:"",
        patientBirthDay: "",
        patientFingerPrints: "",
        patientLastName: "",
        patientFirstName: "",
        patientNationalite: "",
        patientPlaceOfBirth: "",
        patientProfession: "",
        patientReligion: "",
        patientSex: "",
        telephone: ""

    });

    useEffect(() => {
        PatientService.getPatientsById(idPatient).then((response) => {
            let pat = response.data.data;
            setPatient({
                idPatient: pat.patientId,
                adresse: pat.adresse,
                email: pat.email,
                patientAge: pat.patientAge,
                patientBarCode: pat.patientBarCode,
                patientBirthDay: pat.patientBirthDay,
                patientFingerPrints: pat.patientFingerPrints,
                patientLastName: pat.patientLastName,
                patientFirstName: pat.patientFirstName,
                patientNationalite: pat.patientNationalite,
                patientPlaceOfBirth: pat.patientPlaceOfBirth,
                patientProfession: pat.patientProfession,
                patientReligion: pat.patientReligion,
                patientSex: pat.patientSex,
                telephone: pat.telephone
            });
        });
    }, []);





    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <Link className="editButton" to={`/SinglePatient/EditFamille/${idPatient}`}>Edit</Link>
                        <h1 className="title">Détails</h1>
                        <div className="item">

                            <div className="details">
                                <div className="detailItem">

                                    <span className="itemKey">NIP:</span>
                                    <span >{patient.idPatient}</span>
                                </div>

                                <div className="detailItem">
                                    <span className="itemKey">Adresse:</span>
                                    <span className="itemValue"> {patient.adresse}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">
                                        <span >{patient.email}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transactions</h1>
                    <List />
                </div>
            </div>
        </div>
    );
}

export default SinglePatient;
