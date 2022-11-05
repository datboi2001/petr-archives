import React from 'react';
import styles from './Gallery.module.css';
import { Grid } from '@mui/material';

const Gallery = () => {
    return (
        <div className={styles['gallery-div']}>
            Gallery
            <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
            >
                <Grid item xs={6}>
                    Pic 1
                </Grid>
                <Grid item xs={6}>
                    Pic 2
                </Grid>
                <Grid item xs={6}>
                    Pic 3
                </Grid>
                <Grid item xs={6}>
                    Pic 4
                </Grid>
            </Grid>
        </div>
    );
};

export default Gallery;
