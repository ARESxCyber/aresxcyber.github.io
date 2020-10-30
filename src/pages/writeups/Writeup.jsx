import React from 'react';
import ReactMarkdown from 'react-markdown'
import axios from "axios";

class WriteupList extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            writeup: null,
            loading: true
        };
    }

    componentDidMount() {
        this.setState({loading: true});
        import(`./data/${this.props.ctf.directory}/${this.props.writeup.file}`)
            .then(file => axios.get(file.default))
            .then((writeupData) =>
                this.setState({
                    writeupData: writeupData.data,
                    loading: false
                })
            );


    }

    render() {
        const writeup = this.props.writeup;
        if (this.state.loading) {
            return <div>
                <h2>{writeup.name}</h2>
                Loading...
            </div>;
        }

        return (
            <div>
                <h2>{writeup.name}</h2>
                By {writeup.author}.
                Category {writeup.category}.
                <ReactMarkdown>
                    {this.state.writeupData}
                </ReactMarkdown>
            </div>
        );
    }
}

export default WriteupList;