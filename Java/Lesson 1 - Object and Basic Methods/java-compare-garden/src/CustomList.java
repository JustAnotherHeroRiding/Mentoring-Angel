public interface CustomList<E> {

    void addSingle(int index, E obj);

    E removeSingle(int index);

    E get(int index);

    void set(int index, E obj);

    int size();

    boolean isEmpty();

    boolean contains(E obj);

    int indexOf(E obj);

    void clear();

    void grow();

}