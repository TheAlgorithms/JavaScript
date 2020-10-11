// Set up a simple array of colours
var colours = new Array ("Black", "Blue", "Brown", "Green", "Pink", "Red", "White", "Yellow");

// Set up numbers from 1 to 2500
var numbersHalf = new Array();
 
for (var i = 1; i < 2500; i++) {
  numbersHalf.push(i);
};

// Set up numbers from 1 to 5000
var numbersFull = new Array();
 
for (var i = 1; i < 5000; i++) {
  numbersFull.push(i);
};

// for O(1)
// Find the first item
function FindFirstItem(items) {
    return items[0];
}

JSLitmus.test('Find first colour test', function() {
    FindFirstItem(colours);
});

JSLitmus.test('Find first number test (2500 items)', function() {
    FindFirstItem(numbersHalf);
});

JSLitmus.test('Find first number test (5000 items)', function() {
    FindFirstItem(numbersFull);
});

// for O(n)
function FindItem(items, match) {
    for (var i=0; i < items.length; i++) {
         if (items[i] == match) {
              return true;
         }
    }
    return false;
}

JSLitmus.test('Find colour by colour name', function() {
    FindItem(colours, "Yellow");
});

JSLitmus.test('Find number index by number (2500 items)', function() {
    FindItem(numbersHalf, 2500);
});

JSLitmus.test('Find number index by number (5000 items)', function() {
    FindItem(numbersFull, 5000);
});

// for O(log n )
function FindItemBinarySearch(items, match) {
     
    var low = 0,
        high = items.length -1;
         
    while (low <= high) {
        mid = parseInt((low + high) / 2);

         current = items[mid];
       
        if (current > match) {
           high = mid - 1;
         } else if (current < match) {
            low = mid + 1;
          } else {
            return mid;
         }   
    }       
    
    return -1;
  }

JSLitmus.test('Find colour by colour name', function() {
   FindItemBinarySearch(colours, "Yellow");
});

JSLitmus.test('Find number index by number (2500)', function() {
   FindItemBinarySearch(numbersHalf, 2500);
});

JSLitmus.test('Find number index by number (5000)', function() {
   FindItemBinarySearch(numbersFull, 5000);
});