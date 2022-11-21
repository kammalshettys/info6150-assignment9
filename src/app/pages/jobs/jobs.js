import React, { useState} from 'react';
import Card from '../../components/card/card'
import  AI_JOB from '../../../assets/AI_JOB.png'
import  FULLSTACK from '../../../assets/Full-Stack-Developer.webp'
import  DATAENGINEER from '../../../assets/data-analystic.jpeg'
import  DEVOPS from '../../../assets/DEVOPS.webp'
import  Frontend from '../../../assets/frontendDev.jpeg'
import Fireman from '../../../assets/fireman2.jpeg'
import  Teacher from '../../../assets/teachingAssistant.jpeg'


import './jobs.css'
import Container from 'react-bootstrap/Container';
import Layout from '../../layout/layout'


export default function Jobs(props) {
  const [jobList] = useState([
    {
      title:'Artificial Intellingent',
      description:'Experience in python and Machine learning',
      image:AI_JOB,
      isButton:true,
      btnName:'Apply',
      isList:false
    },
    {
      title:'Full Stack Developer',
      description:'Experience in Java, Javascript, SQL',
      image:FULLSTACK,
      isButton:true,
      btnName:'Apply',
      isList:false

    },
    {
      title:'Data-Engineer',
      description:'Experience in SQL, Migrating Data, Design',
      image:DATAENGINEER,
      isButton:true,
      btnName:'Apply',
      isList:false

    },
    {
      title:'Devops',
      description:'Experience in github, jenkins and builds',
      image:DEVOPS,
      isButton:true,
      btnName:'Apply',
      isList:false

    },
    {
      title:'Frontend Developer',
      description:'Experience in Javascript, React, css',
      image:Frontend,
      isButton:true,
      btnName:'Apply',
      isList:false

    },
    {
      title:'Fireman',
      description:'Experience in climbing, fire extinguiser and driving',
      image:Fireman,
      isButton:true,
      btnName:'Apply',
      isList:false

    },
    {
      title:'Teaching Assistant',
      description:'Experience in computer science and good communication',
      image:Teacher,
      isButton:true,
      btnName:'Apply',
      isList:false

    }

]);
let cards=jobList.map((e,i)=>{
 return ( <li key={"index"+i}>
   <Card title={e.title} description={e.description} image={e.image} isSmallCard={true} isList={e.isList} btnName={e.btnName}
    isButton={e.isButton} ></Card>     
  </li>)
});
  return (
    <Layout userName={props.userName}>
      <Container>
        <div className='jobs'>
          <ul>
                {cards}
          </ul>
        </div>
    </Container>
    </Layout>

   )
}
