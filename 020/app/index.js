import Library from './library';
import component from './component';
import style1 from './style1.css';
import style2 from './style2.css';

document.body.appendChild(component('123456',style1.class1,style2.class1));

// HMR interface
if(module.hot) {
  // Capture hot update
  module.hot.accept('./library', () => {
    console.log('Accepting the updated library module!');
    Library.log();
  });
}
