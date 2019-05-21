import { FormControl } from '@angular/forms';


// create custom validator:
export function restrictedWords(words) {
      return (control: FormControl): {[key: string]: any} => {

      if (!words) {
        return null;
      }
      const invalidWords = words
        .map((w: any) =>  // loop through every word and check if one includes that word
        control.value.includes(w) ? w : null) // retrun that word if it includes it, or return null if not
        .filter(w => w != null); // filter out the 'null' words

        // now invalidWords contains any invalid words used

      return invalidWords && invalidWords.length > 0 // find out if any invalidWords exist or not
      ? {restrictedWords: invalidWords.join(',')} // return this if invalidWords exist
      : null; // return this if not
    };
  }
