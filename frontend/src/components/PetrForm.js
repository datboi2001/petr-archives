import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { TextField, Grid, Button } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import styles from './PetrForm.module.css';

const PetrForm = () => {
    const [value, setValue] = useState(dayjs(new Date()));
    const [formData, setFormData] = useState({
        'petr-name': '',
        'ig-handle': '',
        'petr-location': '',
    });

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    const cancelHandler = (event) => {
        setIsFilePicked(false);
    };

    const onChange = (event) => {
        setFormData((curState) => {
            return { ...curState, [event.target.name]: event.target.value };
        });
    };

    console.log(selectedFile);

    return (
        <div className={styles['petr-form']}>
            <h1 className={styles.title}>Submit a New Petr Drop</h1>
            <br />
            <Grid
                container
                direction="column"
                rowSpacing={5}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                className={styles['grid-container']}
            >
                <Grid item xs={6} className={styles['text-field']}>
                    <TextField
                        required
                        name="petr-name"
                        className={styles['form-field']}
                        label="PETR Name"
                        variant="filled"
                        helperText="Please enter the name of the PETR design"
                        onChange={onChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        name="ig-handle"
                        className={styles['text-field']}
                        label="Instagram Handle"
                        variant="filled"
                        helperText="Please enter the PETR creator's Instagram handle"
                        onChange={onChange}
                    />
                </Grid>
                <Grid id={styles['date-picker']} item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Stack spacing={2} className={styles['date-stack']}>
                            <DesktopDatePicker
                                label="Date of PETR Drop"
                                inputFormat="MM/DD/YYYY"
                                value={value}
                                onChange={handleChange}
                                renderInput={(params) => (
                                    <TextField {...params} />
                                )}
                            />
                        </Stack>
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        name="petr-location"
                        className={styles['text-field']}
                        label="Location of Petr drop"
                        variant="filled"
                        helperText="Please provide the location of the Petr drop"
                        onChange={onChange}
                    />
                </Grid>
            </Grid>
            <br />
            <div className={styles['file-picker']}>
                <Button
                    color="warning"
                    id={styles['file-selection']}
                    variant="contained"
                    component="label"
                >
                    Choose File
                    <input
                        type="file"
                        name="file"
                        onChange={changeHandler}
                        hidden
                    />
                </Button>
                <div className={styles['file-info']}>
                    {isFilePicked ? (
                        <div>
                            <p>
                                {selectedFile.name} [{selectedFile.type}]
                            </p>
                        </div>
                    ) : (
                        <p>Select a file to show details</p>
                    )}
                    <Button
                        className="cancelButton"
                        id={styles['cancel-file']}
                        variant="text"
                        component="label"
                        color="error"
                        onClick={() => {
                            cancelHandler();
                        }}
                    >
                        X
                        <input name="file" hidden />
                    </Button>
                </div>
            </div>
            <Button
                id={styles.submit}
                variant="contained"
                onClick={(event) => {
                    event.preventDefault();
                    const inputData = new FormData();
                    inputData.append('file', selectedFile, selectedFile.name);
                    inputData.append('name', formData['petr-name']);
                    const formattedDate =
                        value['$d'].getMonth() +
                        '/' +
                        value['$d'].getDate() +
                        '/' +
                        value['$d'].getFullYear();
                    inputData.append('timestamp', formattedDate);
                    inputData.append('location', formData['petr-location']);
                    inputData.append('instagram', formData['ig-handle']);
                    console.log(inputData);

                    fetch('http://localhost:8000/create-sticker', {
                        method: 'POST',
                        body: inputData,
                    })
                        .then((response) => response.json())
                        .then((result) => {
                            alert('Success');
                        })
                        .catch((err) => {
                            console.error('Error: ', err);
                        });
                }}
            >
                Submit
            </Button>
        </div>
    );
};

export default PetrForm;
