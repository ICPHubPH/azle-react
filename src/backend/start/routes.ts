import ApisController from "App/Controllers/Http/ApisController";
import AuthController from "App/Controllers/Http/AuthController";
import PostController from "App/Controllers/Http/PostController";
import UserController from "App/Controllers/Http/UserController";
import AuthMiddleware from "App/Middlewares/AuthMiddleware";
import { Router } from "express";
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

Route.get("/users", UserController.getAll);
Route.post("/users", AuthMiddleware.authorize, UserController.create);
Route.get("/user/:id", UserController.findById);
Route.post("/user/:id", AuthMiddleware.authorize, UserController.updateById); // UPDATE
Route.post("/user/:id", AuthMiddleware.authorize, UserController.deleteById); // DELETE
Route.post("/@self/upload/valid-id", UserController.uploadValidIdUrl);
Route.post("/@self/upload/avatar", UserController.uploadAvatarUrl);

Route.get("/posts", PostController.getAll);
Route.post("/posts", AuthMiddleware.authorize, PostController.create);
Route.get("/post/:id", AuthMiddleware.authorize, PostController.findById);
Route.post("/post/:id", AuthMiddleware.authorize, PostController.updateById); // UPDATE
Route.post("/post/:id", AuthMiddleware.authorize, PostController.deleteById); // DELETE
Route.get("/post/:id/category", PostController.findByCategorytype);

// TODO: Feedback Routes
// Route.get('/feedback/:id', ApisController.feedback.findById);
// ...

export { Route as routes };
