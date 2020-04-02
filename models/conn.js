const pgp = require("pg-promise")({
  query: function(e) {
    console.log("QUERY:", e.query);
  }
});

const options = {
  host: "drona.db.elephantsql.com",
  database: "axvgdzdx",
  user: "axvgdzdx",
  password: "D3Nu4Nntn9C3ZdQBi41uhq0ZKoNkb98W"
};

const db = pgp(options);

module.exports = db;
