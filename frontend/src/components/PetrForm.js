import React, { useState } from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { TextField, Grid, Button } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import styles from './PetrForm.module.css';

const PetrForm = () => {
    const [value, setValue] = useState(dayjs(new Date()));

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
                        id="standard-basic"
                        className={styles['form-field']}
                        label="PETR Name"
                        variant="filled"
                        helperText="Please enter the name of the PETR design"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        id="standard-basic"
                        className={styles['text-field']}
                        label="Instagram Handle"
                        variant="filled"
                        helperText="Please enter the PETR creator's Instagram handle"
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
                        id="standard-basic"
                        className={styles['text-field']}
                        label="Link to Instagram Post"
                        variant="filled"
                        helperText="Please link the PETR Instagram post (optional)"
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
                onClick={() => {
                    alert('clicked');
                }}
            >
                Submit
            </Button>
        </div>
    );
};

export default PetrForm;
