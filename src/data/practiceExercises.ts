import type { Exercise } from "@/data/types";

/**
 * Extra practice exercises for each fully-authored lesson, used when a
 * student clicks "Show another example" or "Give me another exercise".
 * Each lesson has a small bank of progressively harder exercises testing
 * the *same* concepts as the lesson's original exercise, but with a new
 * problem (never just a tweak of the same solution).
 *
 * getPracticeExercise() below makes this feel unlimited: once a lesson's
 * bank is exhausted, it cycles back through the bank with a "remix" note
 * so the student always gets a fresh-looking prompt to attempt again.
 */
export const practiceExerciseBank: Record<string, Exercise[]> = {
  "module-1-program-structure": [
    {
      id: "module-1-program-structure-practice-2",
      title: "Print a Club Announcement",
      instructions:
        "Write a complete Java program whose main method prints two lines: the name of a school club, then its motto. Use your own club name and motto.",
      starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Print the club's name on one line.
        // TODO: Print the club's motto on the next line.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
      expectedBehaviour: 'The program should print exactly two lines, e.g. "Chess Club" then "Think Before You Move".',
      conceptsTested: ["class structure", "main method", "System.out.println"],
      difficulty: "beginner",
    },
    {
      id: "module-1-program-structure-practice-3",
      title: "Print a Three-Line Notice With a Comment",
      instructions:
        "Write a program that prints three lines about an upcoming school event (name, date, location). Add at least one comment above your print statements explaining what the program does.",
      starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Add a comment describing what this program prints.
        // TODO: Print the event name, date, and location on three separate lines.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
      expectedBehaviour: "The program should print three lines of text and contain at least one // or /* */ comment.",
      conceptsTested: ["class structure", "main method", "System.out.println"],
      difficulty: "beginner",
    },
    {
      id: "module-1-program-structure-practice-4",
      title: "Build the Whole Main Method Yourself",
      instructions:
        "This time you get an empty class with no main method at all. Write the complete public class Main, including the main method signature, that prints your school's name, then \"Welcome!\".",
      starterCode: `// TODO: Write a complete Main class here, including the main method.
// It should print the school's name, then print "Welcome!" on the next line.



/* STUDENT CODE STARTS HERE */




/* STUDENT CODE ENDS HERE */`,
      expectedBehaviour: 'Running the program should print the school\'s name, then "Welcome!" on the next line, with no compile errors.',
      conceptsTested: ["class structure", "main method", "System.out.println"],
      difficulty: "intermediate",
    },
  ],

  "module-1-variables": [
    {
      id: "module-1-variables-practice-2",
      title: "Store a Teacher's Details",
      instructions:
        "Create variables for a teacher's name, the subject they teach, and how many years they have been teaching. Print all three, then simulate one more year passing by updating the years variable and printing it again.",
      starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Declare a String variable for the teacher's name.
        // TODO: Declare a String variable for the subject taught.
        // TODO: Declare an int variable for years teaching.
        // TODO: Print all three values.
        // TODO: Add 1 to the years teaching variable and print it again.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
      expectedBehaviour: "The program should print the teacher's name, subject, and years teaching, then print the years teaching again after increasing it by 1.",
      conceptsTested: ["variable declaration", "variable assignment", "String concatenation with +"],
      difficulty: "beginner",
    },
    {
      id: "module-1-variables-practice-3",
      title: "Store a Library Book's Details",
      instructions:
        "Create variables for a library book's title, number of pages, and average rating (a decimal). Print a single sentence combining all three.",
      starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Declare a String variable for the book title.
        // TODO: Declare an int variable for the number of pages.
        // TODO: Declare a double variable for the average rating.
        // TODO: Print one sentence using all three variables.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
      expectedBehaviour: 'For a book titled "Dune", 412 pages, rating 4.7, the program should print a sentence containing all three values.',
      conceptsTested: ["variable declaration", "variable assignment", "String concatenation with +"],
      difficulty: "beginner",
    },
    {
      id: "module-1-variables-practice-4",
      title: "Track a School Event's Details",
      instructions:
        "Create four variables for a school event: its name (String), date (String), number of attendees (int), and whether it's free to attend (boolean). Print a single summary sentence that uses all four variables.",
      starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Declare a String variable for the event name.
        // TODO: Declare a String variable for the event date.
        // TODO: Declare an int variable for the number of attendees.
        // TODO: Declare a boolean variable for whether it is free.
        // TODO: Print one summary sentence using all four variables.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
      expectedBehaviour: "The program should print a sentence that clearly includes the event name, date, attendee count, and whether it's free.",
      conceptsTested: ["variable declaration", "variable assignment", "String concatenation with +"],
      difficulty: "intermediate",
    },
  ],

  "module-1-data-types": [
    {
      id: "module-1-data-types-practice-2",
      title: "Build a Library Book Record",
      instructions:
        "Create variables for a library book: title (String), pages (int), price (double), availability (char, 'Y' or 'N'), and isReserved (boolean). Also create a final int constant MAX_LOAN_DAYS set to 14. Print a summary using all five variables and the constant.",
      starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Declare String title, int pages, double price,
        // char availability, and boolean isReserved.
        // TODO: Declare a final int MAX_LOAN_DAYS set to 14.
        // TODO: Print a summary using all of the above.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
      expectedBehaviour: "The program should print a summary line including the title, pages, price, availability, reservation status, and the maximum loan days (14).",
      conceptsTested: ["int", "double", "boolean", "char", "final constants"],
      difficulty: "beginner",
    },
    {
      id: "module-1-data-types-practice-3",
      title: "Cast an Exam Score",
      instructions:
        "Store an exam score of 76.9 as a double. Print it. Then cast it to an int and print the result too, so you can see how casting drops the decimal part.",
      starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Declare a double examScore set to 76.9 and print it.
        // TODO: Cast examScore to an int, store it in a new variable, and print it.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
      expectedBehaviour: "The program should print 76.9 first, then print 76 (the decimal part removed by casting).",
      conceptsTested: ["int", "double", "boolean", "char", "final constants"],
      difficulty: "intermediate",
    },
    {
      id: "module-1-data-types-practice-4",
      title: "Model a Club With All Core Types",
      instructions:
        "Create a full record for a school club using every core type: name (String), memberCount (int), duesAmount (double), isActive (boolean), and leaderInitial (char). Also add a final int constant MAX_MEMBERS set to 30. Print a complete summary.",
      starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Declare all five variables described above.
        // TODO: Declare a final int MAX_MEMBERS set to 30.
        // TODO: Print a full summary using all variables and the constant.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
      expectedBehaviour: "The program should print a summary that includes the club name, member count, dues amount, active status, leader initial, and the max members constant (30).",
      conceptsTested: ["int", "double", "boolean", "char", "final constants"],
      difficulty: "intermediate",
    },
  ],

  "module-2-conditions": [
    {
      id: "module-2-conditions-practice-2",
      title: "Library Fine Checker",
      instructions:
        "A library charges a fine only if a book is returned late. Store the number of days late in a variable. If it is greater than 0, print a fine message including the number of days; otherwise print that there is no fine.",
      starterCode: `public class Main {

    public static void main(String[] args) {

        int daysLate = 3;

        // TODO: If daysLate is greater than 0, print a message that
        // includes the number of days late.
        // Otherwise, print "No fine - returned on time."



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
      expectedBehaviour: 'For daysLate = 3, the program should print a message mentioning 3 days late. For daysLate = 0, it should print "No fine - returned on time."',
      conceptsTested: ["if-else", "comparison operators", "logical AND (&&)"],
      difficulty: "beginner",
    },
    {
      id: "module-2-conditions-practice-3",
      title: "Grade Level Placement",
      instructions:
        "Given a student's age, print which grade level group they belong to: \"Middle School\" for ages 13-15, \"High School\" for ages 16-18, or \"Not eligible for this system\" otherwise. Use else-if with logical AND to combine the range checks.",
      starterCode: `public class Main {

    public static void main(String[] args) {

        int age = 14;

        // TODO: If age is between 13 and 15 (inclusive), print "Middle School".
        // TODO: Else if age is between 16 and 18 (inclusive), print "High School".
        // TODO: Otherwise, print "Not eligible for this system".



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
      expectedBehaviour: 'For age = 14, the program should print "Middle School". For age = 17, it should print "High School". For age = 25, it should print "Not eligible for this system".',
      conceptsTested: ["if-else", "comparison operators", "logical AND (&&)"],
      difficulty: "intermediate",
    },
    {
      id: "module-2-conditions-practice-4",
      title: "Club Membership With Dues Check",
      instructions:
        "A club has two rules: only students may join, and joining students must have paid their dues. Store an isStudent boolean and a hasPaidDues boolean. Write a nested condition: if isStudent is true, then check hasPaidDues (print \"Welcome to the club!\" or \"Please pay dues first.\"); if isStudent is false, print \"Only students may join.\"",
      starterCode: `public class Main {

    public static void main(String[] args) {

        boolean isStudent = true;
        boolean hasPaidDues = false;

        // TODO: Write a nested if-else:
        //   If isStudent is true:
        //     If hasPaidDues is true, print "Welcome to the club!"
        //     Otherwise, print "Please pay dues first."
        //   If isStudent is false, print "Only students may join."



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
      expectedBehaviour: 'For isStudent = true and hasPaidDues = false, the program should print "Please pay dues first." Changing hasPaidDues to true should print "Welcome to the club!"',
      conceptsTested: ["if-else", "comparison operators", "logical AND (&&)"],
      difficulty: "intermediate",
    },
  ],

  "module-2-for-loops": [
    {
      id: "module-2-for-loops-practice-2",
      title: "Print Numbers and Their Squares",
      instructions:
        "Use a for loop to print the numbers 1 through 10, and next to each number, print its square (the number multiplied by itself).",
      starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Use a for loop from 1 to 10.
        // For each number, print the number and its square, e.g. "3 squared is 9".



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
      expectedBehaviour: 'The program should print 10 lines, one for each number from 1 to 10, showing the number and its square (e.g. "3 squared is 9").',
      conceptsTested: ["for loop", "loop counters", "String concatenation"],
      difficulty: "beginner",
    },
    {
      id: "module-2-for-loops-practice-3",
      title: "Total the Price of Library Books",
      instructions:
        "Given an array of five book prices, use a for loop to print each price with a label, add them all together, and print the total cost.",
      starterCode: `public class Main {

    public static void main(String[] args) {

        double[] bookPrices = {12.50, 8.75, 15.00, 6.25, 9.99};

        // TODO: Use a for loop to print each price, e.g. "Book 1: $12.5"
        // TODO: Add each price to a running total.
        // TODO: After the loop, print the total cost.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
      expectedBehaviour: "The program should print each of the five prices with a label, then print the total cost, which for this data is 52.49.",
      conceptsTested: ["for loop", "loop counters", "String concatenation"],
      difficulty: "intermediate",
    },
    {
      id: "module-2-for-loops-practice-4",
      title: "Countdown to an Event",
      instructions:
        "Use a for loop that counts backwards from 10 down to 1, printing each number, then prints \"Event starts now!\" after the loop finishes.",
      starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Use a for loop that starts at 10 and counts down to 1.
        // Print each number.
        // After the loop, print "Event starts now!"



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
      expectedBehaviour: 'The program should print the numbers 10 down to 1 (one per line), followed by "Event starts now!"',
      conceptsTested: ["for loop", "loop counters", "String concatenation"],
      difficulty: "intermediate",
    },
  ],

  "module-2-while-loops": [
    {
      id: "module-2-while-loops-practice-2",
      title: "Sell Event Tickets",
      instructions:
        "An event has 5 tickets available. Use a while loop to sell one ticket at a time (printing a message each time) until all tickets are sold, then print a message saying the event is sold out.",
      starterCode: `public class Main {

    public static void main(String[] args) {

        int totalTickets = 5;
        int ticketsSold = 0;

        // TODO: Use a while loop that runs while ticketsSold is less than totalTickets.
        // Each time, add 1 to ticketsSold and print "Sold ticket #X" (X = ticketsSold).

        System.out.println("Event is sold out!");
    }
}`,
      expectedBehaviour: 'The program should print five lines, "Sold ticket #1" through "Sold ticket #5", followed by "Event is sold out!"',
      conceptsTested: ["while loop", "loop conditions", "manual counters"],
      difficulty: "beginner",
    },
    {
      id: "module-2-while-loops-practice-3",
      title: "Double Until the Limit",
      instructions:
        "Start with a value of 1. Use a while loop to keep doubling the value and printing it, stopping once the value is greater than 100.",
      starterCode: `public class Main {

    public static void main(String[] args) {

        int value = 1;

        // TODO: Use a while loop that keeps doubling value and printing it,
        // stopping once value is greater than 100.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
      expectedBehaviour: "The program should print 1, 2, 4, 8, 16, 32, 64, 128, then stop because 128 is greater than 100.",
      conceptsTested: ["while loop", "loop conditions", "manual counters"],
      difficulty: "intermediate",
    },
    {
      id: "module-2-while-loops-practice-4",
      title: "Process a Book Return Queue",
      instructions:
        "A queue has 4 books waiting to be returned. Use a while loop with a manual counter to process the queue one book at a time, printing \"Returned book #X\" for each, then print a final message once the queue is empty.",
      starterCode: `public class Main {

    public static void main(String[] args) {

        int booksInQueue = 4;
        int booksReturned = 0;

        // TODO: Use a while loop that runs while booksReturned is less than booksInQueue.
        // Each time, add 1 to booksReturned and print "Returned book #X".

        System.out.println("Queue is empty.");
    }
}`,
      expectedBehaviour: 'The program should print "Returned book #1" through "Returned book #4", followed by "Queue is empty."',
      conceptsTested: ["while loop", "loop conditions", "manual counters"],
      difficulty: "intermediate",
    },
  ],

  "module-3-strings": [
    {
      id: "module-3-strings-practice-2",
      title: "Format a Teacher's Display Name",
      instructions:
        "Store a teacher's first and last name in separate variables, join them with a space, print the full name in uppercase, and print its length.",
      starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Declare firstName and lastName String variables.
        // TODO: Build fullName by joining them with a space.
        // TODO: Print fullName in uppercase.
        // TODO: Print the length of fullName.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
      expectedBehaviour: 'For firstName "maria" and lastName "lopez", the program should print "MARIA LOPEZ" and then 11.',
      conceptsTested: ["String concatenation", "toUpperCase()", "length()"],
      difficulty: "beginner",
    },
    {
      id: "module-3-strings-practice-3",
      title: "Compare Two Course Codes",
      instructions:
        "Store two course codes as Strings, one typed by a student (possibly in the wrong case) and one that is the correct code. Use equalsIgnoreCase to check if they match, and print an appropriate message.",
      starterCode: `public class Main {

    public static void main(String[] args) {

        String enteredCode = "math101";
        String correctCode = "MATH101";

        // TODO: Compare enteredCode and correctCode using equalsIgnoreCase.
        // Print "Course code accepted." if they match, otherwise
        // print "Course code not recognized."



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
      expectedBehaviour: 'For "math101" and "MATH101", the program should print "Course code accepted." because equalsIgnoreCase ignores case differences.',
      conceptsTested: ["String concatenation", "toUpperCase()", "length()"],
      difficulty: "intermediate",
    },
    {
      id: "module-3-strings-practice-4",
      title: "Build an Event Announcement String",
      instructions:
        "Store an event name and a date as two separate String variables. Build one announcement String by concatenating them with some connecting text (e.g. \" is happening on \"). Print the announcement, then print its total length.",
      starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Declare eventName and eventDate String variables.
        // TODO: Build one announcement String combining both with connecting text.
        // TODO: Print the announcement and then its length.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
      expectedBehaviour: 'For eventName "Science Fair" and eventDate "May 10", the program should print something like "Science Fair is happening on May 10" followed by its length.',
      conceptsTested: ["String concatenation", "toUpperCase()", "length()"],
      difficulty: "intermediate",
    },
  ],

  "module-3-arrays": [
    {
      id: "module-3-arrays-practice-2",
      title: "Average a Book Ratings Array",
      instructions:
        "Given an array of five book ratings (doubles), traverse it with a for loop, print each rating, then print the total and the average.",
      starterCode: `public class Main {

    public static void main(String[] args) {

        double[] ratings = {4.5, 3.8, 5.0, 4.2, 4.9};

        // TODO: Use a for loop to print each rating.
        // TODO: Add each rating to a running total.
        // TODO: After the loop, print the total and the average.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
      expectedBehaviour: "The program should print each of the five ratings, then the total (22.4) and the average (4.48).",
      conceptsTested: ["arrays", "array traversal with for loop", "running totals"],
      difficulty: "beginner",
    },
    {
      id: "module-3-arrays-practice-3",
      title: "List Club Names With Numbers",
      instructions:
        "Given an array of club name Strings, traverse it with a for loop and print each club with its position number, starting from 1 (e.g. \"1. Chess Club\").",
      starterCode: `public class Main {

    public static void main(String[] args) {

        String[] clubNames = {"Chess Club", "Debate Team", "Art Club"};

        // TODO: Use a for loop to print each club with its position number,
        // starting from 1, e.g. "1. Chess Club"



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
      expectedBehaviour: 'The program should print "1. Chess Club", "2. Debate Team", "3. Art Club" on separate lines.',
      conceptsTested: ["arrays", "array traversal with for loop", "running totals"],
      difficulty: "intermediate",
    },
    {
      id: "module-3-arrays-practice-4",
      title: "Update Attendance and Recalculate",
      instructions:
        "Given an array of daily attendance counts, print the total attendance. Then update one specific day's value (simulating a correction), and print the new, recalculated total.",
      starterCode: `public class Main {

    public static void main(String[] args) {

        int[] attendance = {28, 30, 25, 29, 27};

        // TODO: Use a for loop to calculate and print the total attendance.
        // TODO: Update attendance[2] to 31 (a correction).
        // TODO: Recalculate and print the new total attendance.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
      expectedBehaviour: "The program should first print a total of 139, then after updating index 2 to 31, print a new total of 145.",
      conceptsTested: ["arrays", "array traversal with for loop", "running totals"],
      difficulty: "intermediate",
    },
  ],

  "module-4-methods": [
    {
      id: "module-4-methods-practice-2",
      title: "Write a calculateAverage Method",
      instructions:
        "Write a method named calculateAverage that takes an int array of marks and returns their average as a double. Call it from main with a sample array and print the result.",
      starterCode: `public class Main {

    // TODO: Write the calculateAverage method here.
    // It takes an int[] parameter and returns a double.



    /* STUDENT CODE STARTS HERE */




    /* STUDENT CODE ENDS HERE */

    public static void main(String[] args) {
        int[] marks = {80, 90, 70, 85};

        // TODO: Call calculateAverage and print the result.
    }
}`,
      expectedBehaviour: 'For {80, 90, 70, 85}, calculateAverage should return 81.25, and the program should print it.',
      conceptsTested: ["method definition", "parameters", "return values", "boolean logic"],
      difficulty: "intermediate",
    },
    {
      id: "module-4-methods-practice-3",
      title: "Write an isEligibleForClub Method",
      instructions:
        "Write a method named isEligibleForClub that takes an int age and a double gpa, and returns true only if age is at least 13 AND gpa is at least 2.5. Call it from main with two different students and print each result.",
      starterCode: `public class Main {

    // TODO: Write the isEligibleForClub method here.
    // It takes an int age and a double gpa, and returns a boolean.



    /* STUDENT CODE STARTS HERE */




    /* STUDENT CODE ENDS HERE */

    public static void main(String[] args) {
        // TODO: Call isEligibleForClub with two different students
        // and print each result.
    }
}`,
      expectedBehaviour: "For age 14 and gpa 3.0, the method should return true. For age 12 and gpa 3.5, it should return false (too young).",
      conceptsTested: ["method definition", "parameters", "return values", "boolean logic"],
      difficulty: "intermediate",
    },
    {
      id: "module-4-methods-practice-4",
      title: "Write a printReportCard Method",
      instructions:
        "Write a void method named printReportCard that takes a student's name (String) and mark (int), and prints a formatted line showing the name, mark, and a computed letter grade (90+ is A, 75+ is B, 50+ is C, otherwise F). Call it from main for two students.",
      starterCode: `public class Main {

    // TODO: Write the printReportCard method here.
    // It takes a String name and an int mark, and returns nothing (void).
    // It should print the name, mark, and a computed letter grade.



    /* STUDENT CODE STARTS HERE */




    /* STUDENT CODE ENDS HERE */

    public static void main(String[] args) {
        // TODO: Call printReportCard for two different students.
    }
}`,
      expectedBehaviour: 'For ("Amara", 92), the program should print a line showing Amara, 92, and grade A.',
      conceptsTested: ["method definition", "parameters", "return values", "boolean logic"],
      difficulty: "advanced",
    },
  ],

  "module-4-overloading": [
    {
      id: "module-4-overloading-practice-2",
      title: "Overload a calculateArea Method",
      instructions:
        "Write two overloaded versions of calculateArea: one that takes a single double side (for a square) and returns its area, and one that takes a double length and double width (for a rectangle) and returns its area. Call both from main.",
      starterCode: `public class Main {

    // TODO: Write calculateArea(double side) for a square.



    /* STUDENT CODE STARTS HERE */




    /* STUDENT CODE ENDS HERE */

    // TODO: Write calculateArea(double length, double width) for a rectangle.



    /* STUDENT CODE STARTS HERE */




    /* STUDENT CODE ENDS HERE */

    public static void main(String[] args) {
        System.out.println(calculateArea(4.0));
        System.out.println(calculateArea(3.0, 5.0));
    }
}`,
      expectedBehaviour: "calculateArea(4.0) should print 16.0, and calculateArea(3.0, 5.0) should print 15.0.",
      conceptsTested: ["method overloading", "parameter lists", "method calls"],
      difficulty: "intermediate",
    },
    {
      id: "module-4-overloading-practice-3",
      title: "Overload a printBookInfo Method",
      instructions:
        "Write two overloaded versions of printBookInfo: one that takes only a String title, and one that takes a String title and a String author. Call both from main.",
      starterCode: `public class Main {

    // TODO: Write printBookInfo(String title).



    /* STUDENT CODE STARTS HERE */




    /* STUDENT CODE ENDS HERE */

    // TODO: Write printBookInfo(String title, String author).



    /* STUDENT CODE STARTS HERE */




    /* STUDENT CODE ENDS HERE */

    public static void main(String[] args) {
        printBookInfo("Dune");
        printBookInfo("Dune", "Frank Herbert");
    }
}`,
      expectedBehaviour: 'printBookInfo("Dune") should print a line mentioning just the title. printBookInfo("Dune", "Frank Herbert") should print a line mentioning both the title and the author.',
      conceptsTested: ["method overloading", "parameter lists", "method calls"],
      difficulty: "intermediate",
    },
    {
      id: "module-4-overloading-practice-4",
      title: "Overload registerClubMember Three Ways",
      instructions:
        "Write three overloaded versions of registerClubMember: one taking just a name, one taking a name and an age, and one taking a name, age, and role (e.g. \"President\"). Call all three from main.",
      starterCode: `public class Main {

    // TODO: Write all three overloaded registerClubMember methods here.



    /* STUDENT CODE STARTS HERE */




    /* STUDENT CODE ENDS HERE */

    public static void main(String[] args) {
        registerClubMember("Amara");
        registerClubMember("Diego", 16);
        registerClubMember("Priya", 15, "President");
    }
}`,
      expectedBehaviour: "Each call should print a message using exactly the information provided to it, with no missing or duplicate output.",
      conceptsTested: ["method overloading", "parameter lists", "method calls"],
      difficulty: "advanced",
    },
  ],

  "module-5-classes-and-objects": [
    {
      id: "module-5-classes-and-objects-practice-2",
      title: "Create a Book Class",
      instructions:
        "Write a class named Book with fields title (String) and author (String), plus a constructor that sets both using this. Create two Book objects with different data in main and print a summary for each.",
      starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Create two Book objects and print a summary for each.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}

class Book {
    // TODO: Declare title and author fields, and a constructor using this.


}`,
      expectedBehaviour: 'Creating a Book with title "Dune" and author "Frank Herbert" and printing a summary should clearly show both values.',
      conceptsTested: ["classes", "fields", "constructors", "this keyword", "objects"],
      difficulty: "intermediate",
    },
    {
      id: "module-5-classes-and-objects-practice-3",
      title: "Create an Event Class",
      instructions:
        "Write a class named Event with fields name (String) and date (String), plus a constructor using this. Create two Event objects and print a summary for each.",
      starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Create two Event objects and print a summary for each.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}

class Event {
    // TODO: Declare name and date fields, and a constructor using this.


}`,
      expectedBehaviour: 'Creating an Event with name "Science Fair" and date "May 10" and printing a summary should clearly show both values.',
      conceptsTested: ["classes", "fields", "constructors", "this keyword", "objects"],
      difficulty: "intermediate",
    },
    {
      id: "module-5-classes-and-objects-practice-4",
      title: "Create a Teacher Class With Three Fields",
      instructions:
        "Write a class named Teacher with fields name (String), subject (String), and yearsExperience (int), plus a constructor using this for all three. Create one Teacher object and print a formatted summary using all three fields.",
      starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Create a Teacher object and print a full summary.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}

class Teacher {
    // TODO: Declare name, subject, and yearsExperience fields,
    // and a constructor that sets all three using this.


}`,
      expectedBehaviour: 'Creating a Teacher with name "Mr. Lee", subject "Chemistry", and yearsExperience 12 should let you print a summary using all three values.',
      conceptsTested: ["classes", "fields", "constructors", "this keyword", "objects"],
      difficulty: "advanced",
    },
  ],

  "module-5-access-modifiers": [
    {
      id: "module-5-access-modifiers-practice-2",
      title: "Protect a Book's Rating",
      instructions:
        "Write a class named Book with a private double rating field. Add a getter getRating() and a setter setRating(double rating) that only accepts values from 0.0 to 5.0 (reject anything outside that range by printing a message instead of storing it).",
      starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Create a Book object, set a valid rating, print it,
        // then try an invalid rating (like 7.5) and print it again.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}

class Book {
    // TODO: Declare a private double rating field.
    // TODO: Write getRating() and a validating setRating(double rating).


}`,
      expectedBehaviour: "Setting a valid rating like 4.5 should update it. Setting 7.5 should be rejected, leaving the previous valid rating unchanged.",
      conceptsTested: ["private fields", "getters", "setters", "encapsulation", "input validation"],
      difficulty: "intermediate",
    },
    {
      id: "module-5-access-modifiers-practice-3",
      title: "Protect Ticket Sales Against Overselling",
      instructions:
        "Write a class named Event with a private int ticketsSold field and a fixed capacity of 100. Add a getter and a setter that rejects any value greater than 100.",
      starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Create an Event object, set a valid ticketsSold value,
        // print it, then try setting it above 100 and print it again.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}

class Event {
    // TODO: Declare a private int ticketsSold field.
    // TODO: Write a getter and a setter that rejects values above 100.


}`,
      expectedBehaviour: "Setting ticketsSold to 80 should work. Setting it to 150 should be rejected, leaving it at 80.",
      conceptsTested: ["private fields", "getters", "setters", "encapsulation", "input validation"],
      difficulty: "intermediate",
    },
    {
      id: "module-5-access-modifiers-practice-4",
      title: "A Student With a Validated GPA and a Read-Only Name",
      instructions:
        "Write a class named Student with a private String name (with only a getter, no setter, to show a read-only field) and a private double gpa with a getter and a setter that only accepts values from 0.0 to 4.0.",
      starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Create a Student object, print its name (read-only),
        // set a valid gpa, print it, then try an invalid gpa (like 5.0).



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}

class Student {
    // TODO: Declare a private String name with a constructor and a getter only.
    // TODO: Declare a private double gpa with a getter and a validating setter (0.0-4.0).


}`,
      expectedBehaviour: "The student's name should be readable but never changeable after creation. Setting gpa to 3.5 should work; setting it to 5.0 should be rejected.",
      conceptsTested: ["private fields", "getters", "setters", "encapsulation", "input validation"],
      difficulty: "advanced",
    },
  ],

  "module-5-inheritance": [
    {
      id: "module-5-inheritance-practice-2",
      title: "Create a Bicycle Subclass of Vehicle",
      instructions:
        "Using a Vehicle class with name and maxSpeed fields, create a Bicycle class that extends Vehicle and adds a gearCount field. Use super() in the Bicycle constructor.",
      starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Create a Bicycle object with a name, maxSpeed, and gearCount,
        // then print its name and gearCount.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}

class Vehicle {
    String name;
    int maxSpeed;

    public Vehicle(String name, int maxSpeed) {
        this.name = name;
        this.maxSpeed = maxSpeed;
    }
}

// TODO: Write the Bicycle class here. It should extend Vehicle
// and add a gearCount field, using super() in its constructor.



/* STUDENT CODE STARTS HERE */




/* STUDENT CODE ENDS HERE */`,
      expectedBehaviour: 'Creating a Bicycle with name "Trail Bike", maxSpeed 25, and gearCount 21 should let you print its name and gear count.',
      conceptsTested: ["inheritance", "extends", "super()", "subclass constructors"],
      difficulty: "intermediate",
    },
    {
      id: "module-5-inheritance-practice-3",
      title: "Create a Librarian Subclass of Person",
      instructions:
        "Using a Person class with name and age fields, create a Librarian class that extends Person and adds a sectionManaged field (e.g. \"Fiction\"). Use super() in the constructor.",
      starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Create a Librarian object and print a summary
        // including name, age, and sectionManaged.



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

// TODO: Write the Librarian class here. It should extend Person
// and add a sectionManaged field, using super() in its constructor.



/* STUDENT CODE STARTS HERE */




/* STUDENT CODE ENDS HERE */`,
      expectedBehaviour: 'Creating a Librarian with name "Ms. Ortiz", age 45, and sectionManaged "Fiction" should let you print a summary with all three values.',
      conceptsTested: ["inheritance", "extends", "super()", "subclass constructors"],
      difficulty: "intermediate",
    },
    {
      id: "module-5-inheritance-practice-4",
      title: "Create a Coach Subclass With Two New Fields",
      instructions:
        "Using the Person class, create a Coach class that extends Person and adds two new fields: sportName and teamSize. Use super() to set up the inherited fields.",
      starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Create a Coach object and print a summary including
        // name, age, sportName, and teamSize.



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

// TODO: Write the Coach class here. It should extend Person and
// add sportName and teamSize fields, using super() in its constructor.



/* STUDENT CODE STARTS HERE */




/* STUDENT CODE ENDS HERE */`,
      expectedBehaviour: 'Creating a Coach with name "Coach Rivera", age 38, sportName "Basketball", and teamSize 12 should let you print a summary with all four values.',
      conceptsTested: ["inheritance", "extends", "super()", "subclass constructors"],
      difficulty: "advanced",
    },
  ],

  "module-5-overriding": [
    {
      id: "module-5-overriding-practice-2",
      title: "Override displayInfo for a Librarian",
      instructions:
        "Using the Person and Librarian classes (Librarian extends Person and adds sectionManaged), override displayInfo() in Librarian to call super.displayInfo() first, then print the section managed.",
      starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Create a Librarian object and call displayInfo() on it.



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

class Librarian extends Person {
    String sectionManaged;

    public Librarian(String name, int age, String sectionManaged) {
        super(name, age);
        this.sectionManaged = sectionManaged;
    }

    // TODO: Override displayInfo() here. Call super.displayInfo() first,
    // then print the section managed.



    /* STUDENT CODE STARTS HERE */




    /* STUDENT CODE ENDS HERE */
}`,
      expectedBehaviour: 'Calling displayInfo() on a Librarian should print the name/age line, followed by a line showing the section managed.',
      conceptsTested: ["method overriding", "@Override", "super.method()", "inheritance"],
      difficulty: "intermediate",
    },
    {
      id: "module-5-overriding-practice-3",
      title: "Override displayInfo for a Coach",
      instructions:
        "Using the Person and Coach classes (Coach extends Person and adds sportName), override displayInfo() in Coach to call super.displayInfo() first, then print the sport coached.",
      starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Create a Coach object and call displayInfo() on it.



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

class Coach extends Person {
    String sportName;

    public Coach(String name, int age, String sportName) {
        super(name, age);
        this.sportName = sportName;
    }

    // TODO: Override displayInfo() here. Call super.displayInfo() first,
    // then print the sport coached.



    /* STUDENT CODE STARTS HERE */




    /* STUDENT CODE ENDS HERE */
}`,
      expectedBehaviour: "Calling displayInfo() on a Coach should print the name/age line, followed by a line showing the sport coached.",
      conceptsTested: ["method overriding", "@Override", "super.method()", "inheritance"],
      difficulty: "intermediate",
    },
    {
      id: "module-5-overriding-practice-4",
      title: "Override makeSound for Dog and Cat",
      instructions:
        "Write an Animal class with a makeSound() method that prints \"Some generic animal sound\". Write Dog and Cat classes that both extend Animal and override makeSound() with their own sound. Create one of each and call makeSound() on both.",
      starterCode: `public class Main {

    public static void main(String[] args) {

        // TODO: Create a Dog object and a Cat object, and call
        // makeSound() on each.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}

class Animal {
    public void makeSound() {
        System.out.println("Some generic animal sound");
    }
}

// TODO: Write the Dog class here. It should extend Animal and
// override makeSound() to print a dog-specific sound.



/* STUDENT CODE STARTS HERE */




/* STUDENT CODE ENDS HERE */

// TODO: Write the Cat class here. It should extend Animal and
// override makeSound() to print a cat-specific sound.



/* STUDENT CODE STARTS HERE */




/* STUDENT CODE ENDS HERE */`,
      expectedBehaviour: 'Calling makeSound() on the Dog should print a dog sound (e.g. "Woof!"), and calling it on the Cat should print a different, cat sound (e.g. "Meow!").',
      conceptsTested: ["method overriding", "@Override", "super.method()", "inheritance"],
      difficulty: "advanced",
    },
  ],

  "module-6-exception-handling": [
    {
      id: "module-6-exception-handling-practice-2",
      title: "Validate Ticket Quantities",
      instructions:
        "Process the array {\"3\", \"two\", \"-1\"} representing ticket quantities typed by customers. For each, use try/catch to parse it as an int. If parsing fails, catch NumberFormatException. If the quantity is negative, throw and catch an IllegalArgumentException. Otherwise print the accepted quantity. Use a finally block to print \"Checked entry: <value>\" every time.",
      starterCode: `public class Main {

    public static void main(String[] args) {

        String[] quantityInputs = {"3", "two", "-1"};

        for (String input : quantityInputs) {

            // TODO: try to parse input as an int.
            // If it's negative, throw a new IllegalArgumentException
            // with a message like "Quantity cannot be negative."
            // Otherwise print "Accepted quantity: " + quantity
            // Catch NumberFormatException and IllegalArgumentException separately.
            // Use finally to print "Checked entry: " + input



            /* STUDENT CODE STARTS HERE */




            /* STUDENT CODE ENDS HERE */

        }
    }
}`,
      expectedBehaviour: 'For {"3", "two", "-1"}, only "3" should be accepted; "two" should trigger a NumberFormatException message, and "-1" should trigger an IllegalArgumentException message. A "Checked entry: ..." line should print for all three.',
      conceptsTested: ["try/catch/finally", "throw", "NumberFormatException", "IllegalArgumentException", "input validation"],
      difficulty: "intermediate",
    },
    {
      id: "module-6-exception-handling-practice-3",
      title: "Validate Assignment Scores",
      instructions:
        "Process the array {\"88\", \"NA\", \"150\"} representing assignment scores. Parse each as an int inside a try block. Catch NumberFormatException for invalid text. If the score is above 100, throw and catch an IllegalArgumentException. Otherwise print the accepted score.",
      starterCode: `public class Main {

    public static void main(String[] args) {

        String[] scoreInputs = {"88", "NA", "150"};

        for (String input : scoreInputs) {

            // TODO: try to parse input as an int.
            // If it's above 100, throw a new IllegalArgumentException
            // with a message like "Score cannot exceed 100."
            // Otherwise print "Accepted score: " + score
            // Catch NumberFormatException and IllegalArgumentException separately.



            /* STUDENT CODE STARTS HERE */




            /* STUDENT CODE ENDS HERE */

        }
    }
}`,
      expectedBehaviour: 'For {"88", "NA", "150"}, only "88" should be accepted; "NA" should trigger a NumberFormatException message, and "150" should trigger an IllegalArgumentException message.',
      conceptsTested: ["try/catch/finally", "throw", "NumberFormatException", "IllegalArgumentException", "input validation"],
      difficulty: "intermediate",
    },
    {
      id: "module-6-exception-handling-practice-4",
      title: "Build a Full Exam Score Validator",
      instructions:
        "Process the array {\"75\", \"abc\", \"120\", \"-5\"} representing exam scores. For each, use try/catch/finally to parse the score, reject anything below 0 or above 100 with a custom IllegalArgumentException message, catch NumberFormatException for invalid text, print accepted scores, and use finally to log every entry checked.",
      starterCode: `public class Main {

    public static void main(String[] args) {

        String[] scoreInputs = {"75", "abc", "120", "-5"};

        for (String input : scoreInputs) {

            // TODO: Validate each score: must parse as an int, and must
            // be between 0 and 100 (inclusive). Use try/catch/finally,
            // throwing an IllegalArgumentException for out-of-range values
            // and catching NumberFormatException for invalid text.



            /* STUDENT CODE STARTS HERE */




            /* STUDENT CODE ENDS HERE */

        }
    }
}`,
      expectedBehaviour: 'For {"75", "abc", "120", "-5"}, only "75" should be accepted; the other three should each print an appropriate rejection message, and a finally-logged "Checked entry" line should appear for all four.',
      conceptsTested: ["try/catch/finally", "throw", "NumberFormatException", "IllegalArgumentException", "input validation"],
      difficulty: "advanced",
    },
  ],

  "module-7-utility-packages": [
    {
      id: "module-7-utility-packages-practice-2",
      title: "Manage a Course List With ArrayList",
      instructions:
        "Create an ArrayList<String> of four course names. Print it, remove one course, sort the remaining courses alphabetically, and print the final list along with its size.",
      starterCode: `import java.util.ArrayList;
import java.util.Collections;

public class Main {

    public static void main(String[] args) {

        // TODO: Create an ArrayList<String> with four course names.
        // TODO: Print it, remove one course, sort the rest, and print
        // the final list and its size.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
      expectedBehaviour: "The program should print the original list, then the final sorted list (with one course removed) and its correct size.",
      conceptsTested: ["ArrayList", "Collections.sort", "add/remove", "size()"],
      difficulty: "intermediate",
    },
    {
      id: "module-7-utility-packages-practice-3",
      title: "Find the Smallest and Largest Ticket Count",
      instructions:
        "Create an ArrayList<Integer> of ticket counts sold across several events. Sort it with Collections.sort, then print the smallest value (first item after sorting) and the largest value (last item after sorting).",
      starterCode: `import java.util.ArrayList;
import java.util.Collections;

public class Main {

    public static void main(String[] args) {

        ArrayList<Integer> ticketCounts = new ArrayList<>();
        ticketCounts.add(120);
        ticketCounts.add(45);
        ticketCounts.add(90);

        // TODO: Sort ticketCounts, then print the smallest and largest values.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
      expectedBehaviour: "For {120, 45, 90}, after sorting, the program should print 45 as the smallest and 120 as the largest.",
      conceptsTested: ["ArrayList", "Collections.sort", "add/remove", "size()"],
      difficulty: "intermediate",
    },
    {
      id: "module-7-utility-packages-practice-4",
      title: "Manage an Attendee Roster",
      instructions:
        "Create an ArrayList<String> attendee roster with five names. Remove one attendee by name (using .remove(\"Name\")), then print the final roster and its total count.",
      starterCode: `import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        // TODO: Create an ArrayList<String> roster with five names.
        // TODO: Remove one attendee by name.
        // TODO: Print the final roster and its total count.



        /* STUDENT CODE STARTS HERE */




        /* STUDENT CODE ENDS HERE */

    }
}`,
      expectedBehaviour: "The program should print the final roster with the removed attendee missing, and the correct final count (4, if starting from 5).",
      conceptsTested: ["ArrayList", "Collections.sort", "add/remove", "size()"],
      difficulty: "advanced",
    },
  ],
};

/**
 * Returns a practice exercise for the given lesson. practiceNumber 1 is the
 * lesson's original exercise (handled by the caller, not this function).
 * practiceNumber 2, 3, 4 map to the bank above. Beyond that, the bank
 * cycles indefinitely with a "remix" label so practice never runs out.
 */
export function getPracticeExercise(lessonId: string, practiceNumber: number): Exercise | null {
  const bank = practiceExerciseBank[lessonId];
  if (!bank || bank.length === 0) return null;

  const bankIndex = practiceNumber - 2; // practiceNumber 2 => bank[0]

  if (bankIndex < bank.length) {
    return bank[bankIndex];
  }

  const cycle = Math.floor(bankIndex / bank.length);
  const wrappedIndex = bankIndex % bank.length;
  const base = bank[wrappedIndex];

  return {
    ...base,
    id: `${base.id}-remix-${cycle}`,
    title: `${base.title} (Remix ${cycle + 1})`,
    instructions: `${base.instructions} This time, try using different numbers or names than before to really test your understanding.`,
  };
}
