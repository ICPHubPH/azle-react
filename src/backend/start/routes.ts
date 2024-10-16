import CardController from 'App/Controllers/Http/CardController';
import UserController from 'App/Controllers/Http/UserController';
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


/* User */
Route.get('/app/users', UserController.users);
Route.get('/app/get_user', UserController.get_user);
Route.post('/app/create_user', UserController.create_user);
Route.post('/app/update_user', UserController.update_user);
Route.post('/app/delete_user', UserController.delete_user);

/* Card */
Route.get('/app/cards', CardController.cards);
Route.get('/app/get_card', CardController.get_card);
Route.post('/app/create_card', CardController.create_card);
Route.post('/app/update_card', CardController.update_card);
Route.post('/app/delete_card', CardController.delete_card);


export { Route as routes };
