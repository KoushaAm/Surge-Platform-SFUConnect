const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/hello', { target: 'http://localhost:4000', changeOrigin: true }),
  );
};