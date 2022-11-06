import React from 'react';
import styles from './Gallery.module.css';
import {
    Grid,
    ImageList,
    ImageListItem,
    ImageListItemBar,
} from '@mui/material';

const Gallery = () => {
    return (
        <div className={styles['gallery-div']}>
            <h1 className={styles.title}>Gallery</h1>
            <br />

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
                <Grid item xs={6}>
                    Pic 5
                </Grid>
                <Grid item xs={6}>
                    Pic 6
                </Grid>
            </Grid>

            {/* 
            requires an array: itemData
                const itemData = [{img: 'https://instagram.link.to.image.post'}, 
                                  {title: 'PETR Name'}, 
                                  {author: '@IGhandleOfCreator'}]
            */}
            {/* <ImageList sx={{ width: 500, height: 450 }}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                />
                <ImageListItemBar
                    title={item.title}
                    subtitle={<span>by: {item.author}</span>}
                    position="below"
                />
                </ImageListItem>
            ))}
            </ImageList> */}
        </div>
    );
};

export default Gallery;
