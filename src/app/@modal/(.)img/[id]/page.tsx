import { getImageById } from "~/server/queries";
import { Modal } from "./modal";

export default async function PhotoModal({
  params: { id: photoId },
}: Readonly<{
  params: { id: string };
}>) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");
  const img = await getImageById(idAsNumber);
  return (
    <Modal>
      <img src={img.url} className="h-96 w-96" />
    </Modal>
  );
}
