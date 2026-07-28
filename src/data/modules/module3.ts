import type { CourseModule } from "@/data/types";

export const module3: CourseModule = {
  id: "module-3",
  order: 3,
  title: "Strings, Arrays and Collections",
  description:
    "Work with text using Strings, and store many values at once using arrays.",
  lessons: [
    {
      id: "module-3-strings",
      moduleId: "module-3",
      order: 1,
      title: "Strings",
      objective:
        "Create, combine and compare String values correctly, and use common String methods to process text such as names and course codes.",
      explanation: `**What it is**

A \`String\` is a piece of text - letters, numbers, symbols, or a mix - stored as a single value. In Java, text is always written inside double quotes: \`"like this"\`.

**Why it is needed**

Almost every program deals with text: names, messages, course codes, addresses. Strings let a program store, combine, search and change text easily.

**When it is used**

Storing a student's name, building a formatted message, checking whether a course code matches, splitting a full name into first and last name - Strings show up constantly.

**The basic Java syntax and common methods**

\`\`\`java
String courseCode = "CS101";
int length = courseCode.length();          // number of characters
String upper = courseCode.toUpperCase();    // "CS101"
String lower = courseCode.toLowerCase();    // "cs101"
boolean same = courseCode.equals("CS101"); // true / false
String piece = courseCode.substring(0, 2); // "CS"
boolean has = courseCode.contains("10");    // true / false
String trimmed = "  CS101  ".trim();        // "CS101"
\`\`\`

**Comparing Strings correctly**

Never compare Strings with \`==\`. Always use \`.equals()\` (or \`.equalsIgnoreCase()\` to ignore uppercase/lowercase differences). \`==\` checks whether two Strings are stored in the exact same memory location, which can give surprising, incorrect results - \`.equals()\` checks whether the text is actually the same.

**String concatenation**

Joining Strings together is called concatenation, done with \`+\`:

\`\`\`java
String fullName = firstName + " " + lastName;
\`\`\``,
      analogy:
        "Think of a String as a name tag worn at a school event. You can read it (`.length()` counts the letters), make a copy in all capitals for a poster (`.toUpperCase()`), or check whether two name tags say the exact same name (`.equals()`). Just glancing at two tags from across the room and assuming they match (like `==` does with text) can fool you - you need to actually read and compare the words.",
      syntax: `\`\`\`java
String name = "Amara Chen";
String courseCode = "CS101";
boolean isMatch = courseCode.equals("CS101");
String greeting = "Hello, " + name + "!";
\`\`\``,
      exampleCode: `public class Main {

    public static void main(String[] args) {
        String firstName = "Amara";
        String lastName = "Chen";
        String fullName = firstName + " " + lastName;

        System.out.println("Full name: " + fullName);
        System.out.println("Name length: " + fullName.length());
        System.out.println("Uppercase: " + fullName.toUpperCase());

        String enteredCode = "cs101";
        String correctCode = "CS101";

        // Correct way to compare text - ignoring uppercase/lowercase
        if (enteredCode.equalsIgnoreCase(correctCode)) {
            System.out.println("Course code accepted.");
        } else {
            System.out.println("Course code not recognized.");
        }
    }
}`,
      exampleExplanation: [
        '`String fullName = firstName + " " + lastName;` joins three pieces of text together with `+`, including a space in the middle.',
        "`fullName.length()` returns how many characters are in the String, including spaces.",
        "`fullName.toUpperCase()` creates a new String in all capital letters - the original `fullName` is not changed.",
        "`enteredCode.equalsIgnoreCase(correctCode)` compares two Strings for equal text while ignoring uppercase/lowercase differences, which is safer than `==`.",
      ],
      commonMistakes: [
        "Comparing Strings with `==` instead of `.equals()` or `.equalsIgnoreCase()`.",
        'Forgetting that String indexes (used in `.substring()` and `.charAt()`) start counting at `0`, not `1`.',
        "Assuming a String method like `.toUpperCase()` changes the original variable - it actually returns a brand new String.",
        'Mixing up single quotes (`\'A\'`, a `char`) and double quotes (`"A"`, a `String`).',
        "Forgetting to check for `null` before calling a method on a String that might not have a value yet (this will be covered fully in Exception Handling).",
      ],
      exercise: {
        id: "module-3-strings-exercise",
        title: "Format a Student's Display Name",
        instructions:
          "The School Activity Management System needs to display student names consistently. Store a student's first name and last name in two separate String variables, build a full name by joining them with a space, print the full name in uppercase, and print how many characters are in the full name (including the space).",
        starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Declare a String variable for the first name.
        // TODO: Declare a String variable for the last name.
        // TODO: Build a fullName String by joining first name + " " + last name.
        // TODO: Print the fullName in uppercase using toUpperCase().
        // TODO: Print the length of fullName using .length().



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
        expectedBehaviour:
          'For a first name "diego" and last name "santos", the program should print "DIEGO SANTOS" and then the number 12 (the length of "diego santos", including the space).',
        conceptsTested: ["String concatenation", "toUpperCase()", "length()"],
        difficulty: "beginner",
      },
      followUpPrompts: [
        "Why can't I use == to compare Strings?",
        "Show me more String methods.",
        "Give me another exercise about Strings.",
      ],
    },
    {
      id: "module-3-string-methods",
      moduleId: "module-3",
      order: 2,
      title: "Common String Methods",
      comingSoon: true,
      note: "Covered together with Strings",
    },
    {
      id: "module-3-comparing-strings",
      moduleId: "module-3",
      order: 3,
      title: "Comparing Strings Correctly",
      comingSoon: true,
      note: "Covered together with Strings",
    },
    {
      id: "module-3-string-concatenation",
      moduleId: "module-3",
      order: 4,
      title: "String Concatenation",
      comingSoon: true,
      note: "Covered together with Strings",
    },
    {
      id: "module-3-arrays",
      moduleId: "module-3",
      order: 5,
      title: "One-Dimensional Arrays",
      objective:
        "Create an array to store many related values, then traverse it and update individual values using an index.",
      explanation: `**What it is**

An array is a single variable that holds many values of the same type, lined up in order. Each value has a position number called an **index**, starting at \`0\`.

**Why it is needed**

Without arrays, storing 30 students' marks would need 30 separate variables. An array lets you store, and loop through, all of them using one variable and a counter.

**When it is used**

Storing a list of student names, a set of marks, the days of the week, a row of seats - anywhere you have many values of the same kind.

**The basic Java syntax**

\`\`\`java
int[] marks = {70, 85, 60};      // create with starting values
String[] names = new String[3];   // create empty, size 3
marks[0] = 95;                    // update a value using its index
int first = marks[0];             // read a value using its index
int size = marks.length;          // number of items (no parentheses!)
\`\`\`

**Traversing an array** means visiting every item in it, usually with a \`for\` loop from index \`0\` to \`array.length - 1\`.`,
      analogy:
        "Picture a row of numbered mail slots in the school office, one slot per student in a class - slot 0, slot 1, slot 2, and so on. Each slot holds one student's mark. To find slot 5's mark, you go directly to position 5. To read every slot in order, you walk down the row from the first slot to the last - that's traversing the array.",
      syntax: `\`\`\`java
int[] marks = {70, 85, 60, 95, 78};
for (int i = 0; i < marks.length; i++) {
    System.out.println(marks[i]);
}
\`\`\``,
      exampleCode: `public class Main {

    public static void main(String[] args) {
        String[] studentNames = {"Amara", "Diego", "Priya", "Kwame"};

        // Traverse: visit every item using its index
        for (int i = 0; i < studentNames.length; i++) {
            System.out.println("Student " + (i + 1) + ": " + studentNames[i]);
        }

        // Update: change one specific value using its index
        studentNames[1] = "Diego Santos";
        System.out.println("Updated name at index 1: " + studentNames[1]);
    }
}`,
      exampleExplanation: [
        '`String[] studentNames = {"Amara", "Diego", "Priya", "Kwame"};` creates an array of 4 Strings, at indexes 0, 1, 2 and 3.',
        "`studentNames.length` gives the number of items in the array (4) - notice it has no parentheses, unlike `String.length()`.",
        "The `for` loop reads `studentNames[i]` once per index, printing every name in order - this is traversing the array.",
        '`studentNames[1] = "Diego Santos";` replaces the value at index 1 (which was `"Diego"`) with a new value.',
      ],
      commonMistakes: [
        "Trying to access an index that does not exist, like `studentNames[4]` in a 4-item array (valid indexes are only 0 to 3) - this causes an `ArrayIndexOutOfBoundsException`.",
        "Confusing `.length` (a property, no parentheses, used for arrays) with `.length()` (a method, with parentheses, used for Strings).",
        "Forgetting that array indexes start at `0`, not `1`.",
        "Trying to add more items to an array after it is created - arrays have a fixed size (an `ArrayList`, covered later, can grow).",
        "Looping with `<=` instead of `<` when checking against `.length`, which goes one index too far.",
      ],
      exercise: {
        id: "module-3-arrays-exercise",
        title: "Calculate the Class Average from an Array",
        instructions:
          "Given an array of five exam marks, write a program that traverses the array with a for loop, prints each mark with a label, adds up all the marks, and then prints the class average (total divided by the number of marks). This is a new task - it goes further than the reading example above by requiring you to calculate a total and an average.",
        starterCode: `public class Main {

    public static void main(String[] args) {

        int[] marks = {88, 72, 95, 60, 79};

        // TODO: Use a for loop to print each mark, e.g. "Mark 1: 88"
        // TODO: While looping, add each mark to a running total.
        // TODO: After the loop, calculate the average (total / marks.length).
        // TODO: Print the class average.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
        expectedBehaviour:
          "The program should print each of the five marks with a label, then print the class average, which for this data is 78.8.",
        conceptsTested: ["arrays", "array traversal with for loop", "running totals"],
        difficulty: "beginner",
      },
      followUpPrompts: [
        "What is a two-dimensional array?",
        "What happens if I access an index that doesn't exist?",
        "Give me another exercise about arrays.",
      ],
    },
    {
      id: "module-3-traversing-arrays",
      moduleId: "module-3",
      order: 6,
      title: "Traversing Arrays",
      comingSoon: true,
      note: "Covered together with One-Dimensional Arrays",
    },
    {
      id: "module-3-updating-arrays",
      moduleId: "module-3",
      order: 7,
      title: "Updating Array Values",
      comingSoon: true,
      note: "Covered together with One-Dimensional Arrays",
    },
    {
      id: "module-3-2d-arrays",
      moduleId: "module-3",
      order: 8,
      title: "Two-Dimensional Arrays",
      comingSoon: true,
    },
    {
      id: "module-3-array-of-strings",
      moduleId: "module-3",
      order: 9,
      title: "Array of Strings",
      comingSoon: true,
      note: "Covered together with One-Dimensional Arrays",
    },
    {
      id: "module-3-array-of-objects",
      moduleId: "module-3",
      order: 10,
      title: "Array of Objects",
      comingSoon: true,
    },
    {
      id: "module-3-arraylist",
      moduleId: "module-3",
      order: 11,
      title: "ArrayList",
      comingSoon: true,
      note: "Covered together with Java Utility Packages",
    },
    {
      id: "module-3-collections",
      moduleId: "module-3",
      order: 12,
      title: "Basic Use of Collections",
      comingSoon: true,
      note: "Covered together with Java Utility Packages",
    },
  ],
};
