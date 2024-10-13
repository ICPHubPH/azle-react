import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Post } from "./post";
import { User } from "./user";

@Entity({
    name: "feedbacks"
})
export class Feedback extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: "text" })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, user => user.feedbacks)
  user: User;

  @ManyToOne(() => Post, post => post.feedbacks)
  post: Post;
}
