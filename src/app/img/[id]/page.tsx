import FullPageImageView from "~/app/components/full-image-view";

export default async function PhotoPage({
  params: { id: photoId },
}: Readonly<{
  params: { id: string };
}>) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");
  return <FullPageImageView id={idAsNumber} />;
}
