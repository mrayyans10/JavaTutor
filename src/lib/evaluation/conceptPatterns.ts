/**
 * Lightweight keyword/pattern detection used by the mock evaluator (and as a
 * sanity check alongside AI evaluation) to guess whether a submission
 * attempted a given Java concept. This is intentionally simple - it looks
 * for common syntax patterns, not full semantic understanding.
 */
const CONCEPT_PATTERNS: Record<string, RegExp> = {
  "class structure": /\bclass\s+\w+/i,
  "main method": /public\s+static\s+void\s+main/,
  "System.out.println": /System\.out\.println/,
  comments: /\/\/|\/\*/,
  "variable declaration": /\b(int|double|float|long|short|byte|boolean|char|String)\s+\w+\s*=/,
  "variable assignment": /\w+\s*=\s*[^=;]+;/,
  "string concatenation with +": /["'][^"']*["']\s*\+|\+\s*["']/i,
  int: /\bint\b/,
  double: /\bdouble\b/,
  boolean: /\bboolean\b/,
  char: /\bchar\b/,
  "final constants": /\bfinal\b/,
  "if-else": /\bif\s*\(/,
  "comparison operators": /(==|!=|<=|>=|<|>)/,
  "logical and (&&)": /&&/,
  "for loop": /\bfor\s*\(/,
  "loop counters": /\bfor\s*\(/,
  "while loop": /\bwhile\s*\(/,
  "loop conditions": /\bwhile\s*\(/,
  "manual counters": /\+\+|\+=|=\s*\w+\s*\+\s*1/,
  "string concatenation": /\+/,
  "touppercase()": /toUpperCase\(/i,
  "length()": /\.length\(\)/,
  arrays: /\[\s*\]|\[\d*\]/,
  "array traversal with for loop": /for\s*\([\s\S]*\.length/,
  "running totals": /\+=|=\s*\w+\s*\+/,
  "method definition": /(public|private|protected)\s+(static\s+)?\w+(\[\])?\s+\w+\s*\(/,
  parameters: /\w+\s*\(\s*\w+\s+\w+/,
  "return values": /\breturn\b/,
  "boolean logic": /\breturn\s+(true|false|[^;]*[<>=!])/,
  "method overloading": /(public|private|protected)\s+(static\s+)?\w+\s+(\w+)\s*\([^)]*\)[\s\S]*\3\s*\(/,
  "parameter lists": /\([^)]*,[^)]*\)/,
  "method calls": /\w+\([^;]*\)\s*;/,
  classes: /\bclass\s+\w+/,
  fields: /(private|public|protected)\s+\w+(\[\])?\s+\w+\s*;/,
  constructors: /\bpublic\s+[A-Z]\w*\s*\(/,
  "this keyword": /\bthis\./,
  objects: /\bnew\s+[A-Z]\w*\s*\(/,
  "private fields": /\bprivate\s+\w+/,
  getters: /\bget[A-Z]\w*\s*\(/,
  setters: /\bset[A-Z]\w*\s*\(/,
  encapsulation: /\bprivate\b/,
  "input validation": /\bif\s*\([^)]*(<|>|==|!=)/,
  inheritance: /\bextends\b/,
  extends: /\bextends\b/,
  "super()": /\bsuper\s*\(/,
  "subclass constructors": /\bsuper\s*\(/,
  "method overriding": /@Override/,
  "@override": /@Override/,
  "super.method()": /\bsuper\./,
  "try/catch/finally": /\btry\s*\{/,
  throw: /\bthrow\s+new\b/,
  numberformatexception: /NumberFormatException/,
  illegalargumentexception: /IllegalArgumentException/,
  arraylist: /ArrayList/,
  "collections.sort": /Collections\.sort/,
  "add/remove": /\.(add|remove)\s*\(/,
  "size()": /\.size\(\)/,
};

export function conceptLikelyAttempted(concept: string, code: string): boolean {
  const key = concept.trim().toLowerCase();
  const directPattern = CONCEPT_PATTERNS[key];
  if (directPattern) return directPattern.test(code);

  const partialMatch = Object.entries(CONCEPT_PATTERNS).find(
    ([patternKey]) => key.includes(patternKey) || patternKey.includes(key)
  );
  if (partialMatch) return partialMatch[1].test(code);

  const words = key.split(/[^a-z0-9]+/i).filter((w) => w.length > 3);
  if (words.length === 0) return true;
  return words.some((word) => code.toLowerCase().includes(word));
}

export function studentCodeBodyIsEmpty(code: string): boolean {
  const startMarker = "/* STUDENT CODE STARTS HERE */";
  const endMarker = "/* STUDENT CODE ENDS HERE */";
  const startIndex = code.indexOf(startMarker);
  const endIndex = code.indexOf(endMarker);

  if (startIndex === -1 || endIndex === -1 || endIndex <= startIndex) {
    return code.replace(/\/\/.*$/gm, "").trim().length === 0;
  }

  const body = code.slice(startIndex + startMarker.length, endIndex);
  const stripped = body.replace(/\/\/.*$/gm, "").replace(/\/\*[\s\S]*?\*\//g, "").trim();
  return stripped.length === 0;
}

export function hasBalancedBraces(code: string): boolean {
  const pairs: Record<string, string> = { "}": "{", ")": "(", "]": "[" };
  const stack: string[] = [];
  let inString = false;
  let inChar = false;
  let stringQuote = "";

  for (let i = 0; i < code.length; i++) {
    const ch = code[i];
    const prev = code[i - 1];

    if (inString) {
      if (ch === stringQuote && prev !== "\\") inString = false;
      continue;
    }
    if (inChar) {
      if (ch === "'" && prev !== "\\") inChar = false;
      continue;
    }
    if (ch === '"') {
      inString = true;
      stringQuote = '"';
      continue;
    }
    if (ch === "'") {
      inChar = true;
      continue;
    }
    if (ch === "{" || ch === "(" || ch === "[") {
      stack.push(ch);
    } else if (ch === "}" || ch === ")" || ch === "]") {
      if (stack.pop() !== pairs[ch]) return false;
    }
  }

  return stack.length === 0;
}
