var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PostCategoryType } from "../../constants";
import { Feedback } from "./feedback";
import { Rating } from "./rating";
import { User } from "./user";
let Post = class Post extends BaseEntity {
    setType(type) {
        if (PostCategoryType.includes(type)) {
            this.type = type;
        }
        else {
            throw new Error("Invalid post type");
        }
    }
};
__decorate([
    PrimaryGeneratedColumn()
], Post.prototype, "id", void 0);
__decorate([
    Column({ nullable: true, type: "varchar" })
], Post.prototype, "thumbnail", void 0);
__decorate([
    Column({ type: "varchar", length: 60 })
], Post.prototype, "title", void 0);
__decorate([
    Column({ type: "text" })
], Post.prototype, "type", void 0);
__decorate([
    Column({ type: "text" })
], Post.prototype, "content", void 0);
__decorate([
    CreateDateColumn()
], Post.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
], Post.prototype, "updatedAt", void 0);
__decorate([
    ManyToOne(() => User, user => user.posts)
], Post.prototype, "user", void 0);
__decorate([
    OneToMany(() => Feedback, feedback => feedback.post, {
        cascade: true,
        onDelete: "CASCADE"
    })
], Post.prototype, "feedbacks", void 0);
__decorate([
    OneToMany(() => Rating, rating => rating.post)
], Post.prototype, "ratings", void 0);
Post = __decorate([
    Entity({
        name: 'posts',
    })
], Post);
export { Post };
