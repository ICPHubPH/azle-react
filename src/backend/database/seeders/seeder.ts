import { DataSource } from "typeorm";
import { Feedback } from "../entities/feedback";
import { Post } from "../entities/post";
import { User } from "../entities/user";
import { Database } from "../index";
import { feedbackSeeds, postSeeds, userSeeds } from "./seed";

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

  public async seedFeedbacks(count: number, callback?: () => void) {
    try {
      this.dataSource = await this.db.getDataSource();
      const feedbacks = Feedback.create(await feedbackSeeds(count));

      await this.dataSource.getRepository(Feedback).save(feedbacks);

      console.log("Feedbacks seeded successfully!");

      if (callback) {
        callback();
      }
    } catch (err) {
      console.error("Error while seeding feedbacks:", err);
      throw err;
    }
  }
}
