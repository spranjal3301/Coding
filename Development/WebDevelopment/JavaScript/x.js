var leastInterval = function(tasks, n) {
  const freq={};
  let maxi=0;
  
  tasks.forEach((element) => {
          if(freq[element])freq[element]++;
          else freq[element]=1;
          maxi=Math.max(maxi,freq[element]);    
  });
  let ans=tasks.length;
  let ut=Object.keys(freq).length;
//  console.log(freq,ans,ut,maxi);

 let k=0;
  if(n>ut-1){ // 2>4
    ans+=(n-ut+1)*(maxi-1);
  }else{
    ans-=ut-n-1;
  }

  let i=0;
  const valus=Object.values(freq);
  valus.sort((a,b)=>b-a);
  // console.log(valus);

  for(keys of valus){
    
    if(keys<maxi-1){
      // console.log((maxi-1)-keys);
      ans+=(maxi-1)-keys;
    }
    i++;
    
    if(i==n+1)break;
  }

  return ans;
};
// tasks = ["A","A","A", "B","B","B"], n = 3

console.log(leastInterval(["A","A","A","B","B","B","C","D","E","F","G","H","I","J","K"], 7));