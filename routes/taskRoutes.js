import express from 'express'
import { getTasks, createTasks, getTaskByID, editTaskWithId, deleteTasks } from '../controllers/taskController.js'


const router = express.Router();

router.get('/', getTasks);
router.get('/:id', getTaskByID);
router.put('/:id', editTaskWithId);
router.delete('/:id', deleteTasks);
router.post('/', createTasks);

export default router;