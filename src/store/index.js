import { reactive, readonly, provide, inject } from 'vue';
const root = document.documentElement;
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
  const initState = { priColor: '#7369B9', theme:'dark', colors, innerShadow: 'inset 3px 3px 3px #202125, inset -3px -3px 3px #353535', bgColor: '#2c2d30' };
  const tempState = getData() || initState;
  const state = reactive(tempState);
  root.style.setProperty('--priColor', state.priColor);
  root.style.setProperty('--innerShadow', state.innerShadow);
  root.style.setProperty('--bgColor', state.bgColor);
  const setPriColor = (value) => {
    state.priColor =  value;
    root.style.setProperty('--priColor', value);
    saveData(state)
  }
  const setTheme = (value) => {
    state.theme =  value;
    if(value === 'light'){
      state.innerShadow = 'inset 3px 3px 3px #cdcdcd, -3px -3px 3px #fafafa'
      state.bgColor = '#f3f5f8'
    }else{
      state.innerShadow = 'inset 3px 3px 3px #202125, inset -3px -3px 3px #353535';
      state.bgColor = '#2c2d30';
    }
    root.style.setProperty('--innerShadow', state.innerShadow);
    root.style.setProperty('--bgColor', state.bgColor);
    saveData(state);
  }

  return { setPriColor, setTheme, state: readonly(state) };
}
export const useState = () => inject(stateSymbol);
export const provideState = () => provide(
  stateSymbol,
  createState()
);
