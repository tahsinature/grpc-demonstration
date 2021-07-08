// initialize grpc controllers
import { getProtoDescriptor } from '../../../others/util'
import { grpcControllers } from '../controllers'
import { server } from './server'

const masterProtoDescriptor = getProtoDescriptor('Master')

export const startGrpcServices = () => {
  server.addService(masterProtoDescriptor.AllService.service, {
    GetTest: grpcControllers.sendTestResponse
  })
}
