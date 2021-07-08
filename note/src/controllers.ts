export const httpControllers = {}
export const grpcControllers = {
  getUserNotes(call: any, cb: any) {
    const allData = require('../db.json')
    const { user_id } = call.request
    const userData = allData.find((ele: any) => ele.user === user_id)

    cb(null, { notes: userData?.notes })
  }
}
