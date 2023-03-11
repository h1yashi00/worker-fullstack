import AppRoute from './index'

import { AppType } from '.'
import { hc } from 'hono/client'

const client = hc<AppType>('http://0.0.0.0:8787')

test('/hello get request', async() => {
  const res = await client.hello.$get({
    query: {
      name: "Narikake"
    }
  })
  expect(await res.json()).toEqual({"message": "Hello! Narikake"})
})