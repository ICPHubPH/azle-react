var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Post } from "./post";
import { User } from "./user";
let Feedback = class Feedback extends BaseEntity {
};
__decorate([
    PrimaryGeneratedColumn()
], Feedback.prototype, "id", void 0);
__decorate([
    Column({ type: "text" })
], Feedback.prototype, "content", void 0);
__decorate([
    CreateDateColumn()
], Feedback.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
], Feedback.prototype, "updatedAt", void 0);
__decorate([
    ManyToOne(() => User, user => user.feedbacks)
], Feedback.prototype, "user", void 0);
__decorate([
    ManyToOne(() => Post, post => post.feedbacks)
], Feedback.prototype, "post", void 0);
Feedback = __decorate([
    Entity({
        name: "feedbacks"
    })
], Feedback);
export { Feedback };
