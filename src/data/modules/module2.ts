import type { CourseModule } from "@/data/types";

export const module2: CourseModule = {
  id: "module-2",
  order: 2,
  title: "Decisions and Repetition",
  description:
    "Learn how Java programs make decisions with conditions, and how they repeat work with loops.",
  lessons: [
    {
      id: "module-2-boolean-expressions",
      moduleId: "module-2",
      order: 1,
      title: "Boolean Expressions",
      comingSoon: true,
      note: "Covered together with Conditions",
    },
    {
      id: "module-2-comparison-operators",
      moduleId: "module-2",
      order: 2,
      title: "Comparison Operators",
      comingSoon: true,
      note: "Covered together with Conditions",
    },
    {
      id: "module-2-logical-operators",
      moduleId: "module-2",
      order: 3,
      title: "Logical Operators",
      comingSoon: true,
      note: "Covered together with Conditions",
    },
    {
      id: "module-2-conditions",
      moduleId: "module-2",
      order: 4,
      title: "Conditions: if, else-if, else",
      objective:
        "Write if, else-if and else statements - including nested conditions - to make a Java program choose between different actions.",
      explanation: `**What it is**

A condition lets a program check whether something is true or false, and then do different things depending on the answer. The main tools are \`if\`, \`else if\`, and \`else\`.

**Why it is needed**

Real programs need to react differently to different situations. A student who scores 90 should be treated differently from one who scores 40. Without conditions, a program would do exactly the same thing every single time, no matter the input.

**When it is used**

Deciding whether a student passed, whether a club has space for a new member, whether a login password is correct, whether an age qualifies someone for an event - almost every useful program uses conditions.

**The basic Java syntax**

A condition is written inside parentheses \`()\` and must evaluate to a \`boolean\` (\`true\` or \`false\`), often using comparison operators (\`==\`, \`!=\`, \`<\`, \`>\`, \`<=\`, \`>=\`) and logical operators (\`&&\` = "and", \`||\` = "or", \`!\` = "not").

\`\`\`java
if (condition) {
    // runs only if condition is true
} else if (anotherCondition) {
    // runs only if the first condition was false AND this one is true
} else {
    // runs if none of the above were true
}
\`\`\`

You can also put an \`if\` statement inside another \`if\` statement - this is called a **nested condition**, and it is useful when a second decision only makes sense after the first one is true.`,
      analogy:
        "A school allows a student to join the senior sports team only if the student is at least 15 years old. If they are 15 or older, they may try out. If they are younger, they are told to try again next year. If the school also requires a signed permission form, that becomes a second, nested check that only matters once the age check has already passed.",
      syntax: `\`\`\`java
if (studentMark >= 50) {
    System.out.println("Pass");
} else {
    System.out.println("Needs Improvement");
}
\`\`\``,
      exampleCode: `public class Main {

    public static void main(String[] args) {
        int studentMark = 72;
        boolean hasPermissionForm = true;

        if (studentMark >= 90) {
            System.out.println("Grade: A");
        } else if (studentMark >= 75) {
            System.out.println("Grade: B");
        } else if (studentMark >= 50) {
            System.out.println("Grade: C");
        } else {
            System.out.println("Grade: F - Needs Improvement");
        }

        // Nested condition: a second check only matters once the first passes
        int age = 15;
        if (age >= 15) {
            if (hasPermissionForm) {
                System.out.println("Eligible to join the senior team.");
            } else {
                System.out.println("Age is fine, but permission form is missing.");
            }
        } else {
            System.out.println("Too young for the senior team this year.");
        }
    }
}`,
      exampleExplanation: [
        "`if (studentMark >= 90)` checks the first, most specific condition. `>=` means \"greater than or equal to\".",
        "`else if (studentMark >= 75)` only runs if the first `if` was false. Java checks each `else if` in order, top to bottom.",
        "`else { ... }` is the fallback that runs only when none of the conditions above were true.",
        "The second block nests an `if` inside another `if`: the permission form is only checked *after* confirming the student is old enough.",
        "Notice each condition is a full boolean expression inside `()`  - it always resolves to `true` or `false`.",
      ],
      commonMistakes: [
        "Using a single `=` (assignment) instead of `==` (comparison) inside a condition.",
        "Writing conditions in the wrong order, so an earlier, broader condition accidentally catches cases meant for a later one (e.g. checking `>= 50` before `>= 90`).",
        "Forgetting the curly braces `{}` when a block has more than one statement, which can cause only the first line to run conditionally.",
        "Comparing `String` values with `==` instead of `.equals()` (covered in the Strings lesson).",
        "Adding an unnecessary `else` after a condition that already returns or clearly can't happen, making the code harder to read.",
      ],
      exercise: {
        id: "module-2-conditions-exercise",
        title: "Club Eligibility Checker",
        instructions:
          "The Robotics Club wants a program that checks whether a student can join. A student is eligible if their age is at least 13 AND their average mark is at least 60. Write a Java program that stores an age and an average mark in variables, then uses an if-else statement (with a logical AND) to print either \"Eligible to join Robotics Club\" or \"Not eligible yet\". Do not just copy the grading example above - this checks two different conditions together.",
        starterCode: `public class Main {

    public static void main(String[] args) {

        int studentAge = 14;
        double averageMark = 65.0;

        // TODO: Write an if-else statement.
        // The student is eligible only if studentAge is at least 13
        // AND averageMark is at least 60.
        // Print "Eligible to join Robotics Club" if both are true.
        // Otherwise print "Not eligible yet".



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
        expectedBehaviour:
          "With studentAge = 14 and averageMark = 65.0, the program should print \"Eligible to join Robotics Club\" because both conditions are satisfied. If either value fails its condition, it should print \"Not eligible yet\".",
        conceptsTested: ["if-else", "comparison operators", "logical AND (&&)"],
        difficulty: "beginner",
      },
      followUpPrompts: [
        "What is the difference between && and ||?",
        "Can you show me a switch statement instead?",
        "Give me another exercise about conditions.",
      ],
    },
    {
      id: "module-2-nested-conditions",
      moduleId: "module-2",
      order: 5,
      title: "Nested Conditions",
      comingSoon: true,
      note: "Covered together with Conditions",
    },
    {
      id: "module-2-switch",
      moduleId: "module-2",
      order: 6,
      title: "switch Statements",
      comingSoon: true,
    },
    {
      id: "module-2-for-loops",
      moduleId: "module-2",
      order: 7,
      title: "For Loops",
      objective:
        "Use a for loop to repeat an action a known number of times, such as listing every student in a class.",
      explanation: `**What it is**

A \`for\` loop repeats a block of code a specific number of times. It is the go-to loop whenever you already know (or can calculate) how many times something should happen.

**Why it is needed**

Without loops, repeating an action means copy-pasting the same code over and over - once per student, once per club member, and so on. That becomes unmanageable with real class sizes. A loop lets a few lines of code run many times.

**When it is used**

Displaying every student in a list, calculating a total or average across many marks, printing a multiplication table, or running a task exactly 10 times - any time you know the number of repetitions in advance.

**The basic Java syntax**

\`\`\`java
for (initialization; condition; update) {
    // runs once per repetition, as long as condition is true
}
\`\`\`

- **initialization** runs once, before the loop starts (usually creates a counter).
- **condition** is checked before every repetition; the loop stops as soon as it is false.
- **update** runs after every repetition (usually increases the counter).`,
      analogy:
        "Picture a teacher calling the class register from student number 1 to student number 30. They start at 1, keep going as long as the number is 30 or less, and move to the next number after reading each name. That is exactly how a `for` loop works: start, check, act, update, repeat.",
      syntax: `\`\`\`java
for (int i = 1; i <= 5; i++) {
    System.out.println("Repetition number " + i);
}
\`\`\``,
      exampleCode: `public class Main {

    public static void main(String[] args) {
        int numberOfStudents = 5;
        double totalMarks = 0;
        int[] marks = {70, 85, 60, 95, 78};

        for (int i = 0; i < numberOfStudents; i++) {
            System.out.println("Student " + (i + 1) + " scored " + marks[i]);
            totalMarks = totalMarks + marks[i];
        }

        double average = totalMarks / numberOfStudents;
        System.out.println("Class average: " + average);
    }
}`,
      exampleExplanation: [
        "`int numberOfStudents = 5;` and the `marks` array both describe the class we are looping through.",
        "`for (int i = 0; i < numberOfStudents; i++)` starts a counter `i` at `0`, keeps looping while `i` is less than 5, and adds 1 to `i` after every repetition.",
        "Arrays in Java start counting from `0`, so `marks[i]` gets each mark in turn, and `(i + 1)` is printed so students see \"Student 1\" instead of \"Student 0\".",
        "`totalMarks = totalMarks + marks[i];` adds the current student's mark onto a running total, once per repetition.",
        "After the loop finishes, `average` is calculated once, using the final `totalMarks`.",
      ],
      commonMistakes: [
        "Using `<=` instead of `<` (or vice versa) and ending up looping one time too many or too few - this is called an \"off-by-one\" error.",
        "Forgetting to update the counter (`i++`), which causes the loop to run forever.",
        "Reusing the same counter variable name in two separate loops within the same method scope, which does not compile.",
        "Starting the counter at `1` when working with arrays, which skips index `0` and can cause missed or shifted data.",
        "Declaring a new variable inside the loop for something that should be calculated only once (like the average) after the loop ends.",
      ],
      exercise: {
        id: "module-2-for-loops-exercise",
        title: "Print the Attendance List",
        instructions:
          "The School Activity Management System needs to print an attendance list for the Debate Club. Given the number of members below, write a for loop that prints \"Member number X is present\" for every member, where X goes from 1 up to the total number of members. Do not simply copy the averaging example above - this exercise only asks for printing, not totals.",
        starterCode: `public class Main {

    public static void main(String[] args) {

        int numberOfMembers = 6;

        // TODO: Write a for loop that runs once for each member.
        // For each repetition, print: "Member number X is present"
        // where X is the current member number, starting at 1.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
        expectedBehaviour:
          "With numberOfMembers = 6, the program should print six lines: \"Member number 1 is present\" through \"Member number 6 is present\", in order.",
        conceptsTested: ["for loop", "loop counters", "String concatenation"],
        difficulty: "beginner",
      },
      followUpPrompts: [
        "What happens if I forget the i++ part?",
        "Can you show me a for loop counting backwards?",
        "Give me another exercise about for loops.",
      ],
    },
    {
      id: "module-2-while-loops",
      moduleId: "module-2",
      order: 8,
      title: "While Loops",
      objective:
        "Use a while loop to repeat an action until a condition becomes false, especially when the number of repetitions is not known in advance.",
      explanation: `**What it is**

A \`while\` loop repeats a block of code for as long as a condition stays true. Unlike a \`for\` loop, it does not need a built-in counter - it just keeps checking the condition before every repetition.

**Why it is needed**

Sometimes you don't know in advance how many times something needs to repeat. For example, you might want to keep asking a user for input until they type something valid, or keep processing sign-ups until a club is full. A \`while\` loop handles this naturally.

**When it is used**

Waiting for valid input, processing data until a stopping signal appears, simulating something that continues "until" a condition changes - like a club filling up with members one at a time.

**The basic Java syntax**

\`\`\`java
while (condition) {
    // keeps running as long as condition is true
    // something inside the loop must eventually make condition false
}
\`\`\`

There is also a **do-while** loop, which runs the block once *before* checking the condition, guaranteeing at least one execution.`,
      analogy:
        "Imagine a club sign-up desk that keeps registering new members while there is still space on the roster. The staff member keeps checking \"is there still space?\" before letting the next student sign up. As soon as the answer becomes \"no\", they stop - they never needed to know the exact final number of sign-ups in advance.",
      syntax: `\`\`\`java
int spotsLeft = 3;
while (spotsLeft > 0) {
    System.out.println("Registering a new member. Spots left: " + spotsLeft);
    spotsLeft = spotsLeft - 1;
}
\`\`\``,
      exampleCode: `public class Main {

    public static void main(String[] args) {
        int clubCapacity = 4;
        int membersRegistered = 0;

        while (membersRegistered < clubCapacity) {
            membersRegistered = membersRegistered + 1;
            System.out.println("Registered member #" + membersRegistered);
        }

        System.out.println("Chess Club is now full with " + membersRegistered + " members.");
    }
}`,
      exampleExplanation: [
        "`int membersRegistered = 0;` sets up a counter, but this time it is created and updated manually, not inside the loop's parentheses.",
        "`while (membersRegistered < clubCapacity)` checks the condition before every repetition. As soon as `membersRegistered` reaches `clubCapacity`, the loop stops.",
        "`membersRegistered = membersRegistered + 1;` updates the value that the condition depends on. If this line were missing, the loop would run forever (an infinite loop).",
        "The final `System.out.println` runs only once, after the loop has completely finished.",
      ],
      commonMistakes: [
        "Forgetting to update the variable used in the condition, which creates an infinite loop that never stops.",
        "Placing the update statement before the check in a way that skips the very first valid repetition.",
        "Using a `while` loop when the number of repetitions is already known - a `for` loop is usually clearer in that case.",
        "Confusing `while` (checks first) with `do-while` (checks after running once).",
        "Writing the condition so it is `false` from the very start, meaning the loop body never runs at all.",
      ],
      exercise: {
        id: "module-2-while-loops-exercise",
        title: "Fill the Library Book Waitlist",
        instructions:
          "A popular library book has a waitlist with a maximum of 5 spots. Write a program that starts with 0 people on the waitlist, and uses a while loop to keep adding one person at a time (printing a message each time) until the waitlist reaches its maximum of 5 people. After the loop, print a message announcing the waitlist is full.",
        starterCode: `public class Main {

    public static void main(String[] args) {

        int maxWaitlistSpots = 5;
        int peopleOnWaitlist = 0;

        // TODO: Write a while loop that runs as long as
        // peopleOnWaitlist is less than maxWaitlistSpots.
        // Each time, add 1 person to peopleOnWaitlist and
        // print "Added person #X to the waitlist" (X = current count).



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

        System.out.println("Waitlist is now full with " + peopleOnWaitlist + " people.");
    }
}`,
        expectedBehaviour:
          "The program should print five lines, \"Added person #1 to the waitlist\" through \"Added person #5 to the waitlist\", followed by \"Waitlist is now full with 5 people.\"",
        conceptsTested: ["while loop", "loop conditions", "manual counters"],
        difficulty: "beginner",
      },
      followUpPrompts: [
        "What is an infinite loop and how do I avoid it?",
        "How is a do-while loop different from this?",
        "Give me another exercise about while loops.",
      ],
    },
    {
      id: "module-2-do-while-loops",
      moduleId: "module-2",
      order: 9,
      title: "Do-While Loops",
      comingSoon: true,
      note: "Covered together with While Loops",
    },
    {
      id: "module-2-break",
      moduleId: "module-2",
      order: 10,
      title: "break",
      comingSoon: true,
    },
    {
      id: "module-2-continue",
      moduleId: "module-2",
      order: 11,
      title: "continue",
      comingSoon: true,
    },
  ],
};
