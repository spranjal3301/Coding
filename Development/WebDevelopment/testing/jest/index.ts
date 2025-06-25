export function sum(a:number,b:number){
    return a + b;
}


//! Jest in TypeScript Project

//- Add ts-jest as a dependency
//`` npm install --save-dev ts-jest  @jest/globals


//- Initialize jest.config.ts
//`` npx ts-jest config:init

//- Update package.json
// "scripts": {
//     "test": "jest"
// },

//- Add tests (index.test.ts)
// import {describe, expect, test} from '@jest/globals';
// import {sum} from '../index';

// describe('sum module', () => {
//   test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
//   });
// });

//- Run 
//``` npm run test



