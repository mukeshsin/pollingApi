import jwt from 'jsonwebtoken';


export const validateJwtToken = async (req, res, next) => {
    const token = req.headers.id;
    if (!token) {
      res.status(401).send({ message: "unauthorised token" });
    }
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) {
        res.status(400).send({ message: "unauthorised token expire" });
      } else {
        next();
      }
    });
  };