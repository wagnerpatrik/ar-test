namespace JSX {
  interface IntrinsicElements {
    "model-viewer": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      src?: string;
      "ios-src"?: string;
      poster?: string;
      alt?: string;
      "shadow-intensity"?: string;
      "camera-controls"?: boolean;
      "auto-rotate"?: boolean;
      ar?: boolean;
    };
  }
}
