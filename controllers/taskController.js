import Task from "../models/Task.js";

export const getTasks = async(req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
};

export const createTasks = async (req, res) => {
    try {
        const { title, description, isCompleted } = req.body;
        const newTask = new Task({ title, description, isCompleted });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
};

// TODO:get task by id
export async function getTaskByID(req, res){
    const taskId = req.params.id;
    try {
        const task = await Task.findById(taskId);
        if (!task){
            return res.status(404).json({error: "User not found"})
        }
        res.json(task);
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

// TODO:send a put request
export async function editTaskWithId(req, res){
    const taskId = req.params.id;
    try {
        const resultTask = await Task.replaceOne({_id: taskId}, req.body);
        res.json({updatedTask: resultTask.modifiedCount})
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}

// TODO:send a delete request
export async function deleteTasks(req, res){
    const taskId = req.params.id;
    try {
        const deleteTask = await Task.deleteOne({_id: taskId});
        res.json({deletedTask: deleteTask.deletedCount});
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}