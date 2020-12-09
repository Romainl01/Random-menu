const menu = {
    _courses : {
      appetizers: [] ,
      mains: [],
      desserts: []
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
  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
  menu.addDishToCourse('appetizers', 'Jules Salad', 3.25);
  menu.addDishToCourse('appetizers', 'Romain Salad', 2.25);
  
  menu.addDishToCourse('mains', 'Pasta', 5.25);
  menu.addDishToCourse('mains', 'Rice', 6.25);
  menu.addDishToCourse('mains', 'Hamburger', 7.25);
  
  menu.addDishToCourse('desserts', 'Apple', 1.25);
  menu.addDishToCourse('desserts', 'Pear', 1.5);
  menu.addDishToCourse('desserts', 'Peach', 1.75);

  
  let meal = menu.generateRandomMeal();
  console.log(meal);