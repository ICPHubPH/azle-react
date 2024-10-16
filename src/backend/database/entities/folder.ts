import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, BaseEntity } from "typeorm";
import { User } from "./user";
import { Class } from "./class";
import { Deck } from "./deck";

@Entity({ name: "folders" })
export class Folder extends BaseEntity{
  @PrimaryGeneratedColumn()
  folder_id: number;

  @Column({ type: "varchar", length: 255 })
  folder_name: string;

  @Column({ type: "text", nullable: true })
  folder_description: string;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  folder_createdAt: Date;

  @ManyToOne(() => User, (user) => user.folders, { eager: true })
  user: User;

  @ManyToOne(() => Class, (classEntity) => classEntity.folders, { nullable: true })
  classEntity: Class;

  @OneToMany(() => Deck, (deck) => deck.folder)
  decks: Deck[];
}
