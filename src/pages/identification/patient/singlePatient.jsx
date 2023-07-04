import "../../single/single.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import Chart from "../../../components/chart/Chart";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PatientAPI from "../../../services/identification/patientAPI";
import { Link } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import { Card, CardContent, Grid, Button, makeStyles, Typography, Input } from '@material-ui/core';

const SinglePatient = () => {
    const { patientid } = useParams();

    const [patient, setPatient] = useState({
        patientId: patientid,
        patientBarCode: "",
        patientFingerPrints: "",
        patientLastName: "",
        patientFirstName: "",
        patientBirthDay: "",
        patientPlaceOfBirth: "",
        patientSex: "",
        patientAge: "",
        patientProfession: "",
        patientReligion: "",
        patientNationalite: "",
        email: "",
        telephone: "",
        adresse: "",
    });

    useEffect(() => {
        PatientAPI.getPatientsById(patientid).then((res) => {
            let pat = res.data.data;
            setPatient({
                patientId: pat.patientId,
                patientBarCode: res.data.patientBarCode,
                patientFingerPrints: "",
                patientLastName: pat.patientLastName,
                patientFirstName: pat.patientFirstName,
                patientBirthDay: pat.patientBirthDay,
                patientPlaceOfBirth: pat.patientPlaceOfBirth,
                patientSex: pat.patientSex,
                patientAge: pat.patientAge,
                patientProfession: pat.patientProfession,
                patientReligion: pat.patientReligion,
                patientNationalite: pat.patientNationalite,
                email: pat.email,
                telephone: pat.telephone,
                adresse: pat.adresse,
            });

        }, [patientid])
    });

    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">
                            <Link
                                to={`/identification/patients/updatepatient/${patientid}/`}
                                style={{ textDecoration: "none" }}
                            >
                                Edit
                            </Link>
                        </div>
                        <h1 className="title">Patient details:</h1>
                        <div className="item">
                            <div className="details">
                                <h1 className="itemTitle">{patient.patientId}</h1>
                                <div className="detailItem">
                                    <span className="itemKey"></span>
                                    <span className="itemValue">
                                        {/*   <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeString}`} /> */}
                                        <QRCodeSVG value={patient.patientBarCode} size={150} />
                                    </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Noms et Prénoms:</span>
                                    <span className="itemValue">{patient.patientLastName + " " + patient.patientFirstName}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Genre:</span>
                                    <span className="itemValue">{patient.patientSex}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Date de Naissance:</span>
                                    <span className="itemValue">{patient.patientBirthDay}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Lieu de naissance:</span>
                                    <span className="itemValue">{patient.patientPlaceOfBirth}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Téléphone:</span>
                                    <span className="itemValue">{patient.telephone}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Adresse électronique:</span>
                                    <span className="itemValue">{patient.email}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Adresse postale:</span>
                                    <span className="itemValue">{patient.adresse}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Nationalité:</span>
                                    <span className="itemValue">{patient.patientNationalite}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Profession:</span>
                                    <span className="itemValue">{patient.patientProfession}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Religion:</span>
                                    <span className="itemValue">{patient.patientReligion}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="infoSupplementaires">
                            <Card>
                                <CardContent>
                                    <Typography variant="outlined">
                                        <h1 className="Title" >Informations Supplémentaires</h1>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                    <div className="actionsSupplementaires">
                            <Card>
                            <CardContent>
                                <Button variant="contained" color="secondary">
                                    Facturer
                                </Button>
                                <br />
                                <br />
                                <Button variant="contained" color="primary">
                                    Hospitaliser
                                </Button>
                                <br />
                                <br />
                                <Button variant="contained" color="success">
                                    Suivi Medical
                                </Button>
                                <br />
                                <br />
                                <Button variant="contained" color="primary">
                                    Paramètres De Soins
                                </Button>
                             </CardContent>
                        </Card>
                    </div>


                    <div className="actionsSupplementaires" style={{ width: "130px" }}>

                        <Button variant="contained" color="secondary" style={{ width: "150px", fontSize: "11px" }}>
                            Facturer
                        </Button>
                        <br />
                        <br />
                        <Button variant="contained" color="primary" style={{ width: "150px", fontSize: "11px" }}>
                            Hospitaliser
                        </Button>
                        <br />
                        <br />
                        <Button variant="contained" color="success" style={{ width: "150px", fontSize: "11px" }}>
                            Suivi Medical
                        </Button>
                        <br />
                        <br />
                        <Button variant="contained" color="primary" style={{ width: "150px", fontSize: "11px" }}>
                            Paramètres Soins
                        </Button>

                    </div>

                    {/*rrrrrrrrrrrrrrrrrrr*/}
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nom du patient</th>
                                    <th>Date de naissance</th>
                                    <th>Numéro de sécurité sociale</th>
                                    <th>Montant total</th>
                                    <th>Date de facturation</th>
                                    <th>Actions</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Hounang</td>
                                    <td>28-11-1998</td>
                                    <td>loic6940§788</td>
                                    <td>50000</td>
                                    <td>2005</td>
                                    <td className="actions-cell">
                                        <button className="btn btn-danger" >Details</button>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Akim</td>
                                    <td>2002-06-30</td>
                                    <td>loic6940§788</td>
                                    <td>500000</td>
                                    <td>2010-10-10</td>
                                    <td className="actions-cell">
                                        <button className="btn btn-danger" >Details</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>


                </div>
            </div>


        </div>


    );
};

export default SinglePatient;
