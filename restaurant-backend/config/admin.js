module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4740f87590a4add04eb5889b5df2193d'),
  },
});
