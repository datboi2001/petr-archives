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
        <div className={styles['gallery-div']}>
            <h1 className={styles.title}>Gallery</h1>
            <br />

            {/* 
            requires an array: itemData
                const itemData = [{imgURL: 'image.url.something'}, 
                                  {title: 'PETR Name'}, 
                                  {author: '@IGhandleOfCreator'},
                                  {dateReleased: '10/10/2020}]
            */}
            <ImageList sx={{ width: 1050, height: 1050 }}>
                {imageList.map((item) => (
                    <ImageListItem
                        key={item.image_link}
                        className="lstOfImages"
                    >
                        <RRLink to={<a href={item.instagram}></a>}>
                            <Link>
                                <img
                                    src={`${item.image_link}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.image_link}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.name}
                                    loading="lazy"
                                />
                            </Link>
                        </RRLink>
                        <ImageListItemBar
                            title={
                                item.name + ' by ' + item.instagram.slice(25)
                            }
                            // date={item.timestamp}
                            // place={item.location}
                            subtitle={
                                <span>
                                    {'When/Where: ' +
                                        item.location +
                                        ' on ' +
                                        item.timestamp}
                                </span>
                            }
                            position="below"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
};

export default Gallery;
