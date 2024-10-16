import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Index, BaseEntity } from "typeorm";
import { Class } from "./class";
import { Folder } from "./folder";
import { Deck } from "./deck";

@Entity({ name: "users" })
export class User extends BaseEntity{
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

  @OneToMany(() => Class, (classEntity) => classEntity.user)
  classes: Class[];

  @OneToMany(() => Folder, (folder) => folder.user)
  folders: Folder[];

  @OneToMany(() => Deck, (deck) => deck.user)
  decks: Deck[];
}
