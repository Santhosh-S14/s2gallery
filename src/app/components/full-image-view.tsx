import { clerkClient } from "@clerk/nextjs/server";
import { getImageById } from "~/server/queries";

export default async function FullPageImageView(
  props: Readonly<{ id: number }>,
) {
  const img = await getImageById(props.id);
  const uploaderInfo = await clerkClient.users.getUser(img.userId!);
  return (
    <div className="flex h-full w-screen">
      <div className="flex items-center justify-center object-contain">
        <img src={img.url} className="object-contain" />
      </div>
      <div className="flex w-48 flex-col border-l">
        <div className="border-b p-2 text-center text-lg font-bold">
          {img.name}
        </div>
        <div className="flex flex-col p-2">
          <span>Uploaded by: </span>
          <span>{uploaderInfo.fullName}</span>
        </div>
        <div className="flex flex-col p-2">
          <span>Created at: </span>
          <span>{new Date(img.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
