import { Carousel } from 'antd';
import { AudioOutlined ,SearchOutlined} from '@ant-design/icons';
import React from 'react';
import { Input } from 'semantic-ui-react';

const Homeslider=()=>{


 
return(

  <div>
<Carousel autoplay>
    <div >
      
      <img className='p1' src="./Images/Untitled Project.jpg"/> 
    </div>
    <div>
      <img className='p1' src="./Images/group1.jpg"/>
    </div>
    <div>
     <img className='p1' src="./Images/group2.jpg"/>
    </div>
   
  </Carousel>
  
  
  </div>
  







);


}
export default Homeslider;