const UserController = require('../controllers/users_controller');

module.exports = (app)=>{
    //Get Data
    app.get('/api/user',UserController.getAllUsers);
    //Post Data
    app.post('/api/user',UserController.createUser);
    //Edit Data
    app.put('/api/user/:id', UserController.edit);
    //Details
    app.post('/api/user', UserController.details);
    //Delete
    app.delete('/api/user/:id', UserController.delete);
}