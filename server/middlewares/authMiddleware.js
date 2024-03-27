const jwt = require('jsonwebtoken');

// Middleware de autenticação
const authMiddleware = (req, res, next) => {
  // Verificar se o token JWT está presente nos cookies da solicitação
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: 'Token de autenticação não fornecido' });
  }

  // Verificar o token JWT
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Token de autenticação inválido' });
    }

    // Se o token for válido, decodificamos os detalhes do usuário e os adicionamos ao objeto de solicitação para uso posterior
    req.user = decoded;
    next();
  });
};

module.exports = authMiddleware;
