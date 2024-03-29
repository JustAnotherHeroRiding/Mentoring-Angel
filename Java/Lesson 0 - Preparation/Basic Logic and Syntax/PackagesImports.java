// import java.util.Date;
// import java.time.LocalDate;
// import java.time.LocalDateTime;
// import java.sql.Date ;

public class PackagesImports {

    public static void main(String[] args) {

        /*
         * Date date = new Date();
         * LocalDate localDate = LocalDate.now();
         * // We have to import it using the FQN(Fully qualified name) when we have
         * // conflicting imports
         * java.sql.Date sqlDate = new java.sql.Date(0);
         * 
         * // This also works
         * java.time.LocalDateTime localDateTime = LocalDateTime.now();
         * // String come from java.lang so no import is needed
         * String s = new String();
         */

        // int ten = 10;
        // int two = 2;
        // int addition = ten + two;
        // We don't have to define variables but this is only to demonstrate
        // System.out.println(addition);
        // System.out.println(10 + 2);
        // System.out.println(10 - 2);
        // System.out.println(10 * 2);
        // System.out.println(10 / 2);
        // System.out.println(10 % 3);
        // System.out.println((10 + 3) * 2 + 10);

        // Math class
        // System.out.println(Math.abs(-10));
        // double max = Math.max(3.5, 4.4);
        // double min = Math.min(3.5, 4.4);
        // System.out.println((int) Math.pow(5, 2));
        // System.out.println((int) Math.sqrt(5));
        // System.out.printf("Max %.2f, Min %.2f\n", max, min);
        // System.out.println(Math.PI);

        // Comparison Operators

        // int kristijanAge = 24;
        // int ediAge = 55;
        // boolean isEdiOlder = ediAge > kristijanAge;
        // System.out.println(ediAge > kristijanAge);
        // System.out.println(ediAge < kristijanAge);
        // System.out.println(ediAge <= kristijanAge);
        // System.out.println(ediAge >= kristijanAge);
        // System.out.println(ediAge == kristijanAge);
        // System.out.println(ediAge != kristijanAge);

        // Logical Operators
        boolean isAdult = true;
        boolean isStudent = false;
        boolean isKristijan = true;
        System.out.println(isAdult && isStudent);
        System.out.println((isAdult || isStudent) && isKristijan);
        System.out.println((!isAdult || isStudent) && !isKristijan);
        // This is redundant
        System.err.println(isAdult == true);
        System.err.println(!isAdult);

        // Combining operators
        String name = "Kristijan";
        System.out.println(10 > 8 && 2 <= 2 && isAdult && name.contains("K"));
    }

}
