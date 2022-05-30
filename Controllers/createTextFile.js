import fs from 'fs'

export const createFile = async (req, res) => {
  const currentDate = new Date()
  const timestamp = currentDate.getTime()
  const date = currentDate.getDate() + '-' + currentDate.getMonth() + '-' + currentDate.getFullYear()

  // to create file
  fs.writeFile(`./Files/${date}-${timestamp}.txt`, `${currentDate}`, (err) => {
    if (err) {
      console.error('Error is occured!!', err)
      res.status(400).json('Check whether folder exists')
    } else {
      console.log('file is Created successfully')
      res.json('New File created!')
    }
  })
}
