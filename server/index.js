'use strict'
const path = require('path')
const fs = require('fs')
const consola = require('consola')
const express = require('express')
const mysql = require('mysql')

process.env.NODE_CONFIG_DIR = path.join(__dirname, 'config/')
let pool = null

if (process.env.NODE_ENV === 'production') {
  pool = mysql.createPool({
    user: 'portfolio',
    password: process.env.DB_PASS,
    database: 'justinforlenza',
    socketPath: '/cloudsql/justinforlenza:us-east1:silvanus'
  })
} else {
  pool = mysql.createPool({
    user: 'portfolio',
    password: process.env.DB_PASS,
    database: 'justinforlenza',
    host: '127.0.0.1',
    port: '3306'
  })
}

async function start () {
  const app = express()

  app.get('/api/projects', async (req, res) => {
    await pool.query('CALL get_projects', (error, results) => {
      if (error) { res.status(500).send(error) } else { res.send(results[0]) }
    })
  })

  app.get('/resume', (req, res) => {
    const file = fs.readFileSync('./server/assets/resume.pdf')
    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', 'filename=Justin Forlenza Resume.pdf')
    res.send(file)
  })

  const { Nuxt, Builder } = require('nuxt')

  // Setup nuxt.js
  const config = require('../nuxt.config.js')
  config.rootDir = path.resolve(__dirname, '..')
  config.dev = process.env.NODE_ENV !== 'production'

  const nuxt = new Nuxt(config)
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use(nuxt.render)

  const { host, port } = nuxt.options.server

  app.listen(port)

  consola.ready({
    message: `Feathers application started on ${host}:${port}`,
    badge: true
  })
}

start()
