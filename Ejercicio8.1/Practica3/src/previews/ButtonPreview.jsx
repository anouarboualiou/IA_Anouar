import React from "react";
import { useThemeState } from "../ThemeContext";

const ButtonPreview = React.memo(() => {
  const { primaryColor, fontSize, textTransform } = useThemeState();

  return (
    <button
      style={{
        backgroundColor: primaryColor,
        color: "#fff",
        fontSize,
        textTransform,
        padding: "10px 20px",
        border: "none",
        borderRadius: 6,
      }}
    >
      Botón
    </button>
  );
});

export default ButtonPreview;
