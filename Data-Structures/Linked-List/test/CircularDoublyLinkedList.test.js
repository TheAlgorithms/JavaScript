import { CircularDoublyLinkedList } from '../CircularDoublyLinkedList';

describe('CircularDoublyLinkedList', () => {
  /**
   * Creates a new CircularDoublyLinkedList and appends elements to it.
   * @param {Array} elements - The elements to append.
   * @returns {CircularDoublyLinkedList} - The created list.
   */
  function createAndAppend(elements) {
    const list = new CircularDoublyLinkedList();
    elements.forEach((element) => list.append(element));
    return list;
  }

  const expectList = (list, expected) => expect([...list.elements()]).toEqual(expected);

  it('append', () => {
    const list = createAndAppend([1]);

    expectList(list, [1]);

    list.append(2);
    expectList(list, [1, 2]);
  });

  it('insertAt', () => {
    const list = createAndAppend([1]);

    list.insertAt(0, 20);
    expectList(list, [20, 1]);

    list.insertAt(1, 30);
    expectList(list, [20, 30, 1]);
  });

  it('removeAt', () => {
    const list = createAndAppend([10, 40, 30]);

    list.removeAt(0);
    expectList(list, [40, 30]);

    list.removeAt(1);
    expectList(list, [40]);
  });

  it('elements', () => {
    const list = createAndAppend([10, 20, 30]);
    expect([...list.elements()]).toEqual([10, 20, 30]);
  });

  it('isEmpty', () => {
    const emptyList = new CircularDoublyLinkedList();
    expect(emptyList.isEmpty()).toEqual(true);

    const nonEmptyList = createAndAppend(['Hello']);
    expect(nonEmptyList.isEmpty()).toEqual(false);
  });
});
