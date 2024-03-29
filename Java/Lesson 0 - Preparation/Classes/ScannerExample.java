import java.util.Scanner;
import java.time.LocalDate;

public class ScannerExample {

    public static void main(String[] args) {
        // Scanner
        Scanner scanner = new Scanner(System.in);
        System.out.println("What is your name?");
        String userName = scanner.nextLine();
        System.out.println("Hello " + userName);

        System.out.println("How old are you?");
        int age = scanner.nextInt();
        int yearOfBirth = LocalDate.now().minusYears(age).getYear();
        System.out.println("You were born in " + yearOfBirth);

        if (age < 18) {
            System.out.println("You are not an adult");
        } else {
            System.out.println("You are an adult.");
        }
        scanner.close();

    }

}
