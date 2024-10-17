import { Request, Response } from 'express';
import { Deck } from 'Database/entities/deck';
import { Card } from 'Database/entities/card';
import { User } from 'Database/entities/user';
import { Class } from 'Database/entities/class';
import { Folder } from 'Database/entities/folder';

export default class DeckController {
    // Create Deck
    static async create_deck(req: Request, res: Response){
        const { deck_name, deck_description, user_id, class_ids, folder_ids, cards } = req.body;

        try {
            if (!cards || cards.length < 3) {
                return res.status(400).json({ message: 'A deck must contain at least 3 cards.' });
            }

            const user = await User.findOneBy({ user_id });
            if (!user) {
                throw new Error("User not found");
            }
            const classes = await Class.findBy(class_ids || []);
            if (class_ids && classes.length !== class_ids.length) {
                throw new Error("One or more classes not found");
            } 
            const folders = await Folder.findBy(folder_ids || []);
            if (folder_ids && folders.length !== folder_ids.length) {
                throw new Error("One or more folders not found");
            }

            const deck = new Deck();
            deck.deck_name = deck_name;
            deck.deck_description = deck_description;
            deck.user = user;
            deck.classEntities = classes;
            deck.folders = folders;

            await Deck.save(deck);

            const cardPromises = cards.map((cardData: any) => {
                const card = new Card();
                card.card_term = cardData.card_term;
                card.card_definition = cardData.card_definition;
                card.deck = deck;
                return Card.save(card);
            });

            const savedCards = await Promise.all(cardPromises);
            return res.status(201).json({ message: "Success in creating decks", ...deck, cards: savedCards });

        } catch (error) {
            return res.status(400).json({ message: "Error creating deck", error })
        }
    };

    // Read Deck by ID
    static get_deck = async (req: Request, res: Response) => {
        const deck_id = parseInt(req.params.id);

        try {
            const deck = await Deck.findOne({ where: { deck_id: deck_id }});
            if (deck) {
                return res.status(200).json(deck);
            } else {
                return res.status(404).json({ message: "Deck not found" });
            }
        } catch (error) {
            return res.status(500).json({ message: "Error fetching deck", error });
        }
    };

    // Update Deck
    static update_deck = async (req: Request, res: Response) => {
        const deck_id = parseInt(req.params.id);
        const { deck_name, deck_description, class: classEntity, folder } = req.body;

        try {
            const deck = await Deck.findOneBy({deck_id});
            if (!deck) {
                return res.status(404).json({ message: "Deck not found" });
            }

            // Update fields
            deck.deck_name = deck_name;
            deck.deck_description = deck_description;
            // deck.classEntity = classEntity;
            // deck.folder = folder;

            await Deck.save(deck);
            return res.status(200).json(deck);
        } catch (error) {
            return res.status(500).json({ message: "Error updating deck", error });
        }
    };

    // Delete Deck
    static delete_deck = async (req: Request, res: Response) => {
        const deck_id = parseInt(req.params.id);

        try {
            const result = await Deck.delete(deck_id);
            if (result.affected === 1) {
                return res.status(200).json({ message: "Deck deleted successfully" });
            } else {
                return res.status(404).json({ message: "Deck not found" });
            }
        } catch (error) {
            return res.status(500).json({ message: "Error deleting deck", error });
        }
    };

    // Get all Decks
    static decks = async (req: Request, res: Response) => {
        try {
            const decks = await Deck.find();
            return res.status(200).json(decks);
        } catch (error) {
            return res.status(500).json({ message: "Error fetching decks", error });
        }
    };
}

