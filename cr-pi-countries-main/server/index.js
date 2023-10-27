const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;
const dbFill = require("./src/controllers/dbFill")
const { Country } = require("./src/db")

conn.sync().then(() => {
server.listen(PORT, async () => {
  console.log(`Server listening on port ${PORT}`);
  const count = await Country.count()
  if(count === 0){
    await dbFill()
  }
})
}).catch(error => console.error(error))
