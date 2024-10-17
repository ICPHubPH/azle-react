import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, BaseEntity, ManyToMany, JoinTable} from "typeorm";
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
  deck_description: string | null;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  deck_createdAt: Date;

  @ManyToOne(() => User, (user) => user.decks, { eager: true })
  user: User;

  @ManyToMany(() => Class, (classEntity) => classEntity.decks)
  @JoinTable()  // This creates the linking table for many-to-many
  classEntities: Class[];

  @ManyToMany(() => Folder, (folder) => folder.decks)
  @JoinTable()  // This creates the linking table for many-to-many
  folders: Folder[];

  @OneToMany(() => Card, (card) => card.deck)
  cards: Card[];
}
