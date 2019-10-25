import axios from 'axios'

const Base_URL = '/api'


function createBaseIntance () {
  const instance = axios.create({
    baseURL: Base_URL
  })

  //返回拦截
  instance.interceptors.response.use(handleResponse, handleError)

  return instance
}


function handleResponse (response) {
  console.log('response :', response);
  return response
}

function handleError (err) {
  return Promise.reject(err)
}

export const request = createBaseIntance()