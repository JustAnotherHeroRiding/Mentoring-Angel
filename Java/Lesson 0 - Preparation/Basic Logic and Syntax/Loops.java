import java.util.Arrays;

public class Loops {
    public static void main(String[] args) {
        int[] numbers = { 2, 0, 1, 4, 100, 4, 90, 78 };

        for (int i = 0; i < numbers.length; i++) {
            System.out.println(numbers[i]);
        }

        // Reverse
        for (int i = numbers.length - 1; i >= 0; i--) {
            System.out.println(numbers[i]);
        }

        // While
        int i = 0;
        while (i < numbers.length) {
            System.out.println(numbers[i]);
            i++;
        }

        int count = 0;
        while (count <= 20) {
            System.out.println(count + "Count");
            count++;
        }

        // Do While loop
        do {
            System.out.println(count + "Count");
            count++;

        } while (count <= 20);

        String[] names = { "Kristijan", "Mihaila", "Sem" };
        // Enhanced for loop
        for (String name : names) {
            System.out.println(name);
        }

        // using numbers.for or numbers.fori shortcuts to generate the loop
        for (int numbers2 = 0; numbers2 < numbers.length; numbers2++) {

        }

        // names.for
        for (String names2 : names) {

        }
        // names.forr
        for (int names2 = names.length - 1; names2 >= 0; names2--) {

        }

        Arrays.stream(numbers).forEach(System.out::println);
        Arrays.stream(names).forEach(System.out::println);

    }
}
