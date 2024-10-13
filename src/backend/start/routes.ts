import ApisController from 'App/Controllers/Http/ApisController';
import PostController from 'App/Controllers/Http/PostController';
import UserController from 'App/Controllers/Http/UserController';
import { Router } from 'express';
const Route = Router();

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

Route.get('/greet',ApisController.greet)
Route.get('/configurations',ApisController.configurations)
Route.post('/configuration/insert', ApisController.insert_configuration)
Route.post('/configuration/update', ApisController.update_configuration)
Route.post('/configuration/delete', ApisController.delete_configuration)

/*
|--------------------------------------------------------------------------
| Authenticated Routes
|--------------------------------------------------------------------------
*/

// TODO: Authorize Routes
// Route.use(AuthMiddleware)

Route.get('/users', UserController.getAll);
Route.get('/user/:id', UserController.findById);
Route.put('/user/:id', UserController.updateById);
Route.delete('/user/:id', UserController.deleteById);

Route.get('/posts', PostController.getAll);
Route.post('/posts', PostController.create);
Route.get('/posts/:id', PostController.findById);
Route.put('/posts/:id', PostController.updateById);
Route.delete('/posts/:id', PostController.deleteById);
Route.get('/post/:id/category', PostController.findByCategorytype);

// TODO: Feedback Routes
// Route.get('/feedback/:id', ApisController.feedback.findById);
// ...


const ApiRoute = Router();
ApiRoute.use('/api', Route);

export { ApiRoute as routes };
