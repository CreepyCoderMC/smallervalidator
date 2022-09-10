import { valueIsSmaller } from '@teamcoder/smallervalidator';

console.log( "Testing Condition  1 Passed = " + !valueIsSmaller( 15  , 14          ) );
console.log( "Testing Condition  2 Passed = " + !valueIsSmaller( 'b' , 'a'         ) );
console.log( "Testing Condition  3 Passed = " + valueIsSmaller(  14  , 15          ) );
console.log( "Testing Condition  4 Passed = " + valueIsSmaller(  'a' , 'b'         ) );
console.log( "Testing Condition  5 Passed = " + !valueIsSmaller( 15  , 15  , false ) );
console.log( "Testing Condition  6 Passed = " + !valueIsSmaller( 'a' , 'a' , false ) );
console.log( "Testing Condition  7 Passed = " + valueIsSmaller(  15  , 15  , true  ) );
console.log( "Testing Condition  8 Passed = " + valueIsSmaller(  'a' , 'a' , true  ) );