import React, { useMemo } from "react";
import { useThemeState } from "../ThemeContext";

function darkenColor(hex, amount) {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = Math.max(0, (num >> 16) - amount);
  const g = Math.max(0, ((num >> 8) & 0x00ff) - amount);
  const b = Math.max(0, (num & 0x0000ff) - amount);
  return `rgb(${r}, ${g}, ${b})`;
}

const CardPreview = React.memo(() => {
  const { primaryColor } = useThemeState();

  const shadowColor = useMemo(
    () => darkenColor(primaryColor, 40),
    [primaryColor]
  );

  return (
    <div
      style={{
        padding: 20,
        background: "#fff",
        boxShadow: `0 4px 10px ${shadowColor}`,
        borderRadius: 8,
      }}
    >
      Card Preview
    </div>
  );
});

export default CardPreview;
