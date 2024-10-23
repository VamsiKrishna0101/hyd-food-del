import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
  const {token} = req.headers

  // Extract the token from the "Bearer <token>" format

  if (!token) {
    return res.status(401).json({ success: false, message: '' });
  }

  try {
    const decoded_token = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = decoded_token.userId;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, message: 'Invalid login' });
  }
};

export default authMiddleware;
