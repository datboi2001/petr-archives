import { React, useState, useEffect } from 'react';
import styles from './Gallery.module.css';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { Link as RRLink } from 'react-router-dom';
import { Link } from '@mui/material';

const Gallery = () => {
    const [imageList, setImageList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/get-data', {
            method: 'GET',
            mode: 'cors',
        })
            .then((result) => result.json())
            .then((data) => {
                setImageList(data);
            });
    }, []);

    console.log(imageList);

    return (
        <div>
            <h1 className={styles.title}>Gallery</h1>
            <br />
            <div className={styles['gallery-div']}>
                <ImageList
                    className={styles['gallery-images']}
                    gap={25}
                    cols={3}
                    sx={{ width: 1050, height: 1050 }}
                >
                    {imageList.map((item) => (
                        <ImageListItem
                            key={item.image_link}
                            className="lstOfImages"
                        >
                            <img
                                src={`${item.image_link}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.image_link}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.name}
                                loading="lazy"
                                onClick={(event) => {
                                    window.open(item.instagram, '_blank');
                                }}
                            />
                            <ImageListItemBar
                                title={
                                    item.name +
                                    ' by @' +
                                    item.instagram.slice(25)
                                }
                                subtitle={
                                    <p className={styles['pic-subtitle']}>
                                        {'When/Where: ' +
                                            item.location +
                                            ' on ' +
                                            item.timestamp}
                                    </p>
                                }
                                position="below"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </div>
    );
};

export default Gallery;
