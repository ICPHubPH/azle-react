import ApisController from 'App/Controllers/Http/ApisController';
import AuthController from 'App/Controllers/Http/AuthController';
import BookmarkController from 'App/Controllers/Http/BookmarkController';
import FeedbackController from 'App/Controllers/Http/FeedbackController';
import PostController from 'App/Controllers/Http/PostController';
import UserController from 'App/Controllers/Http/UserController';
import AuthMiddleware from 'App/Middlewares/Auth';
import Pagination from 'App/Middlewares/Pagination';
import { Router } from 'express';
const Route = Router();

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

Route.get("/greet", ApisController.greet);
Route.get("/configurations", ApisController.configurations);
Route.post("/configuration/insert", ApisController.insert_configuration);
Route.post("/configuration/update", ApisController.update_configuration);
Route.post("/configuration/delete", ApisController.delete_configuration);

// NOTE: issue with jwt so it might not work if you try to implement it
// in those routes.
Route.post("/auth/register", AuthController.register);
Route.post("/auth/login", AuthController.login);
Route.post("/auth/verify", AuthController.verify);

/*
|--------------------------------------------------------------------------
| Authenticated Routes
|--------------------------------------------------------------------------
*/

Route.get("/users", Pagination.paginate, UserController.getAll);
Route.post("/users", AuthMiddleware.authorize, UserController.create);
Route.get("/user/:id", UserController.findById);
Route.post("/user/:id", AuthMiddleware.authorize, UserController.updateById); // UPDATE
Route.post("/user/:id", AuthMiddleware.authorize, UserController.deleteById); // DELETE
Route.post("/@self/upload/valid-id", UserController.uploadValidIdUrl);
Route.post("/@self/upload/avatar", UserController.uploadAvatarUrl);
Route.post("/@self/upload/banner", UserController.uploadBannerUrl);

Route.get('/user/:id/bookmarks', AuthMiddleware.authorize, Pagination.paginate, BookmarkController.getUserBookmarks);

Route.get('/posts', Pagination.paginate, PostController.getAll);
Route.post('/posts', AuthMiddleware.authorize, PostController.create);
Route.get('/post/:id', AuthMiddleware.authorize, PostController.findById);
Route.put('/post/:id', AuthMiddleware.authorize, PostController.updateById);
Route.delete('/post/:id', AuthMiddleware.authorize, PostController.deleteById);
Route.get('/post/:id/category', PostController.findByCategorytype);


Route.get('/posts/:id/feedbacks', Pagination.paginate, FeedbackController.getPostFeedbacks);

export { Route as routes };

