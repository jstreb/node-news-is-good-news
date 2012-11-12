var port = process.env.PORT || 3000;

module.exports = {
  development: {
    port: port,
    mongodb: {
      host: 'localhost',
      port:  27017,
      database: 'furious-mountain'
    }
  },
  test: {
    port: port,
    mongodb: {
      host: 'localhost',
      port: 27017,
      database: 'furious-mountin-test'
    }
  }
};