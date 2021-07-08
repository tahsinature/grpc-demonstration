import grpc from 'grpc'
import { getProtoDescriptor } from '../../../others/util'

const p = getProtoDescriptor('Note')

const grpcClients = {
  noteService: new p.MasterService('0.0.0.0:4001', grpc.credentials.createInsecure())
}

export default grpcClients
