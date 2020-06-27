const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// category eg. push, pull, legs couldn't think of a better name

const WorkoutSchema = new Schema({
  name: {
    type: String
  },
  category: {
    type: String
  },
  day: {
    type: String
  },
  warmUpSets: {
    type: Number
  },
  warmUpReps: {
    type: String
  },
  workSets: {
    type: Number
  },
  workReps:{
    type: String
  }
});

module.exports = Meal = mongoose.model('meal', MealSchema);
