import React from "react";
import ImageLightbox from "./ImageLightbox.js";

export default class ImageContainer extends React.Component {
    render() {
        return (
            <div className={"image-container"} >
                <ImageLightbox imageUrl={this.props.imageUrl} imageTitle={this.props.imageTitle} className={"image-lightbox"}></ImageLightbox>
                <p><a className="image-link" href={this.props.originalImageLink} target="_blank" rel="noreferrer">Original Image Link</a></p>
            </div>
        )
    }
}