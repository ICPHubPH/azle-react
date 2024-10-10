import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Feedback } from "./feedback";
import { Rating } from "./rating";
import { User } from "./user";

@Entity({
    name: 'posts',
})
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => User, user => user.posts, { onDelete: "CASCADE" })
  user: User;

  @Column({ nullable: true })
  thumbnail: string;

  @Column()
  title: string;

  @Column()
  type: string;

  @Column("text")
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Rating, rating => rating.post)
  ratings: Rating[];

  @OneToMany(() => Feedback, feedback => feedback.post)
  feedbacks: Feedback[];
}
