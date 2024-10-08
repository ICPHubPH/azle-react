import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Post } from "./post";
import { User } from "./user";

@Entity()
export class Feedback {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Post, post => post.feedbacks, { onDelete: "CASCADE" })
  post: Post;

  @ManyToOne(() => User, user => user.feedbacks, { onDelete: "CASCADE" })
  user: User;

  @Column("text")
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
