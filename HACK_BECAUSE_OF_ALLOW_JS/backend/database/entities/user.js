var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserRole } from "../../constants";
import { Feedback } from "./feedback";
import { Post } from "./post";
import { Rating } from "./rating";
let User = class User extends BaseEntity {
    setRole(role) {
        if (UserRole.includes(role)) {
            this.role = role;
        }
        else {
            return "Invalid user role!";
        }
    }
};
__decorate([
    PrimaryGeneratedColumn()
], User.prototype, "id", void 0);
__decorate([
    Column({ nullable: true, type: "varchar" })
], User.prototype, "avatarUrl", void 0);
__decorate([
    Column({ type: "varchar" })
], User.prototype, "name", void 0);
__decorate([
    Column({ nullable: true, type: "text" })
], User.prototype, "bio", void 0);
__decorate([
    Column({ unique: true, type: "varchar" })
], User.prototype, "email", void 0);
__decorate([
    Column({ type: "varchar", length: "30" })
], User.prototype, "password", void 0);
__decorate([
    Column({ nullable: true, type: "datetime" })
], User.prototype, "emailVerifiedAt", void 0);
__decorate([
    Column({ type: "text" })
], User.prototype, "role", void 0);
__decorate([
    CreateDateColumn()
], User.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
], User.prototype, "updatedAt", void 0);
__decorate([
    OneToMany(() => Post, post => post.user, {
        cascade: true,
        onDelete: "CASCADE"
    })
], User.prototype, "posts", void 0);
__decorate([
    OneToMany(() => Feedback, feedback => feedback.user, {
        cascade: true,
        onDelete: "CASCADE"
    })
], User.prototype, "feedbacks", void 0);
__decorate([
    OneToMany(() => Rating, rating => rating.user, {
        cascade: true,
        onDelete: "CASCADE"
    })
], User.prototype, "ratings", void 0);
User = __decorate([
    Entity({
        name: "users",
    })
], User);
export { User };
