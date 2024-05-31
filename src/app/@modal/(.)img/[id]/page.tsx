export default function PhotoModal({
  params: { id: photoId },
}: Readonly<{
  params: { id: string };
}>) {
  return <div>{photoId}</div>;
}
