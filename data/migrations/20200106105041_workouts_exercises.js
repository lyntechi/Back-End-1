exports.up = function(knex) {
    return knex.schema.createTable('workouts_exercises', tbl => {
        tbl.increments();
  
        tbl.integer('reps').notNullable();
        tbl.integer('sets').notNullable();
  
        tbl.integer('workout_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('workouts')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
  
        tbl.integer('exercise_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('exercises')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('workouts_exercises');
  };