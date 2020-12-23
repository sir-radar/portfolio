import { reactive, readonly, provide, inject } from 'vue';
let root = document.documentElement;
const saveData = (data) => localStorage.setItem('sam-profile', JSON.stringify(data));
const getData = () => JSON.parse(localStorage.getItem('sam-profile'));

export const stateSymbol = Symbol('state');
export const createState = () => {
  const colors = [
        "#F56C6D",
        "#558D6A",
        "#00B4D9",
        "#15C8C8",
        "#7369B9",
        "#D0A068",
        "#EAD22D",
        "#EB874F",
        "#FDC62A",
        "#EF3E96",
        "#009473",
        "#55606E",
        "#FE8178",
        "#734854",
        "#113F59",
        "#FFD42C",
        "#A0CE4E",
        "#2897AB",
        "#4765A0",
        "#E53F50",
      ];
  const tempState = getData() || { priColor: '#7369B9', theme:'dark', colors }
  const state = reactive(tempState);
  root.style.setProperty('--priColor', state.priColor);
  const setPriColor = (value) => {
    state.priColor =  value;
    root.style.setProperty('--priColor', value);
    saveData(state)
  }
  const setTheme = (value) => {
    state.theme =  value;
    saveData(state)
  }

  return { setPriColor, setTheme, state: readonly(state) };
}
export const useState = () => inject(stateSymbol);
export const provideState = () => provide(
  stateSymbol,
  createState()
);
