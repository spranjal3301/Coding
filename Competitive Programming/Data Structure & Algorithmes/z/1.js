function solve(nums,n,target,dp){
    
    if(target===0)return true;
    if(n===0)return nums[0]===target;
    if(dp[n][target]!==-1)return dp[n][target];

    let Nopick=solve(nums,n-1,target,dp);
    let pick=false;

    if(target>=nums[n]){
        pick=solve(nums,n-1,target-nums[n],dp);
    }

    dp[n][target]=Nopick || pick;
    return dp[n][target];

}

var canPartition = function(nums) {
    const n=nums.length;
    let sum=nums.reduce((s,e)=>s+e);
    const dp = Array.from({ length: n + 1 }, () => Array(sum + 1).fill(-1));
    solve(nums,n-1,sum,dp);

    let mini=sum;
    for(let j=0;j<sum+1;j++){
        if(dp[n-1][j]==true){
            mini=Math.min(Math.abs(2*j-sum),mini);
        }
        
    }
    return mini;
};

console.log(canPartition([20, 19, 18 ,20 ,16]));