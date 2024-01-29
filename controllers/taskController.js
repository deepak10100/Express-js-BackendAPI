import { Task } from "../models/taskModels.js"

export const taskCreate = async (req, res) => {
    let {title,des} = req.body
    let task = await Task.create({title,des,signup:req.signup})
    res.json({
        satus:true,
        message:task
    })
}
export const myTask = async (req, res) => {
    let userId = req.signup._id
    let task = await Task.find({signup:userId})
    res.json({
        satus:true,
        message:task
    })
}
export const updateTask = async (req, res) => {
    let task = await Task.findByIdAndUpdate(req.params.id,req.body)
    res.json({
        satus:true,
        message:task
    })
}
export const deleteTask = async (req, res) => {
    let task = await Task.findByIdAndDelete(req.params.id,req.body)
    res.json({
        satus:true,
        message:task
    })
}