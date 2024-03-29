import java.util.Arrays;

public class ArrayBasics {

    public static void main(String[] args) {
        int[] numbers = new int[2];
        boolean[] booleans = new boolean[3];
        String[] strings = new String[3];
        // We cannot change the size after the array is created
        // strings will always have 3 items and a fourth one will throw an error

        numbers[0] = 1;
        numbers[1] = 2;
        booleans[0] = true;
        booleans[1] = false;
        System.out.println(Arrays.toString(numbers));
        System.out.println(Arrays.toString(booleans));
        System.out.println(Arrays.toString(strings));

        int[] arr = { 1, 2, 3, 4, 5 };
        int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        System.out.println(sum);

    }

    public static int sum(int[] arr) {
        int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }

}
