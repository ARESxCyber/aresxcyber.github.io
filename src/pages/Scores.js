import React from 'react';
import {Line} from 'react-chartjs-2'
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import * as ReactBootStrap from 'react-bootstrap';

const Scores = () => {

    const top =[
        {ctf:"X-MAS CTF 2020", position:" 7/1064"},
        {ctf:"Newark Academy CTF", position: " 8/958"},
        {ctf:"Bo1lers CTF bootcamp", position:" 4/515"},
        {ctf:"Sunshine CTF 2020", position:" 4/742"},
        {ctf:"ByteCTF 3", position:" 5/158"},
        {ctf:"DarkCTF", position:" 13/808"},
        {ctf:"DamCTF 2020", position:" 22/700"},
        {ctf:"VULNCON CTF 2020", position:" 14/442"}
    ]

    const data = {
        labels: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28'],
        datasets: [
            {
                backgroundColor: 'rgb(255, 100, 20)',
                borderColor: 'rgb(222, 0, 0)',
                label: "Rating",
                pointRadius: 1,
                data: [11.116,0.147,0.000,2.032,3.719,6.105,9.749,7.084,6.594,0.586,21.531,2.861,22.231,33.413,4.356,11.321,6.848,26.025,16.386,11.477,15.268,3.474,6.964,1.912,0.000,1.602,2.261,3.648],
                
                
            }
        ]
    }
    const options = {
        scaleFontColor: 'red',
        responsive: true,
        tooltips: {
            mode: 'single',
        },
        scales: {
            xAxes: [{ 
                ticks: {
                    fontColor: "#FF0000", // this here
                },
            }],
            yAxes: [{
                ticks: {
                    fontColor: "#FF0000", // this here
                },
            }],
        }
    }      

    const ratingtable = (ctfobj, index) => {
        return(
            <tr key={index}>
                <td>{ctfobj.ctf}</td>
                <td>-- </td>
                <td>{ctfobj.position}</td>
            </tr>
        )
    }
       
    return(         
        <Container>
            <Name>
                Top Scores for 2020
            </Name>
            <Tablectf>
                <ReactBootStrap.Table class="table table-striped table-dark">
                    <thead>
                        <tr>
                        <th>CTF Name</th>
                        <th>-</th>
                        <th>Rank</th>
                        </tr>
                    </thead>
                    <tbody>
                        {top.map(ratingtable)}
                    </tbody>
                </ReactBootStrap.Table>
            </Tablectf>
            <Name>2020 Rating change for ARESx</Name>
            <Line data={data} options={options} />
        </Container>
    )
};

styled.td`
  align: center;
`;

styled.th`

text-align: center;
`;

const Container = styled.div`
  width:50%;
  color: red;
  margin-top: 200px;
  @media only screen and (max-width: 1488px) {
    margin-top: 100px;
  }
  @media only screen and (max-width: 1250px) {
    margin-top: 100px;
  }
`;

const Tablectf = styled.table`
    text-align:center;
    align:"center";
    width: 40%;
    height: 35%;
    font-size: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 3px solid orange;
    @media only screen and (max-width: 1488px) {
        font-size: 25px;
      }
    @media only screen and (max-width: 1250px) {
        font-size: 21px;
        width: 40%;
    } 
    @media only screen and (max-width: 1070px) {
        font-size: 20px;
    } 
    @media only screen and (max-width: 800px) {
        font-size: 20px;
    } 
`;



const Name = styled.h2`
  margin: 30px;
  align-items: center;
  font-size: 30px;
  color: #af0000;
  text-align: center;
`;

export default Scores;