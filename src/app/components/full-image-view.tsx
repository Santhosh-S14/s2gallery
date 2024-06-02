import { getImageById } from "~/server/queries";

export default async function FullPageImageView(
  props: Readonly<{ id: number }>,
) {
  const img = await getImageById(props.id);
  return <img src={img.url} className="h-96 w-96" />;
}
