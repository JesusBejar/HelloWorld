import { init } from './main';

// add mock setup 
beforeEach(() => {
    // paste html from main here
    document.body.innerHTML = `
      <button id="syntax-btn">Syntax Error</button>
      <button id="generic-btn">Generic Error</button>
      <button id="range-btn">Range Error</button>
      <button id="type-btn">Type Error</button>
      <button id="reference-btn">Reference Error</button>
      
      <div id="syntax-result"></div>
      <div id="generic-result"></div>
      <div id="range-result"></div>
      <div id="type-result"></div>
      <div id="reference-result"></div>
    `;
  });
    // describe 
    // test
    test('should run without errors', () => {
        expect(() => init()).not.toThrow();
      });



// syntax error
// generic error
// range error
// type error
// reference error