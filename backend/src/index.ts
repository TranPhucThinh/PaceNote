import express, { type Express, type Request, type Response } from 'express'

const app: Express = express()
const port = 3000

app.get('/health', (req: Request, res: Response) => {
  res.status(200).send('OK')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
