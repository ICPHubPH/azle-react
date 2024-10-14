var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Post } from "./post";
import { User } from "./user";
let Rating = class Rating extends BaseEntity {
};
__decorate([
    PrimaryGeneratedColumn()
], Rating.prototype, "id", void 0);
__decorate([
    Column({ type: "integer" })
], Rating.prototype, "rate", void 0);
__decorate([
    CreateDateColumn()
], Rating.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
], Rating.prototype, "updatedAt", void 0);
__decorate([
    ManyToOne(() => User, user => user.ratings)
], Rating.prototype, "user", void 0);
__decorate([
    ManyToOne(() => Post, post => post.ratings)
], Rating.prototype, "post", void 0);
Rating = __decorate([
    Entity({
        name: "ratings"
    })
], Rating);
export { Rating };
