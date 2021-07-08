import axios from 'axios'

/**
 * 1. it will call master service with the userId
 * 2. then master service will call note service
 * 3. note service will fetch data by given payload from master service
 * 4. master service will recieve the data from note service
 * 5. then client will get the response from master service
 *
 * - try to change the userId
 */
const test1 = async () => {
  const userId = 'a'
  const { data } = await axios.get(`http://0.0.0.0:3000/notes/${userId}`)
  console.log(data)
}

test1()
