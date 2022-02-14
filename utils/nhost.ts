import { NhostClient } from '@nhost/nhost-js'
import { BACKEND_URL } from './config'
const nhost = new NhostClient({
  backendUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:1337' : BACKEND_URL,
})

export { nhost }
