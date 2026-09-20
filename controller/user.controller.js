const { user } = require('../database/connection')

exports.get_user = async(req,res)=>{

    const data = await user.findAll()


    res.json({
        // message : 'this is user page',
        data
    })
}

exports.post_user = async(req,res)=>{

        const {id,username,email,password} = req.body
    
        await user.create({
            id : id,
            username : username,
            email : email,
            password : password
        })
    
        res.json('user created successfully')
}

exports.get_user_by_id = async(req,res)=>{

    const id = req.params.id
    const data = await user.findByPk(id)

    res.json({
        message : `user ${id} found successfully`,
        data
    })
}

exports.update_user = async(req,res)=>{
    
        const id = req.params.id
    
        const {username,email,password} = req.body
    
        await user.update({
            username : username,
            email : email,
            password : password
        },
        {
            where : {
                id : id
            }
        })
    
        res.json(`user ${id} updated successfully`)
}

exports.delete_user = async(req,res)=>{

        const id = req.params.id
        
        const data = await user.destroy({
            where : {
                id : id
            }
        })
    
        res.json({
            message : `user ${id} is deleted successfully`,
            // data
        })
}