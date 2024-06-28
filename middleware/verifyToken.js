var jwt = require('jsonwebtoken');

module.exports = {
    authToken: async (req, res, next) => {
      let token = req.header('Authorization');
      if (!token) return res.status(401).json({ message: 'No authorization found' })
      token = token.split(' ');
      jwt.verify(token[1], config.api.jwtSecret, function (err, tokendata) {
        if (err) {
          return res.status(400).json({ message: ' Unauthorized request' });
        }
        else {
          req.user = tokendata;
          return next();
        }
      })
  
    },
}
