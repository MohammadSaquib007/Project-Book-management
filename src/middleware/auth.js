const jwt = require("jsonwebtoken")
const bookModel = require("../models/bookModel")
//const{isValidObjectId}=require('mongoose')

const authentication = function (req, res, next) {
    try {
        let token = req.headers["x-api-key"];
        if (!token) return res.status(401).send({ status: false, msg: " token must be present for authentication " })

        jwt.verify(token, "secret", function (err, decodedToken) {
            if (err) {
                return res.status(400).send({ status: false, msg: "token invalid" });
            } 
        
                req.decodedToken = decodedToken
                next() 
        })
    } catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}


//============================Authorization====================================
const authorization = async (req, res, next) => {
    try {
        
            let token = req.headers["x-api-key"];
            let decodedtoken = jwt.verify(token, "secret")
    
            let bookId = req.params.bookId
            if (bookId) {
    
                let checkUserId = await bookModel.find({ _id: bookId }).select({ userId: 1, _id: 0 })
                let userId = checkUserId.map(x => x.userId)  // this is the userId of the book to be updated
    
                let id = decodedtoken.userId
                if (id != userId) return res.status(403).send({ status: false, msg: "You are not authorised to perform this task" })
            }
            else {
                bookId = req.body.userId
                let id = decodedtoken.userId
                
    
                if (id != bookId) return res.status(403).send({ status: false, msg: 'You are not authorised to perform this task' })
            }
    
            next();
    }

    catch (err) {
        res.status(500).send({ status: false, error: err.message }) 
    }

}




module.exports={authentication,authorization}
