import type { CourseModule } from "@/data/types";

export const module6: CourseModule = {
  id: "module-6",
  order: 6,
  title: "Exceptions and Validation",
  description:
    "Learn to recognize different kinds of errors and handle problems gracefully instead of letting a program crash.",
  lessons: [
    {
      id: "module-6-what-is-an-exception",
      moduleId: "module-6",
      order: 1,
      title: "What an Exception Is",
      comingSoon: true,
      note: "Covered together with Exception Handling",
    },
    {
      id: "module-6-error-types",
      moduleId: "module-6",
      order: 2,
      title: "Compile-Time, Runtime and Logical Errors",
      comingSoon: true,
      note: "Covered together with Exception Handling",
    },
    {
      id: "module-6-exception-handling",
      moduleId: "module-6",
      order: 3,
      title: "Exception Handling",
      objective:
        "Use try, catch and finally to handle invalid input or unexpected errors without crashing the program, and understand common exception types.",
      explanation: `**What it is**

An **exception** is a signal that something unexpected went wrong while a program was running - like dividing by zero, or trying to use a value that was never given. \`try\`, \`catch\` and \`finally\` let a program detect this and respond safely, instead of crashing.

**Three kinds of errors, and why exceptions only cover one of them**

- **Compile-time errors**: mistakes in the code's structure (like a missing semicolon) that stop the program from even compiling. Java tells you before the program ever runs.
- **Runtime errors**: the code compiles fine, but something goes wrong *while running* - like dividing by zero. This is what exceptions are for.
- **Logical errors**: the code runs without crashing, but produces the wrong result because the logic itself is flawed (e.g. using \`+\` when you meant \`-\`). Java cannot detect these for you - only careful testing can.

**Why exception handling is needed**

Real-world input is unpredictable. A student might type letters where a number was expected, or a mark might be missing. Without handling, a single bad input crashes the entire program. With handling, the program can recover and keep running.

**When it is used**

Validating a student's entered mark, safely reading a file, safely converting text typed by a user into a number, handling a missing entry in a list.

**The basic Java syntax**

\`\`\`java
try {
    // risky code that might throw an exception
} catch (SpecificExceptionType e) {
    // runs only if that specific exception happened
} catch (AnotherExceptionType e) {
    // you can have multiple catch blocks for different exception types
} finally {
    // always runs, whether an exception happened or not
}
\`\`\`

You can also \`throw\` an exception yourself (including a custom one you define by extending \`Exception\`), and mark a method with \`throws\` to say it might pass an exception up to whoever calls it.

**Common built-in exceptions you will meet**

| Exception | Happens when... |
|---|---|
| \`ArithmeticException\` | dividing an integer by zero |
| \`NullPointerException\` | using a variable that points to nothing (\`null\`) |
| \`ArrayIndexOutOfBoundsException\` | using an array index that doesn't exist |
| \`NumberFormatException\` | converting invalid text (like \`"abc"\`) into a number |
| \`InputMismatchException\` | a \`Scanner\` expects one type of input but gets another |`,
      analogy:
        "Think of `try` as attempting to hand in a school form at the office. If something is wrong with the form (a `catch` block), the staff member catches the problem calmly, tells you exactly what's wrong, and helps you continue - instead of shutting down the entire office. The `finally` block is like the office always locking the filing cabinet at the end of the day, no matter what happened with any particular form.",
      syntax: `\`\`\`java
try {
    int mark = Integer.parseInt(studentInput);
    System.out.println("Mark accepted: " + mark);
} catch (NumberFormatException e) {
    System.out.println("That is not a valid number. Please enter digits only.");
} finally {
    System.out.println("Finished checking the mark.");
}
\`\`\``,
      exampleCode: `public class Main {

    public static void main(String[] args) {
        String[] studentInputs = {"85", "ninety", "-5"};

        for (String input : studentInputs) {
            try {
                int mark = Integer.parseInt(input);

                if (mark < 0 || mark > 100) {
                    throw new IllegalArgumentException("Mark must be between 0 and 100.");
                }

                System.out.println("Accepted mark: " + mark);
            } catch (NumberFormatException e) {
                System.out.println("\\"" + input + "\\" is not a valid number.");
            } catch (IllegalArgumentException e) {
                System.out.println("Invalid mark: " + e.getMessage());
            } finally {
                System.out.println("Checked input: " + input);
            }
        }
    }
}`,
      exampleExplanation: [
        '`Integer.parseInt(input)` tries to convert text into a number. If the text is not a valid number (like `"ninety"`), Java throws a `NumberFormatException`.',
        "`throw new IllegalArgumentException(...)` manually raises an exception when the mark is out of the valid 0-100 range, even though it was a valid number.",
        "The two `catch` blocks handle two different problems separately: bad text format, versus a valid number that is still out of range.",
        "`finally { ... }` runs after every single input, whether it succeeded or an exception was caught - useful for cleanup or logging that must always happen.",
        '`e.getMessage()` reads the description attached to the exception, which is useful for showing a clear message to the student.',
      ],
      commonMistakes: [
        "Writing an empty `catch` block that silently swallows the error, hiding real bugs instead of handling them.",
        "Catching a very general type like `Exception` when a specific type (like `NumberFormatException`) would give a clearer, more helpful message.",
        "Forgetting that `finally` runs even after a `return` inside the `try` block - it always executes.",
        "Putting code that cannot possibly throw an exception inside a `try` block \"just in case\", which makes code harder to read.",
        "Confusing `throw` (used inside a method to raise one exception, right now) with `throws` (used in a method's signature to declare it might raise an exception).",
      ],
      exercise: {
        id: "module-6-exception-handling-exercise",
        title: "Validate a Club Sign-Up Age",
        instructions:
          "Write a program that processes an array of Strings representing ages typed in by students signing up for a club: {\"14\", \"sixteen\", \"13\"}. For each entry, use a try-catch to attempt Integer.parseInt(...). If it succeeds and the age is at least 13, print \"Accepted age: X\". If it succeeds but the age is below 13, throw and catch an IllegalArgumentException with a clear message. If parsing fails, catch the NumberFormatException and print a message saying the entry was not a valid number. Use a finally block that prints \"Checked entry: <value>\" after every attempt.",
        starterCode: `public class Main {

    public static void main(String[] args) {

        String[] ageInputs = {"14", "sixteen", "9"};

        for (String input : ageInputs) {

            // TODO: Write a try block that:
            //   1. Parses input into an int using Integer.parseInt.
            //   2. If the age is less than 13, throws a new IllegalArgumentException
            //      with a message like "Too young to join this club."
            //   3. Otherwise prints "Accepted age: " + age

            // TODO: Add a catch block for NumberFormatException that prints
            // a message saying the entry was not a valid number.

            // TODO: Add a catch block for IllegalArgumentException that
            // prints the exception's message using e.getMessage().

            // TODO: Add a finally block that prints "Checked entry: " + input



            /* STUDENT CODE STARTS HERE */




            /* STUDENT CODE ENDS HERE */

        }
    }
}`,
        expectedBehaviour:
          'For {"14", "sixteen", "9"}, the program should: accept 14 and print "Accepted age: 14"; reject "sixteen" with a not-a-valid-number message; reject 9 with an IllegalArgumentException message about being too young. A "Checked entry: ..." line should print after every single one of the three entries.',
        conceptsTested: ["try/catch/finally", "throw", "NumberFormatException", "IllegalArgumentException", "input validation"],
        difficulty: "intermediate",
      },
      followUpPrompts: [
        "What is the difference between throw and throws?",
        "How do I create my own custom exception?",
        "Give me another exercise about exception handling.",
      ],
    },
    {
      id: "module-6-try-catch-finally",
      moduleId: "module-6",
      order: 4,
      title: "try, catch, finally",
      comingSoon: true,
      note: "Covered together with Exception Handling",
    },
    {
      id: "module-6-multiple-catch",
      moduleId: "module-6",
      order: 5,
      title: "Multiple Catch Blocks",
      comingSoon: true,
      note: "Covered together with Exception Handling",
    },
    {
      id: "module-6-throw-throws",
      moduleId: "module-6",
      order: 6,
      title: "throw and throws",
      comingSoon: true,
      note: "Covered together with Exception Handling",
    },
    {
      id: "module-6-custom-exceptions",
      moduleId: "module-6",
      order: 7,
      title: "Creating a Custom Exception",
      comingSoon: true,
    },
    {
      id: "module-6-input-validation",
      moduleId: "module-6",
      order: 8,
      title: "Input Validation",
      comingSoon: true,
      note: "Covered together with Exception Handling",
    },
    {
      id: "module-6-common-exceptions",
      moduleId: "module-6",
      order: 9,
      title: "Common Exceptions",
      comingSoon: true,
      note: "Covered together with Exception Handling",
    },
  ],
};
