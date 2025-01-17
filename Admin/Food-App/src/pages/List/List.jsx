import React, { useEffect, useState } from 'react';
import './List.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = () => {
  const url = 'http://localhost:4000';
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      console.log(response.data);

      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error('Error fetching data');
      }
    } catch (error) {
      toast.error('Error fetching data');
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const removeItem = async (itemid) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, { id: itemid });
      await fetchList();
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Error removing item');
    }
  };

  return (
    <div className='list-add flex-col'>
      <p className='title'>All Foods List</p>
      <div className='list-table'>
        <div className='list-table-format'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => (
          <div key={index} className='list-table-format'>
            <img src={`${url}/images/${item.image}`} alt='' />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{item.price}</p>
            <p className='remove-btn' onClick={() => removeItem(item._id)}>
              X
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
