// place files you want to import through the `$lib` alias in this folder.

// or
function or(a: boolean, b: boolean): boolean {
  return a || b;
}

// not
function not(a: boolean, b: boolean): boolean {
  return !a && !b;
}

// exclusive or
function xor(a: boolean, b: boolean): boolean {
  return a !== b;
}

// and
function and(a: boolean, b: boolean): boolean {
  return a && b;
}

