
public class MyCustomList<E> implements CustomList<E> {

    private Integer size = 0;

    private E[] elements = (E[]) new Object[10];

    @Override
    public void addSingle(int index, E obj) {
        if (this.contains(obj)) {
            throw new RuntimeException("Element already exists");
        } else if (index >= 0 && index <= this.size) {
            if (this.size == elements.length) {
                grow();
            }
            for (int i = this.size; i > index; i--) {
                elements[i] = elements[i - 1];
            }
            elements[index] = obj;
            this.size++;
        } else if (index > this.size) {
            if (this.size == elements.length) {
                grow();
            }
            elements[this.size] = obj;
            this.size++;
        } else {
            throw new IndexOutOfBoundsException("Index out of bounds");
        }
    }

    @Override
    public E removeSingle(int index) {
        if (index >= 0 && index < this.size) {
            E removedElement = elements[index];
            for (int i = index; i < this.size - 1; i++) {
                elements[i] = elements[i + 1];
            }
            elements[this.size - 1] = null;
            this.size--;
            return removedElement;
        } else {
            throw new IndexOutOfBoundsException("Index out of bounds");
        }
    }

    @Override
    public E get(int index) {
        if (index >= 0 && index < this.size) {
            return elements[index];
        } else {
            throw new IndexOutOfBoundsException("Index out of bounds");
        }
    }

    @Override
    public void set(int index, E obj) {
        if (index >= 0 && index < this.size) {
            elements[index] = obj;
        } else {
            throw new IndexOutOfBoundsException("Index out of bounds");
        }
    }

    @Override
    public int size() {
        return this.size;
    }

    @Override
    public boolean isEmpty() {
        return this.size == 0;
    }

    @Override
    public boolean contains(E obj) {
        for (int i = 0; i < this.size; i++) {
            if (this.get(i).equals(obj)) {
                return true;
            }
        }
        return false;
    }

    @Override
    public int indexOf(E obj) {
        for (int i = 0; i < this.size; i++) {
            if (this.get(i).equals(obj)) {
                return i;
            }
        }
        return -1;
    }

    @Override
    public void clear() {
        for (int i = 0; i < this.size; i++) {
            elements[i] = null;
        }
        this.size = 0;
    }

    @Override
    public void grow() {
        E[] newElements = (E[]) new Object[elements.length * 2];
        System.arraycopy(elements, 0, newElements, 0, size);
        elements = newElements;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("[");
        for (int i = 0; i < size; i++) {
            sb.append(elements[i]);
            if (i < size - 1) {
                sb.append(", ");
            }
        }
        sb.append("]");
        return sb.toString();
    }

}
