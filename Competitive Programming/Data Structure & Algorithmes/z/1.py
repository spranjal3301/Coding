def minimumDeletions(self, word: str, k: int) -> int:
        freq = {}
        for char in word:
            freq[char] = freq.get(char, 0) + 1
            
        # Extract the frequencies and sort them in descending order.
        frequencies = sorted(freq.values(), reverse=True)
        
        # Initialize variables for the minimum deletions and the target frequency list.
        min_deletions = float('inf')
        
        # Iterate over the possible target frequencies.
        for i in range(len(frequencies)):
            target = frequencies[i]
            deletions = 0
            # For each target, compute the deletions needed for all other frequencies.
            for f in frequencies:
                if f > target + k:
                    deletions += f - (target + k)
                elif f < target:
                    deletions += f
            # Keep track of the minimum deletions found so far.
            min_deletions = min(min_deletions, deletions)
            
            if min_deletions == 0:  # Early exit if no deletions needed.
                break
            
        return min_deletions if min_deletions != float('inf') else 0
