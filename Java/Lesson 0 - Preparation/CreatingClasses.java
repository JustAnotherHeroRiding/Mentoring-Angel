public class CreatingClasses {

    public static void main(String[] args) {

        Lens lensOne = new Lens("Canon", "18-55mm", false);
        Lens lensTwo = new Lens("Sony", "30mm", true);
        Lens lensThree = new Lens("Sony", "80mm", true);

        System.out.println("Lens 1");
        System.out.println(lensOne.brand);
        System.out.println(lensOne.focalLength);
        System.out.println(lensOne.isPrime);

        System.out.println("Lens 2");
        System.out.println(lensTwo.brand);
        System.out.println(lensTwo.focalLength);
        System.out.println(lensTwo.isPrime);

        System.out.println("Lens 3");
        System.out.println(lensThree.brand);
        System.out.println(lensThree.focalLength);
        System.out.println(lensThree.isPrime);
    }

    static class Lens {
        String brand;
        String focalLength;
        boolean isPrime;
        String model;
        String color;
        double price;
        double weight;

        Lens(String brand, String focalLength, boolean isPrime) {
            this.brand = brand;
            this.focalLength = focalLength;
            this.isPrime = isPrime;
        }
    }
}
