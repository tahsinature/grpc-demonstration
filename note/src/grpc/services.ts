// initialize grpc controllers

import { getProtoDescriptor } from '../../../others/util'
import { grpcControllers } from '../controllers'
import { server } from './server'

const noteProtoDescriptor = getProtoDescriptor('Note')

export const startGrpcServices = () => {
  server.addService(noteProtoDescriptor.MasterService.service, {
    GetUserNote: grpcControllers.getUserNotes
  })
}
