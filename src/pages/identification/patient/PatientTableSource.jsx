export const patientColumns = [
    {
        field: 'patientId', headerName: 'NIP', width: 170,
        cellClassName: "name-column--cell",
    },
    { field: 'patientFirstName', headerName: 'NOMS', width: 200 },
    { field: 'patientLastName', headerName: 'PRENOMS', width: 200 },
    { field: 'patientSex', headerName: 'GENRE', width: 100 },
    { field: 'patientBirthDay', headerName: 'DATE DE NAISSANCE', width: 150 },
    { field: 'patientPlaceOfBirth', headerName: 'LIEU DE NAISSANCE', width: 150 },
    {
        field: 'telephone', headerName: 'TELEPHONE', headerAlign: "left",
        align: "right",
        width: 120,
    },
]