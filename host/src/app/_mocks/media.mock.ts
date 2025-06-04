import type { MediaItem } from "../components/Media";

export const mediaData: { videos: MediaItem[]; writings: MediaItem[] } = {
  videos: [
    {
      type: "video",
      title: "Como pensar microfrontends",
      url: "https://youtube.com/henrique-microfrontends",
    },
    {
      type: "video",
      title: "Design para devs",
      url: "https://youtube.com/henrique-design",
    },
  ],
  writings: [
    {
      type: "writing",
      title: "Microfrontends na prática",
      url: "https://blog.example.com/microfrontends",
    },
    {
      type: "writing",
      title: "Design Systems escaláveis",
      url: "https://blog.example.com/design-systems",
    },
  ],
};
