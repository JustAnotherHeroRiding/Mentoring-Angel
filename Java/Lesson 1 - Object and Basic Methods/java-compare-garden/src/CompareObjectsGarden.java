import java.time.LocalDate;

class User {
    private String name;
    private Integer age;
    private LocalDate birthDate;

    User(String name, Integer age, LocalDate birthDate) {
        this.name = name;
        this.age = age;
        this.birthDate = birthDate;
    }

    public String getName() {
        return name;
    }

    public Integer getAge() {
        return age;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((name == null) ? 0 : name.hashCode());
        result = prime * result + ((age == null) ? 0 : age.hashCode());
        result = prime * result + ((birthDate == null) ? 0 : birthDate.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        User other = (User) obj;
        return name.equals(other.name) && age.equals(other.age) && birthDate.equals(other.birthDate);
    }
}

enum AnimalType {
    DOG, CAT
}

class Animal {

    protected String name;
    private AnimalType type;

    Animal(String name, AnimalType type) {
        this.name = name;
        this.type = type;
    }

    public AnimalType getType() {
        return type;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((name == null) ? 0 : name.hashCode());
        result = prime * result + ((type == null) ? 0 : type.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        Animal other = (Animal) obj;
        if (name == null) {
            if (other.name != null)
                return false;
        } else if (!name.equals(other.name))
            return false;
        if (type != other.type)
            return false;
        return true;
    }

}

class Dog extends Animal {

    String race;

    Dog(String name, String race) {
        super(name, AnimalType.DOG);
        this.race = race;
    }

    public String getRace() {
        return race;
    }

    @Override
    public String toString() {
        return this.getType() + " " + this.name;
    }

}

class Cat extends Animal {

    String color;

    Cat(String name, String color) {
        super(name, AnimalType.CAT);
        this.color = color;
    }

    public String getColor() {
        return color;
    }

    @Override
    public String toString() {
        return this.getType() + " " + this.name;
    }
}

class Garden {
    String name;
    CustomList<Animal> list;

    public Garden(String name, CustomList<Animal> list) {
        this.list = list;
        this.name = name;
    }

    public void printGarden() {
        StringBuilder sb = new StringBuilder();
        sb.append("[ Animal Garden - ").append(this.name).append(" ]\n");
        for (int i = 0; i < list.size(); i++) {
            Animal animal = list.get(i);
            sb.append("[ House of animal | ").append("Name: ").append(animal.name).append(" | Type: ")
                    .append(toTitleCase(animal.getType().toString()))
                    .append(" ]\n");
        }
        System.out.println(sb.toString());
    }

    public static String toTitleCase(String input) {
        StringBuilder titleCase = new StringBuilder();
        boolean nextTitleCase = true;

        for (char c : input.toLowerCase().toCharArray()) {
            if (Character.isSpaceChar(c)) {
                nextTitleCase = true;
            } else if (nextTitleCase) {
                c = Character.toTitleCase(c);
                nextTitleCase = false;
            }

            titleCase.append(c);
        }

        return titleCase.toString();
    }
}

public class CompareObjectsGarden {
    public static void main(String[] args) {

        // User person1 = new User("Kristijan", 25, LocalDate.of(1999, 8, 6));
        // User person2 = new User("Kristijan", 25, LocalDate.of(1999, 8, 6));
        // System.out.println("Comparing two objects:");
        // System.out.println(comparePeople(person1, person2));

        MyCustomList<Animal> list = new MyCustomList<>();
        Garden garden = new Garden("Animal Kingdom", list);
        garden.list.addSingle(0, new Dog("Rex", "Husky"));
        // garden.list.addSingle(1, new Dog("Rex", "Husky"));
        // garden.list.addSingle(2, new Dog("Rex", "Husky"));
        // garden.list.addSingle(3, new Cat("Tom", "White"));
        // garden.list.addSingle(4, new Cat("Tom", "White"));
        // garden.list.addSingle(5, new Cat("Tom", "White"));
        // garden.list.addSingle(6, new Cat("Tom", "White"));
        garden.list.addSingle(7, new Cat("Tom", "White"));
        garden.printGarden();

    }

    public static boolean comparePeople(Object obj1, Object obj2) {
        return obj1.equals(obj2);
    }

}
