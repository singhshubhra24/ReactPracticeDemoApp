import 'bootstrap/dist/css/bootstrap.min.css';

import { Alert,Navbar,Container,NavDropdown,Nav } from "react-bootstrap"
import {Button} from "react-bootstrap"
function BootstrapDemoExam() {
  return (
     <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     {/*  */}
      <h1>Add Bootstrap in React js </h1>
     
      <Alert variant="success" >Hello, BT installed</Alert>

      <Button onClick={()=>alert("Bootstrap Button")}  variant="danger">Bootstrap Button</Button>
      <Button variant="success">Ok</Button>
      <Button variant="warning">Ok</Button>
      <button  onClick={()=>alert("Simple Button")} >Simple Button</button>
    </>
    // <Container>    
    //     <div className="row">
    //         <div className="col-md-4">
    //             <div className="card">
    //                 <img src="https://via.placeholder.com/150" className="card-img-top" alt="Sample Image"/>
    //                 <div className="card-body">
    //                     <h3>Add Bootstrap-React in this component</h3>    
    //                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //                     <Button>Go somewhere</Button>
    //                     <Alert variant="danger">BT installed successfully</Alert>
    //                     <Button variant ="danger">Maths</Button>
    //                     <Button variant ="success">Physics</Button>
    //                     <Button variant ="warning">Chemistry</Button>


    //                 </div>  
    //             </div>
    //         </div>
    //     </div>
    // </Container>
  )
}   
export default BootstrapDemoExam;