import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';



import '../css/Upperheader.css'; 
const Upperheader = () => {

  
  return (
    

    <Navbar bg="light-white" variant="light" className="py-2">
      <Container>
     
        <div className="running-text">
          <span>We are providing the best services</span>
        </div>
      </Container>
    </Navbar>


  )
}

export default Upperheader