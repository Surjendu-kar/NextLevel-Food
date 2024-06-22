import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss"; // cross site scripting
import fs from "node:fs"; // its allow us to work with file system

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  // throw new Error("error occur");
  return db.prepare("SELECT * FROM meals").all(); // all used to fetch multiple data and get used to fetch single row
}

export function getMealDetails(slug) {
  // db.prepare("DELETE FROM meals WHERE slug = ?").run("paneer-tikka"); // used to delete
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug); // get used to fetch single column
}

export async function saveMeals(meal) {
  meal.slug = slugify(meal.title, { lower: true }); // make the title in lower case
  meal.instructions = xss(meal.instructions); // clean instructions

  //store the image in the public folder
  const extension = meal.image.name.split(".").pop();
  //here we create a newFileName to store the image
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`); // make a writable stream for the purpose of writing data to a file
  // console.log(stream);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(
    Buffer.from(bufferedImage, (error) => {
      if (error) throw new Error("Saving image failed!");
    })
  );
  meal.image = `${fileName}`; // store the new

  console.log(meal.image);
  // store into the database
  db.prepare(
    `
     INSERT INTO meals (
         slug,
         title,
         image,
         summary,
         instructions,
         creator,
         creator_email
      )
      VALUES (
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
    `
  ).run(meal);
}
