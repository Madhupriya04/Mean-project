// module.exports = function(app) {
    
//         var user = require('../controller/controller.js');
    
//         // Create a new Note
//         app.post('/user', user.create);
    
//         // Retrieve all Notes
//         app.get('/user', user.findAll);
    
//         // Retrieve a single Note with noteId
//         app.get('/user/:userId', user.findOne);
    
//         // Update a Note with noteId
//         app.put('/user/:userId', user.update);
    
//         // Delete a Note with noteId
//         app.delete('/user/:userId', user.delete);
//     }

const express = require('express');
const userCtrl = require('../controller/controller');

const user_router = express.Router(); 

user_router.get("/", userCtrl.getAll);

/**
 * @api {get} /api/user Get all user details.
 * @apiVersion 1.0.0
 * @apiGroup user
 * @apiName Get list of all user
 * @apiSuccess (200) {json} Json-List-of-Object list of user objects as JSON String
 * @apiSuccessExample {json} Success-Response:
 * [{"_id" = "3435554af556cd", 
 *   "name": "John Doe",
 *   "dob": "1969-04-03",
 *   "sex": "Male",
 *   "branch" : "Vapery",
 *   "_v": 1.0
 * }, {"_id" = "abcdedfhiks", 
 *   "name": "Jane Doe",
 *   "dob": "1981-04-03",
 *   "sex": "Female",
 *   "branch" : "Nandanam",
 *   "_v": 1.0
 * }]
 */
user_router.get("/search", userCtrl.textSearch);

/**
 * @api {get} /api/user/:id Get user detail by id.
 * @apiVersion 1.0.0
 * @apiGroup user
 * @apiName Get user By Id
 * @apiSuccess (200) {json} Json-Object  member object with matching id as JSON String
 * @apiSuccessExample {json} Success-Response:
 * { "name": "John Doe",
 *   "dob": "1969-04-03",
 *   "sex": "Male",
 *   "branch" : "Vapery"
 * }
 */
user_router.get("/:id", userCtrl.get);

/**
 * @api {post} /api/user/ Create a new user.
 * @apiVersion 1.0.0
 * @apiGroup user
 * @apiName Create a new user by id
 * @apiParam (name)    {String} user name.
 * @apiParam (dob) {Date} user date of birth.
 * @apiParam (sex) {String} sex user. e.g. Male || Female
 * @apiParam (branch) {String} branch of the user.
 * @apiParamExample {json} Request-Example:
 * { 
 *   "name": "John Doe", 
 *   "dob": "2003-03-19", 
 *   "sex": "Male",
 *   "branch": "Valachery" 
 * }
 * @apiSuccess (On Success returns 201-Created) {json} Created-Json-Object  Created Json Object with id
 * @apiSuccessExample {json} Success-Response:
 * { "_id" : "123565abc23de",
 *   "name": "John Doe",
 *   "dob": "1969-04-03",
 *   "sex": "Male",
 *   "branch" : "Vapery"
 * }
 */
user_router.post("/", userCtrl.create);

/**
 * @api {put} /api/user/ Update a user using id.
 * @apiVersion 1.0.0
 * @apiGroup user
 * @apiName Update a user by id
 * @apiSuccess (200) {json} Updated-Json-Object  user object with matching id as JSON String
 * @apiSuccessExample {json} Success-Response:
 * { "name": "John Doe",
 *   "dob": "1969-04-03",
 *   "sex": "Male",
 *   "branch" : "Vapery"
 * }
 */
user_router.put("/:id", userCtrl.update);

/**
 * @api {put} /api/user/ Update a user using id.
 * @apiVersion 1.0.0
 * @apiGroup user
 * @apiName Update a user by id
 * @apiSuccess (200) {json} Updated-Json-Object  user object with matching id as JSON String
 * @apiSuccessExample {json} Success-Response:
 * { "name": "John Doe",
 *   "dob": "1969-04-03",
 *   "sex": "Male",
 *   "branch" : "Vapery"
 * }
 */
user_router.put("/change-password/:id", userCtrl.change_password);

/**
 * @api {delete} /api/user/ Delete a user using id.
 * @apiVersion 1.0.0
 * @apiGroup user
 * @apiName Delete a user by id
 * @apiSuccess (201) {json} Deleted-Json-Object  user object with matching id as JSON String
 * @apiSuccessExample {json} Success-Response:
 * { "name": "John Doe",
 *   "dob": "1969-04-03",
 *   "sex": "Male",
 *   "branch" : "Vapery"
 * }
 */
user_router.delete("/:id", userCtrl.delete);

exports = module.exports = user_router;
