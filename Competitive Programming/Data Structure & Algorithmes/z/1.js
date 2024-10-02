var minNumberOfSeconds = function(h, w) {
    let l = 1, r = 1e18; // Using regular numbers

  const cd = (t) => {
      let total = 0;
      for (const x of w) {
          let lo = 0, hi = h;
          while (lo < hi) {
              let mid = Math.floor((lo + hi + 1) / 2);
              if (x * mid * (mid + 1) / 2 <= t)
                  lo = mid;
              else
                  hi = mid - 1;
          }
          total += lo;
          if (total >= h) return true; // Early exit optimization
      }
      return total >= h;
  };

  let check=true;
  while (l < r) {
      let mid = Math.floor((l + r) / 2);
      if(check){
           if (cd(mid))
              r = mid;
          else
              l = mid + 1;
      }
     
  }

  return l;
};