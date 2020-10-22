import React from 'react';
import styled from 'styled-components';
import {
  ScrollingProvider,
  useScrollSection,
  Section,
} from 'react-scroll-section';

const Members = () => (
  <Container>
      <Name>MillenniumX</Name>
      <Description>Greetings! You can call me MillenniumX, and I'm a high school student. I do bug bounty hunting, iOS development, astronomy and writing (mainly plays and poetry). I'm currently into web exploitation, but starting to learn a little about reverse engineering. I love CTFs due to their competitive yet friendly spirit, and in my free time you can find me listening to NF, Witt Lowry and Vaboh!</Description>
      
      <Name>R3N4SCITUR</Name>
      <Description>I'm R3N4SCITUR and I'm here to learn from like minded people and have fun doing it. I have always been passionate about technology. I'm obtaining a BA in IT w/emphasis on cyber security. I enjoy CTFs because they are an almost impossible puzzle at first but as you take the time to break them down, you realize there is a solution.</Description>
      
      <Name>noobs3c</Name>
      <Description>My name is Sofiane (aka noobs3c) and I'm a 19 year old French/Morrocan security researcher and bug hunter who lives in France. Currently, I'm a first year student in IT engineering and I hope to work in cybersecurity in the future! I'm practicing really frequently and really hard by playing multiple CTFs. I love to share resources with others!</Description>

      <Name>blu3drag0nsec</Name>
      <Description>I'm blu3drag0nsec a Portuguese CTF player, I hold a MSc in Computer Science and I'm an SAP Certified Developer currently working as SAP Architect (I'm in the 35-40 age  group). I'm a security enthusiast and self learner without any security training or certifications - I just get a lot of fun out of participating and learning as I go on the CTFs.</Description>

      <Name>Xiahou</Name>
      <Description>Hey! I'm Xiahou, a high school student who picked up cybersecurity as an interest and intend to make a life out of in the future. I consider myself a jack of all trades but master of none when it comes to challenges, and strive to become better quickly.</Description>
    </Container>
);

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

const Name = styled.h2`
  font-size: 30px;
  color: #af0000;
  text-justify: inter-word;
`;

const Description = styled.p`
  font-size: 20px;
`;

const Line = styled.hr`
  border: 1px solid #af0000;
`;


export default Members;