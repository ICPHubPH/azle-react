import { Card } from 'Database/entities/card';
import { Deck } from 'Database/entities/deck';
import { Response, Request } from 'express';

export default class CardController {
    // static async cards(request: Request, response: Response){
    //     const cards = await Card.find(); //ibabalik nya lahat ng cards

    //     response.json({
    //         status: 200,
    //         data: cards
    //     });
    // }

    static async create_card(request: Request, response: Response) {
        const { card_answer, card_question, deck_id } = request.body;
        try {
            const card = new Card();
            card.card_answer = card_answer;
            card.card_question = card_question;

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