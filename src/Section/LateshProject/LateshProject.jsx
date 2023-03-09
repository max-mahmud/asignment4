import  GalleryData  from "../../Component/ProjectData/GalleryData";
import { useEffect, useState } from "react";
import './LateshProject.css'
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const LateshProject = () => {
    const [data,setData] = useState([]);
    const [collection,setCollection] = useState([]);
  
    useEffect(()=>{
      setData(GalleryData);
      setCollection([... new Set(GalleryData.map((item)=> item.title))])
    },[]) 
  
    const gallery_filter = (itemData) =>{
      const filterData = GalleryData.filter((item)=> item.title == itemData);
      setData(filterData);
    }
  return (
    <>
      <section className="latesh_project">
        <div className="container">
            <div className="latesh_text">
                <h2>Latesh Project</h2>
                <p>See our latesh Project, Whice we have done successfully</p>
            </div>
            <div className="latesh_card">
            <Button onClick={()=> setData(GalleryData)}>All</Button>
                <Button onClick={()=> gallery_filter('app')} >App</Button>
                <Button onClick={()=> gallery_filter('card')} >Card</Button>
                <Button onClick={()=> gallery_filter('design')} >Design</Button>
            </div>
            <Row>
        {
            data.map((item)=> 
                <Col lg={3} md={6} className="gallary-img" key={item.id} as={Link} to="/service">
                <div  className="galleryItem">
                <img src={item.image  } />
                </div> 
                </Col>
                )
          }
            </Row>
        </div>
      </section>
    </>
  )
}

export default LateshProject
