import React, {useState} from 'react'
import Cardsdata from './CardsData';
import './styles.css';
import {Card, CardTitle, CardBody, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {ADD} from '../redux/actions/action'

function Home() {
    const[menuData, setMenuData] = useState(Cardsdata);

    const dispatch = useDispatch();

    const send = (e)=>{
        dispatch(ADD(e))
    }

  return (
    <>
    <h2 className='text-center m-5'>Menu Details</h2>
    <div className='container mx-auto cards'>
      
      {menuData.map((item)=>{
       return(<>
        <Card  className='card-item'>
            <Link to="/cart"><img src={item.imgdata} width="100%" height="250" /></Link>
            <CardTitle><h4>{item.rname}</h4></CardTitle>
            <CardBody>
              <span>Price: {item.price}</span>
             
            </CardBody>
            <Button color="info" onClick={()=>send(item)}>Add To Cart</Button>
        </Card>
       </>)
      })}
    </div>
    </>
  )
}

export default Home