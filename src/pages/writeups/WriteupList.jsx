import React from 'react';
import styled from 'styled-components';
import {Link, Route, Switch} from "react-router-dom";
import Writeup from "./Writeup";

class WriteupList extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            writeups: null,
            loading: true
        };
    }

    async componentDidMount() {
        this.setState({loading: true});
        const writeups = await import(`./data/${this.props.ctf.directory}/writeups.json`).then(contents => contents.data);

        this.setState({
            writeups,
            loading: false
        })
    }

    render() {
        const ctf = this.props.ctf;
        if (this.state.loading) {
            return <div>
                <h1>{ctf.name}</h1>
                Loading...
            </div>;
        }

        const writeups = this.state.writeups;
        console.log(writeups)
        return (
            <Container>
                <Title><Link to={`/write_ups/${ctf.directory}`}>{ctf.name}</Link></Title>
                <Switch>
                    {
                        writeups.map((writeup) => <Route path={`/write_ups/${ctf.directory}/${writeup.file}`}
                                                         key={writeup.file}
                                                         render={() => <Writeup writeup={writeup} ctf={ctf}/>}/>)
                    }
                    <Route render={() =>
                        <List>
                            {
                                writeups.map((writeup) => <ListItem key={writeup.file}><Link
                                    to={`/write_ups/${ctf.directory}/${writeup.file}`}>{writeup.name}</Link></ListItem>)
                            }
                        </List>
                    }/>
                </Switch>
            </Container>
        );
    }
}

export default WriteupList;

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

const Title = styled.h1`
    a {
        color: red;
        text-decoration: none;
        font-family: "Helvetica";
        font-size: 30px;
    }
    a:hover {
        color: #8b0000;
    }
`;

const List = styled.ul`
    list-style-type: none;
    a {
        text-decoration: none;
        font-family: "Helvetica";
        font-size: 20px;
        color: #af0000;
    }
    a:hover {
        color: #8b0000;
    }
`;

const ListItem = styled.li`
    margin: 10px 0;
`;