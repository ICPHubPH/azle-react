import ApisController from 'App/Controllers/Http/ApisController';
import PostController from 'App/Controllers/Http/PostController';
import UserController from 'App/Controllers/Http/UserController';
import { Router } from 'express';
const Route = Router();

/*
|--------------------------------------------------------------------------
| Authenticated Routes
|--------------------------------------------------------------------------
*/

// TODO: Authorize Routes
// Route.use(AuthMiddleware)

// Route.get('/users', ApisController.user.getAll);
// Route.get('/user/:id', ApisController.user.findById);
// Route.put('/user/:id', ApisController.user.updateById);
// Route.delete('/user/:id', ApisController.user.deleteById);

// Route.get('/posts', ApisController.post.getAll);
// Route.post('/posts', ApisController.post.create);
// Route.get('/posts/:id', ApisController.post.findById);
// Route.put('/posts/:id', ApisController.post.updateById);
// Route.delete('/posts/:id', ApisController.post.deleteById);
// Route.get('/post/:id/category', ApisController.post.findByCategory);

// TODO: Feedback Routes
// Route.get('/feedback/:id', ApisController.feedback.findById);
// ...

Route.get('/users/test', UserController.test);
Route.get('/posts/test', PostController.test);


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
