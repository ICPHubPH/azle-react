import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Post } from "./post";
import { User } from "./user";

@Entity({
    name: "ratings"
})
export class Rating extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Post, post => post.ratings, { onDelete: "CASCADE" })
  post: Post;

  @ManyToOne(() => User, user => user.ratings, { onDelete: "CASCADE" })
  user: User;

  @Column()
  rate: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
