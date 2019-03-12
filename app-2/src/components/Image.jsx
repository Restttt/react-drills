import React, { Component } from "react";

export default function Image(props) {
    return(
        <div>
             <img src={props.myImage} style={{width: 300}} alt=''/>
        </div>
    )
}