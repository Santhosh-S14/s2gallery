import { Modal } from "./modal";
import FullPageImageView from "~/app/components/full-image-view";

export default async function PhotoModal({
  params: { id: photoId },
}: Readonly<{
  params: { id: string };
}>) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");
  return (
    <Modal>
      <FullPageImageView id={idAsNumber} />
    </Modal>
  );
}
