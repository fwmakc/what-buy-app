import './assets/style.css';
import AppInfoComponent from './components/app_info/app_info.component';
import CounterComponent from './components/counter/counter.component';
import FileComponent from './components/file/file.component';
import MainInfoComponent from './components/main_info/main_info.component';

console.log('🚀 Application is launched');

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="column">
    <div id="main-info-component" class="card"></div>
    <div id="counter-component" class="card"></div>
    <div id="app-info-component" class="card"></div>
    <div id="file-component" class="card"></div>
  </div>
`;

AppInfoComponent();
CounterComponent();
FileComponent();
MainInfoComponent();
