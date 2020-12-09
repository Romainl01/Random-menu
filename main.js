const menu = {
    _courses : {
      appetizers: [] ,
      mains: [],
      desserts: []
    },
    get appetizer () {
        return this._courses.appetizers;
    },
    set appetizer (appetizer) {
   this._courses.appetizers = appetizer;
    },
    get mains () {
        return this._courses.mains;
    },
    set mains (main) {
   this._courses.mains = main;
  
    },
    get desserts () {
        return this._courses.desserts;
    },
    set desserts (dessert) {
   this._courses.desserts = dessert;
    },
    get courses () {
        return {
          appetizers: this.appetizers,
          mains: this.mains,
          desserts: this.desserts
        }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
          name: dishName, 
          price: dishPrice
        };
        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random()*dishes.length);
      return dishes[randomIndex];
    },
    generateRandomMeal: function() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
  
      return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} The price is $${totalPrice}.`;
  
    }
  
  }  
  
  let meal = menu.generateRandomMeal();
  console.log(meal);