import { DataSource } from "typeorm";
import { Database } from "../index";
import { User } from "Database/entities/user";
import { postSeeds, userSeeds } from "./seed";
import { Post } from "Database/entities/post";

export class Seeder {
  private dataSource: DataSource;

  constructor(private db: Database) {}

  public async seedUsers(count: number, callback?: () => void) {
    try {
      this.dataSource = await this.db.getDataSource();
      const users = User.create(userSeeds(count, "student"));

      await this.dataSource.getRepository(User).save(users);

      console.log("Users seeded successfully!");

      if (callback) {
        callback();
      }
    } catch (err) {
      console.error("Error while seeding users:", err);
      throw err;
    }
  }

  public async seedPosts(count: number, callback?: () => void) {
    try {
      this.dataSource = await this.db.getDataSource();
      const posts = Post.create(await postSeeds(count));

      await this.dataSource.getRepository(Post).save(posts);

      console.log("Posts seeded successfully!");

      if (callback) {
        callback();
      }
    } catch (err) {
      console.error("Error while seeding posts:", err);
      throw err;
    }
  }
}
