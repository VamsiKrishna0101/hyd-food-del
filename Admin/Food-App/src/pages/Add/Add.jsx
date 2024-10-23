import React, { useState } from 'react';
import './Add.css';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "Salad",
    price: "",
  });

  const url = "http://localhost:4000";

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", Number(data.price));
    formData.append("image", image);

    try {
      const response = await axios.post(`${url}/api/food/add`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.data.success) {
        setData({
          name: "",
          description: "",
          category: "Salad",
          price: "",
        });
        setImage(null);
        toast.success(response.data.message)
      }
    } catch (error) {
      toast.error(response.data.message)
    }
  };

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img flex-col">
          <p>Upload Image</p>
          <label htmlFor='image'>
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="upload area" />
          </label>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} id='image' hidden required />
        </div>
        <div className="add-prod-name flex-col">
          <p>Product Name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Enter Name' required />
        </div>
        <div className="add-prod-descr flex-col">
          <p>Product Description</p>
          <textarea name="description" onChange={onChangeHandler} value={data.description} rows="6" placeholder='Enter Description' required></textarea>
        </div>
        <div className='Hello'>
          <div className="add-category flex-col">
            <p>Select Category</p>
            <select onChange={onChangeHandler} value={data.category} name="category" required>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Enter Price</p>
            <input type="number" onChange={onChangeHandler} value={data.price} name='price' placeholder='$20' required />
          </div>
        </div>
        <button className='form-btn' type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Add;
