import { Card } from 'Database/entities/card';
import { Deck } from 'Database/entities/deck';
import { Response, Request } from 'express';

export default class CardController {
    static async cards(request: Request, response: Response){
        const deck_id = parseInt(request.params.deck_id);

        try {
            const deck = await Deck.findOneBy({ deck_id });
            if (!deck) {
                throw new Error("Deck not found.");
            }
            const cards = await Card.find({
                where: { deck: { deck_id } },
            });
    
            if (cards.length === 0) {
                return response.status(404).json({ message: 'No cards found for this deck.' });
            }
    
            response.status(200).json({ message: "Cards found!", payload: cards}); // Return the found cards
        } catch (error) {
            response.status(500).json({ message: error});
        }
    }

    static async create_card(request: Request, response: Response) {
        const { card_answer, card_question, card_recalledForCount, card_hint, card_isRedo, deck_id } = request.body;
        try {
            const card = new Card();
            card.card_answer = card_answer;
            card.card_question = card_question;
            card.card_recalledForCount = card_recalledForCount;
            card.card_hint = card_hint;
            card.card_isRedo = card_isRedo;

            const deck = await Deck.findOneBy({deck_id});
            if (!deck){
                throw new Error("Deck not found!");
            } else {
                card.deck = deck;
            }

            Card.save(card);
            return response.status(201).json({ message: "Card created!", payload: {card}});

        } catch (error) {
            return response.status(400).json({ message: "Error in creating card: ", error })
        }
    }

    static async get_card(request: Request, response: Response){
        const { card_id } = request.body;
        try {
            const card = await Card.findOneBy({card_id}); //kukunin nya isang card
            if (!card){
                throw new Error("Card not found!");
            }
            return response.status(200).json({message: "Card retrieved!", payload: {card}})
        } catch (error) {
            return response.status(400).json({ message: "Error creating deck: ", error })
        }
    }

    static async update_card(request: Request, response: Response) {
        const { card_id, deck_id, ...cardData } = request.body;

        try {
            const card = await Card.findOneBy({ card_id });
            if (!card) {
                throw new Error("Card not found!");
            }
            const deck = await Deck.findOneBy({ deck_id });
            if (!deck) {
                throw new Error("Deck not found!");
            }

            await Card.update({ card_id }, { ...cardData, deck });
        
            return response.status(200).json({message: "Card updated!", payload: {card}})
        } catch (error) {
            return response.status(400).json({ message: "Error creating deck: ", error })
        }
    }
    
    static async delete_card(request: Request, response: Response) {
        const { card_id } = request.body;
        try {
            const card = await Card.findOneBy({card_id});
            if (!card){
                throw new Error("Card not found!");
            }
            Card.delete(card_id);
            return response.status(200).json({message: "Card deleted!"})
        } catch (error) {
            return response.status(400).json({ message: "Error creating deck: ", error })
        }
    }    
}