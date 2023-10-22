import React from 'react';


import { Card, Icon, Image } from 'semantic-ui-react'

const Homecard=({image,heading,Description,range})=>{

return(
    <div style={{marginRight:'3rem'}}>
     
<div className='Homecard'>
  
<Card>
    <Image className='img' src={image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{heading}</Card.Header>
      <Card.Description>
      {Description}
      </Card.Description>
    
    </Card.Content>
  </Card>
  </div>
</div>
 

   
);


}
export default Homecard;