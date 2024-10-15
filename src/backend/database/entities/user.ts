import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "users",
})

export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: "text" })
  email: string

  @Column({ type: "text" })
  password_hash: string

  @Column({ type: "text" })
  principal_id: string

  @Column({ type: "text" })
  first_name: string

  @Column({ type: "text" })
  last_name: string

  @Column({ type: "text" })
  location: string

  @Column({ type: "text" })
  avatar_link: string

  @CreateDateColumn()
  created_at: Date
}