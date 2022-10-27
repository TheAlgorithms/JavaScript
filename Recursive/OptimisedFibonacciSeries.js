// * Usually the time complexity of fibonacchi series in recursion is T(2^N), i.e., exponential
// * but in the below code the time complexity of this is Linear 
// * here we used basic maths and golden ratio formula on Fibonacci Series
class OptimisedFibonacciSeries
{
    static fiboFormula(n)
    {
        return parseInt(((Math.pow(((1 + Math.sqrt(5)) / 2),n) - Math.pow(((1 - Math.sqrt(5)) / 2),n)) / Math.sqrt(5)));
    }
    static main(args)
    {
        for (var i=0; i <= 10; i++)
        {
            console.log(OptimisedFibonacciSeries.fiboFormula(i) + " ");
        }
    }
}
OptimisedFibonacciSeries.main([]);