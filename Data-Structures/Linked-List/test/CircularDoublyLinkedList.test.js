import { CircularDoublyLinkedList } from '../CircularDoublyLinkedList'; // Adjust the import path as needed

describe('CircularDoublyLinkedList', () => {
  it('Check append', () => {
    const list = new CircularDoublyLinkedList();

    list.append(1);
    expect(list.toString()).toEqual('1');

    list.append(2);
    expect(list.toString()).toEqual('1 <-> 2');
  });

  it('Check insert', () => {
    const list = new CircularDoublyLinkedList();

    list.insert(0, 1);
    expect(list.toString()).toEqual('1');

    list.insert(1, 20);
    expect(list.toString()).toEqual('1 <-> 20');
  });

  it('Check removeAt', () => {
    const list = new CircularDoublyLinkedList();

    list.append(10);
    list.append(40);
    list.append(30);

    list.removeAt(0);
    expect(list.toString()).toEqual('40 <-> 30');

    list.removeAt(1);
    expect(list.toString()).toEqual('40');
  });

  it('Check print', () => {
    const list = new CircularDoublyLinkedList();

    list.append(20);
    expect(() => {
      list.print();
    }).not.toThrow();
  });

  it('Check isEmpty', () => {
    const list = new CircularDoublyLinkedList();

    expect(list.isEmpty()).toEqual(true);

    list.append('Hello');
    expect(list.isEmpty()).toEqual(false);
  });
});
