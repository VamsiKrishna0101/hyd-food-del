import User from "../models/UserModel.js"; // Corrected 'user' to 'User' and added .js extension
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const exists = await User.findOne({ email }); // Added 'await'
    if (exists) {
      return res.json({ success: false, message: "User Already Exists" });
    }
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Enter Valid Email" });
    }
    if (password.length < 8) {
      return res.json({ success: false, message: "Enter a strong password" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    const user1 = await newUser.save();
    const token = createToken(user1._id);
    return res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Login user function (to be implemented)
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export { loginUser, registerUser };
