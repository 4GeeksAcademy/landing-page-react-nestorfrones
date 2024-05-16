import React from "react";
import PropType from "prop-types";

const Card = (props) => {
    return (
        <div className="card col-lg-3 col-sm-12 mt-5 text-center">
            <img src={props.imageUrl} className="card-img-top mt-1" alt="..." />
            <div className="card-body">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">{props.description}</p>
                <a href={props.buttonUrl} className="btn btn-primary mt-auto">{props.buttonLabel}</a>
            </div>
        </div>
    );

};

Card.PropType = {
    title: PropType.string,
    imageUrl: PropType.string,
    description: PropType.string,
    buttonUrl: PropType.string,
    buttonLabel: PropType.string,

};

export default Card










