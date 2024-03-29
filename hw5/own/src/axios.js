import axios from 'axios'

const instance = axios.create({ baseURL: 'http://localhost:4000/api/guess' })

const startGame = async () => {
  const {
    data: { msg }
  } = await instance.post('/start')

  return msg
}

const guess = async (number) => {
  // TODO: Change this to catch error
  // The error message should be: Error: "xx" is not a valid number (1 - 100)
  // const {
  //   data: { msg }
  // } = await instance.get('/guess', { params: { number } })
  let msg;
  try {
    msg = await (await instance.get('/guess', { params: { number } })).data.msg;
    if (msg === 'Not a legal number.') {
      msg = `Error: "${number}" is not a valid number (1 - 100)`;
    }
  } catch (error) {
    msg = "Server is not responding or not connected.";
  }

  return msg
}

const restart = async () => {
  const {
    data: { msg }
  } = await instance.post('/restart')

  return msg
}

export { startGame, guess, restart }
