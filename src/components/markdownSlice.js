import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
  formattedText: "",
};

const markdownSlice = createSlice({
  //nombramos el slice
  name: "markdown",
  //el estado inicial es un objeto principal vacio
  initialState,
  //definimos los reduces
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
      state.formattedText = processMarkdown(action.payload);
    },
  },
});

export const { setText } = markdownSlice.actions;
export default markdownSlice.reducer;

const processMarkdown = (inputText) => {
  const lines = inputText.split("\n");
  let insideCodeBlock = false; // Para rastrear si estamos dentro de un bloque de código
  let result = [];

  lines.forEach((line) => {
    if (line.trim() === "```") {
      // Si encontramos "```", alternamos el estado del bloque de código
      insideCodeBlock = !insideCodeBlock;
      if (insideCodeBlock) {
        result.push("<pre style='background-color: #FFF;'><code>"); // Inicia bloque de código
      } else {
        result.push("</code style='background-color: #FFF;'></pre>"); // Termina bloque de código
      }
    } else if (insideCodeBlock) {
      // Si estamos dentro de un bloque de código, añadimos la línea tal cual
      result.push(
        line
          .replace(/</g, "&lt;") // Escapar caracteres especiales
          .replace(/>/g, "&gt;")
      );
    } else if (line.includes("`")) {
      // Formatea texto dentro de comillas simples invertidas fuera de bloques de código
      const formattedCode = line.replace(/`([^`]*)`/g, (match, p2) => {
        return `<code style="background-color: #FFF; color: black; font-weight: bold">${p2
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")}</code>`;
      });
      result.push(`<p>${formattedCode}</p>`);
    } else {
      // Maneja cualquier otra línea como un párrafo normal
      result.push(`<p>${line}</p>`);
    }
  });

  return result.join("\n");
};