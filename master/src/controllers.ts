import { Request, Response } from 'express'
import grpcClients from './grpc/client'
import service from './service'

export const httpControllers = {
  healthCheck: (req: Request, res: Response) => {
    const data = service.checkHealth()
    res.json(data)
  },

  fetchNotes: (req: Request, res: Response) => {
    const { userId } = req.params
    grpcClients.noteService.GetUserNote({ user_id: userId }, (err: any, r: ' any') => {
      res.json(r)
    })
  }
}

export const grpcControllers = {
  sendTestResponse(call: any, cb: any) {
    cb(null, { success: true })
  }
}
