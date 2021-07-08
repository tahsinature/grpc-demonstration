import path from 'path'
import grpc from 'grpc'
import * as protoLoader from '@grpc/proto-loader'
const PROTO_PATH = path.join(__dirname, '..', 'proto', 'all.proto')
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  enums: String,
  keepCase: true
})

export const getProtoDescriptor = (serviceName: string) => {
  const all = grpc.loadPackageDefinition(packageDefinition) as any
  return all[serviceName]
}

const noteProto = getProtoDescriptor('Note')
const masterProto = getProtoDescriptor('Master')

export const grpcClient = {
  masterService: {
    all: new masterProto.AllService('0.0.0.0:3001', grpc.credentials.createInsecure())
  },
  noteService: {
    master: new noteProto.MasterService('0.0.0.0:4001', grpc.credentials.createInsecure())
  }
}
