import React from "react";
import styled from 'styled-components';
import {Link} from "react-router-dom";

export default ({ ctfs }) => <React.Fragment>
    <Container>
    {
        <List>
            {
                ctfs.map((ctf) => <ListItem key={ctf.directory}><Link to={`/write_ups/${ ctf.directory }`}> {ctf.name}</Link></ListItem>)
            }
        </List>
    }
    </Container>
</React.Fragment>;

const Container = styled.div`
    left: 0;
    position: absolute;
    margin: 100px 0 0 30px;
    width: 50%;
    height: 80%;
    overflow-y: scroll;
    @media only screen and (max-width: 700px) {
    width: 85%;
    }
`;

const List = styled.ul`
    list-style-type: none;
    a {
        text-decoration: none;
        font-weight: bold;
        font-family: "Helvetica";
        font-size: 25px;
        color: red;
    }
    a:hover {
        color: #af0000;
    }
`;

const ListItem = styled.li`
    margin: 10px 0;
`;