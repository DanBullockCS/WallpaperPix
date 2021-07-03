import React, { useState } from 'react';
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

function ImageLightbox(props) {
    const [isImageClicked, setIsImageClicked] = useState(false);

    // Open the modal for the image
    let clickImage = _ => {
        setIsImageClicked(true);
    }

    // Hide the model for the image
    let unClickImage = _ => {
        setIsImageClicked(false);
    }

    return (
        isImageClicked ?
            <Lightbox image={props.imageUrl} onClose={unClickImage} title={props.imageTitle} />
            :
            <img alt={props.imageTitle} src={props.imageUrl} onClick={clickImage} className={"wallpaper"} />
    )

}

export default ImageLightbox;