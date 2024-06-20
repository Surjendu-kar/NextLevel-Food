import Link from "next/link";

export default function Community() {
  return (
    <main>
      <h1>Meals Page</h1>
      <p>
        <Link
          href={"/meals/chicken-biryani"}
          style={{ textDecoration: "none" }}
        >
          Chicken Biryani
        </Link>
      </p>
      <p>
        <Link href={"/meals/chicken-tikka"} style={{ textDecoration: "none" }}>
          Chicken Tikka
        </Link>
      </p>
      <p>
        <Link href={"/meals/paneer-tikka"} style={{ textDecoration: "none" }}>
          Paneer Tikka
        </Link>
      </p>
    </main>
  );
}
