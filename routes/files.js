import express from 'express'
import { createFile } from '../Controllers/createTextFile.js'
import { getAllFiles } from '../Controllers/getAllFiles.js'
const router = express.Router()

router.post('/create', createFile)
router.get('/create')
router.get('/retrieve', getAllFiles)

export const filesRouter = router
