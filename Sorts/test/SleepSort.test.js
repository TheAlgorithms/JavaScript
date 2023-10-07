/*
    Author:           Sahil Kumar
    Last Modified on: 7th Oct 2023
    Description:      This test file uses Jest, a popular testing framework for JavaScript.
                      It includes a test case for the sleepSort function where it provides 
                      an unsorted array, captures the console output, and checks if the 
                      output matches the expected sorted array. Finally, it runs the test 
                      using jest.runAllTimers() to allow the timeouts to execute.
*/
function sleepSort(arr) {
    const sortedArray = [];
  
    function sleepSortElement(element) {
      setTimeout(function () {
        sortedArray.push(element);
      }, element);
    }
  
    arr.forEach(function (element) {
      sleepSortElement(element);
    });
  
    // Sleep for an additional time to allow all elements to be sorted
    const maxElement = Math.max(...arr);
    setTimeout(function () {
      console.log(sortedArray);
    }, maxElement + 10); // Adding a little extra time for safety
  }
  
  // Test cases
  describe('sleepSort', () => {
    it('should correctly sort an array of integers', () => {
      const unsortedArray = [5, 3, 1, 7, 2, 4];
      const sortedArray = [];
      const expectedArray = [1, 2, 3, 4, 5, 7];
  
      // Capture the console output
      const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  
      // Call the sleepSort function
      sleepSort(unsortedArray);
  
      // Wait for the console output
      jest.runAllTimers();
  
      // Check if the sortedArray matches the expectedArray
      expect(logSpy).toHaveBeenCalled();
      const actualArray = logSpy.mock.calls[0][0];
      expect(actualArray).toEqual(expectedArray);
  
      // Restore the console.log function
      logSpy.mockRestore();
    });
  });
  
  // Run the tests
  jest.useFakeTimers();
  test('Test sleepSort function', () => {
    jest.runAllTimers();
  });
  