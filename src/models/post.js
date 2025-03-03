import db from "../Db_conncetion/database.js";

const db_name = "backenddev";

class Post {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }

  save() {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = d.getMonth() + 1;
    const dd = d.getDate();

    const createdAtDate = `${yyyy}-${mm}-${dd}`;

    const sql = `
    INSERT INTO ${db_name}.posts(
      title,
      body,
      created_at
    )
    VALUES(
      '${this.title}',
      '${this.body}',
      '${createdAtDate}'
    );
    `;

    return db.execute(sql);
  }

  static findAll() {
    const sql = `SELECT * FROM backenddev.posts;`;
    return db.execute(sql);
  }

  static findById(id) {
    const sql = `SELECT * FROM ${db_name}.posts WHERE id = ${id};`;
    return db.execute(sql);
  }
}

export default Post;