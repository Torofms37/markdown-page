import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
  formattedText: "",
};

const markdownSlice = createSlice({
  name: "markdown",
  initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
      state.formattedText = processMarkdown(action.payload);
    },
  },
});

export const { setText } = markdownSlice.actions;
export default markdownSlice.reducer;

// Procesa el texto Markdown y lo convierte en HTML
const processMarkdown = (inputText) => {
  if (!inputText) return "";

  const lines = inputText.split("\n");

  // Verifica si el contenido es una tabla
  const isTable = lines.length > 1 && lines.every((line) => line.trim().startsWith("|") && line.trim().endsWith("|"));
  if (isTable) return parseTable(inputText);

  return lines.map(parseLine).join("");
};

// Procesa cada línea de Markdown y la convierte en HTML
const parseLine = (line) => {
  const tagMap = [
    { regex: /^# (.*)/, replace: `<h1>$1</h1><hr class="border-line"/>` },
    { regex: /^## (.*)/, replace: `<h2>$1</h2><hr class="border-linet"/>` },
    { regex: /^### (.*)/, replace: `<h3>$1</h3><hr />` },
    { regex: /`([^`]+)`/, replace: `<span style="background-color: #FFF; color: black; font-weight: bold">$1</span>` },
    { regex: /\*([^*]+)\*/, replace: `<strong>$1</strong>` },
    { regex: /_([^_]+)_/, replace: `<span style="font-weight: bold; font-style: italic;">$1</span>` },
    { regex: /\+([^+]+)\+/, replace: `<del>$1</del>` },
    { regex: /\[(.*?)\]\((.*?)\)/, replace: `<a href="$2" target="_blank">$1</a>` },
    { regex: /\|([^|]*)\|/, replace: `<span style="color: green; font-weight: lighter; font-size: 15px;">$1</span>` },
    { regex: /^- (.*)/, replace: `<p>● $1</p>` },
    { regex: /^ {3}- (.*)/, replace: `<p>○ $1</p>` },
    { regex: /^ {6}- (.*)/, replace: `<p>■ $1</p>` },
    { regex: /^1\. (.*)/, replace: `<p><span style="counter-increment: list-number">1. $1</span></p>` },
  ];

  for (const { regex, replace } of tagMap) {
    if (regex.test(line)) {
      return line.replace(regex, replace);
    }
  }

  return `<p>${line}</p>`;
};

// Procesa tablas Markdown y las convierte en HTML
const parseTable = (text) => {
  const lines = text.trim().split("\n").map((line) => line.trim());

  if (lines.length < 2) return `<p>${text}</p>`;

  // Extraer las filas y asegurarse de que todas tengan el mismo número de columnas
  const rows = lines.map((line) => line.split("|").map((cell) => cell.trim()).filter(Boolean));

  const columnCount = Math.max(...rows.map(row => row.length)); // Encuentra la fila con más columnas

  const generateRowHtml = (cells, tag) =>
    `<tr>${cells.map(cell => `<${tag} style="border: 1px solid black; padding: 5px;">${cell}</${tag}>`).join("")}</tr>`;

  const headerHtml = generateRowHtml(rows[0], "th");
  const rowsHtml = rows.slice(1)
    .map(row => generateRowHtml([...row, ...Array(columnCount - row.length).fill("")], "td"))
    .join("");

  return `
    <div style="overflow-x: auto; display: inline-block; max-width: 100%;">
      <table style="border-collapse: collapse; table-layout: auto; width: auto; max-width: 100%; border: 1px solid black;">
        <thead style="background-color: #f2f2f2;">${headerHtml}</thead>
        <tbody>${rowsHtml}</tbody>
      </table>
    </div>`;
};
