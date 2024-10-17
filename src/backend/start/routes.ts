import CardController from 'App/Controllers/Http/CardController';
import UserController from 'App/Controllers/Http/UserController';
import DeckController from 'App/Controllers/Http/DeckController';
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
Route.get('/app/:deck_id/cards', CardController.cards);
Route.get('/app/get_card', CardController.get_card);
Route.post('/app/create_card', CardController.create_card);
Route.post('/app/update_card', CardController.update_card);
Route.post('/app/delete_card', CardController.delete_card);

/* Deck */
Route.get('/app/decks', DeckController.decks);
Route.get('/app/get_deck/:id', DeckController.get_deck);
Route.post('/app/create_deck', DeckController.create_deck);
Route.post('/app/update_deck/:id', DeckController.update_deck);
Route.post('/app/delete_deck/:id', DeckController.delete_deck);

export { Route as routes };
