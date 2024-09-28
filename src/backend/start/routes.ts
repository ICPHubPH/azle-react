import ApisController from 'App/Controllers/Http/ApisController';
import { Router } from 'express';
const Route = Router();

/*
|--------------------------------------------------------------------------
| Authenticated Routes
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

Route.post('/add_user', ApisController.add_user);
Route.get('/get_users', ApisController.get_users);
Route.post('/update_user', ApisController.update_user);
Route.post('/delete_user', ApisController.delete_user);

// Route.get('/greet',ApisController.greet)
// Route.get('/configurations',ApisController.configurations)
// Route.post('/configuration/insert', ApisController.insert_configuration)
// Route.post('/configuration/update', ApisController.update_configuration)
// Route.post('/configuration/delete', ApisController.delete_configuration)
export { Route as routes };
