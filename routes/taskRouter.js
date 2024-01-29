import expres from 'express'
import { isAuth } from '../middlewares/auth.js'
import { deleteTask, myTask, taskCreate, updateTask } from '../controllers/taskController.js'
const router = expres.Router()


router.post('/task/create', isAuth ,taskCreate )
router.get('/task/mytask', isAuth , myTask )
router.put('/task/:id', isAuth , updateTask )
router.delete('/task/:id', isAuth , deleteTask )

export default router