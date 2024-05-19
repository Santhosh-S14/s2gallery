import Link from "next/link";

export default function HomePage() {
  const mockUrls = [
    "https://utfs.io/f/dbad9f40-ea2d-497c-81e3-fb1d5aaa63ce-1x9zs6.png",
    "https://utfs.io/f/1c3c943a-bd95-41f3-ae1c-963c4fa4c6f9-1xbb9e.png",
    "https://utfs.io/f/cc2ff4a9-51d6-428d-9d9e-87aefb3ddf10-1xcjol.png",
    "https://utfs.io/f/80797e0a-c614-4b89-a613-1f1fd8b4be43-1xamrh.png",
  ];

  const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url,
  }));
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="h-48 w-48">
            <img
              src={image.url}
              alt="mock image"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
