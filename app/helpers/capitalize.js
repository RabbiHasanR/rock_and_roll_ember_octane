import { helper } from '@ember/component/helper';
import { capitalize as emberCapitalize } from '@ember/string';

export function capitalize(input) {
  let words = input[0].split(/\s+/).map((word) => {
    return emberCapitalize(word.charAt(0)) + word.slice(1);
  });
  return words.join(' ');
}

export default helper(capitalize);
