import java.time.LocalDate;

public class ReferenceDataTypes {

    public static void main(String[] args) {
        // Non Primitive - Reference Types
        // Always starts with uppercase compared to primitive types which are always
        // lowercase
        String name = new String("Kristijan");
        // char c = 'K';
        // int age = 24;
        System.out.println(name.toUpperCase());
        
        LocalDate now = LocalDate.now();
        System.out.println(now.getMonth());

        // name has many methods, age does not

    }

}
