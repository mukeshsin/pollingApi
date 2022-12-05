import Role from "../models/role.js";

export const createRole=async(req,res)=>{
    try{
        await Role.create(req.body);
        res.status(200).send({message:"role created successfully"})

    }catch(error){
        console.log(error);
        res.status(500).send({message:"500 error to the user"})

    }
};