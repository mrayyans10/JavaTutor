import type { CourseModule } from "@/data/types";

export const module5: CourseModule = {
  id: "module-5",
  order: 5,
  title: "Object-Oriented Programming",
  description:
    "Model the School Activity Management System using classes, objects, encapsulation, inheritance and polymorphism.",
  lessons: [
    {
      id: "module-5-classes-and-objects",
      moduleId: "module-5",
      order: 1,
      title: "Classes and Objects",
      objective:
        "Define a class with fields and a constructor, then create and use objects of that class using the this keyword where needed.",
      explanation: `**What it is**

A **class** is a blueprint that describes what data (fields) and behavior (methods) something should have. An **object** is one actual instance created from that blueprint, with its own real values.

**Why it is needed**

So far, a student's data has been stored in separate variables (name, age, mark). That becomes messy with many students. A class lets you group all of a student's information into one clean, reusable blueprint, and create as many student objects as you need.

**When it is used**

Representing real things in the School Activity Management System - a \`Student\`, a \`Course\`, a \`Club\` - each as its own class, with objects created for each real student, course or club.

**The basic Java syntax**

\`\`\`java
public class Student {
    String name;
    int age;

    // constructor: runs automatically when a new object is created
    public Student(String name, int age) {
        this.name = name; // "this.name" is the field, "name" is the parameter
        this.age = age;
    }
}
\`\`\`

To create an object: \`Student student1 = new Student("Amara", 15);\`

The \`this\` keyword refers to "the current object". It is most often used inside a constructor or method to distinguish a field from a parameter that happens to share the same name.`,
      analogy:
        "A class is like the school's official enrollment form template - it has blank fields for \"Name\", \"Age\", and so on, but no real data yet. Every time a new student enrolls, the school fills out one copy of that form with real details. Each filled-out form is an object: same layout, different actual values.",
      syntax: `\`\`\`java
public class Student {
    String name;
    int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

Student student1 = new Student("Amara", 15);
\`\`\``,
      exampleCode: `public class Main {

    public static void main(String[] args) {
        Student student1 = new Student("Amara", 15);
        Student student2 = new Student("Diego", 16);

        System.out.println(student1.name + " is " + student1.age + " years old.");
        System.out.println(student2.name + " is " + student2.age + " years old.");
    }
}

class Student {
    String name;
    int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}`,
      exampleExplanation: [
        "`class Student { ... }` defines the blueprint: every `Student` object will have a `name` and an `age`.",
        "`public Student(String name, int age)` is the constructor - a special method with the same name as the class, called automatically by `new`.",
        "`this.name = name;` stores the constructor's `name` parameter into the object's own `name` field. `this` means \"this specific object being built\".",
        '`new Student("Amara", 15)` creates one real `Student` object and runs the constructor with those values.',
        "`student1.name` and `student2.name` show that each object keeps its own separate copy of `name` and `age`.",
      ],
      commonMistakes: [
        'Forgetting `new` when creating an object, e.g. writing `Student student1 = Student("Amara", 15);`.',
        "Giving the constructor a different name than the class - it must match exactly.",
        "Forgetting `this.` inside the constructor, which can cause the parameter to be assigned to itself instead of to the field.",
        "Defining two constructors with the exact same parameter list (this is not allowed - see Method Overloading for how to define multiple valid constructors).",
        "Confusing the class (the blueprint, written once) with an object (one instance, created many times with `new`).",
      ],
      exercise: {
        id: "module-5-classes-and-objects-exercise",
        title: "Create a Club Class",
        instructions:
          "Write a class named Club with two fields: a String clubName and an int memberCount. Give it a constructor that sets both fields using the this keyword. In main, create two different Club objects with different data, and print a short summary line for each, such as \"Chess Club has 12 members\".",
        starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Create two Club objects with different clubName and memberCount values.
        // TODO: Print a summary line for each, e.g. "Chess Club has 12 members".



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}

class Club {

    // TODO: Declare a String field named clubName.
    // TODO: Declare an int field named memberCount.
    // TODO: Write a constructor that takes clubName and memberCount,
    // and assigns them to the fields using this.


}`,
        expectedBehaviour:
          'If you create a Club with clubName "Chess Club" and memberCount 12, printing a summary should produce something like "Chess Club has 12 members." Two different Club objects should keep separate, independent values.',
        conceptsTested: ["classes", "fields", "constructors", "this keyword", "objects"],
        difficulty: "intermediate",
      },
      followUpPrompts: [
        "What is the difference between a class and an object?",
        "Why do we use this in the constructor?",
        "Give me another exercise about classes and objects.",
      ],
    },
    {
      id: "module-5-fields",
      moduleId: "module-5",
      order: 2,
      title: "Fields",
      comingSoon: true,
      note: "Covered together with Classes and Objects",
    },
    {
      id: "module-5-constructors",
      moduleId: "module-5",
      order: 3,
      title: "Constructors",
      comingSoon: true,
      note: "Covered together with Classes and Objects",
    },
    {
      id: "module-5-this-keyword",
      moduleId: "module-5",
      order: 4,
      title: "The this Keyword",
      comingSoon: true,
      note: "Covered together with Classes and Objects",
    },
    {
      id: "module-5-encapsulation",
      moduleId: "module-5",
      order: 5,
      title: "Encapsulation",
      comingSoon: true,
      note: "Covered together with Access Modifiers",
    },
    {
      id: "module-5-access-modifiers",
      moduleId: "module-5",
      order: 6,
      title: "Access Modifiers: Public, Private, Protected",
      objective:
        "Protect a class's fields using private access and controlled getters/setters, and explain the difference between public, private, protected and default access.",
      explanation: `**What it is**

Access modifiers control which parts of a program are allowed to see or use a field, method, or class. **Encapsulation** is the practice of hiding a class's internal data (making fields \`private\`) and only allowing it to be read or changed through controlled methods (getters and setters).

**Why it is needed**

If any part of a program can directly change a student's mark to an invalid value like \`-50\`, bugs become very hard to track down. Encapsulation lets a class protect its own data and enforce rules - for example, refusing to accept a negative mark.

**When it is used**

Protecting a student's mark, age, or ID number from being set to an invalid value from outside the class; hiding internal details that other classes should not need to know about.

**The four access levels**

| Modifier | Who can access it |
|---|---|
| \`public\` | Anyone, from any class, anywhere |
| \`private\` | Only code inside the same class |
| \`protected\` | The same class, same package, and subclasses (see Inheritance) |
| *(none written = default)* | Only code in the same package |

**The basic Java syntax**

\`\`\`java
public class Student {
    private int mark; // hidden - cannot be accessed directly from outside

    public int getMark() {       // getter: safely reads the value
        return mark;
    }

    public void setMark(int mark) { // setter: safely changes the value, with rules
        if (mark >= 0 && mark <= 100) {
            this.mark = mark;
        } else {
            System.out.println("Invalid mark ignored.");
        }
    }
}
\`\`\``,
      analogy:
        "Think of a student's official school record as a locked filing cabinet (`private`). Nobody outside the school office can open the cabinet directly. Instead, they must ask the office staff, who follow rules before making any change - like refusing to record a mark of -50. The staff act as the getters and setters: a safe, controlled way to read or update what's inside.",
      syntax: `\`\`\`java
private int mark;

public int getMark() {
    return mark;
}

public void setMark(int mark) {
    if (mark >= 0 && mark <= 100) {
        this.mark = mark;
    }
}
\`\`\``,
      exampleCode: `public class Main {

    public static void main(String[] args) {
        Student student1 = new Student();
        student1.setMark(85);
        System.out.println("Mark: " + student1.getMark());

        student1.setMark(150); // invalid, should be rejected
        System.out.println("Mark after invalid attempt: " + student1.getMark());
    }
}

class Student {
    private int mark; // hidden from outside the class

    public int getMark() {
        return mark;
    }

    public void setMark(int mark) {
        if (mark >= 0 && mark <= 100) {
            this.mark = mark;
        } else {
            System.out.println("Invalid mark ignored: " + mark);
        }
    }
}`,
      exampleExplanation: [
        "`private int mark;` means no other class, including `Main`, can write `student1.mark` directly - it must go through methods.",
        "`getMark()` is a public getter: it safely returns the current value of the private field.",
        "`setMark(int mark)` is a public setter: it checks the value is between 0 and 100 before storing it, protecting the object from invalid data.",
        "`student1.setMark(150);` is rejected by the setter's rule, so the mark stays at its previous, valid value (85).",
      ],
      commonMistakes: [
        "Making all fields `public`, which removes any protection and lets other code set invalid values directly.",
        "Writing a setter that stores the value without any validation, which defeats the purpose of encapsulation.",
        "Forgetting to make a getter `public`, which then makes the field inaccessible from outside the class in any way.",
        "Confusing `protected` (accessible to subclasses) with `private` (accessible only within the exact same class).",
        "Naming getters/setters inconsistently, e.g. `fetchMark()` instead of the standard `getMark()` / `setMark()` convention.",
      ],
      exercise: {
        id: "module-5-access-modifiers-exercise",
        title: "Protect a Club's Member Count",
        instructions:
          "Write a class named Club with a private int memberCount field. Add a public getter getMemberCount() and a public setter setMemberCount(int count) that only accepts values of 0 or greater (reject negative numbers by printing a message instead of storing them). In main, create a Club object, try setting a valid member count, print it, then try setting an invalid negative member count and print the value again to show it was rejected.",
        starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Create a Club object.
        // TODO: Call setMemberCount with a valid positive number, then print getMemberCount().
        // TODO: Call setMemberCount with a negative number, then print getMemberCount() again.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}

class Club {

    // TODO: Declare a private int field named memberCount.
    // TODO: Write a public getter named getMemberCount.
    // TODO: Write a public setter named setMemberCount that only
    // accepts values of 0 or greater. If the value is negative,
    // print a message instead of storing it.


}`,
        expectedBehaviour:
          "After setting a valid member count like 12, getMemberCount() should return 12. After attempting to set a negative number like -5, getMemberCount() should still return the previous valid value (the negative value must be rejected).",
        conceptsTested: ["private fields", "getters", "setters", "encapsulation", "input validation"],
        difficulty: "intermediate",
      },
      followUpPrompts: [
        "What is the difference between private and protected?",
        "Why not just make every field public for simplicity?",
        "Give me another exercise about encapsulation.",
      ],
    },
    {
      id: "module-5-getters-setters",
      moduleId: "module-5",
      order: 7,
      title: "Getters and Setters",
      comingSoon: true,
      note: "Covered together with Access Modifiers",
    },
    {
      id: "module-5-access-modifiers-list",
      moduleId: "module-5",
      order: 8,
      title: "Public, Private, Protected, Default",
      comingSoon: true,
      note: "Covered together with Access Modifiers",
    },
    {
      id: "module-5-static",
      moduleId: "module-5",
      order: 9,
      title: "Static Fields and Methods",
      comingSoon: true,
    },
    {
      id: "module-5-inheritance",
      moduleId: "module-5",
      order: 10,
      title: "Inheritance",
      objective:
        "Create a subclass that inherits fields and methods from a parent class using extends and super, avoiding repeated code.",
      explanation: `**What it is**

Inheritance lets one class (a **subclass**, or **child class**) reuse the fields and methods of another class (a **superclass**, or **parent class**), using the keyword \`extends\`. The subclass automatically gets everything the parent has, and can add its own extra fields and methods.

**Why it is needed**

A \`Student\` and a \`Teacher\` are both people at the school - they share things like a name and an age. Without inheritance, you would copy that shared code into both classes. Inheritance lets you write shared code once, in a common parent class, and reuse it.

**When it is used**

Creating a general \`Person\` class, then \`Student\` and \`Teacher\` classes that both extend it, each adding their own specific details (like \`grade\` for a student, or \`subjectTaught\` for a teacher).

**The basic Java syntax**

\`\`\`java
class Person {
    String name;
    int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    int grade;

    public Student(String name, int age, int grade) {
        super(name, age); // calls the Person constructor
        this.grade = grade;
    }
}
\`\`\`

The \`super\` keyword refers to the parent class. \`super(...)\` calls the parent's constructor, so you don't need to repeat the logic that sets up \`name\` and \`age\`.`,
      analogy:
        "Think of `Person` as a general school ID card template that every person at school shares: a name and an age. A `Student` ID card and a `Teacher` ID card both start from that same basic template and then add their own extra fields - a student adds a grade level, a teacher adds a subject taught. Neither needs to redesign the \"name and age\" part from scratch.",
      syntax: `\`\`\`java
class Person {
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
\`\`\``,
      exampleCode: `public class Main {

    public static void main(String[] args) {
        Student student1 = new Student("Amara", 15, 10);
        System.out.println(student1.name + " is in grade " + student1.grade);
    }
}

class Person {
    String name;
    int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    int grade;

    public Student(String name, int age, int grade) {
        super(name, age); // reuse the Person constructor
        this.grade = grade;
    }
}`,
      exampleExplanation: [
        "`class Student extends Person` means `Student` inherits `name` and `age` from `Person` automatically.",
        "`super(name, age);` calls the `Person` constructor to set up the inherited fields, so `Student`'s constructor does not need to repeat that logic.",
        "`this.grade = grade;` sets the field that belongs only to `Student`, not to `Person`.",
        "`student1.name` works even though `name` is defined in `Person`, because `Student` inherited it.",
      ],
      commonMistakes: [
        "Forgetting to call `super(...)` when the parent class has no no-argument constructor, which causes a compile error.",
        "Calling `super(...)` anywhere other than the very first line of the subclass's constructor - Java requires it to be first.",
        "Trying to access a parent's `private` field directly from the subclass - use `protected` or a getter instead.",
        "Confusing inheritance (\"is-a\" relationship, e.g. a Student is a Person) with composition (\"has-a\" relationship, e.g. a Course has a list of Students).",
        "Re-declaring the exact same field in the subclass that already exists in the parent, causing confusing duplicate data.",
      ],
      exercise: {
        id: "module-5-inheritance-exercise",
        title: "Create a Teacher Subclass",
        instructions:
          "Using the Person class already defined below, create a new class named Teacher that extends Person and adds one extra field: String subjectTaught. Give Teacher a constructor that accepts a name, age, and subjectTaught, and uses super(...) to set up the inherited fields. In main, create a Teacher object and print a summary line using all three pieces of information.",
        starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Create a Teacher object with a name, age, and subjectTaught.
        // TODO: Print a summary line using all three values,
        // e.g. "Ms. Rivera (34) teaches Mathematics"



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}

class Person {
    String name;
    int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

// TODO: Write the Teacher class here.
// It should extend Person and add a String subjectTaught field.
// Its constructor should accept name, age, and subjectTaught,
// and call super(name, age) before setting subjectTaught.



/* STUDENT CODE STARTS HERE */




/* STUDENT CODE ENDS HERE */`,
        expectedBehaviour:
          'Creating a Teacher with name "Ms. Rivera", age 34, and subjectTaught "Mathematics" and printing a summary should clearly show all three pieces of information, for example "Ms. Rivera (34) teaches Mathematics".',
        conceptsTested: ["inheritance", "extends", "super()", "subclass constructors"],
        difficulty: "intermediate",
      },
      followUpPrompts: [
        "Why do we need super() in the constructor?",
        "Can a subclass have its own extra methods?",
        "Give me another exercise about inheritance.",
      ],
    },
    {
      id: "module-5-super-keyword",
      moduleId: "module-5",
      order: 11,
      title: "The super Keyword",
      comingSoon: true,
      note: "Covered together with Inheritance",
    },
    {
      id: "module-5-overriding",
      moduleId: "module-5",
      order: 12,
      title: "Method Overriding",
      objective:
        "Override a parent class's method in a subclass to give it more specific behavior, and explain the difference between overloading and overriding.",
      explanation: `**What it is**

Method overriding means a subclass provides its own version of a method that it inherited from its parent class, using the exact same method name, parameters, and return type. The \`@Override\` annotation marks this clearly (and helps Java catch mistakes).

**Why it is needed**

A general \`Person\` might have a method \`displayInfo()\` that prints a name and age. But a \`Student\` should probably also show their grade, and a \`Teacher\` should show their subject. Overriding lets each subclass customize inherited behavior while keeping the same method name.

**When it is used**

Customizing how a \`Student\` and a \`Teacher\` display their information, even though both inherited the same \`displayInfo()\` method from \`Person\`.

**The basic Java syntax**

\`\`\`java
class Person {
    public void displayInfo() {
        System.out.println("Name: " + name);
    }
}

class Student extends Person {
    @Override
    public void displayInfo() {
        super.displayInfo(); // optionally reuse the parent's version too
        System.out.println("Grade: " + grade);
    }
}
\`\`\`

**Overloading vs. overriding - the key difference**

| | Overloading | Overriding |
|---|---|---|
| Classes involved | Same class (or subclass adding new versions) | Parent and subclass, same method signature |
| Parameters | Must be different | Must be exactly the same |
| Decided | At compile time, by argument types | At runtime, by the actual object's type |`,
      analogy:
        "Every `Person` at school has a basic ID badge display: just a name. A `Student` badge display adds their grade level. A `Teacher` badge display adds their subject. Each subclass overrides the same `displayInfo()` action to show more specific, relevant information - the badge \"slot\" (method name) stays the same, but what actually gets shown changes depending on whose badge it is.",
      syntax: `\`\`\`java
@Override
public void displayInfo() {
    super.displayInfo();
    System.out.println("Grade: " + grade);
}
\`\`\``,
      exampleCode: `public class Main {

    public static void main(String[] args) {
        Person person = new Person("Mr. Lee", 40);
        Student student = new Student("Amara", 15, 10);

        person.displayInfo();
        student.displayInfo();
    }
}

class Person {
    String name;
    int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void displayInfo() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

class Student extends Person {
    int grade;

    public Student(String name, int age, int grade) {
        super(name, age);
        this.grade = grade;
    }

    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Grade: " + grade);
    }
}`,
      exampleExplanation: [
        "`Person`'s `displayInfo()` prints just a name and age - this is the original, inherited version.",
        "`Student` overrides `displayInfo()` with `@Override`, using the exact same method name and parameters (none, in this case).",
        "`super.displayInfo();` inside the override calls the parent's original version first, so the grade line is added *on top of* the normal info instead of replacing it.",
        "`student.displayInfo();` runs the `Student` version, not the `Person` version, because the actual object is a `Student`.",
      ],
      commonMistakes: [
        "Changing the parameter list when trying to override - that actually creates an overload, not an override.",
        "Forgetting `@Override` - the code may still work, but the annotation helps Java flag a mistake if the method doesn't actually match the parent.",
        "Making the overriding method's access modifier more restrictive than the parent's (e.g. parent is `public`, override is `private`) - Java does not allow this.",
        "Forgetting to call `super.methodName()` when the parent's behavior should still run in addition to the new behavior.",
        "Confusing overriding with overloading - remember, overriding needs an *identical* method signature in a subclass.",
      ],
      exercise: {
        id: "module-5-overriding-exercise",
        title: "Override displayInfo for a Teacher",
        instructions:
          "Using the Person and Student classes already defined below, create a Teacher class that extends Person and adds a String subjectTaught field. Override displayInfo() in Teacher so that it first calls the parent's version with super.displayInfo(), then prints the subject taught. In main, create one Teacher object and call displayInfo() on it.",
        starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Create a Teacher object with a name, age, and subjectTaught.
        // TODO: Call displayInfo() on it.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}

class Person {
    String name;
    int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void displayInfo() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

// TODO: Write the Teacher class here.
// It should extend Person and add a String subjectTaught field.
// Override displayInfo() to call super.displayInfo() first,
// then print the subject taught.



/* STUDENT CODE STARTS HERE */




/* STUDENT CODE ENDS HERE */`,
        expectedBehaviour:
          'Calling displayInfo() on a Teacher with name "Mr. Lee", age 40, and subjectTaught "Chemistry" should print the name and age line, followed by a line showing the subject taught, e.g. "Subject: Chemistry".',
        conceptsTested: ["method overriding", "@Override", "super.method()", "inheritance"],
        difficulty: "intermediate",
      },
      followUpPrompts: [
        "What is polymorphism and how does it relate to overriding?",
        "What is the exact difference between overloading and overriding again?",
        "Give me another exercise about overriding.",
      ],
    },
    {
      id: "module-5-polymorphism",
      moduleId: "module-5",
      order: 13,
      title: "Polymorphism",
      comingSoon: true,
      note: "Introduced together with Method Overriding",
    },
    {
      id: "module-5-abstract-classes",
      moduleId: "module-5",
      order: 14,
      title: "Abstract Classes",
      comingSoon: true,
    },
    {
      id: "module-5-interfaces",
      moduleId: "module-5",
      order: 15,
      title: "Interfaces",
      comingSoon: true,
    },
    {
      id: "module-5-composition",
      moduleId: "module-5",
      order: 16,
      title: "Composition",
      comingSoon: true,
    },
    {
      id: "module-5-overload-vs-override",
      moduleId: "module-5",
      order: 17,
      title: "Overloading vs. Overriding",
      comingSoon: true,
      note: "Covered together with Method Overriding",
    },
  ],
};
