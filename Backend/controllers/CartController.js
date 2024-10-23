import user from '../models/UserModel.js';

// add to cart
const addtocart = async (req, res) => {
  try {
    let userdata = await user.findOne({ _id: req.body.userId });
    let cartData = userdata.cartData;
    if (!cartData[req.body.itemId]) { 
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
    await user.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Added to cart" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Unable to add to cart" });
  }
};

// remove from cart
const removefromcart = async (req, res) => {};

// get cart data
const getcartdata = async (req, res) => {};

export { addtocart, removefromcart, getcartdata };
