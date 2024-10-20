import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Post } from "./post";
import { User } from "./user";

@Entity({
  name: "feedbacks",
})
export class Feedback extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: "integer" })
  rate: number;

  @Column({ nullable: true, type: "text" })
  content: string | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.feedbacks, {
    onDelete: "CASCADE",
  })
  user: User;

  @ManyToOne(() => Post, (post) => post.feedbacks, {
    onDelete: "CASCADE",
  })
  post: Post;
}
