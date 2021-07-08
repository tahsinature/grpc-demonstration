import grpc from 'grpc'

export const server = new grpc.Server()

export const kickGrpcServer = () => {
  const port = '4001'
  const host = '0.0.0.0'

  server.bind(`${host}:${port}`, grpc.ServerCredentials.createInsecure())

  server.start()
  console.log(`grpc running at port: ${port}`)
}
