import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { UserRole } from "../../constants";
import { Bookmark } from "./bookmark";
import { Feedback } from "./feedback";
import { Post } from "./post";

@Entity({
  name: "users",
})
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ nullable: true, type: "varchar" })
  avatarUrl: string;
  
  @Column({ nullable: true, type: "varchar" })
  bannerUrl: string;

  @Column({ nullable: true, type: "varchar" })
  validIdUrl: string;

  @Column({ type: "varchar" })
  name: string;

  @Column({ nullable: true, type: "text" })
  bio: string;

  @Column({ unique: true, type: "varchar" })
  email: string;

  @Column({ type: "varchar", length: "30" })
  password: string;

  @Column({ nullable: true, type: "datetime" })
  emailVerifiedAt: Date;

  @Column({ nullable: true, type: "datetime" })
  providerVerifiedAt: Date;

  @Column({ type: "text" })
  role: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true, type: "datetime" })
  archivedAt: Date;

  @OneToMany(() => Post, (post) => post.user, {
    cascade: true,
    onDelete: "CASCADE",
  })
  posts: Post[];

  @OneToMany(() => Feedback, (feedback) => feedback.user, {
    cascade: true,
    onDelete: "CASCADE",
  })
  feedbacks: Feedback[];

  @OneToMany(() => Bookmark, bookmark => bookmark.user)
  bookmarks: Bookmark[];
  
  setRole(role: string) {
    if (UserRole.includes(role)) {
      this.role = role;
    } else {
      return "Invalid user role!";
    }
  }
}
