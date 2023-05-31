const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  console.log('protected called');
  const token = req.headers.authorization;
 console.log('here is token',token);
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const tokenWithoutBearer = token.replace('Bearer ', '');
    const decoded = jwt.verify(tokenWithoutBearer, 'Pankaj');
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token.' });
  }
};

module.exports = protect;
