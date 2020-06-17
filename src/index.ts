import 'reflect-metadata'
import { createConnection } from 'typeorm'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as helmet from 'helmet'
import * as cors from 'cors'
import routes from './routes'

const port = process.env.PORT || 3000

// Connects to the Database -> then starts express
createConnection()
  .then(async (connection) => {
    // create express app instance
    const app = express()

    // Call middlewares
    app.use(cors())
    app.use(helmet())
    app.use(bodyParser.json())

    // Set all routes form routes folder
    app.use('/', routes)

    // start express server
    app.listen(port, () => console.log(`Server started on port ${port}!`))
  })
  .catch((error) => console.log(error))
