import { Card } from 'Database/entities/card';
import { Deck } from 'Database/entities/deck';
import { Response, Request } from 'express';

export default class CardController {
    // static async greet(request: Request, response: Response) {
    //     response.json({ greeting: `Hello, ${request.query.name}` });
    // }

    static async cards(request: Request, response: Response){
        const cards = await Card.find(); //ibabalik nya lahat ng cards

        response.json({
            status: 200,
            data: cards
        });
    }

    static async get_card(request: Request, response: Response){
        const { card_id } = request.body;
        const card = await Card.findBy({card_id}); //kukunin nya isang card

        if (!card){
            response.status(400);
            return response.json({
                status: 400,
                message: "card not found!"
            });
        }

        return response.json({
            status: 200,
            data: card
        });
    }

    static async create_card(request: Request, response: Response) {
        const { card_term, card_definition, deck_id } = request.body;
    
        // Assuming the deck object contains at least the deck_id
        const deckEntity = await Deck.findOne(deck_id);
        if (!deckEntity) {
            return response.status(404).json({
                status: 404,
                message: "Deck not found!"
            });
        }
    
        const card = Card.create({
            card_term,
            card_definition,
            deck: deckEntity
        });
    
        await card.save();
    
        return response.json({
            status: 200,
            message: "Card has been created!",
        });
    }
    

    static async update_card(request: Request, response: Response) {
        const { card_id, card_term, card_definition, deck_id } = request.body;
    
        // Fetch the card by ID
        const getCard = await Card.findOne({ where: { card_id }, relations: ['deck'] });
    
        if (!getCard) {
            return response.status(400).json({
                status: 400,
                message: "Card not found!"
            });
        }
    
        // If the deck is being updated, fetch the deck by its ID
        let deck: any = getCard.deck; // Keep the current deck unless updated
        if (deck_id) {
            deck = await Deck.findOne({ where: { deck_id } });
            if (!deck) {
                return response.status(400).json({
                    status: 400,
                    message: "Deck not found!"
                });
            }
        }
    
        // Update the card with new values
        await Card.update({ card_id }, { card_term, card_definition, deck });
    
        // Re-fetch the deck with its updated cards
        const updatedDeck = await Deck.findOne({ where: { deck_id: deck.deck_id }, relations: ['cards'] });
    
        return response.json({
            status: 200,
            message: "Card has been updated!",
            updatedDeck, // Return the updated deck with its cards if needed
        });
    }
    

    static async delete_card(request: Request, response: Response) {
        const { card_id } = request.body;
    
        // Find the card by ID
        const getCard = await Card.findOne({ where: { card_id } });
    
        if (!getCard) { // If the card doesn't exist, return an error
            return response.status(400).json({
                status: 400,
                message: "Card not found!"
            });
        }
    
        // If the card exists, delete it
        await Card.delete({ card_id });
    
        return response.json({
            status: 200,
            message: "Card has been deleted!",
        });
    }    
}