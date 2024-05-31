export default async function PhotoModal({
  params: { id: photoId },
}: Readonly<{
  params: { id: string };
}>) {
  return <div>{photoId}</div>;
}
