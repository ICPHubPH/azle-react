import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from "typeorm";
import { Deck } from "./deck";

@Entity({ name: "cards" })
export class Card extends BaseEntity {
  @PrimaryGeneratedColumn()
  card_id: number;

  @Column({ type: "text" })
  card_answer: string;

  @Column({ type: "text" })
  card_question: string;

  @Column({ type: "int" })
  card_recalledForCount: number;

  @Column({ type: "text" })
  card_hint: string;

  @Column({ type: "boolean", nullable: true })
  card_isRedo: boolean | null;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  card_createdAt: Date;

  @ManyToOne(() => Deck, (deck) => deck.cards, { onDelete: 'CASCADE' })
  deck: Deck;
}
