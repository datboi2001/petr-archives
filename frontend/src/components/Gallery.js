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
