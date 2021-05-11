import axios from 'axios'

const instance = axios.create({ baseURL: 'http://localhost:4000/api/guess' })

const startGame = async () => {
  try {
    const {
      data: { msg }
    } = await instance.post('/start')
    const str = ''
    return str
  } catch (error) {
    // console.log(error)
    const str = 'Server is not responding or not connected.'
    return str
  }
}

const guess = async (number) => {
 
  // TODO: Change this to catch error
  // The error message should be: Error: "xx" is not a valid number (1 - 100)
  try {
    const {
      data: { msg }
    } = await instance.get('/guess', { params: { number } })
    return msg
  } catch (error) {
    if (!error.response) {
      const str = 'Server is not responding or not connected.'
      return str
    } else {
      const msg = error.response.data.msg
      return msg
    }
  }

  
}

const restart = async () => {
  const {
    data: { msg }
  } = await instance.post('/restart')

  return msg
}

export { startGame, guess, restart }
