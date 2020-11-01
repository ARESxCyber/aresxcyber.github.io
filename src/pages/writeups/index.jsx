import React from 'react';
import {Route, Switch} from "react-router-dom";
import { data as ctfs } from "./data/ctfs.json";
import WriteupIndex from "./Default";
import WriteupList from "./WriteupList";

export default () => <Switch>
    {
        ctfs.map((ctf) => <Route key={ctf.directory} path={`/write_ups/${ctf.directory}`} render={() => <WriteupList  ctf={ctf} />}/>)
    }
    <Route path="/" render={() => <WriteupIndex ctfs={ctfs} /> } />
</Switch>;
