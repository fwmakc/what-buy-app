import './assets/style.css';
import ComparatorComponent from './components/comparator/comparator.component';
import { applyTheme, loadTheme } from './components/theme/helpers/theme.helper';
import ThemeComponent from './components/theme/theme.component';

applyTheme(loadTheme());

console.log('🚀 Application is launched');

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="column">
    <div id="theme-component" class="theme-bar"></div>
    <div id="comparator-component" class="card"></div>
  </div>
`;

ThemeComponent();
ComparatorComponent();
