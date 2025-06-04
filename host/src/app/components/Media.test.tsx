import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Media, MediaProps } from "./Media";

describe("Media", () => {
  const props: MediaProps = {
    videos: [
      {
        type: "video",
        title: "Como pensar microfrontends",
        url: "https://youtube.com/henrique-microfrontends",
      },
    ],
    writings: [
      {
        type: "writing",
        title: "Microfrontends na prática",
        url: "https://blog.example.com/microfrontends",
      },
    ],
  };

  it("renderiza o título do vídeo", () => {
    render(<Media {...props} />);
    expect(screen.getByText("Como pensar microfrontends")).toBeInTheDocument();
  });

  it("renderiza o título da escrita", () => {
    render(<Media {...props} />);
    expect(screen.getByText("Microfrontends na prática")).toBeInTheDocument();
  });
});
