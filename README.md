# Smaller Validator
This module is small but easy to use. The purpose of this module is to check if the source is smaller in value than the target value, and optionally if there length are equal. This module can work with numbers and strings.
## Validation processes
The code checks that the source is smaller than the value.
## Code sample
This following code is actually how I tested that all methods correctly functioned as intended, is also provided in this module.
```
import { valueIsSmaller } from '@teamcoder/smallervalidator';

console.log( "Testing Condition  1 Passed = " + !valueIsSmaller( 15  , 14          ) );
console.log( "Testing Condition  2 Passed = " + !valueIsSmaller( 'b' , 'a'         ) );
console.log( "Testing Condition  3 Passed = " + valueIsSmaller(  14  , 15          ) );
console.log( "Testing Condition  4 Passed = " + valueIsSmaller(  'a' , 'b'         ) );
console.log( "Testing Condition  5 Passed = " + !valueIsSmaller( 15  , 15  , false ) );
console.log( "Testing Condition  6 Passed = " + !valueIsSmaller( 'a' , 'a' , false ) );
console.log( "Testing Condition  7 Passed = " + valueIsSmaller(  15  , 15  , true  ) );
console.log( "Testing Condition  8 Passed = " + valueIsSmaller(  'a' , 'a' , true  ) );
```
The results will look as follows
```
Testing Condition  1 Passed = true
Testing Condition  2 Passed = true
Testing Condition  3 Passed = true
Testing Condition  4 Passed = true
Testing Condition  5 Passed = true
Testing Condition  6 Passed = true
Testing Condition  7 Passed = true
Testing Condition  8 Passed = true
```
## Function Parameters
### Parameters Passed
```
@param  { String , Number } source   The source value to be checked
@param  { String , Number } target   The target that must be smaller to source
@param  { Boolean         } equal    Check if value is equal as well ( optional , default = false )
```
### Parameters Returned
```
@return { Boolean         }          Validation passed or failed
```
## Notes Before You Start
Very important to remember to always include the following in your main project package.json file:
```
"type": "module"
```
Without this entry in the package file you will get the following error if you try to run your project
```
(node:15500) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use 'node --trace-warnings ...' to show where the warning was created)
C:\Users\ ... \smallervalidator\smallervalidator.js:1
import { valueIsSmaller } from '@teamcoder/smallervalidator';
```
## Version History
| Version  | Date                   | Remark                                                                                                |
|----------|------------------------|-------------------------------------------------------------------------------------------------------|
| 1.0.0    | 06 September 2022      | Official first release                                                                                |
| 1.0.1    | 06 September 2022      | Correcting documentation                                                                              |
| 1.0.2    | 09 September 2022      | Fixed package.json so that npm can install on any os                                                  |
| 1.0.3    | 10 September 2022      | Fixed code to be proper npm package                                                                   |
| 1.0.4    | 11 September 2022      | Removed Default from export function in smallervalidator.js file                                      |
## How To Install
Run the following command in a terminal or command prompt in the folder you want to install the module to.
> npm i @teamcoder/smallervalidator
## Operating Systems Tested On
>Windows, Linux and RaspberryPi
## License Information
SmallerValidator © 2022 by Adriaan J. van Rensburg (CreepyCoderMC) is licensed under CC BY-NC-ND 4.0.
> To view a online copy of this license, visit [http://creativecommons.org/licenses/by-nc-nd/4.0/](http://creativecommons.org/licenses/by-nc-nd/4.0/)