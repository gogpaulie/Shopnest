import jtw from 'jsonwebtoken';

const generateToken = (id) => {
  return jtw.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

export default generateToken;
