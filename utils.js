const db = require('./db/connection');
const format = require("pg-format");

exports.formatPostedComment = (newComment, article_id) => {
return [newComment.body, article_id, newComment.username, 0, new Date().toISOString()]
}

exports.checkExists = (table, column, value) => {
    const queryString = format(`SELECT * FROM %I WHERE %I = $1;`, table, column);
    return db.query(queryString, [value]).then(({ rows }) => {
        if (!rows.length) {
      return Promise.reject({ status: 404, msg: "Not found!" });
    }
  });
};
