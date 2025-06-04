export type MediaItem = {
  type: "video" | "writing";
  title: string;
  url: string;
};

export type MediaProps = {
  videos: MediaItem[];
  writings: MediaItem[];
};

export function Media({ videos, writings }: MediaProps) {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto w-full">
      <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">
        Vídeos & Escritas
      </h3>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        <div className="flex-1">
          <h4 className="text-lg font-bold mb-2">Vídeos</h4>
          <ul className="space-y-2">
            {videos.map((video) => (
              <li key={video.title}>
                <a
                  href={video.url}
                  className="text-primary underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {video.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-bold mb-2">Escritas</h4>
          <ul className="space-y-2">
            {writings.map((writing) => (
              <li key={writing.title}>
                <a
                  href={writing.url}
                  className="text-primary underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {writing.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
