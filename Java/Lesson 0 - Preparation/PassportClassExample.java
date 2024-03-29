import java.time.LocalDate;

public class PassportClassExample {
    public static void main(String[] args) {

        Passport mkPassport = new Passport("MK1234", LocalDate.of(2023, 4, 1), "Macedonia");

        System.out.println("Passport Details");
        System.out.println(mkPassport.number);
        System.out.println(mkPassport.expiryDate);
    }

    static class Passport {
        String number;
        LocalDate expiryDate;
        String country;

        Passport(String number, LocalDate expiryDate, String country) {
            this.number = number;
            this.expiryDate = expiryDate;
            this.country = country;
        }
    }

}
