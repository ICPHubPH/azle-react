import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Account } from "./account";
import { Feedback } from "./feedback";
import { Post } from "./post";
import { Rating } from "./rating";

@Entity({
    name: "users"
})
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

    @Column({ nullable: true })
    image: string;

  @Column({ unique: true })
  username: string;

  @Column()
  name: string;

  @Column("text", { nullable: true })
  bio: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  emailVerifiedAt: Date;

  @Column()
  role: "provider" | "student";

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Account, account => account.user)
  account: Account[];

  @OneToMany(() => Post, post => post.user)
  posts: Post[];

  @OneToMany(() => Rating, rating => rating.user)
  ratings: Rating[];

  @OneToMany(() => Feedback, feedback => feedback.user)
  feedbacks: Feedback[];
}
