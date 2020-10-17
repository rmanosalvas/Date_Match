require('dotenv').config()

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    // api keys
    GOOGLE_PLACES_API: process.env.GOOGLE_PLACES_API
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    // api keys
    GOOGLE_PLACES_API: process.env.GOOGLE_PLACES_API    
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    // api keys
    GOOGLE_PLACES_API: process.env.GOOGLE_PLACES_API
  }
}