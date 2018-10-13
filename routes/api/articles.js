const router = require("express").Router();
const articleController = require("../../controllers/articlesController");

router.route("/")
    .get(booksController.findAll)
    .post(booksController.create);


router
    .route("/:id")
    .get(articlesController.findById)
    .put(articlesController.update)
    .delete(articlesController.remove);

module.exports = router;