const url = process.env.DATABASE_URL

import {MongoClient} from "mongodb"

export default async function handler(reg, res) {
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  await client.connect()

  const db = client.db("imageFlow")
  const collection = db.collection("users")

  res.status(200).json({msg: "testezin"})
}