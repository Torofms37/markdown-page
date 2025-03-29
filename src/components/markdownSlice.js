import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  text: '',
  formattedText: '',
};


const markdownSlice = createSlice({
  //nombramos el slice
  name: 'markdown',
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
  return inputText
  .split('\n')
  .map((line) => {
    if (line.startsWith("# ")) {
      return `<h1>${line.replace("# ", "")}</h1><hr class="border-line"/>`;
    } else if (line.startsWith("## ")) {
      return `<h2>${line.replace("## ", "")}</h2><hr class="border-line"/>`;
    } else if (line.startsWith("### ")) {
      return `<h3>${line.replace("### ", "")}</h3><hr />`;
    } else if (/`(.+?)`/g.test(line)) {
      return line.replace(/`(.+?)`/g, `<span style="background-color: #FFF; color: black; font-weight: bold">$1</span>`);
    } else if (/\*\*(.+?)\*\*/g.test(line)) {
      return line.replace(/\*\*(.+?)\*\*/g, `<strong>$1</strong>`);
    } else {
      return `<p>${line}</p>`;
    }
  })
  .join("");
}