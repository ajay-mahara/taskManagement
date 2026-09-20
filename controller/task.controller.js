const {task} = require('../database/connection')

exports.get_task = async(req,res)=>{

    const data = await task.findAll()

    
    res.json({
        message : 'this is task page',
        data
    })
}

exports.post_task = async(req,res)=>{

    const {title , description , status} = req.body
    
        const data = await task.create({
            title : title,
            description : description,
            status : status
        })
    
    
        res.json({
            message : 'this is task post page',
            data
        })
}

exports.get_task_by_id = async(req,res)=>{

    const id = req.params.id

    const data = await task.findByPk(id)


    res.json({
        message : 'this is task get by id page',
        data
    })
}

exports.update_task = async(req,res)=>{

        const id = req.params.id
    
        const {title , description , status} = req.body
        
        const task_update =await task.update({
            title : title,
            description : description,
            status : status
        },
        {
            where : {
                id : id
            }
        })
    
        res.json(`task ${id} updated successfully`)
}

exports.delete_task = async(req,res)=>{

    const id = req.params.id

    const data = await task.destroy({
        where : {
            id : id
        }
    })

    res.json({
        message : `task ${id} is deleted successfully`,
        // data
    })
}