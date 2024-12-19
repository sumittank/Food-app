import React from 'react';
import { useFavorites } from './FavouriteProvider';
import CardOrder from './CardOrder';

function MyOrders() {
    const {order} = useFavorites() 
    return (
        <div>
              {order.map((item)=> <CardOrder  items={item} key={item._id} />)}
              
        </div>
    );
}

export default MyOrders;


