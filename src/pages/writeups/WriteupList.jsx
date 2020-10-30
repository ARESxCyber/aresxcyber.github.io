import React from 'react';
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
            <div>
                <h1><Link to={`/write_ups/${ctf.directory}`}>{ctf.name}</Link></h1>
                <Switch>
                    {
                        writeups.map((writeup) => <Route path={`/write_ups/${ctf.directory}/${writeup.file}`}
                                                         key={writeup.file}
                                                         render={() => <Writeup writeup={writeup} ctf={ctf}/>}/>)
                    }
                    <Route render={() =>
                        <ol>
                            {
                                writeups.map((writeup) => <li key={writeup.file}><Link
                                    to={`/write_ups/${ctf.directory}/${writeup.file}`}>{writeup.name}</Link></li>)
                            }
                        </ol>
                    }/>
                </Switch>
            </div>
        );
    }
}

export default WriteupList;