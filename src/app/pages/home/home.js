
import React from 'react'
import './home.css'
import png1 from '../../../assets/job1.jpg'
import Accordion from 'react-bootstrap/Accordion';
import Layout from '../../layout/layout'
import Cards from '../../components/card/card'

function home(props) {
  let data = {
    title: 'Talentica',
    description: "Whether you are an early stage startup, or are looking at growth, scaling or transformation; with our unique approach and technical expertise we assure to take your product to the next level.",
    image: png1,
    description2: "Live the dream",
    isButton1:true,
    isButton2:true,
    btnTitle:'Add Profile',
    btnTitle2: 'Search Jobs',
    title_style: {
      fontSize: "110px",
      color: '#fff',
      fontFamily: 'emoji',
      fontWeight: 'bolder',
      textAlign: 'center'

    },
    description_style: {
      fontSize: "30px",
      color: "white",
      border: "1px solid",
      boxShadow: '10px 5px 5px 5px grey',
      marginTop: "50px",
      padding: "23px",
      borderRadius: "47px"
    },
    description2_style:{
      fontSize: "50px",
      color: '#fff',
      fontFamily: 'emoji',
      fontWeight: 'bolder',
      textAlign: 'center',
      marginTop: "50px"
    },
    button_style:{
      margin:'10px',
      textAlign:'center'

    }
  }


  return (
    <Layout userName={props.userName}>
      <div className='card'>
        <Cards data={data} isImageCard={true} >
          <p>
            Whether you are an early stage startup, or are looking at growth, scaling or
            transformation; with our unique approach and technical expertise we assure to
            take your product to the next level.
            Whether you are an early stage startup, or are looking at growth, scaling or
            transformation; with our unique approach and technical expertise we assure to
            take your product to the next level.
          </p>
        </Cards>
      </div>
      <div className='accord'>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

      </div>
    </Layout>
  );
}

export default home;