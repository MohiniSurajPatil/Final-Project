import Card from 'react-bootstrap/Card';
import '../Css/RegisterCard.css';

const BusinessRegisterCard=({ContactPerson,RNumber1,RNumber2,Email,state,Dis,Tal, City, Area,Pincode,
    Address,Landmark,Bus,UserBus,web1,web2,img })=>{








return(
  <div style={{marginLeft:'38rem'}}>
    <div className='bregister'>
 <Card style={{ width: '60rem',backgroundColor:'white' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        
        <Card.Title className='title'><b>Type of Business: {Bus}</b></Card.Title>
        
        <Card.Title className='contacttitle'><b>Contact Person: </b>{ContactPerson}</Card.Title>
        <Card.Text className='address'>
        <b>Address: </b>{Address} {Area},
         Dis:{Dis},Tal:{Tal}, city:{City},
        Pincode:{Pincode},
        Landmark:{Landmark},{state}.
        </Card.Text>
        <Card.Text>
          <p><b>Contact Number: </b>{RNumber1} / {RNumber2}</p>
          <p><b>Email: </b>{Email}</p>
          <p><b>Product: </b>{UserBus}</p>
        </Card.Text>
      </Card.Body>
      
      <Card.Text >
        <Card.Link href="#"className='clink'><b>link1: </b>{web1}</Card.Link>
        <p>
        <Card.Link href="#"className='clink'><b>link2: </b>{web2}</Card.Link></p>
      </Card.Text>
    </Card>
    </div>
    </div>
);




}
export default BusinessRegisterCard;