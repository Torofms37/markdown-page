import { createSlice } from '@reduxjs/toolkit'

const textSlice = createSlice({
  //nombramos el slice
  name: 'text',
  //el estado inicial es un objeto principal vacio
  initialState: { value: '' },
  //definimos los reduces
  reducers: {
    //reducer actualiza el texto
    setText: (state, action) => {
      //se actualiza al estado con action.payload
      state.value = action.payload
    },
  },
});

export const { setText } = textSlice.actions;
export default textSlice.reducer;