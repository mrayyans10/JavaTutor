import type { CourseModule } from "@/data/types";

export const module7: CourseModule = {
  id: "module-7",
  order: 7,
  title: "Java Packages and Utilities",
  description:
    "Discover the ready-made tools in Java's standard library that make everyday tasks much easier.",
  lessons: [
    {
      id: "module-7-what-are-packages",
      moduleId: "module-7",
      order: 1,
      title: "What Packages Are",
      comingSoon: true,
      note: "Covered together with Java Utility Packages",
    },
    {
      id: "module-7-import-statements",
      moduleId: "module-7",
      order: 2,
      title: "Import Statements",
      comingSoon: true,
      note: "Covered together with Java Utility Packages",
    },
    {
      id: "module-7-custom-packages",
      moduleId: "module-7",
      order: 3,
      title: "Creating Custom Packages",
      comingSoon: true,
    },
    {
      id: "module-7-utility-packages",
      moduleId: "module-7",
      order: 4,
      title: "Java Utility Packages",
      objective:
        "Use ArrayList, Scanner, Collections, and LocalDate from java.util to store growable lists, read input, and work with dates.",
      explanation: `**What it is**

A **package** is a named folder of related Java classes. \`java.util\` is a package built into Java that provides many ready-made tools, so you don't have to build everything from scratch. You bring a class into your file with an **import statement**.

**Why it is needed**

Java already solved many common problems - growable lists, reading user input, sorting data, working with dates - extremely well. Reusing these tools saves time and avoids bugs that come from reinventing them yourself.

**When it is used**

Storing a growing list of club members (\`ArrayList\`), reading what a student types (\`Scanner\`), sorting a list of marks (\`Collections\`), recording when an assignment is due (\`LocalDate\`).

**The basic Java syntax**

\`\`\`java
import java.util.ArrayList;
import java.util.Scanner;
import java.util.Collections;
import java.time.LocalDate;

ArrayList<String> members = new ArrayList<>();
members.add("Amara");
members.add("Diego");
members.remove("Diego");
int total = members.size();

Scanner scanner = new Scanner(System.in);
String name = scanner.nextLine();

Collections.sort(members);

LocalDate today = LocalDate.now();
LocalDate dueDate = LocalDate.of(2025, 6, 15);
\`\`\`

Unlike an array, an \`ArrayList\` can grow or shrink after it is created - you don't need to know the size in advance. A \`HashMap<KeyType, ValueType>\` (also in \`java.util\`) stores pairs of values, like a student's name mapped to their grade, so you can look values up quickly by key.`,
      analogy:
        "Think of `java.util` as the school's shared supply closet. Instead of every teacher building their own stapler or attendance folder from scratch, they borrow a ready-made one from the closet with an `import`. An `ArrayList` is like a expandable binder for the club roster - you can add or remove pages any time, unlike a fixed-size folder (an array) that can only ever hold the exact number of pages it was made with.",
      syntax: `\`\`\`java
import java.util.ArrayList;

ArrayList<String> clubMembers = new ArrayList<>();
clubMembers.add("Amara");
clubMembers.add("Diego");
System.out.println(clubMembers.size());
\`\`\``,
      exampleCode: `import java.util.ArrayList;
import java.util.Collections;

public class Main {

    public static void main(String[] args) {
        ArrayList<String> clubMembers = new ArrayList<>();
        clubMembers.add("Diego");
        clubMembers.add("Amara");
        clubMembers.add("Priya");

        System.out.println("Members before sorting: " + clubMembers);

        Collections.sort(clubMembers);
        System.out.println("Members after sorting: " + clubMembers);

        clubMembers.remove("Diego");
        System.out.println("After removing Diego: " + clubMembers);
        System.out.println("Total members: " + clubMembers.size());
    }
}`,
      exampleExplanation: [
        "`import java.util.ArrayList;` and `import java.util.Collections;` bring in the tools this program needs from Java's standard library.",
        "`ArrayList<String> clubMembers = new ArrayList<>();` creates an empty, growable list that will hold `String` values.",
        "`.add(...)` appends a new value to the end of the list; the list grows automatically, unlike a fixed-size array.",
        "`Collections.sort(clubMembers);` rearranges the list into alphabetical order, in place.",
        "`.remove(\"Diego\")` removes the first matching value, and `.size()` returns how many items remain.",
      ],
      commonMistakes: [
        "Forgetting the `import` statement for a class from `java.util`, which causes a compile error.",
        "Trying to use array-style square brackets (`list[0]`) on an `ArrayList` - it uses methods instead, like `list.get(0)`.",
        "Forgetting that `ArrayList` can only hold object types (like `String`, `Integer`), not primitive types like `int` directly (Java automatically converts `int` to `Integer` behind the scenes, called \"autoboxing\").",
        "Creating a new `Scanner(System.in)` more than once in the same program, which can cause unexpected input-reading behavior.",
        "Assuming `Collections.sort()` returns a new sorted list - it actually sorts the existing list directly and returns nothing.",
      ],
      exercise: {
        id: "module-7-utility-packages-exercise",
        title: "Manage a Growing Waitlist with ArrayList",
        instructions:
          "Create an ArrayList<String> named waitlist. Add three student names to it in any order. Print the waitlist. Sort it alphabetically using Collections.sort and print it again. Remove the first name you added and print the final waitlist along with its size using .size().",
        starterCode: `import java.util.ArrayList;
import java.util.Collections;

public class Main {

    public static void main(String[] args) {

        // TODO: Create an ArrayList<String> named waitlist.
        // TODO: Add three student names to it.
        // TODO: Print the waitlist.
        // TODO: Sort the waitlist using Collections.sort and print it again.
        // TODO: Remove the first name you added, then print the
        // final waitlist and its size.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
        expectedBehaviour:
          'If you add "Priya", "Amara" and "Diego" in that order, the program should print the original order, then the sorted order ("Amara", "Diego", "Priya"), then the list with "Priya" removed, along with the final size (2).',
        conceptsTested: ["ArrayList", "Collections.sort", "add/remove", "size()"],
        difficulty: "intermediate",
      },
      followUpPrompts: [
        "What is the difference between an array and an ArrayList?",
        "How do I use a HashMap to link names to grades?",
        "Give me another exercise about Java utilities.",
      ],
    },
    {
      id: "module-7-scanner",
      moduleId: "module-7",
      order: 5,
      title: "Scanner",
      comingSoon: true,
      note: "Covered together with Java Utility Packages",
    },
    {
      id: "module-7-arraylist",
      moduleId: "module-7",
      order: 6,
      title: "ArrayList",
      comingSoon: true,
      note: "Covered together with Java Utility Packages",
    },
    {
      id: "module-7-hashmap",
      moduleId: "module-7",
      order: 7,
      title: "HashMap",
      comingSoon: true,
      note: "Covered together with Java Utility Packages",
    },
    {
      id: "module-7-hashset",
      moduleId: "module-7",
      order: 8,
      title: "HashSet",
      comingSoon: true,
    },
    {
      id: "module-7-collections",
      moduleId: "module-7",
      order: 9,
      title: "Collections",
      comingSoon: true,
      note: "Covered together with Java Utility Packages",
    },
    {
      id: "module-7-random",
      moduleId: "module-7",
      order: 10,
      title: "Random",
      comingSoon: true,
    },
    {
      id: "module-7-localdate",
      moduleId: "module-7",
      order: 11,
      title: "LocalDate and Basic Date Handling",
      comingSoon: true,
      note: "Covered together with Java Utility Packages",
    },
    {
      id: "module-7-file-io",
      moduleId: "module-7",
      order: 12,
      title: "Basic File Reading and Writing",
      comingSoon: true,
    },
    {
      id: "module-7-multi-class-projects",
      moduleId: "module-7",
      order: 13,
      title: "Organizing a Multi-Class Java Project",
      comingSoon: true,
    },
  ],
};
