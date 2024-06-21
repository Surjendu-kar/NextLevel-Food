import Image from "next/image";
import classes from "./page.module.css";
import { getMealDetails } from "@/lib/meals";
import { notFound } from "next/navigation";

export default function Allmeals({ params }) {
  const mealsDetails = getMealDetails(params.slug);

  if (!mealsDetails) notFound(); // called no-found.js
  mealsDetails.instructions = mealsDetails.instructions.replace(
    /\n/g,
    "<br />"
  );
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image
            src={`/images/${mealsDetails.image}`}
            alt={mealsDetails.title}
            fill
          ></Image>
        </div>
        <div className={classes.headerText}>
          <h1>{mealsDetails.title}</h1>
          <p className={classes.creator}>
            by{" "}
            <a href={`mailto:${mealsDetails.creator_email}`}>
              {mealsDetails.creator}
            </a>
          </p>
          <p className={classes.summary}>{mealsDetails.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: mealsDetails.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
