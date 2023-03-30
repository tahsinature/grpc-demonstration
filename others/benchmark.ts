import axios from 'axios'

import { grpcClient } from './client'
import { askMultiInput, askNumber } from './prompt'

const callGRPC = () => {
  return new Promise((resolve, reject) => {
    grpcClient.masterService.all.GetTest({}, (err: any, res: any) => {
      if (err) return reject(err)
      resolve(res)
    })
  })
}

const callHTTP = async () => {
  return (await axios.get('http://localhost:3000/health')).data
}

const benchmark = async () => {
  const { operation } = await askMultiInput(
    [
      { title: 'gRPC', value: 'gRPC' },
      { title: 'HTTP', value: 'HTTP' }
    ],
    { message: 'What type of call you wanna make?' }
  )

  const { number: numberOfCall } = await askNumber('How many call you wanna make?')

  console.time('test')
  const allData: any[] = []

  for (let i = 0; i < numberOfCall; i++) {
    let data: any
    if (operation === 'gRPC') data = await callGRPC()
    else if (operation === 'HTTP') data = await callHTTP()
    else throw new Error('Invalid operation')

    allData.push(data)
  }

  console.timeEnd('test')
  console.log(allData.length)
}

benchmark()
