import React from "react";
import { ThemeProvider } from "./ThemeContext";

import ButtonPreview from "./previews/ButtonPreview";
import TextPreview from "./previews/TextPreview";
import CardPreview from "./previews/CardPreview";

export default function App() {
  return (
    <ThemeProvider>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <main style={{ padding: 20, flex: 1 }}>
          <ButtonPreview />
          <TextPreview />
          <CardPreview />
        </main>
      </div>
    </ThemeProvider>
  );
}
