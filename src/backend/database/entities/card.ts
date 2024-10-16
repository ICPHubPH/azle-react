import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from "typeorm";
import { Deck } from "./deck";

@Entity({ name: "cards" })
export class Card extends BaseEntity {
  @PrimaryGeneratedColumn()
  card_id: number;

  @Column({ type: "varchar", length: 255 })
  card_term: string;

  @Column({ type: "text" })
  card_definition: string;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  card_createdAt: Date;

  @ManyToOne(() => Deck, (deck) => deck.cards, { onDelete: 'CASCADE' })
  deck: Deck;
}
