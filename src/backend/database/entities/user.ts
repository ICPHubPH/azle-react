import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { Feedback } from "./feedback";
import { Post } from "./post";
import { Rating } from "./rating";

@Entity({
  name: "users",
})
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ nullable: true, type: "varchar" })
  avatarUrl: string;

  @Column({
    unique: true,
    type: "varchar",
    length: 30
   })
  username: string;

  @Column({ type: "varchar"})
  name: string;

  @Column({ nullable: true, type: "text" })
  bio: string;

  @Column({ unique: true, type: "varchar" })
  email: string;

  @Column({ type: "varchar", length: "30" })
  password: string;

  @Column({ nullable: true, type: "datetime" })
  emailVerifiedAt: Date;

  @Column({
    type: "enum",
    enum: ["admin", "provider", "student"],
  })
  role: "admin" | "provider" | "student";

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Post, post => post.user, {
    cascade: true,
    onDelete: "CASCADE"
  })
  posts: Post[];

  @OneToMany(() => Feedback, feedback => feedback.user, {
    cascade: true,
    onDelete: "CASCADE"
  })
  feedbacks: Feedback[];

  @OneToMany(() => Rating, rating => rating.user, {
    cascade: true,
    onDelete: "CASCADE"
  })
  ratings: Rating[];
}
