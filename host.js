const http = require('http')
const page = require('./.next/serverless/pages/[name].js')

const server = new http.Server((req, res) => page.render(req, res))

console.log("Starting ...")
server.listen(3000, () => console.log('Listening on http://localhost:3000'))