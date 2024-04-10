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

class Garden {
    CustomList list;
}

public class CompareObjectsGarden {
    public static void main(String[] args) {

        User person1 = new User("Kristijan", 25, LocalDate.of(1999, 8, 6));
        User person2 = new User("Kristijan", 25, LocalDate.of(1999, 8, 6));
        System.out.println("Comparing two objects:");
        System.out.println(comparePeople(person1, person2));

    }

    public static boolean comparePeople(Object obj1, Object obj2) {
        return obj1.equals(obj2);
    }
}
