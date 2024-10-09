import ApisController from 'App/Controllers/Http/ApisController';
import { Router } from 'express';
const Route = Router();

/*
|--------------------------------------------------------------------------
| Authenticated Routes
|--------------------------------------------------------------------------
*/

// TODO: Authorize Routes
// Route.use(AuthMiddleware)

// Route.get('/users', UserController.users);
// Route.get('/user/:id', UserController.findUserById);
// Route.put('/user/:id', UserController.updateUserById);
// Route.delete('/user/:id', UserController.deleteUserById);

// Route.get('/posts', PostController.posts);
// Route.post('/posts', PostController.createPost);
// Route.get('/posts/:id', PostController.findPostById);
// Route.put('/posts/:id', PostController.updatedPostById);
// Route.delete('/posts/:id', PostController.deletePostById);
// Route.get('/category/:id', PostController.findPostByCategory);

// Route.get('/users', ApisController.user.users);

// TODO: Feedback Routes
// Route.get('/feedback/:id')
// ...

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

export { Route as routes };
