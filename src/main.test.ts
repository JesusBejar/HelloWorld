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
    test('should handle syntax error button click', () => {
        init();
        
        const syntaxBtn = document.querySelector('#syntax-btn') as HTMLElement;
        const syntaxResult = document.querySelector('#syntax-result') as HTMLElement;
        
        syntaxBtn.click();
        
        expect(syntaxResult.textContent).toBe('Error: Syntax error!');
    });
    // generic error
    test('should handle generic error button click', () => {
        init();
        
        const genericBtn = document.querySelector('#generic-btn') as HTMLElement;
        const genericResult = document.querySelector('#generic-result') as HTMLElement;
        
        genericBtn.click();
        
        expect(genericResult.textContent).toBe('Error: Generic error!');
    });
    // range error
    test('should handle range error button click', () => {
        init();
        
        const rangeBtn = document.querySelector('#range-btn') as HTMLElement;
        const rangeResult = document.querySelector('#range-result') as HTMLElement;
        
        rangeBtn.click();
        
        expect(rangeResult.textContent).toBe('Error: Range error!');
    });
    // type error
    test('should handle type error button click', () => {
        init();
        
        const typeBtn = document.querySelector('#type-btn') as HTMLElement;
        const typeResult = document.querySelector('#type-result') as HTMLElement;
        
        typeBtn.click();
        
        expect(typeResult.textContent).toBe('Error: Type error!');
    });
    // reference error
    test('should handle reference error button click', () => {
        init();
        
        const referenceBtn = document.querySelector('#reference-btn') as HTMLElement;
        const referenceResult = document.querySelector('#reference-result') as HTMLElement;
        
        referenceBtn.click();
        
        expect(referenceResult.textContent).toBe('Error: Reference error!');
    });

    test('should attach event listeners to all btns', () => {
        init();
        
        // check all buttons exist
        const buttons = [
          '#syntax-btn',
          '#generic-btn', 
          '#range-btn',
          '#type-btn',
          '#reference-btn'
        ];
        
        buttons.forEach(selector => {
          const button = document.querySelector(selector) as HTMLElement;
          expect(button).toBeTruthy();
          expect(() => button.click()).not.toThrow();
        });
      });