import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user";

@Entity()
export class Account {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  type: "email" | "google" | "facebook";

  @Column()
  accountId: string;

  @OneToOne(() => User, user => user.account, { onDelete: "CASCADE" })
  @JoinColumn()  // Ensures that the userId acts as the foreign key
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ unique: true })
  userId: string;
}
