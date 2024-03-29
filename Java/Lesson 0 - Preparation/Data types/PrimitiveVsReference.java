public class PrimitiveVsReference {

    public static void main(String[] args) {
        int a = 10;
        // passed by copy
        // b does not follow changes to a
        int b = a;
        a = 100;
        System.out.println("a: " + a + " - " + "b: " + b);

        Person kristijan = new Person("Kristijan");
        Person kristijan2 = kristijan;

        System.out.println("Before changing kristijan");
        System.out.println(kristijan.name + " " + kristijan2.name);

        // These will both end up changing both instances
        kristijan.name = "Kocev";
        // kristijan2.name = "Kocev";

        // This will change both instances as they are
        // pointing to the same adress in memory
        System.out.println("After changing kristijan");
        System.out.println(kristijan.name + " " + kristijan2.name);
    }

    static class Person {
        String name;

        Person(String name) {
            this.name = name;
        }
    }
}
