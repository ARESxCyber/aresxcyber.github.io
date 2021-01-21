import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const tourpran = require('../images/tourpran.png');
const millenniumx = require('../images/ARESx_Logo.png')
const notmaster = require('../images/notmaster.png')
const stdnoerr = require('../images/stdnoerr.png')


const Members = () => (
  <Container>
      <a href="https://twitter.com/MillenniumX_">
      <Member>
        <Name>MillenniumX</Name>
        <IMG src={millenniumx}/>
        <Description>Greetings! You can call me MillenniumX, and I'm a high school student. I do bug bounty hunting, iOS development, astronomy and writing (mainly plays and poetry). I'm currently into web exploitation, but starting to learn a little about reverse engineering. I love CTFs due to their competitive yet friendly spirit, and in my free time you can find me listening to NF, Witt Lowry and Vaboh!</Description>
      </Member>   
      </a>
      <Member>
      <Name>qxxxb</Name>
      <Description>Hello! I'm qxxxb, a computer science student at OSU. My favorite CTF category is crypto.</Description>
      </Member>

      <Member>
      <Name>R3N4SCITUR</Name>
      <Description>I'm R3N4SCITUR and I'm here to learn from like minded people and have fun doing it. I have always been passionate about technology. I'm obtaining a BA in IT w/emphasis on cyber security. I enjoy CTFs because they are an almost impossible puzzle at first but as you take the time to break them down, you realize there is a solution.</Description>
      </Member>

      <Member>
      <Name>noobs3c</Name>
      <Description>My name is Sofiane (aka noobs3c) and I'm a 19 year old French/Morrocan security researcher and bug hunter who lives in France. Currently, I'm a first year student in IT engineering and I hope to work in cybersecurity in the future! I'm practicing really frequently and really hard by playing multiple CTFs. I love to share resources with others!</Description>
      </Member>

      <Member>
      <Name>blu3drag0nsec</Name>
      <Description>I'm blu3drag0nsec a Portuguese CTF player, I hold a MSc in Computer Science and I'm an SAP Certified Developer currently working as SAP Architect (I'm in the 35-40 age  group). I'm a security enthusiast and self learner without any security training or certifications - I just get a lot of fun out of participating and learning as I go on the CTFs.</Description>
      </Member>

      <Member>
      <Name>Xiahou</Name>
      <Description>Hey! I'm Xiahou, a high school student who picked up cybersecurity as an interest and intend to make a life out of in the future. I consider myself a jack of all trades but master of none when it comes to challenges, and strive to become better quickly.</Description>
      </Member>

      <a href='https://twitter.com/stdnoerr'>
      <Member>
      <Name>stdnoerr</Name>
      <IMG src={stdnoerr}/>
      <Description>I'm stdnoerr, a high school student in Pakistan. I like computers and I'm fascinated by the advancing technology. Trying to make up with the world in the field of Binary Exploitation. Started binary exploitation from overthewire.org. Since then I'm in love with binary exploitation. Automating the boring stuff in binary exploitation. he/him</Description>
      </Member>
      </a>

      <Member>
      <Name>NOT_MASTER08</Name>
      <IMG src={notmaster}/>
      <Description>I'm a high school student from Ukraine. I had started learning about binary exploitation after finding LiveOverflow's channel on Youtube and picked it up simply as a hobby. A year later I'm in this team and enjoying my time here!</Description>
      </Member>

      <Member>
      <Name>tinnt</Name>
      <Description>My name is Tin or just call me tinnt. I'm currently working as a collaborator product security officer. My best interest is how the technology thrives these days, which make me need to strengthen myself more and more knowledge not to fall behind.</Description>
      </Member>

      <a href='https://www.youtube.com/channel/UCeM_QmZx6NodzwSqo7tWHxA'>
      <Member>
      <Name>tourpran</Name>
      <IMG src={tourpran}/>
      <Description>Hey, I am tourpran. I am a security enthusiast as well as a competitive coder. Will constantly try to improve in the field of binary exploitation and reverse engineering. Right now just chillin in high school and trying to contribute to ARESx at the same time. Sure do love to play chess as much as possible.</Description>
      </Member>
      </a>
      
    </Container>
);

const IMG = styled.img`
  height: 100px;
  width: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Member = styled.div`
  min-height: 500px;
  width: 500px;
  border: 5px solid red;
  border-radius:20px;
  color:red;
  justify-content: space-around;
  float:left;
  margin: 40px;
  @media only screen and (max-width: 700px) {
    width: 300px;
    border: 5px solid red;
    border-radius:20px;
    color:red;
    justify-content: space-around;
    float:left;
    margin: 40px;

  }
  :hover{
    border: 5px solid #800000;
    color: #800000;
    cursor: pointer;
  }
`;

const Container = styled.div`
  
  position: absolute;
  top: 200px;
  width: 100%;
  @media only screen and (max-width: 700px) {
    
  }
`;

const Name = styled.h2`
  align-items: center;
  font-size: 30px;
  color: #af0000;
  text-align: center;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const Description = styled.p`
  margin: 10px 10px 10px 10px;
  display: flex;
  justify-content: space-around;
  font-size: 30px;
  text-align: center;
`;



export default Members;
