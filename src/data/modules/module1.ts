import type { CourseModule } from "@/data/types";

export const module1: CourseModule = {
  id: "module-1",
  order: 1,
  title: "Java Foundations",
  description:
    "Get comfortable with what Java is, how a Java program is built, and how to store information using variables and data types.",
  lessons: [
    {
      id: "module-1-what-is-java",
      moduleId: "module-1",
      order: 1,
      title: "What Java Is",
      comingSoon: true,
    },
    {
      id: "module-1-installing-java",
      moduleId: "module-1",
      order: 2,
      title: "Installing Java & Using an Online Compiler",
      comingSoon: true,
    },
    {
      id: "module-1-program-structure",
      moduleId: "module-1",
      order: 3,
      title: "Structure of a Java Program",
      objective:
        "Read a small Java program and correctly identify the class, the main method, statements, and comments.",
      explanation: `**What it is**

Every Java program is built from a few basic building blocks that always appear in a certain order. Once you know the pattern, you can read almost any Java file, even a big one.

**Why it is needed**

Java is very strict about structure. If the blocks are missing or in the wrong order, the program will not compile. Learning the pattern once means you will recognize it in every Java program from now on.

**When it is used**

Every single Java program you write in this course - and in real life - starts with this same structure.

**The basic Java syntax**

A Java program has:
- A **class**, which is a container for your code (\`public class Main { ... }\`)
- A **main method**, which is where the program starts running (\`public static void main(String[] args) { ... }\`)
- **Statements** inside the main method, each ending with a semicolon \`;\`
- Optional **comments**, which are notes for humans that Java ignores`,
      analogy:
        "Think of a Java program like the School Activity Management System's front office building. The **class** is the building itself. The **main method** is the front door - it's the only entrance the school (the computer) uses to start letting people in. **Statements** are the tasks staff do once inside, one after another. **Comments** are sticky notes on the wall that explain things to other staff, but visitors (the computer) walk right past them.",
      syntax: `\`\`\`java
public class ClassName {

    public static void main(String[] args) {
        // Statements go here, one per line, ending with ;
    }
}
\`\`\``,
      exampleCode: `public class Main {

    public static void main(String[] args) {
        // Welcome message for the School Activity Management System
        System.out.println("Welcome to the School Activity Management System");
        System.out.println("Today's session: Club Sign-ups");
    }
}`,
      exampleExplanation: [
        "`public class Main {` starts a class named `Main`. The file that holds this code must be named `Main.java`.",
        "`public static void main(String[] args) {` is the main method. Java always looks for this exact line to know where to start running your program.",
        '`System.out.println("...");` prints text to the screen, then moves to a new line. `System` and `out` are built-in Java tools for showing output.',
        "The closing braces `}` mark the end of the main method and then the end of the class. Every opening `{` needs a matching closing `}`.",
        "The line starting with `//` is a comment. Java skips it completely - it is only there to help humans understand the code.",
      ],
      commonMistakes: [
        "Forgetting a semicolon `;` at the end of a statement.",
        "Misspelling `main` as `Main` or `String[] args` as something else - Java needs this line written exactly right.",
        "Naming the file differently from the public class name (a public class `Main` must live in `Main.java`).",
        "Forgetting to close a curly brace `}`, which causes the whole program to fail to compile.",
        "Mixing up `System.out.println` (adds a new line after) with `System.out.print` (does not).",
      ],
      exercise: {
        id: "module-1-program-structure-exercise",
        title: "Print a School Announcement",
        instructions:
          "The School Activity Management System needs a small program that prints a two-line announcement about today's school event. Write a complete Java program from scratch (your own class name is fine) whose main method prints exactly two lines of text of your choice, for example the event name and the location.",
        starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Print two lines about a school event.
        // Line 1: the name of the event, e.g. "Annual Sports Day"
        // Line 2: the location, e.g. "School Main Ground"



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
        expectedBehaviour:
          "When run, the program should print two separate lines of text to the console, with no error messages. For example, it could print \"Annual Sports Day\" on the first line and \"School Main Ground\" on the second line.",
        conceptsTested: ["class structure", "main method", "System.out.println"],
        difficulty: "beginner",
      },
      followUpPrompts: [
        "Can you show me what happens if I misspell 'main'?",
        "Why does the file name have to match the class name?",
        "Give me another example program to read.",
      ],
    },
    {
      id: "module-1-main-method",
      moduleId: "module-1",
      order: 4,
      title: "The Main Method",
      comingSoon: true,
      note: "Covered together with Structure of a Java Program",
    },
    {
      id: "module-1-printing-output",
      moduleId: "module-1",
      order: 5,
      title: "Printing Output",
      comingSoon: true,
      note: "Covered together with Structure of a Java Program",
    },
    {
      id: "module-1-comments",
      moduleId: "module-1",
      order: 6,
      title: "Comments",
      comingSoon: true,
      note: "Covered together with Structure of a Java Program",
    },
    {
      id: "module-1-variables",
      moduleId: "module-1",
      order: 7,
      title: "Variables",
      objective:
        "Declare variables with sensible names and types, and use them to store and update information about a student.",
      explanation: `**What it is**

A variable is a labeled box in the computer's memory that stores a piece of information, such as a name or a number. You give the box a name and a type, and the computer remembers the value for you.

**Why it is needed**

Programs need to remember things - a student's name, a score, whether an event is full. Without variables, a program could only work with values typed directly into the code, and it could never react to changing information.

**When it is used**

Variables are used everywhere: storing a student's grade, counting how many people signed up for a club, remembering the current page a user is on, and much more.

**The basic Java syntax**

\`\`\`java
type variableName = value;
\`\`\`

You can also declare a variable first and give it a value later:

\`\`\`java
type variableName;
variableName = value;
\`\`\``,
      analogy:
        "Imagine the school office has a row of labeled lockers. One locker is labeled \"studentName\", another \"studentAge\". Whenever you want to know a student's name, you look inside the \"studentName\" locker. You can also open a locker and replace its contents - a variable works the same way: it holds a value, and you can change that value later.",
      syntax: `\`\`\`java
String studentName = "Amara";
int studentAge = 15;
studentAge = 16; // updating the value later
\`\`\``,
      exampleCode: `public class Main {

    public static void main(String[] args) {
        String studentName = "Amara";
        int studentAge = 15;
        double studentAverage = 87.5;

        System.out.println("Student: " + studentName);
        System.out.println("Age: " + studentAge);
        System.out.println("Average mark: " + studentAverage);

        // A birthday happened, so we update the age
        studentAge = 16;
        System.out.println("Updated age: " + studentAge);
    }
}`,
      exampleExplanation: [
        '`String studentName = "Amara";` creates a variable named `studentName` that stores text (a `String`).',
        "`int studentAge = 15;` creates a variable that stores a whole number.",
        "`double studentAverage = 87.5;` creates a variable that stores a number with decimal places.",
        '`System.out.println("Student: " + studentName);` joins text and a variable together with `+` and prints the result.',
        "`studentAge = 16;` changes the value already stored in `studentAge`. Notice there is no type written this time - the variable already exists.",
      ],
      commonMistakes: [
        "Trying to use a variable before giving it a value.",
        "Writing the type again when only updating a value, e.g. `int studentAge = 16;` a second time in the same block (Java will not allow declaring the same variable twice).",
        "Mismatching the type and the value, such as `int studentAge = \"15\";` (a number type cannot hold text in quotes).",
        "Using unclear names like `x` or `a1` instead of descriptive names like `studentAge`.",
        "Forgetting that variable names are case-sensitive: `studentAge` and `StudentAge` are two different variables.",
      ],
      exercise: {
        id: "module-1-variables-exercise",
        title: "Store a New Club Member's Details",
        instructions:
          "The School Activity Management System is registering a new member for the Chess Club. Create variables to store the member's name, age and the club name, print them, then simulate the member having a birthday by updating the age variable and printing it again.",
        starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Declare a String variable for the member's name.
        // TODO: Declare an int variable for the member's age.
        // TODO: Declare a String variable for the club name, e.g. "Chess Club".
        // TODO: Print all three values with a short label for each.
        // TODO: Update the age variable to simulate a birthday (add 1 year).
        // TODO: Print the updated age.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
        expectedBehaviour:
          "The program should print the member's name, starting age, and club name, then print the age again after it has been increased by one year. No text should be missing or printed as blank.",
        conceptsTested: ["variable declaration", "variable assignment", "String concatenation with +"],
        difficulty: "beginner",
      },
      followUpPrompts: [
        "What happens if I try to change a variable's type later?",
        "Show me a simpler example with just one variable.",
        "Give me another exercise about variables.",
      ],
    },
    {
      id: "module-1-data-types",
      moduleId: "module-1",
      order: 8,
      title: "Java Data Types",
      objective:
        "Choose the correct Java data type (int, double, float, long, short, byte, boolean, char or String) for a piece of information, and convert between types safely.",
      explanation: `**What it is**

A data type tells Java what *kind* of value a variable can hold, and how much memory to use for it. Java is "strongly typed", which means every variable must have a declared type that never changes.

**Why it is needed**

Different kinds of information need to be stored differently. A whole number, a decimal number, a single letter, and a yes/no answer are not the same thing to a computer - each needs its own type so Java knows how to store and use it correctly.

**When it is used**

Every variable you create needs a type. Picking the right one keeps your program accurate (no lost decimal places) and efficient (not wasting memory on tiny numbers).

**The main types you will use**

| Type | Stores | Example |
|---|---|---|
| \`int\` | whole numbers | \`int age = 16;\` |
| \`double\` | decimal numbers (most common) | \`double average = 91.75;\` |
| \`float\` | decimal numbers, less precise, rarely needed | \`float gpa = 3.8f;\` |
| \`long\` | very large whole numbers | \`long studentId = 20250001234L;\` |
| \`short\` | small whole numbers, rarely needed | \`short grade = 10;\` |
| \`byte\` | tiny whole numbers, rarely needed | \`byte absences = 2;\` |
| \`boolean\` | true or false | \`boolean isPresent = true;\` |
| \`char\` | one single character | \`char grade = 'A';\` |
| \`String\` | text (a sequence of characters) | \`String name = "Amara";\` |

**Type conversion and casting**

Java sometimes needs help moving a value from one type to another:
- **Widening** (safe, automatic): \`int\` to \`double\` happens automatically because no information is lost.
- **Narrowing** (needs a cast): \`double\` to \`int\` needs you to write \`(int)\` in front, and it will cut off the decimal part.

\`\`\`java
double average = 91.75;
int roundedDown = (int) average; // 91, the decimal part is dropped
\`\`\`

**Constants using \`final\`**

If a value should never change, mark it with \`final\`:

\`\`\`java
final int MAX_CLUB_MEMBERS = 20;
\`\`\``,
      analogy:
        "Think of the school's record system as a set of different forms. A form for a whole number of absences only has boxes for digits (like `int`). A form for a percentage average has boxes for a decimal point too (like `double`). A form for \"present or absent\" only has two checkboxes (like `boolean`). Using the wrong form for the wrong information causes confusion - the same is true for choosing the wrong Java type.",
      syntax: `\`\`\`java
int wholeNumber = 10;
double decimalNumber = 10.5;
boolean trueOrFalse = true;
char oneCharacter = 'A';
String text = "Hello";
final int CONSTANT_VALUE = 100;
\`\`\``,
      exampleCode: `public class Main {

    public static void main(String[] args) {
        String studentName = "Diego";
        int age = 16;
        double examScore = 88.5;
        char letterGrade = 'B';
        boolean isEnrolled = true;
        final int MAX_MARK = 100;

        System.out.println(studentName + " is " + age + " years old.");
        System.out.println("Score: " + examScore + " out of " + MAX_MARK);
        System.out.println("Letter grade: " + letterGrade);
        System.out.println("Currently enrolled: " + isEnrolled);

        // Narrowing conversion: double -> int, needs a cast
        int roundedScore = (int) examScore;
        System.out.println("Rounded down score: " + roundedScore);
    }
}`,
      exampleExplanation: [
        "`String studentName = \"Diego\";` stores text inside double quotes.",
        "`char letterGrade = 'B';` stores exactly one character inside single quotes. Note: `String` uses double quotes, `char` uses single quotes.",
        "`boolean isEnrolled = true;` can only ever be `true` or `false` - nothing else.",
        "`final int MAX_MARK = 100;` cannot be changed later in the program. Trying to reassign it would cause a compile error.",
        "`int roundedScore = (int) examScore;` converts a `double` into an `int` using a cast. The decimal part (`.5`) is simply cut off, not rounded mathematically.",
      ],
      commonMistakes: [
        "Using double quotes for a `char` (must use single quotes: `'A'`, not `\"A\"`).",
        "Assuming `(int)` rounds to the nearest whole number - it actually just cuts off the decimal part.",
        "Forgetting the `L` suffix on very large whole number literals meant for `long` variables.",
        "Trying to reassign a `final` variable after it has already been given a value.",
        "Using `float` or `double` for money or exact values where precision surprises can occur - being aware of this now will help later.",
      ],
      exercise: {
        id: "module-1-data-types-exercise",
        title: "Build a Student Record Snapshot",
        instructions:
          "Create variables to represent one student's record for the School Activity Management System: their name (String), age (int), average mark (double), whether they are on the honor roll (boolean), and their grade letter (char). Print a short summary using all five variables. Then create a `final` constant for the maximum possible mark (100) and print it too.",
        starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Declare a String variable for the student's name.
        // TODO: Declare an int variable for the student's age.
        // TODO: Declare a double variable for the student's average mark.
        // TODO: Declare a boolean variable for honor roll status.
        // TODO: Declare a char variable for the student's grade letter, e.g. 'A'.
        // TODO: Declare a final int constant named MAX_MARK set to 100.
        // TODO: Print a summary line using all the variables above.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
        expectedBehaviour:
          "The program should print one or more lines that clearly show the student's name, age, average mark, honor roll status, grade letter, and the maximum possible mark (100), with no compile errors.",
        conceptsTested: ["int", "double", "boolean", "char", "final constants"],
        difficulty: "beginner",
      },
      followUpPrompts: [
        "What is the difference between float and double?",
        "Show me another casting example.",
        "Give me another exercise about data types.",
      ],
    },
    {
      id: "module-1-type-conversion",
      moduleId: "module-1",
      order: 9,
      title: "Type Conversion and Casting",
      comingSoon: true,
      note: "Covered together with Java Data Types",
    },
    {
      id: "module-1-constants",
      moduleId: "module-1",
      order: 10,
      title: "Constants Using final",
      comingSoon: true,
      note: "Covered together with Java Data Types",
    },
    {
      id: "module-1-operators",
      moduleId: "module-1",
      order: 11,
      title: "Operators",
      comingSoon: true,
    },
  ],
};
