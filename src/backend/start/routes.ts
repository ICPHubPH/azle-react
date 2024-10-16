import { ApisController } from "App/Controllers/Http/ApisController";
import { UsersController } from "App/Controllers/Http/UsersController";
import { Router } from "express";
const Route = Router();

/*
|--------------------------------------------------------------------------
| Authenticated Routes
|--------------------------------------------------------------------------
*/

Route.post('/user/login', /* isAuth, */ UsersController.login);
Route.post('/user/register', /* isAuth, */ UsersController.register);

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

Route.get("/greet", ApisController.greet);
Route.get('/user/test', UsersController.test);
Route.get("/configurations", ApisController.configurations);
Route.post("/configuration/insert", ApisController.insert_configuration);
Route.post("/configuration/update", ApisController.update_configuration);
Route.post("/configuration/delete", ApisController.delete_configuration);
export { Route as routes };
