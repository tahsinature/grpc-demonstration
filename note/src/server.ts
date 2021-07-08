import Container from './container'
import http from 'http'

class Server {
  constructor(private container: Container) {
    process.on('SIGINT', async () => {
      await container.stop().finally(() => process.exit(1))
    })
  }

  public async run() {
    const port = 4000
    const server = new http.Server(this.container.app).listen(port)

    console.log('\x1b[36m%s\x1b[0m', `🌏 Express server started at http://localhost:${port}`)
  }
}

export = Server
