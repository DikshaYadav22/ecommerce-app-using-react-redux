import React from 'react'
import './styles.css'
import {Table } from 'reactstrap';

function CardDetails() {
  return (
    <>
    <h3 className='text-center m-5 p-2'>Items Details Page</h3>
    <div className="container mx-auto main-detail">
        <div>
          <img src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp" width="300"/>
        </div>
        <Table>
          <thead>
            <tr>
              <th>Restaurant: </th>
            </tr>
            <tr>
              <th>Price: </th>
              <th>Rating: </th>
            </tr>
            <tr>
              <th>Dishes: </th>
          
              <th>Order Review</th>
              </tr>

              <tr>
              <th>Total</th>
              <th>Remove: </th>
            </tr>
            <tr>
              Quantity
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </Table>
    </div>
    </>
  )
}

export default CardDetails