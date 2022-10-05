

	// Program to calculate maximum price of wines
	
	let N = 1000;
	
	let dp = new Array(N);
	
	// This array stores the "optimal action"
	// for each state i, j
	let sell = new Array(N);
	
	for(let i = 0; i < N; i++)
	{
		dp[i] = new Array(N);
		sell[i] = new Array(N);
		for(let j = 0; j < N; j++)
		{
			dp[i][j] = 0;
			sell[i][j] = 0;
		}
	}
	
	// Function to maximize profit
	function maxProfitUtil(price, begin, end, n)
	{
		if (dp[begin][end] != -1)
			return dp[begin][end];
	
		let year = n - (end - begin);
	
		if (begin == end)
			return year * price[begin];
	
		// x = maximum profit on selling the
		// wine from the front this year
		let x = price[begin] * year +
				maxProfitUtil(price, begin + 1,
									end, n);
	
		// y = maximum profit on selling the
		// wine from the end this year
		let y = price[end] * year +
				maxProfitUtil(price, begin,
								end - 1, n);
	
		let ans = Math.max(x, y);
		dp[begin][end] = ans;
	
		if (x >= y)
			sell[begin][end] = 0;
		else
			sell[begin][end] = 1;
	
		return ans;
	}
	
	// Util Function to calculate maxProfit
	function maxProfit(price, n)
	{
		
		// reseting the dp table
		for (let i = 0; i < N; i++)
			for (let j = 0; j < N; j++)
				dp[i][j] = -1;
	
		let ans = maxProfitUtil(price, 0, n - 1, n);
	
		let i = 0, j = n - 1;
	
		while (i <= j) {
	
			// sell[i][j]=0 implies selling
			// the wine from beginning will
			// be more profitable in the
			// long run
			if(sell[i][j] == 0){
				document.write( "beg ");
				i++;
			}
			else
			{
				document.write( "end ");
				j--;
			}
		}
	
		document.write("</br>");
	
		return ans;
	}
	
	// Price array
	let price = [ 2, 4, 6, 2, 5 ];
	let n = price.length;
	let ans = maxProfit(price, n);
	document.write( ans );
	
	// This code is contributed by Pratham16112002.
