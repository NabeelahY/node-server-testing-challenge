exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("hobbies")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("hobbies").insert([
        { name: "Philip", hobby: "Snowboarding" },
        { name: "Jakub", hobby: "Rock climbing" },
        { name: "Jane", hobby: "Parkour" }
      ]);
    });
};
