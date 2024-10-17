import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Index, BaseEntity, ManyToMany, JoinTable } from "typeorm";
import { Class } from "./class";
import { Deck } from "./deck";

@Entity({ name: "users" })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ type: "varchar", length: 255 })
  user_name: string;

  @Column({ type: "varchar", length: 255 })
  user_username: string;

  @Column({ type: "varchar", unique: true, length: 255 })
  @Index()  // Optimizes queries on email
  user_email: string;

  @Column({ type: "varchar", length: 255 })
  user_password: string;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  user_createdAt: Date;

  @ManyToMany(() => Class, (classEntity) => classEntity.class_members)
  @JoinTable()  
  classes: Class[];

  @OneToMany(() => Deck, (deck) => deck.user)
  decks: Deck[];
}
