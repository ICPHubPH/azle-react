import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, BaseEntity } from "typeorm";
import { User } from "./user";
import { Deck } from "./deck";

@Entity({ name: "classes" })
export class Class extends BaseEntity {
  @PrimaryGeneratedColumn()
  class_id: number;

  @Column({ type: "varchar", length: 255 })
  class_name: string;

  @Column({ type: "text", nullable: true })
  class_description: string;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  class_createdAt: Date;

  @ManyToOne(() => User, (user) => user.classes, { eager: true })
  user: User;

  @OneToMany(() => Deck, (deck) => deck.classEntities)
  decks: Deck[];
}
