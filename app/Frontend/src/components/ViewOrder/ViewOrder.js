import React, { useState } from 'react';
import axios from 'axios';
import '../../style.css';

const ViewOrder = (props) => {
  const [orderDetails, setOrderDetails] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [data, setData] = useState(false);
  // console.log(props.email);
  const fetchOrderDetails = async () => {
    try {
      const response = await axios.get(`/orders/${props.name}/${props.email}/${props.role}`);
      setOrderDetails(response.data);
      // console.log(response.data);
      setData(false);
    } catch (error) {
      if(error){
        setData(true);
        setOrderDetails(0);
      }
    }
  };

  return (
    <div>
      <button onClick={fetchOrderDetails} id="srbt" >Search</button>
      {data && (
        <div id='nf' > <u> {props.name} Order Not Placed  </u> </div>
      )}
      {orderDetails.length>0 && (
        <table id="tb">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Order By</th>
              <th>Pickup Point</th>
              <th>Destination Point</th>
              <th>Order Date</th>
              <th>Delivery Date</th>
              <th>Order Status</th>
              <th>Type of Payment</th>
            </tr>
          </thead>
          <tbody>
            {orderDetails.map((order) => (
              <tr key={order.orderId}>
                <td>{order.orderId}</td>
                <td>{order.orderpersonname}</td>
                <td>{order.pickuppoint}</td>
                <td>{order.destitnationpoint}</td>
                <td>{order.orderdate}</td>
                <td>{order.deliverydate}</td>
                <td>{order.orderstatus}</td>
                <td>{order.typeofpayment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
export default ViewOrder;
