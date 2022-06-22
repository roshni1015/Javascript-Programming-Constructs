function nthMagicNo(n)
    {
        let pow = 1, answer = 0;
 
        // Go through every bit of n
        while (n != 0)
        {
            pow = pow * 5;
 
            // If last bit of n is set
            if ((n & 1) == 1)
                answer += pow;
 
            // proceed to next bit
            // or n = n/2
            n >>= 1;
        }
        return answer;
    }
     
    let n = 9;
    console.log("nth magic number is " + nthMagicNo(n));
 