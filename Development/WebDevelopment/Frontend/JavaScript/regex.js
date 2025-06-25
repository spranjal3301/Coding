//! Regular Expressions
//* Regular expressions are patterns used to match character combinations in strings.
//* In JavaScript, regular expressions are also objects.

//` JS function for regex compatibility

'hello'.match(/hello/); //- returns ["hello"] (return array of matches)
'hello'.replace(/hello/, 'hi'); //- returns "hi" (replace the first match with "hi")
'hello'.search(/hello/); //- returns 0 (returns the index of the first match)


// Regular expressions are created with two syntaxes:
//? 1. Regular expression literal syntax
//? 2. Regular expression constructor syntax



// Regular expression literal syntax
    // The regular expression literal syntax consists of a pattern enclosed between slashes.
    const regex1 = /hello/; //- first pattern matches the string "hello" exactly.


//`Flags
    const regex7 = /hello/i; //- The "i" flag makes the match case-insensitive.
    const regex8 = /hello/g; //- The "g" flag makes the match global, meaning it will find all matches in the string, not just the first one.
    const regex9 = /hello/m; //- The "m" flag makes the match multiline, meaning it will match the beginning and end of each line in a string, not just the beginning and end of the entire string.
    const regex10 = /hello/u; //- The "u" flag enables Unicode matching, allowing the regex to match Unicode characters.
    const regex11 = /hello/y; //- The "y" flag enables sticky matching, meaning the regex will only match at the current position in the string, not just anywhere in the string.
    const regex12 = /hello/s; //- The "s" flag enables dotall mode, allowing the dot (.) to match newline characters as well.


//`special characters ( . * + ? ^ $ | [ ] ( ) { } \ / )
    const regex15 = /(alice | bob)/  //-Bar (|):  Act as OR. 
    const regex16 = /(hello|world)abs/; //- Prantheses ( ) : Grouping.

    const regex17 = /[a-z]/; //- Square brackets [ ] : Matches any character inside the brackets.
    const regex18 = /[^a-z]/; //- Caret (^) inside square brackets: Matches any character not inside the brackets.
    const regex19 = /[a-zA-Z]/; //- Matches any letter (uppercase or lowercase).
    const regex20 = /[0-9]/; //- Matches any digit.
    const regex21 = /[a-zA-Z0-9]/; //- Matches any alphanumeric character.
    const regex22 = /[a-zA-Z0-9_]/; //- Matches any alphanumeric character or underscore.

    const regex23 = /hel?lo/; //- ?: Matches 0 or 1 occurrence of the preceding character. eg: "hello" or "hllo"
    const regex24 = /hel*o/; //- *: Matches 0 or more occurrences of the preceding character. eg: "hello", "hllo", "hlllo", etc.
    const regex25 = /hel+o/; //- +: Matches 1 or more occurrences of the preceding character. eg: "hello", "hlllo", etc.
    //- {} : specify how many times a character or group of characters should be matched:
    const regex4 = /a{2,4}/; // matches "aa", "aaa", or "aaaa"


    //- Dot(.): Matches any single character except newline characters.
    const regex2 = /h.llo/;


    //- The caret (^) : matches the beginning of a string, 
    //- dollar sign ($) matches the end of a string:
    const regex5 = /^hello/; // matches "hello" at the beginning of a string
    const regex6 = /hello$/; // matches "hello" at the end of a string



    const regex3 = /[aeiou]/; // matches any vowel
    



    // Regular expression constructor syntax
    // The regular expression constructor syntax consists of the RegExp constructor function, which takes two arguments:
// 1. The pattern as a string 