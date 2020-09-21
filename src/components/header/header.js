import React from 'react'
import classes from './header.module.css'

const header = () => {
    return (
        <div className={classes.Header}>
            <img src="https://pelzimages.netlify.app/img/sofa/sofa3.jpg" alt="headimage" />
            <div className={classes.Heading}>
                <h1>myFurniture</h1>
                <p>your sarch for good furniture stops here</p>
            </div>
        </div>
    )
}

export default header