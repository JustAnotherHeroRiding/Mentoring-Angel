import java.util.Date;

public class HelloWorld {
    public static void main(String[] args) {
        int age = 24;
        String firstName = "Kristjan";
        Date date = new Date();
        /*
         * System.out.println(
         * "Hello World, my name is " + firstName + ", I am " + age +
         * " years old. Current date: " + date);
         */
        System.out.println(
                String.format("Hello World, my name is %s, I am %d years old. Current date: %s", firstName, age, date));

    }
}