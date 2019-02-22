import { HttpServer } from 'saber-httpserver'

HttpServer({
  port: 2333,
  message: 'server is listening...',
  publicDir: '/',
  Logger: {
    method: true,
    pathname: true
  }
})
