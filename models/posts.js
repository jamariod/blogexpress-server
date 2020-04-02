const db = require("./conn");

class Posts {
  constructor(id, blogger, blog_title, blog_post_date, blog) {
    this.id = id;
    this.blogger = blogger;
    this.blog_title = blog_title;
    this.blog_post_date = blog_post_date;
    this.blog = blog;
  }

  static async getAll() {
    try {
      const response = await db.any(`SELECT * FROM posts;`);
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async getById(p_id) {
    try {
      const response = await db.one(`SELECT * FROM posts WHERE id = ${p_id}`);
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async removeEntry(p_id) {
    try {
      const response = await db.result(`DELETE FROM posts WHERE id = ${p_id}`);
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async addEntry(title, author_id, content) {
    const query = `INSERT INTO posts (title, author_id, content) VALUES ('${title}', ${author_id}, '${content}')`;

    try {
      const response = await db.result(query);
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async updateEntry(id, column, content) {
    const query = `UPDATE posts SET ${column} = ${content} WHERE id = '${id}'`;
    try {
      const response = await db.result(query);
      return response;
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = Posts;
