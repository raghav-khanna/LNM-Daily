import React from "react";
import "./Footer.css"

const Footer = () => {
    return(
        <div className="foot" style={{ backgroundColor: "#2196f3", borderTop: "0.25rem black solid" }}>
            <div>
            <h4>
                Rights Reserved ® <br />
                ..
                <br />
                Created by
            </h4>
            Nirnay(@nirnaykorde)
            <br />
            Pranav(@pranavchatur)
            <br />
            Raghav(@raghavkhanna)
            <br />
            Sourav(@souravjan)
            <br />
            ..
            <br />
            <h4>Made using React, Material UI, CassandraDB, NodeJS</h4>
            <hr />
            <hr />
            </div>
        </div>
    );
}

export default Footer;