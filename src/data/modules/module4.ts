import type { CourseModule } from "@/data/types";

export const module4: CourseModule = {
  id: "module-4",
  order: 4,
  title: "Methods",
  description:
    "Learn how to package code into reusable methods, and how to give the same method more than one way to be called.",
  lessons: [
    {
      id: "module-4-why-methods",
      moduleId: "module-4",
      order: 1,
      title: "Why Methods Are Used",
      comingSoon: true,
      note: "Covered together with Methods",
    },
    {
      id: "module-4-methods",
      moduleId: "module-4",
      order: 2,
      title: "Methods",
      objective:
        "Define a method with parameters and a return value, call it from main, and understand the difference between local and class-level variables.",
      explanation: `**What it is**

A method is a named, reusable block of code that performs a task. You can send it information (parameters) and it can send information back (a return value).

**Why it is needed**

Without methods, calculating a grade in five different places in a program would mean writing the same calculation five times. If you needed to fix a bug, you'd have to fix it in all five places. A method lets you write the logic once and reuse it everywhere.

**When it is used**

Calculating a grade from a mark, formatting a student's display name, checking whether a mark is a valid number - any task your program repeats or that deserves its own clear name.

**The basic Java syntax**

\`\`\`java
returnType methodName(parameterType parameterName) {
    // code that uses parameterName
    return someValue; // only needed if returnType is not void
}
\`\`\`

- **Parameters** are the inputs a method expects, listed in its parentheses.
- **Return value** is what the method sends back, matching its declared return type.
- A **void** method performs an action but does not send any value back.
- A variable declared *inside* a method (a **local variable**) only exists while that method is running. A variable declared directly inside a class, outside any method (a **class-level / field** variable, covered more in Object-Oriented Programming), can be used by many methods.`,
      analogy:
        "Think of a method like the school's grade-calculating machine at the front desk. You feed it a mark (a parameter). It does its calculation inside, out of sight, and hands you back a grade letter (the return value). Any teacher can use the same machine with a different mark and get a correctly calculated result, without needing to know how the machine works inside.",
      syntax: `\`\`\`java
public static char calculateGrade(int mark) {
    if (mark >= 90) {
        return 'A';
    } else if (mark >= 75) {
        return 'B';
    } else {
        return 'C';
    }
}
\`\`\``,
      exampleCode: `public class Main {

    public static char calculateGrade(int mark) {
        if (mark >= 90) {
            return 'A';
        } else if (mark >= 75) {
            return 'B';
        } else if (mark >= 50) {
            return 'C';
        } else {
            return 'F';
        }
    }

    public static void printStudentReport(String name, int mark) {
        char grade = calculateGrade(mark);
        System.out.println(name + " scored " + mark + " -> Grade " + grade);
    }

    public static void main(String[] args) {
        printStudentReport("Amara", 92);
        printStudentReport("Diego", 68);
    }
}`,
      exampleExplanation: [
        "`public static char calculateGrade(int mark)` defines a method that takes one `int` parameter (`mark`) and returns a `char`.",
        "Inside `calculateGrade`, the `mark` parameter behaves like a local variable - it only exists while this method is running.",
        "`public static void printStudentReport(String name, int mark)` is a `void` method - it performs an action (printing) but returns nothing.",
        "`char grade = calculateGrade(mark);` calls the first method and stores its returned value in a local variable.",
        "`main` calls `printStudentReport` twice with different arguments, reusing the exact same logic for two different students.",
      ],
      commonMistakes: [
        "Declaring a return type of `void` but still trying to `return someValue;`.",
        "Forgetting to `return` a value from a method whose return type is not `void` - Java will not compile this.",
        "Mixing up parameters (defined in the method's parentheses) with arguments (the actual values passed in when calling the method).",
        "Trying to use a local variable from inside one method in a different method - local variables only exist inside the method where they were created.",
        "Giving a method a vague name like `doStuff()` instead of a clear name like `calculateGrade()`.",
      ],
      exercise: {
        id: "module-4-methods-exercise",
        title: "Write a Pass/Fail Checker Method",
        instructions:
          "Write a method named isPassing that takes one int parameter (a mark) and returns a boolean: true if the mark is 50 or above, false otherwise. Then, in main, call your method with at least two different marks and print a message for each result, such as \"Mark 42 -> Failing\". Do not just modify the grading example above - this method returns a boolean, not a char, and checks a different rule.",
        starterCode: `public class Main {

    // TODO: Write a method named isPassing.
    // It should take one int parameter named mark.
    // It should return true if mark is 50 or greater, false otherwise.



    /* STUDENT CODE STARTS HERE */




    /* STUDENT CODE ENDS HERE */

    public static void main(String[] args) {
        int markOne = 42;
        int markTwo = 77;

        // TODO: Call isPassing with markOne and markTwo,
        // and print a message for each result.
    }
}`,
        expectedBehaviour:
          "For markOne = 42, the program should indicate the student is failing (isPassing returns false). For markTwo = 77, it should indicate the student is passing (isPassing returns true).",
        conceptsTested: ["method definition", "parameters", "return values", "boolean logic"],
        difficulty: "beginner",
      },
      followUpPrompts: [
        "What is the difference between a parameter and an argument?",
        "Can a method have more than one parameter?",
        "Give me another exercise about methods.",
      ],
    },
    {
      id: "module-4-parameters",
      moduleId: "module-4",
      order: 3,
      title: "Parameters",
      comingSoon: true,
      note: "Covered together with Methods",
    },
    {
      id: "module-4-return-values",
      moduleId: "module-4",
      order: 4,
      title: "Return Values",
      comingSoon: true,
      note: "Covered together with Methods",
    },
    {
      id: "module-4-void-methods",
      moduleId: "module-4",
      order: 5,
      title: "Void Methods",
      comingSoon: true,
      note: "Covered together with Methods",
    },
    {
      id: "module-4-variable-scope",
      moduleId: "module-4",
      order: 6,
      title: "Local and Class-Level Variables",
      comingSoon: true,
      note: "Covered together with Methods",
    },
    {
      id: "module-4-overloading",
      moduleId: "module-4",
      order: 7,
      title: "Method Overloading",
      objective:
        "Write two or more methods with the same name but different parameters, and understand how Java decides which one to run.",
      explanation: `**What it is**

Method overloading means writing more than one method with the same name in the same class, as long as their parameter lists are different (different number of parameters, or different types).

**Why it is needed**

Sometimes the same action makes sense with different information available. Registering a student might work with just a name, or with a name and an age, depending on what the person calling the method already knows. Overloading lets you use one clear, memorable method name for all these variations, instead of inventing awkward alternate names like \`registerStudentWithAge\`.

**When it is used**

Providing different ways to register a student, different ways to build a greeting message, or different ways to calculate something depending on what information is available.

**The basic Java syntax**

\`\`\`java
void registerStudent(String name) { ... }
void registerStudent(String name, int age) { ... }
void registerStudent(String name, int age, String club) { ... }
\`\`\`

Java looks at the number and types of arguments in the method call, and automatically chooses the matching overloaded method. This decision happens at compile time, based only on the method signature (name + parameter types) - not on the return type.`,
      analogy:
        "Think of the school's registration desk. A student can register with just their name, or with their name and age if they know it, or with their name, age, and the club they want to join. The registration desk (the method name, \"registerStudent\") stays the same - only the amount of information handed over changes, and the desk adapts automatically.",
      syntax: `\`\`\`java
public static void registerStudent(String name) {
    System.out.println(name + " registered with no extra details.");
}

public static void registerStudent(String name, int age) {
    System.out.println(name + " (" + age + ") registered.");
}
\`\`\``,
      exampleCode: `public class Main {

    public static void registerStudent(String name) {
        System.out.println(name + " registered with basic details.");
    }

    public static void registerStudent(String name, int age) {
        System.out.println(name + " (age " + age + ") registered.");
    }

    public static void registerStudent(String name, int age, String club) {
        System.out.println(name + " (age " + age + ") registered for " + club + ".");
    }

    public static void main(String[] args) {
        registerStudent("Amara");
        registerStudent("Diego", 16);
        registerStudent("Priya", 15, "Chess Club");
    }
}`,
      exampleExplanation: [
        "All three methods share the name `registerStudent`, but each has a different parameter list, so Java treats them as separate, valid methods.",
        '`registerStudent("Amara")` matches the first version, which only needs a name.',
        '`registerStudent("Diego", 16)` matches the second version, because it passes exactly one String and one int.',
        "Java chooses the correct version automatically by matching the number and types of the arguments you pass in.",
      ],
      commonMistakes: [
        "Creating two methods with the same name and the exact same parameter types (only different return types) - Java will not allow this, since overloading requires a different parameter list.",
        "Calling a method with argument types that do not match any overloaded version, causing a compile error.",
        "Assuming overloading is based on the return type - it is actually based on the parameter list.",
        "Writing many overloaded versions when a single method with a default-like value, or an optional parameter pattern, would be clearer.",
        "Confusing overloading (same name, different parameters, decided at compile time) with overriding (covered next, which is about subclasses and is decided at runtime).",
      ],
      exercise: {
        id: "module-4-overloading-exercise",
        title: "Overload a Course Announcement Method",
        instructions:
          "Write two overloaded versions of a method named announceCourse. The first version takes only a String courseName and prints \"New course available: \" followed by the course name. The second version takes a String courseName and an int seatsAvailable, and prints \"New course available: \" followed by the course name, then \" (\" followed by the number of seats and \" seats left)\". Call both versions from main.",
        starterCode: `public class Main {

    // TODO: Write the first announceCourse method.
    // It takes one String parameter: courseName.
    // It prints: "New course available: " + courseName



    /* STUDENT CODE STARTS HERE */




    /* STUDENT CODE ENDS HERE */

    // TODO: Write the second, overloaded announceCourse method.
    // It takes a String courseName and an int seatsAvailable.
    // It prints: "New course available: " + courseName + " (" + seatsAvailable + " seats left)"



    /* STUDENT CODE STARTS HERE */




    /* STUDENT CODE ENDS HERE */

    public static void main(String[] args) {
        announceCourse("Intro to Robotics");
        announceCourse("AP Biology", 12);
    }
}`,
        expectedBehaviour:
          'Calling announceCourse("Intro to Robotics") should print "New course available: Intro to Robotics". Calling announceCourse("AP Biology", 12) should print "New course available: AP Biology (12 seats left)".',
        conceptsTested: ["method overloading", "parameter lists", "method calls"],
        difficulty: "intermediate",
      },
      followUpPrompts: [
        "How does Java decide which overloaded method to call?",
        "Can two methods be overloaded if they only differ by return type?",
        "Give me another exercise about overloading.",
      ],
    },
    {
      id: "module-4-recursion",
      moduleId: "module-4",
      order: 8,
      title: "Basic Recursion (Optional, Advanced)",
      comingSoon: true,
    },
  ],
};
