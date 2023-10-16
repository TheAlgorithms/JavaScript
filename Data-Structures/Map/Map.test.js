describe('Map Operations', () => {
    let map1;
  
    beforeEach(() => {
      map1 = new Map();
      map1.set('a', 1);
      map1.set('b', 2);
      map1.set('c', 3);
    });
  
    it('should get the correct value for key "a" initially', () => {
      const valueA = map1.get('a');
      expect(valueA).toBe(1);
    });
  
    it('should update the value for key "a" to 97', () => {
      map1.set('a', 97);
      const updatedValueA = map1.get('a');
      expect(updatedValueA).toBe(97);
    });
  
    it('should have a size of 3 initially', () => {
      const initialSize = map1.size;
      expect(initialSize).toBe(3);
    });
  
    it('should have a size of 2 after deleting key "b"', () => {
      map1.delete('b');
      const updatedSize = map1.size;
      expect(updatedSize).toBe(2);
    });
  });
  