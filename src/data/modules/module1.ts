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
      objective:
        "Explain in simple terms what Java is, why schools and companies use it, and recognize your very first Java program.",
      explanation: `**What it is**

Java is a **programming language** - a way of writing instructions that a computer can follow exactly. "Writing Java" means typing these instructions into a text file, which a special tool then turns into something the computer can run.

**Why it is needed**

Computers only understand very low-level instructions. Programming languages like Java let humans write instructions in a way that is much easier to read, write, and fix - then a tool translates that into what the computer actually needs.

**When it is used**

Java is used to build things like Android apps, large business systems (banks, schools, hospitals), and web servers. One reason it's so popular: a Java program can run on almost any computer without being rewritten, because of a small helper program called the **JVM** (Java Virtual Machine) - you don't need to understand the JVM deeply yet, just know it's *why* Java works "everywhere."

**Your first look at Java syntax**

Every Java program you write will start with a pattern like this - don't worry about understanding every word yet, that comes in the next few lessons:

\`\`\`java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, world!");
    }
}
\`\`\``,
      analogy:
        "Think of Java like a shared school announcement system that works the exact same way in every classroom, every building, on every campus - a teacher writes one announcement once, and it plays correctly no matter which room it's read in. That's similar to how a Java program can run on a Windows computer, a Mac, or a phone, all without being rewritten for each one.",
      syntax: `\`\`\`java
public class Main {
    public static void main(String[] args) {
        System.out.println("This line is Java code.");
    }
}
\`\`\``,
      exampleCode: `public class Main {

    public static void main(String[] args) {
        System.out.println("Hello, world!");
        System.out.println("This is my very first Java program.");
    }
}`,
      exampleExplanation: [
        "This tiny program is often called \"Hello, World!\" - it's the traditional first program almost every programmer writes in a new language.",
        '`System.out.println("Hello, world!");` tells the computer to display that exact text on the screen.',
        "You will learn exactly what each surrounding line means (`public class Main`, `public static void main`) in the very next lesson - for now, just recognize the overall shape.",
        "Every line inside the curly braces `{ }` is an instruction the computer follows, one after another, from top to bottom.",
      ],
      commonMistakes: [
        "Expecting Java code to run immediately after typing it - it must first be checked and translated (\"compiled\") before it can run.",
        "Thinking you need to memorize every symbol right away - it's normal to recognize the pattern before fully understanding each part.",
        "Confusing Java with JavaScript - they share part of a name but are different languages used for different things.",
        "Worrying that mistakes mean you're bad at this - literally every programmer's first programs have errors; that's a normal part of learning.",
      ],
      exercise: {
        id: "module-1-what-is-java-exercise",
        title: "Write Your Own Hello World",
        instructions:
          "Using the exact same overall shape as the worked example above, write your own version that prints a two-line greeting: your own personal welcome message on the first line, and a short sentence on the second line saying what you hope to learn in this course.",
        starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Print a personal welcome message on the first line.
        // TODO: Print a sentence about what you hope to learn on the second line.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
        expectedBehaviour:
          "The program should print exactly two lines of text you wrote yourself, with no error messages.",
        conceptsTested: ["System.out.println", "class structure"],
        difficulty: "beginner",
      },
      followUpPrompts: [
        "What does the JVM actually do?",
        "What kinds of apps are built with Java?",
        "Give me another simple program to look at.",
      ],
    },
    {
      id: "module-1-installing-java",
      moduleId: "module-1",
      order: 2,
      title: "Installing Java & Using an Online Compiler",
      objective:
        "Get set up to write and run Java code, either by installing Java locally or by using a free online compiler, and successfully run a first program.",
      explanation: `**What it is**

Before Java code can run, two things are needed: the **JDK** (Java Development Kit - the tools that translate and run Java code) installed on a computer, OR an **online compiler** - a website that lets you type and run Java code with nothing installed at all.

**Why it is needed**

Your computer doesn't understand Java out of the box. Either you install the JDK once on your own computer, or you use a website that already has it installed on its servers. Either way works for learning.

**When it is used**

You'll use whichever setup you choose every time you want to actually run (not just read) a Java program - including the exercises in this course, since JavaTutor doesn't run your code for you yet (you paste your finished code and any output here after running it elsewhere).

**Two ways to get started**

1. **Online compiler (fastest to start, no installation):** sites like replit.com, onlinegdb.com, or programiz.com/java-programming/online-compiler let you paste Java code into a browser tab and click "Run".
2. **Install Java locally:** download a JDK (like Eclipse Temurin), plus a code editor (like VS Code or IntelliJ IDEA), then run code from a terminal or the editor's "Run" button.

**Basic syntax reminder**

Whichever method you choose, you'll be typing the same Java code:

\`\`\`java
public class Main {
    public static void main(String[] args) {
        System.out.println("It works!");
    }
}
\`\`\``,
      analogy:
        "Choosing between an online compiler and installing Java locally is a bit like choosing between using a school library's computer (already set up, ready immediately) versus setting up your own computer at home (takes longer once, but it's yours to keep configuring). Both let you do the same schoolwork.",
      syntax: `\`\`\`java
public class Main {
    public static void main(String[] args) {
        System.out.println("It works!");
    }
}
\`\`\``,
      exampleCode: `public class Main {

    public static void main(String[] args) {
        System.out.println("If you can see this message,");
        System.out.println("your Java setup is working correctly!");
    }
}`,
      exampleExplanation: [
        "This program doesn't teach a new concept - it's a simple check that whichever setup you chose (online compiler or installed JDK) is working.",
        "If both lines print with no red error text, your setup is ready for the rest of this course.",
        "If you see an error instead, it's most likely a small typo - compare your code carefully to the example, character by character.",
      ],
      commonMistakes: [
        "Naming the file something other than Main.java when the class is named Main - most tools require this to match exactly.",
        "Forgetting to click \"Run\" (or the equivalent button) after pasting code into an online compiler.",
        "Copying code with extra invisible characters from some sources, which can cause confusing errors - typing it out yourself is often more reliable while learning.",
        "Giving up after the first error message instead of reading it - most beginner errors point almost directly at the mistake.",
      ],
      exercise: {
        id: "module-1-installing-java-exercise",
        title: "Confirm Your Java Setup Works",
        instructions:
          "Open an online Java compiler (or your installed setup), paste the starter code below, and change the message so it prints your own name and today's date on two separate lines. Run it externally first, then paste your final code - and the exact output you saw - into the submission area below.",
        starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Print your own name on the first line.
        // TODO: Print today's date (as text) on the second line.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
        expectedBehaviour:
          "Running the program in your chosen Java environment should print your name, then the date, on two separate lines, with no error messages.",
        conceptsTested: ["System.out.println", "class structure"],
        difficulty: "beginner",
      },
      followUpPrompts: [
        "What's the difference between a JDK and a code editor?",
        "Which online compiler would you recommend for a beginner?",
        "What should I do if I get an error I don't understand?",
      ],
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
      objective:
        "Explain what each word in `public static void main(String[] args)` means, and correctly write a main method from scratch without copying it.",
      explanation: `**What it is**

The main method is the exact line Java looks for to know where a program should start running. Its full form is always: \`public static void main(String[] args)\`.

**Why it is needed**

A Java program might contain many methods (you'll learn to write your own soon), but Java needs one clear, agreed-upon starting point. Without a correctly written main method, a program will not run at all - even if everything else is perfect.

**When it is used**

Every single Java program that runs on its own (rather than being used as a helper by another program) needs exactly one main method.

**Breaking down each word**

| Word | Meaning |
|---|---|
| \`public\` | Any part of the program is allowed to start this method (Java itself needs this). |
| \`static\` | This method belongs to the whole program, not to one specific object (you'll understand this fully once you reach Object-Oriented Programming). |
| \`void\` | This method does not send any value back when it finishes. |
| \`main\` | The exact required name Java searches for. |
| \`(String[] args)\` | A list of text values that can optionally be passed in when the program starts (rarely needed for now). |

**The basic Java syntax**

\`\`\`java
public static void main(String[] args) {
    // your program's instructions go here
}
\`\`\``,
      analogy:
        "Think of the main method like the \"Start\" button on a school's morning announcement system. No matter how many announcements exist, the system always looks for that one specific button, worded and wired up in exactly the expected way, before anything can play. Wire it up differently, and nothing starts.",
      syntax: `\`\`\`java
public static void main(String[] args) {
    // this is where a Java program begins
}
\`\`\``,
      exampleCode: `public class Main {

    public static void main(String[] args) {
        System.out.println("The program has started.");
        System.out.println("Everything inside main() runs from top to bottom.");
    }
}`,
      exampleExplanation: [
        "`public static void main(String[] args)` is written exactly this way - Java will not recognize a differently-worded line as the starting point.",
        "The curly braces `{ }` mark where the method's instructions begin and end.",
        "Both `println` lines run in order, from top to bottom, because that's how Java executes code inside any method.",
      ],
      commonMistakes: [
        "Writing `public static void Main` (capital M) instead of `main` - Java is case-sensitive.",
        "Forgetting `static`, which causes a \"cannot find main method\" style error.",
        "Writing `String args[]` instead of `String[] args` - both actually work in Java, but `String[] args` is the standard style you should learn first.",
        "Adding extra unnecessary words that don't belong in the signature, like changing `void` to something else.",
      ],
      exercise: {
        id: "module-1-main-method-exercise",
        title: "Fix the Broken Main Method",
        instructions:
          "Below is a program with a broken main method signature - it's missing a required word. Without looking back at the lesson's example, fix the signature so the program compiles and prints its two lines correctly.",
        starterCode: `public class Main {

    // TODO: This main method signature is missing a required word.
    // Fix it so the program compiles.
    public void main(String[] args) {

        System.out.println("Attendance system starting...");
        System.out.println("Ready to record today's attendance.");
    }
}`,
        expectedBehaviour:
          'Once fixed, the program should compile with no errors and print "Attendance system starting..." followed by "Ready to record today\'s attendance."',
        conceptsTested: ["main method", "class structure"],
        difficulty: "beginner",
      },
      followUpPrompts: [
        "Why does main need to be static?",
        "What is String[] args actually used for?",
        "Give me another broken main method to fix.",
      ],
    },
    {
      id: "module-1-printing-output",
      moduleId: "module-1",
      order: 5,
      title: "Printing Output",
      objective:
        "Use System.out.println and System.out.print correctly, and use simple escape sequences to format printed text.",
      explanation: `**What it is**

Printing output means displaying text on the screen so a person running the program can see it. In Java, this is done with \`System.out.println(...)\` or \`System.out.print(...)\`.

**Why it is needed**

A program that never shows anything is very hard to use or test. Printing lets a program communicate results, instructions, or status messages to whoever is running it.

**When it is used**

Showing a welcome message, displaying a calculated result, reporting an error, or - while learning - simply checking that a piece of code ran the way you expected.

**println vs. print**

- \`System.out.println(...)\` prints the text, then moves to a new line - the next print starts fresh underneath.
- \`System.out.print(...)\` prints the text but stays on the same line - the next print continues right after it.

**A few useful escape sequences**

Inside a String, a backslash followed by a letter has a special meaning:
- \`\\n\` starts a new line
- \`\\t\` inserts a tab (some extra space)
- \`\\"\` inserts an actual quote mark inside a String

**The basic Java syntax**

\`\`\`java
System.out.println("This line ends with a new line.");
System.out.print("This stays ");
System.out.print("on the same line.");
System.out.println("\\nA tab:\\tright there.");
\`\`\``,
      analogy:
        "Think of `println` like writing a note and then tearing off the page - the next note starts on a brand-new page. `print` is like continuing to write on the same page without tearing it off - your next words appear right where the last ones ended.",
      syntax: `\`\`\`java
System.out.println("Prints, then moves to a new line.");
System.out.print("Prints, and stays on this line ");
System.out.println("- so this continues right here.");
\`\`\``,
      exampleCode: `public class Main {

    public static void main(String[] args) {
        System.out.println("=== Attendance Report ===");
        System.out.print("Present: ");
        System.out.println(27);
        System.out.print("Absent: ");
        System.out.println(3);
        System.out.println("Note:\\tAll absences have been recorded.");
    }
}`,
      exampleExplanation: [
        '`System.out.println("=== Attendance Report ===");` prints a title line, then moves to a new line.',
        '`System.out.print("Present: ");` stays on the same line, so the number printed right after appears next to it, not below it.',
        "`System.out.println(27);` finishes that line by printing the number and then moving to a new line.",
        '`System.out.println("Note:\\tAll absences have been recorded.");` uses `\\t` to add a tab of space after the word "Note:".',
      ],
      commonMistakes: [
        "Using `print` when you meant `println`, causing multiple pieces of output to run together on one line unintentionally.",
        "Forgetting the backslash before `n` or `t`, and typing a literal letter n or t instead of a real new line or tab.",
        'Trying to print a quote mark without escaping it, e.g. writing "She said "hi"" instead of "She said \\"hi\\"".',
        "Printing far too many separate small print statements when one combined println with concatenation would be clearer.",
      ],
      exercise: {
        id: "module-1-printing-output-exercise",
        title: "Print a Formatted Club Roster Header",
        instructions:
          "Print a small header for a club roster: a title line, then a line that uses print (not println) to show \"Members: \" followed immediately by the number 15 on the same line, then a final line using \\t to show \"Status:\" followed by a tab and the word \"Open\".",
        starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Print a title line, e.g. "=== Chess Club Roster ==="
        // TODO: Use print (not println) to print "Members: ", then print the number 15
        //       so it appears on the same line.
        // TODO: Print a line using \\t between "Status:" and "Open"



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
        expectedBehaviour:
          'The program should print a title line, then a line that reads "Members: 15" all on one line (built using print, not println), then a line with "Status:" and "Open" separated by a tab.',
        conceptsTested: ["System.out.println", "escape sequences"],
        difficulty: "beginner",
      },
      followUpPrompts: [
        "What other escape sequences exist besides \\n and \\t?",
        "When would I actually want to use print instead of println?",
        "Give me another exercise about printing output.",
      ],
    },
    {
      id: "module-1-comments",
      moduleId: "module-1",
      order: 6,
      title: "Comments",
      objective:
        "Write single-line and multi-line comments that explain the purpose of code, without over-commenting or under-commenting.",
      explanation: `**What it is**

A comment is a note written inside your code, for humans to read, that Java completely ignores when running the program.

**Why it is needed**

Code explains *what* happens, step by step - but not always *why*. A comment can explain the reasoning, a tricky decision, or a warning for the next person reading the code (often, that next person is you, a few weeks later!).

**When it is used**

Explaining why a particular rule or number was chosen, temporarily disabling a line of code while testing, or leaving a short note about something that still needs finishing (often marked \`TODO\`, just like the placeholders in this course's exercises).

**Two kinds of comments**

\`\`\`java
// A single-line comment - everything after // on this line is ignored.

/*
 A multi-line comment.
 Everything between /* and *\\/ is ignored,
 even across several lines.
*/
\`\`\`

**A good rule of thumb:** comment on *why*, not *what*. \`// increase count by 1\` above \`count++;\` tells you nothing new. \`// track how many students have checked in today\` explains the *purpose*.`,
      analogy:
        "Think of comments like sticky notes a teacher leaves on a lesson plan for a substitute teacher: they don't change what happens in the classroom, but they explain *why* the plan is structured a certain way - so the substitute (or future you) doesn't have to guess.",
      syntax: `\`\`\`java
// This is a single-line comment.

/*
 This is a multi-line comment,
 useful for longer explanations.
*/
\`\`\``,
      exampleCode: `public class Main {

    public static void main(String[] args) {
        // Maximum members allowed before the waitlist opens
        int maxMembers = 20;

        /*
         The club currently has 18 members.
         We check this against maxMembers before allowing new sign-ups.
        */
        int currentMembers = 18;

        System.out.println("Spots remaining: " + (maxMembers - currentMembers));
    }
}`,
      exampleExplanation: [
        '`// Maximum members allowed before the waitlist opens` explains *why* the number 20 matters, not just that it exists.',
        "The multi-line comment gives extra context about the current situation, spanning several lines for readability.",
        "Neither comment affects what the program actually calculates or prints - removing them would not change the output at all.",
      ],
      commonMistakes: [
        "Commenting on something completely obvious, like `// declare a variable` above every single line - this clutters code instead of helping.",
        "Forgetting to close a multi-line comment with `*/`, which accidentally comments out far more code than intended.",
        "Leaving old, outdated comments that no longer match what the code actually does, which can mislead the next reader.",
        "Never commenting at all on a tricky or non-obvious decision, leaving future readers (including yourself) confused later.",
      ],
      exercise: {
        id: "module-1-comments-exercise",
        title: "Explain a Club Budget Calculation",
        instructions:
          "Below is a working program with no comments at all. Add a single-line comment above the first variable explaining why that specific number was chosen, and a multi-line comment above the final calculation explaining what it represents and why it's useful. Do not add a comment above every single line - only where it genuinely helps.",
        starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Add a single-line comment above this explaining why $150 was chosen.
        double annualBudget = 150.0;

        double amountSpent = 42.50;

        // TODO: Add a multi-line comment above this line explaining what
        // "amountRemaining" represents and why the club might check it.
        double amountRemaining = annualBudget - amountSpent;

        System.out.println("Remaining budget: $" + amountRemaining);
    }
}`,
        expectedBehaviour:
          "The program's output should be unchanged (\"Remaining budget: $107.5\"), but the code should now include one clear single-line comment and one clear multi-line comment, each explaining the reasoning behind a specific part of the code.",
        conceptsTested: ["comments", "System.out.println"],
        difficulty: "beginner",
      },
      followUpPrompts: [
        "How much commenting is too much?",
        "What is a TODO comment used for?",
        "Give me another exercise about writing good comments.",
      ],
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
      objective:
        "Explain the difference between widening and narrowing conversions, and use casting to safely convert between numeric types and char.",
      explanation: `**What it is**

Type conversion means turning a value of one type into another type. Java does some conversions automatically, and requires you to explicitly request others using a **cast**.

**Why it is needed**

Sometimes information arrives in one type but is needed in another - a mark might be typed as text but needs to be treated as a number, or a precise decimal average might need to be shown as a rounded whole number.

**When it is used**

Converting a \`double\` average down to a whole number for a simpler report, converting a \`char\` grade into its underlying numeric code, or combining values of different numeric types in one calculation.

**Widening vs. narrowing**

- **Widening** (automatic, always safe): moving to a type that can hold *more* information, like \`int\` to \`double\`. No cast needed - Java does it for you.
- **Narrowing** (needs an explicit cast): moving to a type that can hold *less* information, like \`double\` to \`int\`. You must write the cast yourself, because Java wants you to acknowledge that some information (like decimal places) might be lost.

**The basic Java syntax**

\`\`\`java
int wholeNumber = 10;
double asDecimal = wholeNumber;    // widening: automatic, no cast needed

double average = 91.75;
int roundedDown = (int) average;   // narrowing: needs a cast, drops the .75

char letterGrade = 'A';
int asciiCode = letterGrade;       // char to int is a widening conversion too - 'A' becomes 65
\`\`\``,
      analogy:
        "Think of narrowing like pouring a full glass of water into a smaller cup - some water is going to spill out (information is lost), so Java makes you deliberately choose to do it with a cast. Widening is like pouring a small cup into a bigger glass - nothing spills, so Java lets it happen automatically.",
      syntax: `\`\`\`java
double preciseValue = 88.9;
int wholeValue = (int) preciseValue; // cast: explicit narrowing
\`\`\``,
      exampleCode: `public class Main {

    public static void main(String[] args) {
        double examAverage = 87.6;

        // Widening: int to double happens automatically, no cast needed
        int wholeScore = 90;
        double wholeScoreAsDecimal = wholeScore;
        System.out.println("Widened automatically: " + wholeScoreAsDecimal);

        // Narrowing: double to int needs an explicit cast
        int roundedDown = (int) examAverage;
        System.out.println("Narrowed with a cast: " + roundedDown);

        // char to int reveals the character's underlying numeric code
        char letterGrade = 'A';
        int gradeCode = letterGrade;
        System.out.println("'A' as a number is: " + gradeCode);
    }
}`,
      exampleExplanation: [
        "`double wholeScoreAsDecimal = wholeScore;` widens an `int` into a `double` with no cast - Java does this conversion automatically since no information is lost.",
        "`int roundedDown = (int) examAverage;` narrows a `double` into an `int`, requiring an explicit `(int)` cast, and drops the decimal part (`.6`).",
        "`int gradeCode = letterGrade;` shows that a `char` is really stored as a number behind the scenes - `'A'` is the number 65.",
      ],
      commonMistakes: [
        "Forgetting the cast when narrowing, which causes a compile error like \"incompatible types\".",
        "Believing a cast rounds mathematically - `(int) 9.9` gives `9`, not `10`; it always truncates (cuts off) rather than rounding.",
        "Casting far more aggressively than needed, like casting a value to `int` early in a calculation and losing precision before it's actually needed.",
        "Assuming you can cast any type to any other type - Java only allows casts between compatible types, like numeric types and `char`.",
      ],
      exercise: {
        id: "module-1-type-conversion-exercise",
        title: "Convert a Mark for a Simplified Report",
        instructions:
          "Store a precise exam average as a double (e.g. 76.85). Print it. Then create a widened double copy of an int variable of your choice and print it (showing automatic widening). Finally, cast the exam average down to an int and print that too (showing narrowing with a cast).",
        starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Declare a double examAverage with a decimal value and print it.
        // TODO: Declare an int variable, then widen it into a new double
        //       variable (no cast needed) and print it.
        // TODO: Cast examAverage into a new int variable and print it.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
        expectedBehaviour:
          "For examAverage = 76.85, the program should print 76.85, then a widened double version of your int variable (unchanged in value, just now a double), then 76 (the cast, decimal-truncated version of examAverage).",
        conceptsTested: ["int", "double"],
        difficulty: "intermediate",
      },
      followUpPrompts: [
        "Why doesn't casting round to the nearest whole number?",
        "What happens if I cast a double that's negative, like -4.7?",
        "Give me another exercise about casting.",
      ],
    },
    {
      id: "module-1-constants",
      moduleId: "module-1",
      order: 10,
      title: "Constants Using final",
      objective:
        "Use the final keyword to create constants, follow Java's naming convention for them, and explain why constants make programs safer and clearer.",
      explanation: `**What it is**

A constant is a variable whose value is set once and can never be changed afterward. In Java, you create one by adding the keyword \`final\` before the type.

**Why it is needed**

Some values genuinely should never change while a program runs - like the maximum possible mark on a test (100), or the number of days in a week. Marking them \`final\` lets Java catch you (with a compile error) if you or a teammate accidentally try to change them later.

**When it is used**

Defining a fixed maximum club size, a fixed passing mark, a fixed tax rate, or any other value that represents a rule rather than something that changes during the program.

**Naming convention**

By strong convention, constants are named in **ALL_CAPS with underscores** between words, so they stand out clearly from regular variables.

**The basic Java syntax**

\`\`\`java
final int MAX_CLUB_MEMBERS = 20;
final double PASSING_MARK = 50.0;
\`\`\`

Trying to write \`MAX_CLUB_MEMBERS = 25;\` later in the program would cause a compile error, because a \`final\` variable can only be given a value once.

**Why avoid "magic numbers"**

A "magic number" is a raw value like \`20\` typed directly into code with no explanation, e.g. \`if (members < 20)\`. If that number is used in five places and needs to change, you'd have to find and update all five. A named constant fixes this - update it in one place.`,
      analogy:
        "Think of a `final` constant like a school rule posted on the wall, like \"Maximum 20 students per classroom.\" Everyone can *read* the rule as often as they like, but no single teacher is allowed to just change the number on their own - if the rule ever needs to change, it has to be updated in one official place, not quietly altered wherever it's mentioned.",
      syntax: `\`\`\`java
final int MAX_CLUB_MEMBERS = 20;
// MAX_CLUB_MEMBERS = 25; // this would NOT compile
\`\`\``,
      exampleCode: `public class Main {

    public static void main(String[] args) {
        final int MAX_CLUB_MEMBERS = 20;
        final double PASSING_MARK = 50.0;

        int currentMembers = 18;
        double studentMark = 62.0;

        System.out.println("Spots remaining: " + (MAX_CLUB_MEMBERS - currentMembers));
        System.out.println("Mark needed to pass: " + PASSING_MARK);
        System.out.println("This student's mark: " + studentMark);
    }
}`,
      exampleExplanation: [
        "`final int MAX_CLUB_MEMBERS = 20;` and `final double PASSING_MARK = 50.0;` are both constants, written in ALL_CAPS by convention.",
        "Both constants are used in calculations and messages, but never reassigned anywhere in the program - if they were, Java would refuse to compile.",
        "Regular variables like `currentMembers` and `studentMark` can still be changed freely, since they aren't marked `final`.",
      ],
      commonMistakes: [
        "Trying to reassign a `final` variable after its first assignment, causing a compile error.",
        "Naming a constant like a regular variable (e.g. `maxMembers` instead of `MAX_MEMBERS`), which makes it harder to spot at a glance.",
        "Using magic numbers directly in code instead of naming them as constants, making the code harder to update later.",
        "Declaring a `final` variable without giving it a value right away and then never assigning one - it must be given a value before it's used.",
      ],
      exercise: {
        id: "module-1-constants-exercise",
        title: "Replace Magic Numbers With Constants",
        instructions:
          "The program below calculates whether a student passed using the number 50 typed directly into the code twice - a \"magic number\". Rewrite it to declare a `final` constant named PASSING_MARK set to 50, and use that constant everywhere the number 50 currently appears.",
        starterCode: `public class Main {

    public static void main(String[] args) {

        double studentMark = 64.0;

        // TODO: Declare a final double constant named PASSING_MARK set to 50.
        // TODO: Replace both uses of the number 50 below with PASSING_MARK.

        System.out.println("Passing mark is: " + 50);
        System.out.println("This student's mark: " + studentMark);
        System.out.println("Points above passing: " + (studentMark - 50));
    }
}`,
        expectedBehaviour:
          "The printed output should stay exactly the same as before (Passing mark is: 50, etc.), but the code should no longer contain the raw number 50 anywhere except inside the PASSING_MARK constant's own declaration.",
        conceptsTested: ["final constants", "double"],
        difficulty: "beginner",
      },
      followUpPrompts: [
        "What happens if I try to change a final variable?",
        "Why do constants use ALL_CAPS names?",
        "Give me another exercise about constants.",
      ],
    },
    {
      id: "module-1-operators",
      moduleId: "module-1",
      order: 11,
      title: "Operators",
      objective:
        "Use arithmetic operators, increment/decrement operators, and compound assignment operators to calculate and update values.",
      explanation: `**What it is**

An operator is a symbol that performs an action on one or more values, like \`+\` for addition. Java has several groups of operators - this lesson covers the arithmetic ones used for calculations.

**Why it is needed**

Almost every useful program needs to calculate something: a total, an average, a remaining count. Operators are the basic building blocks for those calculations.

**When it is used**

Adding up marks, calculating a percentage, counting down available spots, or updating a running total as new information comes in.

**Arithmetic operators**

| Operator | Meaning | Example |
|---|---|---|
| \`+\` | addition | \`5 + 2\` is \`7\` |
| \`-\` | subtraction | \`5 - 2\` is \`3\` |
| \`*\` | multiplication | \`5 * 2\` is \`10\` |
| \`/\` | division | \`5 / 2\` is \`2\` for ints (decimal part dropped!), \`2.5\` for doubles |
| \`%\` | modulus (remainder after division) | \`5 % 2\` is \`1\` |

**Increment and decrement**

\`\`\`java
int count = 5;
count++; // same as count = count + 1;  now count is 6
count--; // same as count = count - 1;  now count is 5
\`\`\`

**Compound assignment operators**

These combine a calculation with an assignment in one step:

\`\`\`java
int total = 10;
total += 5;  // same as total = total + 5;  now total is 15
total -= 3;  // same as total = total - 3;  now total is 12
total *= 2;  // same as total = total * 2;  now total is 24
\`\`\`

Note: comparing values (\`==\`, \`<\`, \`>\`) and combining true/false conditions (\`&&\`, \`||\`) are their own topics, covered fully in the next module on decisions.`,
      analogy:
        "Think of operators like the buttons on a simple calculator at the school store's checkout counter: \`+\` adds an item's price to the running total, \`-\` removes a returned item, and the register's \"add one more\" button behaves just like \`++\` - a fast shortcut for a very common action.",
      syntax: `\`\`\`java
int total = 0;
total += 5;   // total is now 5
total++;      // total is now 6
int remainder = total % 4; // remainder is 2
\`\`\``,
      exampleCode: `public class Main {

    public static void main(String[] args) {
        int booksCheckedOut = 0;

        booksCheckedOut += 3; // three students each check out one book
        System.out.println("Books checked out: " + booksCheckedOut);

        booksCheckedOut++; // one more student checks out a book
        System.out.println("Books checked out: " + booksCheckedOut);

        int totalCopies = 10;
        int copiesLeft = totalCopies - booksCheckedOut;
        System.out.println("Copies left: " + copiesLeft);

        int groupSize = 3;
        int leftoverStudents = 20 % groupSize;
        System.out.println("Students left over after grouping by " + groupSize + ": " + leftoverStudents);
    }
}`,
      exampleExplanation: [
        "`booksCheckedOut += 3;` adds 3 to the running total in one step, instead of writing `booksCheckedOut = booksCheckedOut + 3;`.",
        "`booksCheckedOut++;` adds exactly 1 to the total - a common shortcut used constantly in loops (which you'll meet in the next module).",
        "`int copiesLeft = totalCopies - booksCheckedOut;` uses plain subtraction to calculate a new value.",
        "`20 % groupSize` calculates the remainder after dividing 20 students into groups of `groupSize` - useful for finding \"leftover\" amounts.",
      ],
      commonMistakes: [
        "Forgetting that dividing two `int` values drops the decimal part - `7 / 2` is `3`, not `3.5`. To get a decimal result, at least one value needs to be a `double`.",
        "Confusing `%` (remainder) with `/` (division) - `%` tells you what's left over, not the divided result.",
        "Writing `count = count++;` and expecting it to behave simply - mixing `++` with an assignment on the same variable in one line can be confusing; keep it on its own line while learning.",
        "Using `+=`, `-=`, etc. on a variable that hasn't been given a starting value yet.",
      ],
      exercise: {
        id: "module-1-operators-exercise",
        title: "Track a Club's Snack Budget",
        instructions:
          "Start with a snack budget of 50 (an int, representing dollars). Use -= to subtract 12 for pizza, then -= again to subtract 8 for drinks. Use += to add 5 dollars of leftover change returned. Then calculate and print how many whole $7 snack packs could still be bought with the remaining budget, using %  to also print how much money would be left over after buying as many packs as possible.",
        starterCode: `public class Main {

    public static void main(String[] args) {

        int budget = 50;

        // TODO: Subtract 12 from budget using -=
        // TODO: Subtract 8 from budget using -=
        // TODO: Add 5 back to budget using +=
        // TODO: Print the remaining budget.
        // TODO: Calculate how many whole $7 packs can be bought (use / )
        //       and how much money is left over (use % ). Print both.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
        expectedBehaviour:
          "Starting from 50, after -12, -8, and +5, the remaining budget should be 35. With $35, 5 whole $7 packs can be bought (35 / 7 = 5), with $0 left over (35 % 7 = 0).",
        conceptsTested: ["int"],
        difficulty: "intermediate",
      },
      followUpPrompts: [
        "Why does dividing two ints drop the decimal part?",
        "What is the % operator actually useful for in real programs?",
        "Give me another exercise about operators.",
      ],
    },
  ],
};
