import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "users",
})

export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: "text", nullable: true })
  email: string

  @Column({ type: "text", nullable: true })
  password_hash: string

  @Column({ type: "text", nullable: true })
  principal_id: string

  @Column({ type: "text" })
  name: string

  @Column({ type: "text", nullable: true })
  location: string

  @Column({ type: "text", nullable: true })
  avatar_link: string

  @CreateDateColumn()
  created_at: Date
}