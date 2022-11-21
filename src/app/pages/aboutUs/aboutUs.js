
import React from 'react'
import './aboutUs.css'
import png1 from '../../../assets/job3.jpg'
import Layout from '../../layout/layout'
import Cards from '../../components/card/card'

function aboutUS(props) {
  let data = {
    title: 'About Us',
    description: "Whether you are an early stage startup, or are looking at growth, scaling or transformation; with our unique approach and technical expertise we assure to take your product to the next level.",
    image: png1,
    description2: "Subscribe now",
    isButton1:true,
    isButton2:false,
    btnTitle:'Reviews',
    btnTitle2: 'Search Jobs',
    title_style: {
      fontSize: "50px",
      color: '#fff',
      fontFamily: 'emoji',
      fontWeight: 'bolder',

    },
    description_style: {
      fontSize: "20px",
      color: "white",
      border: "1px solid",
      boxShadow: '10px 5px 5px 5px grey',
      marginTop: "50px",
      padding: "30px",
      borderRadius: "47px"
    },
    description2_style:{
      fontSize: "30px",
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
          Talentica is an American worldwide employment website for job listings launched 
          in November 2004.It is an independent subsidiary of multinational holding Recruit 
          Co.Ltd. It is co-headquartered in Austin, Texas, and Stamford, Connecticut, with 
          additional offices around the world. As a single-topic search engine, it is 
          also an example of vertical search. Talentica is currently available in over 60 
          countries and 28 languages. In October 2010, Indeed.com passed Monster.com to 
          become the highest-traffic job website in the United States.
          The site aggregates job listings from thousands of websites, including job boards,
           staffing firms, associations, and company career pages. They generate revenue by 
           selling premium job posting and resume features to employers and companies hiring
            In 2011, Talentica began allowing job seekers to apply directly to jobs on 
           Talentica's site and offering resume posting and storage.
          </p>
        </Cards>
      </div>
      </Layout>
  );
}

export default aboutUS;