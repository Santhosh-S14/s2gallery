import { getImageById } from "~/server/queries";

export default async function FullPageImageView(
  props: Readonly<{ id: number }>,
) {
  const img = await getImageById(props.id);
  return (
    <div className="flex h-full w-full">
      <div className="flex items-center justify-center object-contain">
        <img src={img.url} className="object-contain" />
      </div>
      <div className="flex flex-col border-l">
        <h1 className="text-2xl font-bold">{img.name}</h1>
      </div>
    </div>
  );
}
