const config = {
  port: parseInt(process.env.PORT, 10) || 3000,
  jwt: process.env.JWT_SECRECT,
  //database: {
  //  host: process.env.DATABASE_HOST,
  //  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  //},
};

export default config;
