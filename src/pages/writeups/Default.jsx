import React from "react";
import {Link} from "react-router-dom";

export default ({ ctfs }) => <React.Fragment>
    <h2>Write Ups</h2>
    {
        ctfs.map((ctf) => <Link to={`/write_ups/${ ctf.directory }`} key={ctf.directory}> {ctf.name} ({ ctf.name })</Link>)
    }
</React.Fragment>;
