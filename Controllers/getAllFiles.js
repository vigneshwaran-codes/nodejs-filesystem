import fs from 'fs'

export const getAllFiles = async (req, res) => {
  const files = fs.readdirSync('./Files')
  console.log(files)
  res.status(200).json(files)
}
