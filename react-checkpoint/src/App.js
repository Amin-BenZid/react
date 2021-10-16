import logo from './logo.svg';
import './App.css';
import img from './img/img_401900.png';
import img1 from './img/img_398183.png';
import img2 from './img/navbar-icon-16.png';
import {Button, Nav, Container, Navbar, Image,Row, Col, className} from 'react-bootstrap';
function App() {
  return (
    <Container fluid  sm ={12} xs ={12} md = {12} lg = {12} className = 'count'>
    <Container fluid className = 'aa'>
    <nav>
      <Row>
    <ul style={{listStyleType : 'none', display : 'flex', marginTop : '1%'}}>
      <Col  sm ={10} xs ={10} md = {8} lg = {8} ><li><h1>Home</h1></li></Col>
      <Col className='input' sm ={2} xs = {2} md ={2} lg = {2}> <li  ><input  type = 'text' placeholder=" username" style = {{width : '80%' , marginTop :'2.9%'}} ></input></li></Col>
      <Col className = 'inputphone'sm ={2} xs={2} md={4} lg={4}><img src ={img2} className = 'img2'></img></Col>
      <Col className='input'  sm ={2} xs = {2} md = {2} lg = {2}><li > <input  type = 'password' placeholder=' password' style = {{width : '80%', marginTop :'2.9%'}}></input> </li></Col>
      
    </ul>
    </Row>
  </nav>
  </Container>
<Row >
<Col sm ={10} xs ={10} md = {8} lg = {8} > <Col style = {{backgroundColor:'lightgray', height :'500px'}}><section  className = 'sec1' > sec</section> </Col></Col>
<Col sm ={2} xs={2} md={4} lg={4} > <Col style = {{backgroundColor:'lightgray', height :'500px'}}><aside className = 'aside1'> aside </aside> </Col></Col>
</Row>
<Container fluid className = 'count1'>
  <Row>
<Col sm ={12} xs = {12} md = {3} lg ={3}> <Col  style ={{ backgroundColor: 'lightgray', height :'500px', }}> <div> box1</div></Col> </Col> 
<Col sm ={12} xs = {12} md = {3} lg ={3}> <Col  style ={{ backgroundColor: 'lightgray', height :'500px', }}> <div> box2</div></Col> </Col> 
<Col sm ={12} xs = {12} md = {3} lg ={3}> <Col  style ={{ backgroundColor: 'lightgray', height :'500px', }}> <div> box3</div></Col> </Col> 
<Col sm ={12} xs = {12} md = {3} lg ={3}> <Col  style ={{ backgroundColor: 'lightgray', height :'500px', }}> <div> box4</div></Col> </Col> 
   </Row>
</Container>
<Container fluid className = 'count2'>
    <Row>
      <Col sm = {12} xs = {12} md = {3} lg = {3} > <Col style = {{backgroundColor : 'lightgray'}} className = 'seccc'> <div>aside</div> </Col> </Col>
      <Col sm = {12} xs = {12} md = {9} lg = {9} > <Col style = {{backgroundColor : 'lightgray'}} className = 'secc'> <div>sec</div> </Col> </Col>

    </Row>
</Container>
<Container fluid className = 'foo'>
  <Row>
    <Col style = {{backgroundColor:'lightgray '}}> <footer style = {{height:'134px'}}> footer </footer> </Col>
  </Row>
</Container>



  </Container>
  
  );}

export default App;
