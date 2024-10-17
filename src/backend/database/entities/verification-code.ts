import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./user";

@Entity({
  name: "verificationCodes",
})
export class VerificationCode extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ nullable: true, type: "varchar", length: "6" })
  code: string;

  @Column({ nullable: true, type: "varchar" })
  token: string;

  @Column({ nullable: true, type: "datetime" })
  expiresAt: Date | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => User, (user) => user.verificationCode)
  @JoinColumn({ name: "userId" })
  user: User;
}
