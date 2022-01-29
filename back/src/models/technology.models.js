const { connection } = require("../../db-connection");

class Technology {
  static findAll() {
    const sql =
      "SELECT t.*, c.title as category, uc.title as under_category FROM technology as t LEFT JOIN category as c ON t.category_id=c.id LEFT JOIN under_category as uc ON uc.id=t.under_category_id";
    return connection.promise().query(sql);
  }

  static findOneById(id) {
    const sql = "SELECT * FROM technology WHERE id=?";
    return connection.promise().query(sql, [id]);
  }

  static createOne(technology) {
    const sql = "INSERT INTO technology SET ?";
    return connection.promise().query(sql, [technology]);
  }

  static updateOne(technology, id) {
    const sql = "UPDATE technology SET ? WHERE id=?";
    return connection.promise().query(sql, [technology, id]);
  }

  static deleteOne(id) {
    const sql = "DELETE FROM technology WHERE id=?";
    return connection.promise().query(sql, [id]);
  }

  static findCategories() {
    const sql = "SELECT t.*, c.title FROM category as c INNER JOIN technology as t ON t.category_id=c.id";
    return connection.promise().query(sql, []);
  }

  static findUnderCategories() {
    const sql = "SELECT u.*, c.title FROM under_category as c INNER JOIN technology as u ON u.under_category_id=c.id";
    return connection.promise().query(sql, []);
  }
}

module.exports = Technology;
