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
      objective:
        "Write and evaluate expressions that result in true or false, and store the result in a boolean variable.",
      explanation: `**What it is**

A boolean expression is any piece of code that evaluates down to exactly one of two values: \`true\` or \`false\`. It's the foundation every decision in a program is built on.

**Why it is needed**

Before a program can decide *what to do*, it first needs a clean, reliable *yes-or-no* answer to check. A boolean expression is exactly that answer, calculated from your data.

**When it is used**

Checking whether a club is full, whether a student passed, whether two values match - anywhere a program needs a definite true-or-false answer before deciding what happens next (you'll use these answers to control your program's flow starting in the next couple of lessons).

**The basic Java syntax**

A boolean expression can be stored in a \`boolean\` variable, or printed directly to see its result:

\`\`\`java
int currentMembers = 18;
int capacity = 20;

boolean isFull = currentMembers >= capacity; // false
System.out.println(isFull);

System.out.println(5 > 3);   // true
System.out.println(5 == 3);  // false
\`\`\``,
      analogy:
        "Think of a boolean expression like a school hallway sensor that only ever reports \"door open\" or \"door closed\" - never anything in between, and never a maybe. Whatever complicated question you ask it, the sensor always boils the answer down to one of exactly two states.",
      syntax: `\`\`\`java
boolean result = someValue >= otherValue;
System.out.println(result); // prints true or false
\`\`\``,
      exampleCode: `public class Main {

    public static void main(String[] args) {
        int currentMembers = 18;
        int capacity = 20;
        double studentMark = 42.0;

        boolean isFull = currentMembers >= capacity;
        boolean isPassing = studentMark >= 50.0;

        System.out.println("Club is full: " + isFull);
        System.out.println("Student is passing: " + isPassing);
        System.out.println("Direct expression: " + (currentMembers == capacity));
    }
}`,
      exampleExplanation: [
        "`boolean isFull = currentMembers >= capacity;` calculates a true/false answer and stores it in a `boolean` variable, just like storing a number in an `int`.",
        "`boolean isPassing = studentMark >= 50.0;` does the same thing with a different comparison.",
        "`(currentMembers == capacity)` is a boolean expression written directly inside a print statement, without ever being stored in a variable - both approaches are valid.",
        "Every one of these expressions evaluates to exactly `true` or `false` - nothing else is possible.",
      ],
      commonMistakes: [
        "Using a single `=` instead of `==` when checking equality - `=` assigns a value, `==` compares two values (covered fully in the next lesson).",
        "Assuming a boolean expression can result in something other than true or false, like a number - it cannot.",
        "Wrapping a boolean expression in quotes, like `\"true\"`, which creates a `String` that says true, not an actual `boolean` value.",
        "Forgetting that comparing two `double` values for exact equality (`==`) can behave unexpectedly due to how decimals are stored - this becomes more relevant later, but is worth knowing about early.",
      ],
      exercise: {
        id: "module-2-boolean-expressions-exercise",
        title: "Check Three Club Facts",
        instructions:
          "Given a club's current member count and its capacity, and a student's mark, create three boolean variables: one checking if the club has reached capacity, one checking if the club still has at least 2 spots left, and one checking if the student's mark is a perfect 100. Print all three boolean values with clear labels.",
        starterCode: `public class Main {

    public static void main(String[] args) {

        int currentMembers = 15;
        int capacity = 20;
        double studentMark = 100.0;

        // TODO: Declare a boolean checking if currentMembers has reached capacity.
        // TODO: Declare a boolean checking if there are at least 2 spots left
        //       (capacity - currentMembers >= 2).
        // TODO: Declare a boolean checking if studentMark is exactly 100.
        // TODO: Print all three booleans with clear labels.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
        expectedBehaviour:
          "For currentMembers = 15, capacity = 20, studentMark = 100.0, the program should print that the club has NOT reached capacity (false), that at least 2 spots ARE left (true), and that the mark IS a perfect 100 (true).",
        conceptsTested: ["comparison operators", "variable declaration"],
        difficulty: "beginner",
      },
      followUpPrompts: [
        "Can a boolean expression ever be neither true nor false?",
        "Why is comparing doubles for exact equality risky?",
        "Give me another exercise about boolean expressions.",
      ],
    },
    {
      id: "module-2-comparison-operators",
      moduleId: "module-2",
      order: 2,
      title: "Comparison Operators",
      objective:
        "Use ==, !=, <, >, <=, and >= correctly to compare values, and avoid the common mix-up between = and ==.",
      explanation: `**What it is**

Comparison operators compare two values and produce a boolean result. Java has six of them.

**Why it is needed**

Almost every decision a program makes is really just a comparison - is this mark high enough, is this age old enough, has this count gone too high. Comparison operators are how you ask those exact questions in code.

**When it is used**

Checking a mark against a passing threshold, comparing two dates, checking if a count has reached a limit - constantly, throughout almost every program you'll write.

**The six comparison operators**

| Operator | Meaning | Example | Result |
|---|---|---|---|
| \`==\` | equal to | \`5 == 5\` | \`true\` |
| \`!=\` | not equal to | \`5 != 3\` | \`true\` |
| \`<\` | less than | \`3 < 5\` | \`true\` |
| \`>\` | greater than | \`3 > 5\` | \`false\` |
| \`<=\` | less than or equal to | \`5 <= 5\` | \`true\` |
| \`>=\` | greater than or equal to | \`4 >= 5\` | \`false\` |

**The basic Java syntax**

\`\`\`java
int mark = 78;
boolean passed = mark >= 50; // true
boolean isTopMark = mark == 100; // false
\`\`\`

**Important:** \`==\` compares values. A single \`=\` assigns a value. Mixing these up is one of the most common beginner mistakes in any programming language.`,
      analogy:
        "Think of comparison operators like a bouncer's checklist at a school event: \"Is this ticket number equal to one already scanned?\" (\`==\`), \"Is this person's age at least 13?\" (\`>=\`). Each question the bouncer asks has a definite yes-or-no answer - that's exactly what a comparison operator gives you.",
      syntax: `\`\`\`java
int a = 10;
int b = 7;
System.out.println(a > b);  // true
System.out.println(a == b); // false
\`\`\``,
      exampleCode: `public class Main {

    public static void main(String[] args) {
        int marksNeededToPass = 50;
        int studentMark = 47;

        System.out.println("Equal to passing mark: " + (studentMark == marksNeededToPass));
        System.out.println("Not equal to passing mark: " + (studentMark != marksNeededToPass));
        System.out.println("Less than passing mark: " + (studentMark < marksNeededToPass));
        System.out.println("Greater than or equal to passing mark: " + (studentMark >= marksNeededToPass));
    }
}`,
      exampleExplanation: [
        "`studentMark == marksNeededToPass` checks for exact equality - here it's `false` because 47 does not equal 50.",
        "`studentMark != marksNeededToPass` is the opposite check, and is `true` here.",
        "`studentMark < marksNeededToPass` checks whether the mark is strictly below the passing mark - `true` here.",
        "`studentMark >= marksNeededToPass` checks whether the mark meets or exceeds the passing mark - `false` here, since 47 is below 50.",
      ],
      commonMistakes: [
        "Writing `if (mark = 50)` instead of `if (mark == 50)` - the single `=` is an assignment, and Java will not even compile this inside a condition (with primitives).",
        "Confusing `<=` with `=<` - the equals sign always comes second.",
        "Assuming `!=` means \"not\" in general - it specifically means \"not equal to\", not a general negation (that's the `!` operator, covered in the next lesson).",
        "Comparing a `String` with `==` expecting it to check the text - for objects like `String`, `.equals()` is the correct way (covered in the Strings lesson).",
      ],
      exercise: {
        id: "module-2-comparison-operators-exercise",
        title: "Compare Two Assignment Scores",
        instructions:
          "Given two assignment scores, print the results of all six comparison operators applied between them (score1 == score2, score1 != score2, score1 < score2, score1 > score2, score1 <= score2, score1 >= score2), each with a clear label.",
        starterCode: `public class Main {

    public static void main(String[] args) {

        int score1 = 82;
        int score2 = 91;

        // TODO: Print the result of score1 == score2, with a label.
        // TODO: Print the result of score1 != score2, with a label.
        // TODO: Print the result of score1 < score2, with a label.
        // TODO: Print the result of score1 > score2, with a label.
        // TODO: Print the result of score1 <= score2, with a label.
        // TODO: Print the result of score1 >= score2, with a label.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
        expectedBehaviour:
          "For score1 = 82 and score2 = 91, the program should print six labeled lines showing: false, true, true, false, true, false (in that order).",
        conceptsTested: ["comparison operators"],
        difficulty: "beginner",
      },
      followUpPrompts: [
        "Why doesn't Java let me write if (mark = 50)?",
        "How do I compare two Strings correctly?",
        "Give me another exercise about comparison operators.",
      ],
    },
    {
      id: "module-2-logical-operators",
      moduleId: "module-2",
      order: 3,
      title: "Logical Operators",
      objective:
        "Combine multiple boolean expressions using &&, ||, and !, and predict the result of combined conditions.",
      explanation: `**What it is**

Logical operators combine two or more boolean expressions into a single boolean result. Java has three: \`&&\` (AND), \`||\` (OR), and \`!\` (NOT).

**Why it is needed**

Real decisions often depend on more than one thing at once - a student needs to be old enough *and* have a good enough mark; a discount might apply if a customer is a member *or* it's their birthday. Logical operators let you express these combined rules.

**When it is used**

Checking multiple eligibility rules at once, validating that several pieces of input are all acceptable, or checking whether any one of several conditions is true.

**The three logical operators**

| Operator | Meaning | Result is true when... |
|---|---|---|
| \`&&\` | AND | **both** sides are true |
| \`\\|\\|\` | OR | **at least one** side is true |
| \`!\` | NOT | it flips true to false, and false to true |

**The basic Java syntax**

\`\`\`java
boolean isOldEnough = age >= 13;
boolean hasGoodMark = averageMark >= 60;

boolean eligible = isOldEnough && hasGoodMark; // both must be true
boolean qualifiesForDiscount = isMember || isBirthday; // at least one must be true
boolean isNotFull = !isFull; // flips the boolean
\`\`\`

**A quick note on short-circuiting:** with \`&&\`, if the first part is already false, Java doesn't even bother checking the second part, since the whole thing can't be true anyway. Similarly, with \`||\`, if the first part is already true, Java skips checking the second part. This is a small performance detail, not something you need to worry about changing your code for yet.`,
      analogy:
        "Think of `&&` like a school trip that requires both a signed permission form AND a paid fee - missing either one means you can't go. Think of `||` like a discount that applies if you're a student OR a teacher - having either one is enough. `!` is simply flipping a light switch: on becomes off, off becomes on.",
      syntax: `\`\`\`java
boolean a = true;
boolean b = false;
System.out.println(a && b); // false
System.out.println(a || b); // true
System.out.println(!a);     // false
\`\`\``,
      exampleCode: `public class Main {

    public static void main(String[] args) {
        int age = 14;
        double averageMark = 55.0;
        boolean isMember = false;
        boolean isBirthday = true;

        boolean eligibleForRoboticsClub = age >= 13 && averageMark >= 60;
        boolean qualifiesForDiscount = isMember || isBirthday;
        boolean isNotMember = !isMember;

        System.out.println("Eligible for Robotics Club: " + eligibleForRoboticsClub);
        System.out.println("Qualifies for discount: " + qualifiesForDiscount);
        System.out.println("Is not a member: " + isNotMember);
    }
}`,
      exampleExplanation: [
        "`age >= 13 && averageMark >= 60` is `false` overall, because even though the age check passes, the mark (55.0) does not meet the required 60 - `&&` needs *both* sides true.",
        "`isMember || isBirthday` is `true`, because even though `isMember` is `false`, `isBirthday` is `true` - `||` only needs *one* side true.",
        "`!isMember` flips `false` into `true`, since `isMember` was `false` to begin with.",
      ],
      commonMistakes: [
        "Confusing `&&` (both must be true) with `||` (only one needs to be true) - mixing these up silently changes your program's logic.",
        "Writing a single `&` or `|` instead of `&&` or `||` - single versions exist in Java but behave differently and are rarely what beginners want.",
        "Forgetting parentheses around each individual comparison when combining several, which can make complex conditions hard to read.",
        "Overusing `!` in a way that makes a condition confusing to read - sometimes rewriting the comparison directly (e.g. `age < 13` instead of `!(age >= 13)`) is clearer.",
      ],
      exercise: {
        id: "module-2-logical-operators-exercise",
        title: "Combine Three Club Rules",
        instructions:
          "The Art Club requires that a student is either in grade 9 or above, OR has a teacher recommendation. Separately, the club is only open if it is not currently full. Create booleans for each of these three facts, combine the grade/recommendation check with ||, then combine that result with the not-full check using &&, and print the final combined eligibility result.",
        starterCode: `public class Main {

    public static void main(String[] args) {

        int grade = 8;
        boolean hasTeacherRecommendation = true;
        boolean isClubFull = false;

        // TODO: Declare a boolean meetsGradeOrRecommendation:
        //       true if grade >= 9 OR hasTeacherRecommendation is true.
        // TODO: Declare a boolean isEligible:
        //       true if meetsGradeOrRecommendation is true AND the club is NOT full.
        // TODO: Print isEligible with a clear label.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
        expectedBehaviour:
          "For grade = 8, hasTeacherRecommendation = true, isClubFull = false, the program should print that the student IS eligible (true), because the recommendation satisfies the OR check, and the club is not full.",
        conceptsTested: ["logical AND (&&)", "comparison operators"],
        difficulty: "intermediate",
      },
      followUpPrompts: [
        "What does short-circuit evaluation actually mean?",
        "When would I use ! instead of just rewriting the comparison?",
        "Give me another exercise about logical operators.",
      ],
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
      objective:
        "Write conditions nested two or three levels deep to model a multi-step decision, without letting the code become confusing.",
      explanation: `**What it is**

A nested condition is an \`if\` (or \`if-else\`) statement placed *inside* another \`if\` block. Each level only runs once the level above it has already been satisfied.

**Why it is needed**

Some decisions genuinely depend on a sequence of checks, where each later question only makes sense after an earlier one is answered a certain way. Nesting lets your code mirror that real decision process step by step.

**When it is used**

Checking a student's age, and only then checking their permission form; checking whether a club has space, and only then checking whether the specific requested role is available; any multi-step eligibility process.

**The basic Java syntax**

\`\`\`java
if (outerCondition) {
    if (innerCondition) {
        // runs only if BOTH outerCondition and innerCondition are true
    } else {
        // runs if outerCondition is true but innerCondition is false
    }
} else {
    // runs if outerCondition is false - innerCondition is never even checked
}
\`\`\`

**A word of caution:** nesting is powerful, but nesting too many levels deep (4, 5, or more) makes code hard to follow. When that happens, combining checks with \`&&\` (from the Logical Operators lesson) is often clearer than deep nesting.`,
      analogy:
        "Think of applying to join a school leadership team as a series of gates, one behind the other: first a grade-level gate, then - only if you pass that - an attendance-record gate, then - only if you pass that too - an interview gate. You never even reach the interview gate if you didn't pass the first one. That's nesting: each gate is only checked once the previous one lets you through.",
      syntax: `\`\`\`java
if (age >= 13) {
    if (hasPermissionForm) {
        System.out.println("Approved");
    } else {
        System.out.println("Missing permission form");
    }
} else {
    System.out.println("Too young");
}
\`\`\``,
      exampleCode: `public class Main {

    public static void main(String[] args) {
        int grade = 10;
        double attendanceRate = 96.0;
        boolean passedInterview = true;

        if (grade >= 9) {
            if (attendanceRate >= 90.0) {
                if (passedInterview) {
                    System.out.println("Accepted onto the leadership team!");
                } else {
                    System.out.println("Attendance is fine, but the interview was not passed.");
                }
            } else {
                System.out.println("Attendance rate is too low to proceed.");
            }
        } else {
            System.out.println("Grade level is too low to apply.");
        }
    }
}`,
      exampleExplanation: [
        "The outermost `if (grade >= 9)` is checked first. If it's `false`, none of the inner checks even run - the program jumps straight to printing the grade-related message.",
        "Only once the grade check passes does the program check `attendanceRate >= 90.0`, mirroring a real, step-by-step application process.",
        "The innermost check (`passedInterview`) only matters if both outer checks already passed - exactly like an interview only being relevant after earlier requirements are met.",
        "Each level has its own `else`, so there's a clear message for exactly which step failed.",
      ],
      commonMistakes: [
        "Nesting far more levels than necessary, when combining conditions with `&&` would be clearer.",
        "Losing track of which `else` belongs to which `if` as nesting gets deep - careful indentation helps a lot here.",
        "Forgetting that an inner condition is never checked at all if the outer condition was false - it doesn't get \"skipped and checked later\", it's simply never evaluated.",
        "Duplicating the same inner logic across multiple outer branches instead of restructuring the checks to avoid repetition.",
      ],
      exercise: {
        id: "module-2-nested-conditions-exercise",
        title: "Library Book Loan Approval",
        instructions:
          "A library only loans out a book if: the book is available, AND (nested inside that check) the student has no overdue books. If the book is available but the student has overdue books, print a specific message about that. If the book isn't available at all, print a message about that instead - the overdue check should never even run in that case.",
        starterCode: `public class Main {

    public static void main(String[] args) {

        boolean isBookAvailable = true;
        boolean hasOverdueBooks = true;

        // TODO: Write a nested if-else:
        //   If isBookAvailable is true:
        //     If hasOverdueBooks is false, print "Loan approved."
        //     Otherwise, print "Cannot loan - please return overdue books first."
        //   If isBookAvailable is false, print "This book is not available."



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
        expectedBehaviour:
          "For isBookAvailable = true and hasOverdueBooks = true, the program should print \"Cannot loan - please return overdue books first.\" Changing hasOverdueBooks to false should print \"Loan approved.\" Changing isBookAvailable to false should print \"This book is not available.\" regardless of hasOverdueBooks.",
        conceptsTested: ["if-else"],
        difficulty: "intermediate",
      },
      followUpPrompts: [
        "When should I use nesting instead of &&?",
        "How deep is too deep for nested conditions?",
        "Give me another exercise about nested conditions.",
      ],
    },
    {
      id: "module-2-switch",
      moduleId: "module-2",
      order: 6,
      title: "switch Statements",
      objective:
        "Use a switch statement with break and a default case as a clean alternative to a long chain of else-if statements.",
      explanation: `**What it is**

A \`switch\` statement checks one value against several possible exact matches (called \`case\`s), and runs the code for whichever one matches.

**Why it is needed**

A long chain of \`else if\` statements that all compare the *same* variable against different exact values can get repetitive and harder to read. A \`switch\` expresses "check this one value against several options" more clearly.

**When it is used**

Converting a grade level number into a description, handling a menu choice, mapping a day number to a day name - anytime one specific value needs to be checked against several exact possibilities.

**The basic Java syntax**

\`\`\`java
switch (value) {
    case option1:
        // runs if value equals option1
        break;
    case option2:
        // runs if value equals option2
        break;
    default:
        // runs if value matched none of the cases above
}
\`\`\`

**Why \`break\` matters here:** without it, Java keeps running the code for the *next* case too (called "falling through"), even if it didn't match. \`break\` stops this by exiting the switch once a match is handled. (You'll learn more about \`break\` in loops in an upcoming lesson - the idea is the same: stop here.)`,
      analogy:
        "Think of a switch statement like a school's class-schedule board sorted by grade level: find the row that matches your exact grade, follow its instructions, then stop reading - you don't need to check the other grades' rows at all. If your grade isn't listed anywhere, there's a general \"all other grades\" row at the bottom (the `default` case).",
      syntax: `\`\`\`java
switch (dayNumber) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    default:
        System.out.println("Some other day");
}
\`\`\``,
      exampleCode: `public class Main {

    public static void main(String[] args) {
        int gradeLevel = 10;
        String description;

        switch (gradeLevel) {
            case 9:
                description = "Freshman";
                break;
            case 10:
                description = "Sophomore";
                break;
            case 11:
                description = "Junior";
                break;
            case 12:
                description = "Senior";
                break;
            default:
                description = "Unknown grade level";
        }

        System.out.println("Grade " + gradeLevel + ": " + description);
    }
}`,
      exampleExplanation: [
        "`switch (gradeLevel)` checks the value stored in `gradeLevel` against every `case` below it, in order.",
        "`case 10:` matches exactly, since `gradeLevel` is `10`, so `description` becomes `\"Sophomore\"`.",
        "`break;` after each case stops the switch from continuing on to check (and accidentally run) the next case.",
        "`default:` is a safety net that runs only if none of the specific cases matched - useful for unexpected values.",
      ],
      commonMistakes: [
        "Forgetting a `break;`, causing Java to \"fall through\" into the next case's code even though it didn't actually match.",
        "Forgetting the `default` case, which means unexpected values are silently ignored instead of clearly handled.",
        "Using a `switch` on a value that needs range checks (like `mark >= 50`) - `switch` only checks for *exact* matches, so `if-else` is the right tool for ranges.",
        "Duplicating the same code in multiple `case` blocks instead of letting cases fall through intentionally (an advanced technique to use carefully, once you're comfortable with the basics).",
      ],
      exercise: {
        id: "module-2-switch-exercise",
        title: "Club Meeting Room by Day",
        instructions:
          "Given an int dayNumber (1 to 5, for Monday to Friday), use a switch statement to print which room a club meets in: 1 -> \"Room 101\", 2 -> \"Room 102\", 3 -> \"Gym\", 4 -> \"Room 102\", 5 -> \"Library\". For any other number, print \"No meeting scheduled\". Remember to use break after each case.",
        starterCode: `public class Main {

    public static void main(String[] args) {

        int dayNumber = 3;

        // TODO: Write a switch statement on dayNumber.
        // case 1 -> print "Room 101"
        // case 2 -> print "Room 102"
        // case 3 -> print "Gym"
        // case 4 -> print "Room 102"
        // case 5 -> print "Library"
        // default -> print "No meeting scheduled"



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
        expectedBehaviour:
          'For dayNumber = 3, the program should print "Gym". For dayNumber = 6, it should print "No meeting scheduled".',
        conceptsTested: ["switch", "break"],
        difficulty: "beginner",
      },
      followUpPrompts: [
        "What happens if I forget a break in a switch statement?",
        "Can switch check ranges like mark >= 50?",
        "Give me another exercise about switch statements.",
      ],
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
      objective:
        "Use a do-while loop when a block of code must run at least once before its condition is even checked.",
      explanation: `**What it is**

A \`do-while\` loop is almost identical to a \`while\` loop, except the condition is checked *after* the loop body runs, not before. This guarantees the body always runs at least once.

**Why it is needed**

Sometimes you need to do something first, and only *then* decide whether to repeat it - like registering the very first club member before checking whether there's room for more. A regular \`while\` loop can't guarantee that first run if the condition happens to already be false.

**When it is used**

Simulating a first action followed by repeated checks, processing at least one item from a list before checking a stopping condition, or any situation where "do it once no matter what, then decide about more" fits the process better than "check first, then maybe do it".

**The basic Java syntax**

\`\`\`java
do {
    // this code always runs at least once
} while (condition);
\`\`\`

Notice the semicolon \`;\` after \`while (condition)\` - it's easy to forget, since a regular \`while\` loop doesn't have one.

**do-while vs. while**

| | \`while\` | \`do-while\` |
|---|---|---|
| Condition checked | Before the body runs | After the body runs |
| Minimum number of runs | 0 (could skip entirely) | 1 (always runs at least once) |`,
      analogy:
        "Think of a do-while loop like tasting a dish while cooking: you always taste it *at least once* before deciding \"does it need more seasoning?\" A regular while loop would be like checking a recipe card first and deciding not to taste at all if the card already says it's perfect - do-while guarantees that first taste happens no matter what.",
      syntax: `\`\`\`java
int attempt = 0;
do {
    attempt = attempt + 1;
    System.out.println("Attempt #" + attempt);
} while (attempt < 3);
\`\`\``,
      exampleCode: `public class Main {

    public static void main(String[] args) {
        int booksReturnedToday = 0;
        int returnBinCapacity = 0; // starts at 0, but we still process at least once

        do {
            booksReturnedToday = booksReturnedToday + 1;
            System.out.println("Processed returned book #" + booksReturnedToday);
        } while (booksReturnedToday < returnBinCapacity);

        System.out.println("Total processed: " + booksReturnedToday);
    }
}`,
      exampleExplanation: [
        "`returnBinCapacity` starts at `0`, which would make a regular `while` loop's condition false immediately - but a `do-while` still runs its body at least once before ever checking.",
        "The loop body runs, printing that book #1 was processed, and only *then* checks `booksReturnedToday < returnBinCapacity` (which is `1 < 0`, `false`), so the loop stops after exactly one run.",
        "This demonstrates the key difference from `while`: the check happens after the first run, guaranteeing that first run always happens.",
      ],
      commonMistakes: [
        "Forgetting the semicolon `;` after `while (condition)` in a do-while loop - unlike a regular while loop, this one is required.",
        "Using `do-while` when a regular `while` or `for` loop would be clearer, just because the guaranteed-first-run behavior isn't actually needed.",
        "Forgetting to update the variable used in the condition inside the loop body, causing an infinite loop, exactly like with `while`.",
        "Assuming a do-while loop is only slightly different syntax - the guaranteed-first-run behavior is a real, meaningful difference in what the loop does.",
      ],
      exercise: {
        id: "module-2-do-while-loops-exercise",
        title: "Open the Club Sign-Up Desk",
        instructions:
          "A brand-new club has 0 members and a maximum capacity of 3. Use a do-while loop to register at least one member (even though, in this case, capacity technically allows it - the point is the loop always runs its body first), printing \"Registered member #X\" each time, continuing while there is still room. After the loop, print the final member count.",
        starterCode: `public class Main {

    public static void main(String[] args) {

        int membersRegistered = 0;
        int capacity = 3;

        // TODO: Use a do-while loop.
        // Each time through, add 1 to membersRegistered and print
        // "Registered member #X" (X = the new membersRegistered value).
        // The loop should continue while membersRegistered < capacity.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

        System.out.println("Final member count: " + membersRegistered);
    }
}`,
        expectedBehaviour:
          'The program should print "Registered member #1" through "Registered member #3", followed by "Final member count: 3".',
        conceptsTested: ["while loop", "manual counters"],
        difficulty: "intermediate",
      },
      followUpPrompts: [
        "Can you show me a case where while and do-while give different results?",
        "Why is the semicolon required after a do-while's condition?",
        "Give me another exercise about do-while loops.",
      ],
    },
    {
      id: "module-2-break",
      moduleId: "module-2",
      order: 10,
      title: "break",
      objective:
        "Use break to exit a loop immediately once a goal has been reached, instead of letting it run through every remaining repetition.",
      explanation: `**What it is**

The \`break\` keyword immediately exits the loop (or switch statement) it's inside, skipping any remaining repetitions entirely.

**Why it is needed**

Sometimes you're searching for something, and once you find it, there's no point checking the rest. Without \`break\`, a loop would keep running all the way to its natural end even after the answer was already found, wasting time.

**When it is used**

Stopping a search through a list as soon as a match is found, stopping a loop early if something goes wrong, or exiting a menu loop when a user chooses "quit".

**The basic Java syntax**

\`\`\`java
for (int i = 0; i < array.length; i++) {
    if (array[i] == target) {
        System.out.println("Found it at index " + i);
        break; // stop looping immediately - no need to keep searching
    }
}
\`\`\`

\`break\` only exits the *innermost* loop it's directly inside - it doesn't exit multiple nested loops at once.`,
      analogy:
        "Think of `break` like finding your name on a class list posted on a wall: as soon as you spot it, you stop reading the rest of the list - there's no reason to keep scanning names you no longer need to check.",
      syntax: `\`\`\`java
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break; // stop the loop right here
    }
    System.out.println(i);
}
\`\`\``,
      exampleCode: `public class Main {

    public static void main(String[] args) {
        String[] bookTitles = {"Dune", "1984", "Emma", "Beloved", "Kim"};
        String searchTitle = "Emma";
        boolean found = false;

        for (int i = 0; i < bookTitles.length; i++) {
            if (bookTitles[i].equals(searchTitle)) {
                System.out.println("Found \\"" + searchTitle + "\\" at index " + i);
                found = true;
                break;
            }
            System.out.println("Checked index " + i + ", not a match.");
        }

        if (!found) {
            System.out.println("Book not found in the list.");
        }
    }
}`,
      exampleExplanation: [
        "The loop checks each book title in order, printing a message for every index it checks that doesn't match.",
        '`if (bookTitles[i].equals(searchTitle))` finds a match at index 2 ("Emma").',
        "`break;` immediately stops the loop right there - indices 3 and 4 are never checked at all, since there's no need.",
        "Without `break`, the loop would keep checking every remaining title even after already finding the match, which would be wasted work.",
      ],
      commonMistakes: [
        "Using `break` when `continue` (covered in the next lesson) is actually what's needed - `break` exits the whole loop, `continue` just skips to the next repetition.",
        "Forgetting that `break` only exits the loop it's directly inside, not any loop that contains it.",
        "Placing `break` outside of any loop or switch, which causes a compile error - it has no effect on its own.",
        "Relying on `break` to \"undo\" changes already made earlier in that same repetition - it only stops future repetitions, not anything already done.",
      ],
      exercise: {
        id: "module-2-break-exercise",
        title: "Find the First Failing Mark",
        instructions:
          "Given an array of marks, use a for loop with break to find and print the first mark that is below 50 (a failing mark), then stop searching immediately. If no mark is found to be failing, print a message saying every mark passed.",
        starterCode: `public class Main {

    public static void main(String[] args) {

        int[] marks = {72, 88, 45, 91, 30};
        boolean foundFailing = false;

        // TODO: Use a for loop to check each mark.
        // If a mark is below 50, print "First failing mark: X" (X = the mark),
        // set foundFailing to true, then break out of the loop.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

        if (!foundFailing) {
            System.out.println("Every mark passed!");
        }
    }
}`,
        expectedBehaviour:
          'For {72, 88, 45, 91, 30}, the program should print "First failing mark: 45" and stop - it should not go on to mention 30, since the loop should break as soon as the first failing mark (45) is found.',
        conceptsTested: ["for loop", "if-else", "arrays", "break"],
        difficulty: "intermediate",
      },
      followUpPrompts: [
        "What is the difference between break and continue?",
        "Can break exit two nested loops at once?",
        "Give me another exercise about break.",
      ],
    },
    {
      id: "module-2-continue",
      moduleId: "module-2",
      order: 11,
      title: "continue",
      objective:
        "Use continue to skip the rest of the current repetition and move on to the next one, without exiting the whole loop.",
      explanation: `**What it is**

The \`continue\` keyword skips the rest of the current repetition of a loop and jumps straight to the next one - it does not exit the loop entirely, unlike \`break\`.

**Why it is needed**

Sometimes a particular item in a loop should simply be skipped - like an absent student when calculating an average of *present* students' scores - without stopping the whole loop for everyone else.

**When it is used**

Skipping invalid or irrelevant data while processing a list, skipping a specific case that doesn't need any action, or filtering out unwanted items while a loop continues checking the rest.

**The basic Java syntax**

\`\`\`java
for (int i = 0; i < array.length; i++) {
    if (shouldSkip(array[i])) {
        continue; // skip the rest of this repetition only
    }
    // this code only runs for items that were NOT skipped
}
\`\`\`

**break vs. continue**

| | \`break\` | \`continue\` |
|---|---|---|
| Effect | Exits the entire loop immediately | Skips only the current repetition |
| Remaining repetitions | None run | Still run, starting from the next one |`,
      analogy:
        "Think of `continue` like a teacher taking attendance and calling out \"absent\" students to skip over quickly, without giving up on calling the rest of the roll. `break` would be like the teacher stopping the entire attendance check the moment they spot one absent student - `continue` is far gentler, it just skips that one case and moves on.",
      syntax: `\`\`\`java
for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        continue; // skip printing 3, but keep looping
    }
    System.out.println(i);
}
\`\`\``,
      exampleCode: `public class Main {

    public static void main(String[] args) {
        int[] marks = {85, -1, 92, -1, 78};
        int total = 0;
        int countedMarks = 0;

        for (int i = 0; i < marks.length; i++) {
            if (marks[i] < 0) {
                System.out.println("Skipping invalid mark at index " + i);
                continue;
            }
            total = total + marks[i];
            countedMarks = countedMarks + 1;
        }

        double average = (double) total / countedMarks;
        System.out.println("Average of valid marks: " + average);
    }
}`,
      exampleExplanation: [
        "`marks` contains two invalid entries (`-1`) representing missing data, mixed in with real marks.",
        "`if (marks[i] < 0) { ... continue; }` detects an invalid mark, prints a note about skipping it, then jumps straight to the next repetition - the lines below `continue` do not run for that particular index.",
        "For valid marks, `continue` never runs, so the code below it (adding to `total` and `countedMarks`) executes normally.",
        "The loop still processes every index from start to finish - `continue` only skips work *within* a repetition, not the remaining repetitions themselves.",
      ],
      commonMistakes: [
        "Using `continue` when `break` was actually intended (e.g. trying to stop the whole loop, but `continue` only skips one repetition).",
        "Forgetting that any code written *after* `continue` inside the same repetition never runs for that skipped item.",
        "Overusing `continue` in a way that makes the loop's logic harder to follow than a simple `if-else` would.",
        "Placing `continue` outside of any loop, which causes a compile error - like `break`, it has no meaning outside a loop.",
      ],
      exercise: {
        id: "module-2-continue-exercise",
        title: "Skip Absent Students in an Attendance Count",
        instructions:
          "Given an array of attendance codes (\"P\" for present, \"A\" for absent), use a for loop with continue to skip printing anything for absent students, and print \"Present: Student #X\" (X = the student's position, starting at 1) only for present students. After the loop, print the total number of present students.",
        starterCode: `public class Main {

    public static void main(String[] args) {

        String[] attendance = {"P", "A", "P", "P", "A"};
        int presentCount = 0;

        // TODO: Use a for loop over attendance.
        // If attendance[i] is "A", use continue to skip it.
        // Otherwise, print "Present: Student #X" (X = i + 1)
        // and add 1 to presentCount.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

        System.out.println("Total present: " + presentCount);
    }
}`,
        expectedBehaviour:
          'For {"P", "A", "P", "P", "A"}, the program should print "Present: Student #1", "Present: Student #3", and "Present: Student #4" (skipping students #2 and #5), followed by "Total present: 3".',
        conceptsTested: ["for loop", "if-else", "arrays", "continue"],
        difficulty: "intermediate",
      },
      followUpPrompts: [
        "Could I solve this same problem without using continue?",
        "What happens if I use continue inside a while loop?",
        "Give me another exercise about continue.",
      ],
    },
  ],
};
