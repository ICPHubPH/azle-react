import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Post } from "./post";
import { User } from "./user";

@Entity({
    name: "ratings"
})
export class Rating extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: "integer" })
  rate: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, user => user.ratings)
  user: User;

  @ManyToOne(() => Post, post => post.ratings)
  post: Post;
}
