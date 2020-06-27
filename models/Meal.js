const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MealSchema = new Schema({
  name: {
    type: String
  },
  items: [{
    name: {
      type: String
    },
    quantity: {
      type: String
    },
    protein: {
      type: Number
    },
    carbs: {
      type: Number
    },
    fats: {
      type: Number
    }
  }]
});

module.exports = Meal = mongoose.model('meal', MealSchema);
