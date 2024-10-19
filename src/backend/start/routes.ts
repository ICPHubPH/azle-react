import AdminController from "App/Controllers/Http/AdminController";
import ApisController from "App/Controllers/Http/ApisController";
import AuthController from "App/Controllers/Http/AuthController";
import BookmarkController from "App/Controllers/Http/BookmarkController";
import FeedbackController from "App/Controllers/Http/FeedbackController";
import PostController from "App/Controllers/Http/PostController";
import UserController from "App/Controllers/Http/UserController";
import AuthMiddleware from "App/Middlewares/Auth";
import Pagination from "App/Middlewares/Pagination";
import { Router } from "express";
const Route = Router();

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

// testing API
Route.post("/test", AuthMiddleware.hasAdminAccess, UserController.test);

Route.get("/", ApisController.landing);

Route.get("/greet", ApisController.greet);
Route.get("/configurations", ApisController.configurations);
Route.post("/configuration/insert", ApisController.insert_configuration);
Route.post("/configuration/update", ApisController.update_configuration);
Route.post("/configuration/delete", ApisController.delete_configuration);

Route.post("/auth/register", AuthController.register); // tested
Route.post("/auth/login", AuthController.login);  // tested
Route.post("/auth/verify-register", AuthController.verifyFromRegister); // tested
Route.post("/auth/verify-login", AuthController.verifyFromLogin); // tested
Route.post("/auth/resend-otp", AuthController.resendOtp); // tested

Route.get("/users", Pagination.paginate, UserController.getUsers); // tested
Route.get("/users/:id", UserController.findUserById); // tested
Route.get("/providers", Pagination.paginate, UserController.getProviders); // tested
Route.get("/providers/:id", UserController.getProviderById); // tested
Route.get("/students", Pagination.paginate, UserController.getStudents); // tested

Route.get("/posts", Pagination.paginate, PostController.getPosts); // tested
Route.get("/posts/:id", PostController.findPostById); // tested
Route.post("/posts/:id/feedbacks", Pagination.paginate, FeedbackController.getPostFeedbacks ); // tested


/*
|--------------------------------------------------------------------------
| Authenticated Routes
|--------------------------------------------------------------------------
*/

Route.post("/@self", AuthMiddleware.authorize, UserController.getSelf); // tested
Route.post("/@self/delete", AuthMiddleware.authorize, UserController.deleteSelf ); // tested
Route.post("/@self/upload/valid-id", AuthMiddleware.authorize, UserController.uploadValidIdUrl ); // tested
Route.post("/@self/upload/avatar", AuthMiddleware.authorize, UserController.uploadAvatarUrl); // tested
Route.post("/@self/upload/banner", AuthMiddleware.authorize, UserController.uploadBannerUrl); // tested
Route.post("/@self/update", AuthMiddleware.authorize, UserController.updateSelf); // tested

Route.post("/users/:id/bookmarks", AuthMiddleware.authorize,Pagination.paginate, BookmarkController.getUserBookmarks); // ????????????????
Route.post("/bookmarks", AuthMiddleware.authorize, BookmarkController.createBookmark); // tested
Route.post("/bookmarks/:id/remove", AuthMiddleware.authorize, BookmarkController.deleteBookmark); // tested

Route.post("/posts/create", AuthMiddleware.authorize, PostController.create); // tested
Route.post("/posts/:id", AuthMiddleware.authorize, PostController.updateById); // ?
Route.post("/posts/:id/remove", AuthMiddleware.authorize, PostController.deleteById); // tested

Route.post("/feedbacks", AuthMiddleware.authorize, FeedbackController.createFeedback);
Route.post("/feedbacks/:id/remove", AuthMiddleware.authorize, FeedbackController.deleteFeedback);

/*
|--------------------------------------------------------------------------
| Protected Routes
|--------------------------------------------------------------------------
*/
Route.post("protected/users/:id/remove", AuthMiddleware.hasAdminAccess, UserController.deleteUserById );
Route.post("/protected/users/:id/archive", AuthMiddleware.hasAdminAccess, AdminController.archiveUserById);
Route.post("/protected/users/:id/unarchive", AuthMiddleware.hasAdminAccess, AdminController.unarchiveUserById);
Route.post("/protected/archived-users", Pagination.paginate, AuthMiddleware.hasAdminAccess, AdminController.getArchivedUsers);
Route.post("/protected/non-verified-users", Pagination.paginate, AuthMiddleware.hasAdminAccess, AdminController.getNonVerifiedUsers);
Route.post("/protected/posts/:id/archive", AuthMiddleware.hasAdminAccess, AdminController.archivePostById);
Route.post("/protected/posts/:id/unarchive", AuthMiddleware.hasAdminAccess, AdminController.unarchivePostById);
Route.post("/protected/providers/:id/verify", AuthMiddleware.hasAdminAccess, AdminController.verifyProvider);
Route.post("/protected/non-verified-providers", Pagination.paginate, AuthMiddleware.hasAdminAccess, AdminController.getNonVerifiedProviders);

export { Route as routes };
