import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PostCategoryType } from "../../constants";
import { Feedback } from "./feedback";
import { Rating } from "./rating";
import { User } from "./user";

@Entity({
    name: 'posts',
})
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ nullable: true, type: "varchar" })
  thumbnail: string;

  @Column({type: "varchar", length: 60})
  title: string;

  @Column({type: "text"})
  type: string;

  @Column({ type: "text" })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, user => user.posts)
  user: User;

  @OneToMany(() => Feedback, feedback => feedback.post, {
    cascade: true,
    onDelete: "CASCADE"
  })
  feedbacks: Feedback[];

  @OneToMany(() => Rating, rating => rating.post)
  ratings: Rating[];

  setType(type: string) {
    if (PostCategoryType.includes(type)) {
      this.type = type;
    } else {
        throw new Error("Invalid post type");
    }
  }
}
