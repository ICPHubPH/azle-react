import { DataSource } from "typeorm";
import { Database } from "../index";
import { User } from "Database/entities/user";
import { bookmarkSeeds, feedbackSeeds, postSeeds, userSeeds } from "./seed";
import { Post } from "Database/entities/post";
import { Feedback } from "Database/entities/feedback";
import { Bookmark } from "Database/entities/bookmark";

export class Seeder {
  private dataSource: DataSource;

  constructor(private db: Database) {}

  public async seedUsers(count: number, role: "student" | "provider", callback?: () => void) {
    try {
      this.dataSource = await this.db.getDataSource();
      const users = User.create(userSeeds(count, role));

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

  public async seedBookmarks(count: number, callback?: () => void) {
    try {
      this.dataSource = await this.db.getDataSource();
      const bookmarks = Bookmark.create(await bookmarkSeeds(count));

      await this.dataSource.getRepository(Bookmark).save(bookmarks);

      console.log("Bookmarks seeded successfully!");

      if (callback) {
        callback();
      }
    } catch (err) {
      console.error("Error while seeding bookmarks:", err);
      throw err;
    }
  }

  
}
