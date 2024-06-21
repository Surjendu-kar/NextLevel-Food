import sql from "better-sqlite3";
const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("error occur");
  return db.prepare("SELECT * FROM meals").all(); // all used to fetch multiple data and get used to fetch single row
}

export function getMealDetails(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug); // get used to fetch single column
}
