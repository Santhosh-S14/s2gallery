/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, index) => (
          <div key={image.id + "-" + index} className="flex w-48 flex-col">
            <img
              src={image.url}
              alt="mock image"
              className="h-full w-full object-cover"
            />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
