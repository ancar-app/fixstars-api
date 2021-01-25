/* eslint-disable */
import { AspidaClient } from 'aspida'
import { Methods as Methods0 } from './solve'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://113.43.211.53' : baseURL).replace(/\/$/, '')
  const PATH0 = '/solve'
  const POST = 'POST'

  return {
    solve: {
      post: (option: { body: Methods0['post']['reqBody'], headers: Methods0['post']['reqHeaders'], config?: T }) =>
        fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option).json(),
      $post: (option: { body: Methods0['post']['reqBody'], headers: Methods0['post']['reqHeaders'], config?: T }) =>
        fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
