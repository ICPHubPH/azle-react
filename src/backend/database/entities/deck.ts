import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, BaseEntity} from "typeorm";
import { User } from "./user";
import { Class } from "./class";
import { Folder } from "./folder";
import { Card } from "./card";

@Entity({ name: "decks" })
export class Deck extends BaseEntity {
  @PrimaryGeneratedColumn()
  deck_id: number;

  @Column({ type: "varchar", length: 255 })
  deck_name: string;

  @Column({ type: "text", nullable: true })
  deck_description: string;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  deck_createdAt: Date;

  @ManyToOne(() => User, (user) => user.decks, { eager: true })
  user: User;

  @ManyToOne(() => Class, (classEntity) => classEntity.decks, { nullable: true })
  classEntity: Class;

  @ManyToOne(() => Folder, (folder) => folder.decks, { nullable: true })
  folder: Folder;

  @OneToMany(() => Card, (card) => card.deck)
  cards: Card[];
}
