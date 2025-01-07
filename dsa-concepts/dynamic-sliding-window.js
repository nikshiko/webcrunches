function lengthOfLongestSubstringTwoDistinct(s) {
    if (s.length <= 2) return s.length;
    
    let maxLength = 0;
    let windowStart = 0;
    let charFreq = new Map();
    
    // Move the window end
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        // Add new character to our frequency map
        charFreq.set(s[windowEnd], (charFreq.get(s[windowEnd]) || 0) + 1);
        
        // Shrink the window if we have more than 2 distinct characters
        while (charFreq.size > 2) {
            // Reduce frequency of character at windowStart
            charFreq.set(s[windowStart], charFreq.get(s[windowStart]) - 1);
            
            // If frequency becomes 0, remove the character
            if (charFreq.get(s[windowStart]) === 0) {
                charFreq.delete(s[windowStart]);
            }
            
            windowStart++;
        }
        
        // Update maxLength if current window is larger
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    
    return maxLength;
}


/*e.g: eceba
Step 1: e        -> map:{e:1}         -> maxLength = 1
Step 2: ec       -> map:{e:1,c:1}     -> maxLength = 2
Step 3: ece      -> map:{e:2,c:1}     -> maxLength = 3
Step 4: eceb     -> map:{e:2,c:1,b:1} -> shrink window
        -> ceb   -> map:{e:1,c:1,b:1} -> shrink window
        -> eb    -> map:{e:1,b:1}     -> maxLength = 3
Step 5: eba      -> map:{e:1,b:1,a:1} -> shrink window
        -> ba    -> map:{b:1,a:1}     -> maxLength = 3
    */