import ApisController from 'App/Controllers/Http/ApisController';
import AuthController from 'App/Controllers/Http/AuthController';
import PostController from 'App/Controllers/Http/PostController';
import UserController from 'App/Controllers/Http/UserController';
import AuthMiddleware from 'App/Middlewares/AuthMiddleware';
import { Router } from 'express';
const Route = Router();
/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/
Route.get('/greet', ApisController.greet);
Route.get('/configurations', ApisController.configurations);
Route.post('/configuration/insert', ApisController.insert_configuration);
Route.post('/configuration/update', ApisController.update_configuration);
Route.post('/configuration/delete', ApisController.delete_configuration);
Route.post('/auth/register', AuthController.register);
Route.post('/auth/login', AuthController.login);
Route.post('/auth/verify', AuthController.verify);
/*
|--------------------------------------------------------------------------
| Authenticated Routes
|--------------------------------------------------------------------------
*/
Route.get('/users', UserController.getAll);
Route.post('/users', AuthMiddleware.authorize, UserController.create);
Route.get('/user/:id', UserController.findById);
Route.put('/user/:id', AuthMiddleware.authorize, UserController.updateById);
Route.delete('/user/:id', AuthMiddleware.authorize, UserController.deleteById);
Route.get('/posts', PostController.getAll);
Route.post('/posts', AuthMiddleware.authorize, PostController.create);
Route.get('/post/:id', AuthMiddleware.authorize, PostController.findById);
Route.put('/post/:id', AuthMiddleware.authorize, PostController.updateById);
Route.delete('/post/:id', AuthMiddleware.authorize, PostController.deleteById);
Route.get('/post/:id/category', PostController.findByCategorytype);
// TODO: Feedback Routes
// Route.get('/feedback/:id', ApisController.feedback.findById);
// ...
export { Route as routes };
