import Dashboard from "../Dashboard"
import { useState } from "react";
import { Chart } from "react-google-charts"
import dayjs from "dayjs";
import { Card, Box, Paper, Grid, TextField } from "@mui/material"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

export const data = [
    ["Task", "Hours per Day"],
    ["Dermatology", 11],
    ["cardiology", 5],
    ["Neurology", 3], // CSS-style declaration
];

export const options = {
    title: "Patients par département",
    pieHole: 0.3,
    is3D: false,
};

const Home = () => {
    const [value, setValue] = useState(dayjs('2022-04-07'))

    const isWeekend = (date) => {
        const day = date.day();

        return day === 0 || day === 6;
    };

    return (
        <Dashboard>
            <div className="d-flex flex-row justify-content-between">
                <Paper variant="outlined" className="mt-2 p-1 ps-1 bg-light rounded" sx={{ maxWidth: 750 }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
                        <Grid item xl={6}
                            className="p-1 m-3 border rounded" >
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <StaticDatePicker
                                    orientation="landscape"
                                    openTo="day"
                                    value={value}
                                    shouldDisableDate={isWeekend}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                    sx={{ width: 70, }}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xl={6} sx={{ marginLeft: -6, }}>
                            <div className="p-1 d-flex flex-row">
                                <Grid container columnSpacing={{ xs: 1, sm: 1, md: 1 }} >
                                    <Grid item xl={6} >
                                        <Card sx={{ marginLeft: 2, borderRadius: 5, width: 150, position: 'relative', bgcolor: '', opacity: '0.7' }} variant="outlined" >
                                            <img style={{ width: '100%' }} src={require("../../../images/wave-black-and-white-computer-icons-green-white.png")} alt=" " />
                                            <Box
                                                sx={{
                                                    bgcolor: 'transparent',
                                                    minWidth: '100%',
                                                    position: 'absolute',
                                                    top: '3px',
                                                    height: '100%'
                                                }}
                                            >
                                                <Box sx={{ color: 'text.dark', fontWeight: '700' }}>Patients</Box>
                                                <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
                                                    98
                                                </Box>

                                                <Box sx={{ color: 'text.primary', display: 'inline', fontSize: 14 }}>
                                                    Semaine passé
                                                </Box>
                                                <Box
                                                    sx={{
                                                        color: 'success.dark',
                                                        display: 'inline',
                                                        fontWeight: 'bold',
                                                        mx: 0.5,
                                                        fontSize: 14,
                                                        fontWeight: '700'
                                                    }}
                                                >
                                                    +18.77%
                                                </Box>
                                            </Box>
                                        </Card>
                                        <Card sx={{ marginLeft: 2, marginTop: 1, borderRadius: 5, width: 150, position: 'relative', bgcolor: '', opacity: '0.7' }} variant="outlined" >
                                            <img style={{ width: '100%' }} src={require("../../../images/wave-black-and-white-computer-icons-green-white.png")} alt=" " />
                                            <Box
                                                sx={{
                                                    bgcolor: 'transparent',
                                                    maxWidth: '100%',
                                                    position: 'absolute',
                                                    top: '3px',
                                                    height: '100%'
                                                }}
                                            >
                                                <Box sx={{ color: 'text.dark', fontWeight: '700' }}>admissions</Box>
                                                <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
                                                    98
                                                </Box>

                                                <Box sx={{ color: 'text.primary', display: 'inline', fontSize: 14 }}>
                                                    Semaine passé
                                                </Box>
                                                <Box
                                                    sx={{
                                                        color: 'success.dark',
                                                        display: 'inline',
                                                        fontWeight: 'bold',
                                                        mx: 0.5,
                                                        fontSize: 14,
                                                        fontWeight: '700'
                                                    }}
                                                >
                                                    +18.77%
                                                </Box>
                                            </Box>
                                        </Card>
                                    </Grid>
                                    <Grid item xl={6}>
                                        <Card sx={{ marginLeft: 0, borderRadius: 5, width: 150, position: 'relative', bgcolor: '', opacity: '0.7' }} variant="outlined" >
                                            <img style={{ width: '100%' }} src={require("../../../images/wave-black-and-white-computer-icons-green-white.png")} alt=" " />
                                            <Box
                                                sx={{
                                                    bgcolor: 'transparent',
                                                    maxWidth: '100%',
                                                    position: 'absolute',
                                                    top: '3px',
                                                    height: '100%'
                                                }}
                                            >
                                                <Box sx={{ color: 'text.dark', fontWeight: '700' }}>docteurs</Box>
                                                <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
                                                    98
                                                </Box>

                                                <Box sx={{ color: 'text.primary', display: 'inline', fontSize: 14 }}>
                                                    Semaine passé
                                                </Box>
                                                <Box
                                                    sx={{
                                                        color: 'success.dark',
                                                        display: 'inline',
                                                        fontWeight: 'bold',
                                                        mx: 0.5,
                                                        fontSize: 14,
                                                        fontWeight: '700'
                                                    }}
                                                >
                                                    +18.77%
                                                </Box>
                                            </Box>
                                        </Card>
                                        <Card sx={{ marginLeft: 0, marginTop: 1, borderRadius: 5, width: 150, position: 'relative', bgcolor: '', opacity: '0.7' }} variant="outlined" >
                                            <img style={{ width: '100%' }} src={require("../../../images/wave-black-and-white-computer-icons-green-white.png")} alt=" " />
                                            <Box
                                                sx={{
                                                    bgcolor: 'transparent',
                                                    minWidth: '100%',
                                                    position: 'absolute',
                                                    top: '3px',
                                                    height: '100%'
                                                }}
                                            >
                                                <Box sx={{ color: 'text.dark', fontWeight: '700' }}>services</Box>
                                                <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
                                                    98
                                                </Box>

                                                <Box sx={{ color: 'text.primary', display: 'inline', fontSize: 14 }}>
                                                    Semaine passé
                                                </Box>
                                                <Box
                                                    sx={{
                                                        color: 'success.dark',
                                                        display: 'inline',
                                                        fontWeight: 'bold',
                                                        mx: 0.5,
                                                        fontSize: 14,
                                                        fontWeight: '700'
                                                    }}
                                                >
                                                    +18.77%
                                                </Box>
                                            </Box>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper variant="outlined" className="mt-2 ps-1 bg-light rounded" sx={{width:'400px' }}>
                    <Chart
                        chartType="PieChart"
                        width="100%"
                        height="400px"
                        data={data}
                        options={options}
                    />
                </Paper>
            </div>
        </Dashboard>
    )
}

export default Home
