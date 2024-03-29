
public class BreakAndContinue {
    public static void main(String[] args) {
        String[] names = { "Kristijan", "Mihaila", "Sem" };
        for (String name : names) {
            if (name.equals("Sem")) {
                break;
            } else if (name.equals("Mihaila")) {
                // This will go to the next loop and will not print
                continue;
            }
            System.out.println(name);

        }
    }
}
