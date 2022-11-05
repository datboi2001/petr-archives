import React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { TextField, Grid, Button } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import styles from './PetrForm.module.css';

const PetrForm = () => {
    const [value, setValue] = React.useState(dayjs('2022-11-6T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <div className={styles['petr-form']}>
            <Grid
                container
                rowSpacing={5}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                <Grid item xs={6}>
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
                        className={styles['form-field']}
                        label="Instagram Handle"
                        variant="filled"
                        helperText="Please enter the PETR creator's Instagram Handle"
                    />
                </Grid>
                <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Stack spacing={3}>
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
                        className={styles['form-field']}
                        label="Link to Instagram Post"
                        variant="filled"
                        helperText="Please enter a link to the Instagram Post (optional)"
                    />
                </Grid>
            </Grid>
            <br />
            <Button
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
