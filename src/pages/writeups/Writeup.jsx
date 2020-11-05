import React from 'react';
import styled from 'styled-components';
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
            return <Container>
                <Title>{writeup.name}</Title>
                <SubTitle>Loading...</SubTitle>
            </Container>;
        }

        return (
            <Container>
                <Title>{writeup.name}</Title>
                <SubTitle><b>By: </b>{writeup.author} 
                &nbsp; &nbsp;
                <b>Category: </b>{writeup.category}</SubTitle>
                <Body>
                    <ReactMarkdown>
                        {this.state.writeupData}
                    </ReactMarkdown>
                </Body>
            </Container>
        );
    }
}

const Container = styled.div`
    left: 0;
    position: absolute;
    margin: 10px 0 0 30px;
    width: 100%;
    height: 80%;
    @media only screen and (max-width: 700px) {
    width: 85%;
    }
`;

const Title = styled.h2`
    color: red;
    text-decoration: none;
    font-family: "Helvetica";
    font-size: 25px;
`;

const SubTitle = styled.p`
    margin: 0 0 0 15px;
    color: #a9a9a9;
    font-family: "Helvetica";
    font-size: 15px;
`;

const Body = styled.p`
    margin: 0 0 0 40px;
    font-family: "Helvetica";
    color: #af0000;
`;

export default WriteupList;
