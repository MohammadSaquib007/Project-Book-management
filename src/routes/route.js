const express =require("express")
const router = express.Router()

const userController = require("../controllers/userController")
const bookController = require("../controllers/bookController")
const reviewController = require('../controllers/reviewController')
const middleware=require('../middleware/auth')


router.post("/register",userController.userCreation)
router.post("/login",userController.userLogin)
router.post("/books",middleware.authentication,middleware.authorization,bookController.bookCreation)
router.get("/books",middleware.authentication,bookController.getBooksQuery)
router.get("/books/:bookId",middleware.authentication,bookController.bookById)
router.put("/books/:bookId",middleware.authentication,middleware.authorization,bookController.updateBook)
router.delete("/books/:bookId",middleware.authentication,middleware.authorization,bookController.bookDeletion)
router.post("/books/:bookId/review", reviewController.createReview)
router.put("/books/:bookId/review/:reviewId", reviewController.updateReview)
router.delete("/books/:bookId/review/:reviewId", reviewController.deleteReview)


/***************************** Path not match**************************************/
router.all("/*", async function (req, res) {
    return res.status(404).send({ status: false, message: "Page Not Found" });
  });

  module.exports = router