const express = require("express");
const router = express.Router();

const usersController = require('../controllers/users-controller')
const middlewareUsers = require('../middlewares/users-middleware')

router.post("/users",
     middlewareUsers.insertUserMiddleware, 
     usersController.createUser
);
router.get("/users/:id",
     middlewareUsers.middlewareGetUserById, 
     usersController.getUserById
);
router.delete("/users/:id",
     usersController.deleteUser,
     middlewareUsers.middlewareDeleteUser
);

module.exports = router;