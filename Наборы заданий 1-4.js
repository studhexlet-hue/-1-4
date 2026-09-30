// ============================================================
// ГРУППА 1
// ============================================================

console.log("========== ГРУППА 1 ==========");

// ---------- 1) sum, multiply, isEven тремя способами ----------

// Function declaration
function sum(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
function isEven(num) {
  return num % 2 === 0;
}

// Function expression
const sumExpr = function (a, b) {
  return a + b;
};
const multiplyExpr = function (a, b) {
  return a * b;
};
const isEvenExpr = function (num) {
  return num % 2 === 0;
};

// Стрелочные функции
const sumArrow = (a, b) => a + b;
const multiplyArrow = (a, b) => a * b;
const isEvenArrow = (num) => num % 2 === 0;

console.log("sum(2, 3):", sum(2, 3));
console.log("multiply(2, 3):", multiply(2, 3));
console.log("isEven(4):", isEven(4));
console.log("sumExpr(2, 3):", sumExpr(2, 3));
console.log("multiplyExpr(2, 3):", multiplyExpr(2, 3));
console.log("isEvenExpr(4):", isEvenExpr(4));
console.log("sumArrow(2, 3):", sumArrow(2, 3));
console.log("multiplyArrow(2, 3):", multiplyArrow(2, 3));
console.log("isEvenArrow(4):", isEvenArrow(4));

// ---------- 2) this в обычном и стрелочном методе ----------

const user = {
  name: "Аня",
  greet: function () {
    console.log(`Привет, я ${this.name}`);
  },
  greetArrow: () => {
    console.log(`Привет, я ${this.name}`);
  }
};

user.greet();       // Привет, я Аня
user.greetArrow();  // Привет, я undefined (или другое значение, зависит от среды)

/*
Объяснение:
- greet — обычная функция. При вызове user.greet() this указывает на объект user,
  поэтому this.name === "Аня".
- greetArrow — стрелочная функция. У стрелочных функций нет своего this.
  Они берут this из внешнего лексического окружения (где объект user был создан).
  В браузере вне модуля это window, в Node.js — module.exports или undefined.
  Поэтому this.name не равно "Аня".
*/

// ---------- 3) Потеря this в setTimeout ----------

const person = {
  name: "Аня",
  greet() {
    console.log(`Привет, я ${this.name}`);
  }
};

// Ошибка: this теряется
// setTimeout(person.greet, 1000);

// Исправление 1: обёртка
setTimeout(() => person.greet(), 1000);

// Исправление 2: bind
setTimeout(person.greet.bind(person), 2000);


// ============================================================
// ГРУППА 2
// ============================================================

console.log("\n========== ГРУППА 2 ==========");

// ---------- 1) product с getTotalPrice ----------

const product = {
  name: "Ноутбук",
  price: 55000,
  quantity: 2,
  getTotalPrice() {
    return this.price * this.quantity;
  }
};

console.log("Общая стоимость продукта:", product.getTotalPrice());

// ---------- 2) student, grades, средняя оценка, деструктуризация ----------

const student = {
  name: "Иван",
  grades: {
    математика: 5,
    физика: 4,
    информатика: 5
  },
  getAverageGrade() {
    const values = Object.values(this.grades);
    const sum = values.reduce((acc, grade) => acc + grade, 0);
    return sum / values.length;
  }
};

console.log("Средняя оценка:", student.getAverageGrade());

const { name, grades } = student;
const { математика, физика, информатика } = grades;

console.log("name:", name);
console.log("математика:", математика);
console.log("физика:", физика);
console.log("информатика:", информатика);

// ---------- 3) mergeObjects без Object.assign и spread ----------

function mergeObjects(obj1, obj2) {
  const result = {};

  for (const key in obj1) {
    if (Object.prototype.hasOwnProperty.call(obj1, key)) {
      result[key] = obj1[key];
    }
  }

  for (const key in obj2) {
    if (Object.prototype.hasOwnProperty.call(obj2, key)) {
      result[key] = obj2[key];
    }
  }

  return result;
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

console.log("mergeObjects:", mergeObjects(obj1, obj2)); // { a: 1, b: 3, c: 4 }


// ============================================================
// ГРУППА 3
// ============================================================

console.log("\n========== ГРУППА 3 ==========");

const products = [
  { name: "Смартфон", price: 25000, category: "electronics" },
  { name: "Ноутбук", price: 55000, category: "electronics" },
  { name: "Наушники", price: 3000, category: "electronics" },
  { name: "Телевизор", price: 40000, category: "electronics" },
  { name: "Хлеб", price: 50, category: "food" },
  { name: "Сыр", price: 700, category: "food" },
  { name: "Кофе", price: 1200, category: "food" },
  { name: "Яблоки", price: 150, category: "food" },
  { name: "Роман", price: 900, category: "books" },
  { name: "Учебник JS", price: 1800, category: "books" },
  { name: "Сборник задач", price: 1100, category: "books" },
  { name: "Футболка", price: 1200, category: "clothes" },
  { name: "Куртка", price: 7500, category: "clothes" },
  { name: "Джинсы", price: 3500, category: "clothes" },
  { name: "Кроссовки", price: 6000, category: "clothes" },
  { name: "Планшет", price: 22000, category: "electronics" }
];

// ---------- 1) filter + map ----------

const expensiveNames = products
  .filter((product) => product.price > 1000)
  .map((product) => product.name);

console.log("Товары дороже 1000:", expensiveNames);

// ---------- 2) reduce: общая стоимость + количество по категориям ----------

const totalPrice = products.reduce((sum, product) => {
  return sum + product.price;
}, 0);

const countByCategory = products.reduce((acc, product) => {
  acc[product.category] = (acc[product.category] || 0) + 1;
  return acc;
}, {});

console.log("Общая стоимость всех товаров:", totalPrice);
console.log("Количество по категориям:", countByCategory);

// ---------- 3) sort по цене + группировка по категориям одним reduce ----------

const sortedByPrice = [...products].sort((a, b) => a.price - b.price);

const groupedByCategory = sortedByPrice.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }
  acc[product.category].push(product);
  return acc;
}, {});

console.log("Отсортированные по цене товары:", sortedByPrice);
console.log("Сгруппированные по категориям:", groupedByCategory);


// ============================================================
// ГРУППА 4
// ============================================================

console.log("\n========== ГРУППА 4 ==========");

let catalog = [
  { id: 1, title: "1984", author: "Джордж Оруэлл", genre: "антиутопия", price: 900, rating: 4.8, year: 1949 },
  { id: 2, title: "Мастер и Маргарита", author: "Михаил Булгаков", genre: "роман", price: 1200, rating: 4.9, year: 1967 },
  { id: 3, title: "Преступление и наказание", author: "Фёдор Достоевский", genre: "роман", price: 1100, rating: 4.7, year: 1866 },
  { id: 4, title: "Гарри Поттер и философский камень", author: "Джоан Роулинг", genre: "фэнтези", price: 1500, rating: 4.8, year: 1997 },
  { id: 5, title: "Хоббит", author: "Дж. Р. Р. Толкин", genre: "фэнтези", price: 1000, rating: 4.6, year: 1937 },
  { id: 6, title: "Дюна", author: "Фрэнк Герберт", genre: "фантастика", price: 1400, rating: 4.7, year: 1965 },
  { id: 7, title: "Чистый код", author: "Роберт Мартин", genre: "программирование", price: 2500, rating: 4.5, year: 2008 },
  { id: 8, title: "JavaScript. Подробное руководство", author: "Дэвид Флэнаган", genre: "программирование", price: 3000, rating: 4.4, year: 2020 },
  { id: 9, title: "Три товарища", author: "Эрих Мария Ремарк", genre: "роман", price: 950, rating: 4.9, year: 1936 }
];

let nextId = Math.max(...catalog.map((item) => item.id), 0) + 1;

function addItem(item) {
  const newItem = { id: nextId++, ...item };
  catalog.push(newItem);
  return newItem;
}

function removeItem(id) {
  const index = catalog.findIndex((item) => item.id === id);
  if (index === -1) return false;

  catalog.splice(index, 1);
  return true;
}

function updateItem(id, changes) {
  const item = findItem(id);
  if (!item) return null;

  Object.assign(item, changes);
  return item;
}

function findItem(id) {
  return catalog.find((item) => item.id === id) || null;
}

function findByField(field, value) {
  return catalog.filter((item) => item[field] === value);
}

function getStats() {
  const count = catalog.length;

  if (count === 0) {
    return {
      count: 0,
      totalPrice: 0,
      averagePrice: 0,
      averageRating: 0,
      byGenre: {}
    };
  }

  const totalPrice = catalog.reduce((sum, item) => sum + item.price, 0);
  const totalRating = catalog.reduce((sum, item) => sum + item.rating, 0);

  const byGenre = catalog.reduce((acc, item) => {
    acc[item.genre] = (acc[item.genre] || 0) + 1;
    return acc;
  }, {});

  return {
    count,
    totalPrice,
    averagePrice: Number((totalPrice / count).toFixed(2)),
    averageRating: Number((totalRating / count).toFixed(2)),
    byGenre
  };
}

function sortBy(field, order = "asc") {
  const direction = order === "desc" ? -1 : 1;

  return [...catalog].sort((a, b) => {
    const valueA = a[field];
    const valueB = b[field];

    if (typeof valueA === "number" && typeof valueB === "number") {
      return (valueA - valueB) * direction;
    }

    return String(valueA).localeCompare(String(valueB), "ru") * direction;
  });
}

// Примеры использования группы 4
console.log("addItem:", addItem({
  title: "Новая книга",
  author: "Автор",
  genre: "роман",
  price: 1000,
  rating: 4.0,
  year: 2024
}));

console.log("findItem(1):", findItem(1));
console.log("findByField('genre', 'роман'):", findByField("genre", "роман"));
console.log("updateItem(1, { price: 999 }):", updateItem(1, { price: 999 }));
console.log("removeItem(9):", removeItem(9));
console.log("getStats():", getStats());
console.log("sortBy('price', 'desc'):", sortBy("price", "desc"));
console.log("sortBy('title', 'asc'):", sortBy("title", "asc"));