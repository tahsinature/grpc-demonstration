import { Router } from 'express'
const router = Router()
import { httpControllers } from './controllers'

const healthRoutes = Router()
healthRoutes.get('/', httpControllers.healthCheck)

const noteRoutes = Router()
noteRoutes.get('/:userId', httpControllers.fetchNotes)

router.use('/health', healthRoutes)
router.use('/notes', noteRoutes)

export default router
