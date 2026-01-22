import React from "react";
import { useThemeDispatch, useThemeState } from "./ThemeContext";

const Sidebar = React.memo(() => {
  const dispatch = useThemeDispatch();
  const { primaryColor, textTransform } = useThemeState();

  return (
    <aside style={{ padding: 20, width: 250 }}>
      <h3>Editor de Tema</h3>

      <label>Color primario</label>
      <input
        type="color"
        value={primaryColor}
        onChange={(e) =>
          dispatch({
            type: "SET_PRIMARY_COLOR",
            payload: e.target.value,
          })
        }
      />

      <br /><br />

      <label>Tamaño de texto</label>
      <input
        type="range"
        min="12"
        max="32"
        onChange={(e) =>
          dispatch({
            type: "SET_FONT_SIZE",
            payload: Number(e.target.value),
          })
        }
      />

      <br /><br />

      <label>Transformación</label>
      <div>
        {["none", "uppercase", "lowercase", "capitalize"].map((t) => (
          <button
            key={t}
            onClick={() =>
              dispatch({
                type: "SET_TEXT_TRANSFORM",
                payload: t,
              })
            }
            style={{
              fontWeight: textTransform === t ? "bold" : "normal",
            }}
          >
            {t}
          </button>
        ))}
      </div>
    </aside>
  );
});

export default Sidebar;
