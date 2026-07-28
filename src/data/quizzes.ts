import type { Quiz } from "@/data/types";

export const quizzes: Quiz[] = [
  {
    id: "quiz-1-foundations",
    title: "Quiz 1: Java Foundations",
    moduleId: "module-1",
    coversLessonIds: [
      "module-1-program-structure",
      "module-1-variables",
      "module-1-data-types",
    ],
    relatedLessonId: "module-1-data-types",
    questions: [
      {
        id: "quiz-1-q1",
        type: "multiple-choice",
        prompt: "Which line must every basic Java program have so the program knows where to start running?",
        options: [
          "System.out.println();",
          "public static void main(String[] args)",
          "public class Main;",
          "import java.util.Scanner;",
        ],
        correctIndex: 1,
        explanation:
          "The main method is the required starting point for a Java program. Java looks for this exact line to know where execution should begin.",
      },
      {
        id: "quiz-1-q2",
        type: "multiple-choice",
        prompt: "Which data type is the best choice for storing a student's exact average mark, like 87.5?",
        options: ["int", "boolean", "double", "char"],
        correctIndex: 2,
        explanation:
          "double stores decimal numbers, so it can represent a value like 87.5 without losing the fractional part. int can only store whole numbers.",
      },
      {
        id: "quiz-1-q3",
        type: "predict-output",
        prompt: "What will this program print?",
        code: `public class Main {
    public static void main(String[] args) {
        int age = 15;
        System.out.println("Age: " + age);
        age = age + 1;
        System.out.println("Age: " + age);
    }
}`,
        options: [
          "Age: 15\\nAge: 15",
          "Age: 15\\nAge: 16",
          "Age: 16\\nAge: 16",
          "It does not compile.",
        ],
        correctIndex: 1,
        explanation:
          "age starts at 15 and is printed first. Then age is updated to 16 (age + 1), and the second println shows the new value, 16.",
      },
      {
        id: "quiz-1-q4",
        type: "find-error",
        prompt: "This code will not compile. What is the mistake?",
        code: `public class Main {
    public static void main(String[] args) {
        int studentAge = "16";
        System.out.println(studentAge);
    }
}`,
        options: [
          "The variable name studentAge is invalid.",
          "\"16\" (text) is being assigned to an int variable, which needs a whole number without quotes.",
          "println is spelled incorrectly.",
          "The class name Main is not allowed.",
        ],
        correctIndex: 1,
        explanation:
          '"16" in double quotes is a String, not an int. To fix this, either remove the quotes (int studentAge = 16;) or change the variable\'s type to String.',
      },
      {
        id: "quiz-1-q5",
        type: "coding",
        prompt:
          "Write a complete Java program whose main method declares a String variable for a course name and an int variable for the number of enrolled students, then prints both values in one sentence, for example: \"Intro to Robotics has 24 students enrolled.\"",
        starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Declare a String variable for the course name.
        // TODO: Declare an int variable for the number of students.
        // TODO: Print one sentence combining both values.

    }
}`,
        sampleSolution: `public class Main {

    public static void main(String[] args) {
        String courseName = "Intro to Robotics";
        int studentCount = 24;
        System.out.println(courseName + " has " + studentCount + " students enrolled.");
    }
}`,
        expectedBehaviour:
          "The program should print one sentence that includes both the course name and the number of students, with no compile errors.",
      },
    ],
  },
  {
    id: "quiz-2-decisions-and-loops",
    title: "Quiz 2: Decisions and Loops",
    moduleId: "module-2",
    coversLessonIds: [
      "module-2-conditions",
      "module-2-for-loops",
      "module-2-while-loops",
    ],
    relatedLessonId: "module-2-conditions",
    questions: [
      {
        id: "quiz-2-q1",
        type: "multiple-choice",
        prompt: "Which operator checks whether two numbers are equal in a condition?",
        options: ["=", "==", "!=", "<>"],
        correctIndex: 1,
        explanation:
          "== compares two values for equality. A single = is used for assignment (storing a value), which is a very common beginner mix-up.",
      },
      {
        id: "quiz-2-q2",
        type: "multiple-choice",
        prompt: "A for loop and a while loop can often achieve the same result. When is a for loop usually the better choice?",
        options: [
          "When you don't know how many repetitions will be needed.",
          "When you already know (or can calculate) exactly how many times to repeat.",
          "Only when working with Strings.",
          "for loops cannot use counters.",
        ],
        correctIndex: 1,
        explanation:
          "for loops are ideal when the number of repetitions is known in advance, like looping through a fixed-size array. while loops are better suited to unknown repetition counts.",
      },
      {
        id: "quiz-2-q3",
        type: "predict-output",
        prompt: "What will this program print?",
        code: `public class Main {
    public static void main(String[] args) {
        int mark = 55;
        if (mark >= 90) {
            System.out.println("A");
        } else if (mark >= 60) {
            System.out.println("B");
        } else {
            System.out.println("C");
        }
    }
}`,
        options: ["A", "B", "C", "Nothing prints"],
        correctIndex: 2,
        explanation:
          "mark is 55. It fails the first check (>= 90) and the second check (>= 60), so the else block runs, printing \"C\".",
      },
      {
        id: "quiz-2-q4",
        type: "find-error",
        prompt: "This loop never stops running. What is the mistake?",
        code: `int count = 0;
while (count < 5) {
    System.out.println("Count: " + count);
}`,
        options: [
          "The condition should use <= instead of <.",
          "count is never updated inside the loop, so it stays 0 forever.",
          "while loops cannot use int variables.",
          "System.out.println is spelled incorrectly.",
        ],
        correctIndex: 1,
        explanation:
          "Since count is never increased inside the loop body, the condition count < 5 is always true, creating an infinite loop. Adding count++ or count = count + 1; inside the loop fixes this.",
      },
      {
        id: "quiz-2-q5",
        type: "coding",
        prompt:
          "Write a program with a for loop that prints the numbers 1 through 5, and next to each number, prints \"even\" or \"odd\" depending on the number (use the % operator to check remainders).",
        starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Use a for loop from 1 to 5.
        // For each number, print the number and whether it is even or odd.

    }
}`,
        sampleSolution: `public class Main {

    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            if (i % 2 == 0) {
                System.out.println(i + " is even");
            } else {
                System.out.println(i + " is odd");
            }
        }
    }
}`,
        expectedBehaviour:
          "The program should print 5 lines, one for each number from 1 to 5, each correctly labeled as even or odd.",
      },
    ],
  },
  {
    id: "quiz-3-strings-arrays-methods",
    title: "Quiz 3: Strings, Arrays and Methods",
    moduleId: "module-3",
    coversLessonIds: [
      "module-3-strings",
      "module-3-arrays",
      "module-4-methods",
    ],
    relatedLessonId: "module-3-arrays",
    questions: [
      {
        id: "quiz-3-q1",
        type: "multiple-choice",
        prompt: "What is the correct way to check whether two Strings contain the same text?",
        options: [
          "stringOne == stringTwo",
          "stringOne.equals(stringTwo)",
          "stringOne = stringTwo",
          "stringOne.length() == stringTwo.length()",
        ],
        correctIndex: 1,
        explanation:
          ".equals() compares the actual text of two Strings. == can give incorrect results because it checks memory location, not content.",
      },
      {
        id: "quiz-3-q2",
        type: "multiple-choice",
        prompt: "If int[] marks = {70, 85, 60}; what is marks.length?",
        options: ["2", "3", "4", "It causes an error."],
        correctIndex: 1,
        explanation:
          "The array has three items (indexes 0, 1 and 2), so marks.length is 3. Remember .length has no parentheses for arrays.",
      },
      {
        id: "quiz-3-q3",
        type: "predict-output",
        prompt: "What will this program print?",
        code: `public class Main {
    public static void main(String[] args) {
        int[] marks = {80, 90, 70};
        marks[1] = 100;
        System.out.println(marks[0] + " " + marks[1] + " " + marks[2]);
    }
}`,
        options: ["80 90 70", "80 100 70", "100 90 70", "It does not compile."],
        correctIndex: 1,
        explanation:
          "marks[1] is updated from 90 to 100 before printing. marks[0] and marks[2] are unchanged, so the output is \"80 100 70\".",
      },
      {
        id: "quiz-3-q4",
        type: "find-error",
        prompt: "This code crashes when it runs. What is the mistake?",
        code: `int[] marks = {70, 85, 60};
for (int i = 0; i <= marks.length; i++) {
    System.out.println(marks[i]);
}`,
        options: [
          "marks should be a String array.",
          "The loop should start at i = 1.",
          "Using <= instead of < causes the loop to try marks[3], which does not exist in a 3-item array.",
          "println cannot be used inside a for loop.",
        ],
        correctIndex: 2,
        explanation:
          "With <=, the loop runs while i is 0, 1, 2 AND 3. marks[3] is out of bounds for a 3-item array (valid indexes are 0-2), causing an ArrayIndexOutOfBoundsException.",
      },
      {
        id: "quiz-3-q5",
        type: "coding",
        prompt:
          "Write a method named findLongestName that takes a String array of names and returns the longest name (use .length() to compare). Call it from main with an array of at least three names and print the result.",
        starterCode: `public class Main {

    // TODO: Write the findLongestName method here.

    public static void main(String[] args) {
        String[] names = {"Amara", "Diego", "Christopher"};

        // TODO: Call findLongestName and print the result.
    }
}`,
        sampleSolution: `public class Main {

    public static String findLongestName(String[] names) {
        String longest = names[0];
        for (int i = 1; i < names.length; i++) {
            if (names[i].length() > longest.length()) {
                longest = names[i];
            }
        }
        return longest;
    }

    public static void main(String[] args) {
        String[] names = {"Amara", "Diego", "Christopher"};
        System.out.println("Longest name: " + findLongestName(names));
    }
}`,
        expectedBehaviour:
          'For {"Amara", "Diego", "Christopher"}, the program should print "Longest name: Christopher".',
      },
    ],
  },
  {
    id: "quiz-4-oop-basics",
    title: "Quiz 4: Object-Oriented Programming Basics",
    moduleId: "module-5",
    coversLessonIds: [
      "module-4-overloading",
      "module-5-classes-and-objects",
      "module-5-access-modifiers",
      "module-5-inheritance",
    ],
    relatedLessonId: "module-5-inheritance",
    questions: [
      {
        id: "quiz-4-q1",
        type: "multiple-choice",
        prompt: "Which access modifier should a field usually have when you want to protect it with getters and setters?",
        options: ["public", "private", "protected", "final"],
        correctIndex: 1,
        explanation:
          "Making a field private hides it from outside code, forcing other classes to go through your controlled getter and setter methods - this is the core idea of encapsulation.",
      },
      {
        id: "quiz-4-q2",
        type: "multiple-choice",
        prompt: "What keyword lets a Student class reuse fields and methods from a Person class?",
        options: ["implements", "extends", "super", "this"],
        correctIndex: 1,
        explanation:
          "extends creates an inheritance relationship: class Student extends Person means Student automatically gets Person's fields and methods.",
      },
      {
        id: "quiz-4-q3",
        type: "predict-output",
        prompt: "What will this program print?",
        code: `class Person {
    String name;
    public Person(String name) { this.name = name; }
}

class Student extends Person {
    int grade;
    public Student(String name, int grade) {
        super(name);
        this.grade = grade;
    }
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student("Amara", 10);
        System.out.println(s.name + " - Grade " + s.grade);
    }
}`,
        options: [
          "It does not compile.",
          "Amara - Grade 10",
          "null - Grade 10",
          "Amara - Grade null",
        ],
        correctIndex: 1,
        explanation:
          "super(name) passes \"Amara\" up to the Person constructor, which sets the inherited name field. The Student constructor then sets grade to 10. Both fields are accessible on the Student object.",
      },
      {
        id: "quiz-4-q4",
        type: "find-error",
        prompt: "This class will not compile. What is the mistake?",
        code: `class Club {
    private int memberCount;

    public void setMemberCount(int memberCount) {
        this.memberCount = memberCount;
    }
}

public class Main {
    public static void main(String[] args) {
        Club club = new Club();
        club.memberCount = 10;
    }
}`,
        options: [
          "Club needs a constructor.",
          "memberCount is private, so it cannot be accessed directly from Main using club.memberCount.",
          "setMemberCount has the wrong return type.",
          "private fields cannot have setters.",
        ],
        correctIndex: 1,
        explanation:
          "Because memberCount is private, only code inside the Club class can access it directly. Main must use the public setMemberCount(...) method instead: club.setMemberCount(10);",
      },
      {
        id: "quiz-4-q5",
        type: "coding",
        prompt:
          "Write a Course class with a private String courseName and a private int enrolledCount, plus a constructor, a public getter for each field, and a public setter for enrolledCount that rejects negative numbers. In main, create a Course object and demonstrate that an invalid negative count is rejected.",
        starterCode: `public class Main {

    public static void main(String[] args) {
        // TODO: Create a Course object and test the setter with a valid
        // and an invalid (negative) enrolledCount.
    }
}

class Course {
    // TODO: Add private fields, a constructor, getters and a validating setter.
}`,
        sampleSolution: `public class Main {

    public static void main(String[] args) {
        Course course = new Course("AP Biology", 20);
        course.setEnrolledCount(25);
        System.out.println(course.getEnrolledCount());
        course.setEnrolledCount(-5);
        System.out.println(course.getEnrolledCount());
    }
}

class Course {
    private String courseName;
    private int enrolledCount;

    public Course(String courseName, int enrolledCount) {
        this.courseName = courseName;
        this.enrolledCount = enrolledCount;
    }

    public String getCourseName() {
        return courseName;
    }

    public int getEnrolledCount() {
        return enrolledCount;
    }

    public void setEnrolledCount(int enrolledCount) {
        if (enrolledCount >= 0) {
            this.enrolledCount = enrolledCount;
        }
    }
}`,
        expectedBehaviour:
          "Setting a valid enrolledCount should update it. Setting a negative value should be rejected, leaving the previous valid value unchanged.",
      },
    ],
  },
  {
    id: "quiz-5-advanced-oop-and-utilities",
    title: "Quiz 5: Overriding, Exceptions and Utilities",
    moduleId: "module-7",
    coversLessonIds: [
      "module-5-overriding",
      "module-6-exception-handling",
      "module-7-utility-packages",
    ],
    relatedLessonId: "module-6-exception-handling",
    questions: [
      {
        id: "quiz-5-q1",
        type: "multiple-choice",
        prompt: "What is the key difference between method overloading and method overriding?",
        options: [
          "Overloading needs identical parameters; overriding needs different parameters.",
          "Overloading happens in one class with different parameter lists; overriding happens between a parent and subclass with the identical method signature.",
          "They are exactly the same thing.",
          "Overriding can only be used with static methods.",
        ],
        correctIndex: 1,
        explanation:
          "Overloading gives one class multiple versions of a method name, distinguished by different parameters. Overriding lets a subclass replace a parent's method using the exact same signature.",
      },
      {
        id: "quiz-5-q2",
        type: "multiple-choice",
        prompt: "Which exception is thrown when Integer.parseInt(\"abc\") is executed?",
        options: [
          "ArithmeticException",
          "NullPointerException",
          "NumberFormatException",
          "ArrayIndexOutOfBoundsException",
        ],
        correctIndex: 2,
        explanation:
          "\"abc\" is not a valid whole number, so Integer.parseInt throws a NumberFormatException when it tries to convert the text.",
      },
      {
        id: "quiz-5-q3",
        type: "predict-output",
        prompt: "What will this program print?",
        code: `public class Main {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
            System.out.println(result);
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero.");
        } finally {
            System.out.println("Done checking.");
        }
    }
}`,
        options: [
          "10\\nDone checking.",
          "Cannot divide by zero.\\nDone checking.",
          "Done checking.",
          "The program crashes with no output.",
        ],
        correctIndex: 1,
        explanation:
          "Dividing an int by zero throws an ArithmeticException, so the catch block runs and prints its message, then finally always runs afterward.",
      },
      {
        id: "quiz-5-q4",
        type: "find-error",
        prompt: "This code has a subtle mistake. What is wrong?",
        code: `class Person {
    public void greet() {
        System.out.println("Hello!");
    }
}

class Student extends Person {
    public void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }
}`,
        options: [
          "This is a compile error - Student cannot extend Person.",
          "This is actually overloading, not overriding, because the parameter list is different from the parent's greet() method.",
          "greet() must always be private.",
          "There is no mistake; this correctly overrides greet().",
        ],
        correctIndex: 1,
        explanation:
          "Since Student's greet(String name) has a different parameter list than Person's greet(), Student is not overriding the parent method - it is overloading the method name within its own class, which behaves differently from what many beginners expect.",
      },
      {
        id: "quiz-5-q5",
        type: "coding",
        prompt:
          "Write a program that stores three Strings representing marks entered by students: {\"88\", \"seventy\", \"105\"}. For each one, use try/catch to parse it as an int. If parsing fails, print that it's not a valid number. If parsing succeeds but the mark is above 100, throw and catch an IllegalArgumentException with a clear message. Otherwise print the accepted mark. Store all successfully accepted marks in an ArrayList<Integer> and print the final list at the end.",
        starterCode: `import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {
        String[] inputs = {"88", "seventy", "105"};
        ArrayList<Integer> acceptedMarks = new ArrayList<>();

        // TODO: Loop through inputs, validate and handle exceptions,
        // and add valid marks (0-100) to acceptedMarks.

        System.out.println("Accepted marks: " + acceptedMarks);
    }
}`,
        sampleSolution: `import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {
        String[] inputs = {"88", "seventy", "105"};
        ArrayList<Integer> acceptedMarks = new ArrayList<>();

        for (String input : inputs) {
            try {
                int mark = Integer.parseInt(input);
                if (mark > 100) {
                    throw new IllegalArgumentException("Mark cannot exceed 100.");
                }
                acceptedMarks.add(mark);
                System.out.println("Accepted mark: " + mark);
            } catch (NumberFormatException e) {
                System.out.println("\\"" + input + "\\" is not a valid number.");
            } catch (IllegalArgumentException e) {
                System.out.println("Invalid mark: " + e.getMessage());
            }
        }

        System.out.println("Accepted marks: " + acceptedMarks);
    }
}`,
        expectedBehaviour:
          'For {"88", "seventy", "105"}, only 88 should be accepted and added to the list; the other two should print rejection messages. The final printed list should be "[88]".',
      },
    ],
  },
];

export function getQuiz(quizId: string): Quiz | undefined {
  return quizzes.find((q) => q.id === quizId);
}

export function getQuizForLesson(lessonId: string): Quiz | undefined {
  return quizzes.find((q) => q.coversLessonIds[q.coversLessonIds.length - 1] === lessonId);
}
