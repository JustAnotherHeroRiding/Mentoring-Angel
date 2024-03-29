public class IfStatements {

    public static void main(String[] args) {
        // int age = 17;
        /*
         * if (age >= 18) {
         * System.out.println("You are an adult");
         * } else if (age >= 13) {
         * System.out.println("I am almost an adult");
         * } else {
         * System.out.println("You are a child");
         * }
         */

        // Ternary Conditions - When we only have a single if else statement with no
        // else if
        /*
         * String message = age >= 18 ? "You are an adult" : "You are a child";
         * System.out.println(message);
         */

        String gender = "Male";

        switch (gender) {
            case "Male":
                System.out.println("You are a man.");
                break;
            case "Female":
                System.out.println("You are a woman.");
                break;
            case "Other":
                System.out.println("You are a person.");
                break;
            default:
                System.out.println("Invalid gender provided.");
        }

        // More concise version
        switch (gender) {
            case "Male" -> System.out.println("You are a man.");
            case "Female" -> System.out.println("You are a woman.");
            case "Other" -> System.out.println("You are a person.");
            default -> System.out.println("Invalid gender provided.");
        }
    }

}
