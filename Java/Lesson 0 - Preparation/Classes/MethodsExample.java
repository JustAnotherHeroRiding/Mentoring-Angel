public class MethodsExample {

    public static void main(String[] args) {
        /*
         * // Build in Java method. The string provided is the parameter
         * System.out.println("This is a built in Method.");
         * 
         * String brand = "Nothing";
         * // Another used provided method.
         * System.out.println(brand.toUpperCase());
         * 
         * boolean startsWithNo = brand.startsWith("No");
         * boolean endsWithNo = brand.endsWith("No");
         * System.out.println(startsWithNo);
         * System.out.println(endsWithNo);
         */

        char[] letters = { 'a', 'b', 'c', 'd', 'e', 'e', 'e' };

        int charCount = countOccurences(letters, 'e');

        System.out.println(charCount);

    }

    public static int countOccurences(char[] letters, char targetLetter) {
        int count = 0;
        for (char letter : letters) {
            if (letter == targetLetter) {
                count++;
            }
        }
        return count;
    }
}
