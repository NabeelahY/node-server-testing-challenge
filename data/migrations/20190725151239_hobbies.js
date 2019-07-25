exports.up = function(knex) {
  return knex.schema.createTable("hobbies", tbl => {
    tbl.increments();
    tbl.string("name", 255).notNullable();
    tbl.string("hobby", 255).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("hobbies");
};
