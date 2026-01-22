import React from "react";
import { useThemeState } from "../ThemeContext";

const TextPreview = React.memo(() => {
  const { fontSize, textTransform } = useThemeState();

  return (
    <p style={{ fontSize, textTransform }}>
      Texto de ejemplo
    </p>
  );
});

export default TextPreview;
