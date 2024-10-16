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

// NOTE: Added convention /remove for delete endpoint to prevent conflicts with other routes.

Route.get("/users", Pagination.paginate, AuthMiddleware.authorize, UserController.getAll);
Route.post("/users", AuthMiddleware.authTest, UserController.create);
Route.get("/users/:id", UserController.findById);
Route.post("/users/:id/remove", AuthMiddleware.authTest, UserController.deleteById);
Route.post("/@self/upload/valid-id", AuthMiddleware.authTest, UserController.uploadValidIdUrl); // TODO - add a middleware that verifies if the user is a provider
Route.post("/@self/upload/avatar", AuthMiddleware.authTest, UserController.uploadAvatarUrl);
Route.post("/@self/upload/banner", AuthMiddleware.authTest, UserController.uploadBannerUrl);
Route.post("/@self/change-password", AuthMiddleware.authTest, UserController.changePassword);
Route.post('/@self/update', AuthMiddleware.authTest, UserController.updateSelf)


// path to be modified
Route.post('/admin/users/:id/archive', AuthMiddleware.authTest, UserController.archiveById);
Route.post('/admin/users/:id/unarchive', AuthMiddleware.authTest, UserController.unarchiveById);

Route.get('/users/:id/bookmarks', AuthMiddleware.authTest, Pagination.paginate, BookmarkController.getUserBookmarks);
Route.post('/bookmarks', AuthMiddleware.authTest, BookmarkController.createBookmark);
Route.post('/bookmarks/:id/remove', AuthMiddleware.authTest, BookmarkController.deleteBookmark);

Route.get('/posts', Pagination.paginate, PostController.getAll);
Route.post('/posts', AuthMiddleware.authTest, PostController.create);
Route.get('/posts/:id', AuthMiddleware.authTest, PostController.findById);
Route.post('/posts/:id', AuthMiddleware.authTest, PostController.updateById);
Route.post('/posts/:id/remove', AuthMiddleware.authTest, PostController.deleteById);
Route.get('/posts/:id/category', PostController.findByCategorytype);

// Admin: path to be modified
Route.post('/admin/posts/:id/archive', AuthMiddleware.authTest, PostController.archiveById);
Route.post('/admin/posts/:id/unarchive', AuthMiddleware.authTest, PostController.unarchiveById);
Route.post('/admin/providers/:id/verify', AuthMiddleware.authTest, UserController.verifyProvider);

Route.post('/feedbacks', AuthMiddleware.authTest, FeedbackController.createFeedback);
Route.get('/posts/:id/feedbacks', Pagination.paginate, FeedbackController.getPostFeedbacks);
Route.post('/feedbacks/:id', AuthMiddleware.authTest, FeedbackController.updateFeedback);
Route.post('/feedbacks/:id/remove', AuthMiddleware.authTest, FeedbackController.deleteFeedback);

// testing email sending, change recipient in the controller
Route.post('/test', UserController.test )

export { Route as routes };

