import { grpcClient } from './client'
import axios from 'axios'

const callGRPC = () => {
  return new Promise((resolve, reject) => {
    grpcClient.masterService.all({}, (err: any, res: any) => {
      if (err) return reject(err)
      resolve(res)
    })
  })
}

const callHTTP = async () => {
  return (await axios.get('http://localhost:3000/health')).data
}

const benchmark = async () => {
  console.time('test')
  const data = []
  for (const i of Array(100)) {
    const d = await callHTTP() // enable if wanna test with http call
    // const d = await callGRPC() // enable if wanna test with grpc call

    data.push(d)
  }
  console.timeEnd('test')
  console.log(data.length)
}

benchmark()
