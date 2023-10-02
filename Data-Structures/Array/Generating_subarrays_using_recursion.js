// Java code to print all possible subarrays for given array
// using recursion
 
class solution {
 
    // Recursive function to print all possible subarrays
    // for given array
    static void printSubArrays(int[] arr, int start, int end)
    {
        // Stop if we have reached the end of the array
        if (end == arr.length)
            return;
        // Increment the end point and start from 0
        else if (start > end)
            printSubArrays(arr, 0, end + 1);
        // Print the subarray and increment the starting
        // point
        else {
            System.out.print("[");
            for (int i = start; i < end; i++)
                System.out.print(arr[i] + ", ");
            System.out.println(arr[end] + "]");
            printSubArrays(arr, start + 1, end);
        }
        return;
    }
 
    public static void main(String args[])
    {
        int[] arr = { 1, 2, 3 };
        printSubArrays(arr, 0, 0);
    }
}
 
// This code is contributed by Subrat kaushik
