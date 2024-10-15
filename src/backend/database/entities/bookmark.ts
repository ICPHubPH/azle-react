import { BaseEntity, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Post } from './post';
import { User } from './user';

@Entity({
  name: 'bookmarks',
})
export class Bookmark extends BaseEntity {
  @PrimaryGeneratedColumn()
    id: number;
    
    @ManyToOne(() => User, user => user.bookmarks)
    user: User;

    @ManyToOne(() => Post, post => post.bookmarks)
    post: Post;

    @CreateDateColumn()
    createdAt: Date;
}
