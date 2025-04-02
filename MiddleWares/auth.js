const jwt= require("jsonwebtoken");

const createToken=(req,res,next)=>{
    let payload = { ...req.body};
    let token = jwt.sign(payload, process.env.PASSWORD)
    req.token = token
    console.log(token)
    next()
}
//////////////////
const verifyToken=(req,res,next)=>{
    let token = req.headers["authorization"]
    if(token){
        jwt.verify(token, process.env.PASSWORD, (err, decoded)=>{
            if(err){
                res.status(401).send("Unauthorized")
            }else{
                req.user = decoded
                next()
            }
        })
    }else{
        res.status(401).send("Unauthorized")
    }
}
/////////////////////
const verifyTokenForManager=(req,res,next)=>{
    let token = req.headers["authorization"]
    if(token){
        jwt.verify(token, process.env.PASSWORD, (err, decoded)=>{
            if(err){
                res.status(401).send("Unauthorized")
            }else{
                if(decoded.role==="manager"){
                    req.user = decoded
                    next()
                }else{
                    res.status(401).send("Unauthorized")
                }
            }
        })
    }else{
        res.status(401).send("Unauthorized")
    }
}

module.exports={
    createToken
}
