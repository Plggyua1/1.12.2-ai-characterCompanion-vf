'use strict'

const http = require('http')
const crypto = require('crypto')
const WebSocket = require('ws')
const systemLog = require('../diagnostics/systemLogger')
const { collectStatus } = require('./statusSnapshot')

const ACCESS_KEY = crypto.randomBytes(16).toString('hex')

function startStatusServer (supervisor, port = 8787) {
  systemLog.info(`STATUS DASHBOARD ACCESS KEY: ${ACCESS_KEY}`)

  const server = http.createServer()
  const wss = new WebSocket.Server({ server })

  wss.on('connection', (ws, req) => {
    const url = new URL(req.url, `http://${req.headers.host}`)
    const key = url.searchParams.get('key')
    const admin = url.searchParams.get('admin')

    if (key !== ACCESS_KEY && !admin) {
      ws.close()
      return
    }

    systemLog.info('Dashboard client connected')

    const send = () => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify(collectStatus(supervisor)))
      }
    }

    send()
    const interval = setInterval(send, 1000)

    ws.on('close', () => clearInterval(interval))
  })

  server.listen(port, () => {
    systemLog.info(`Live status server running on :${port}`)
  })
}

module.exports = {
  startStatusServer
}
