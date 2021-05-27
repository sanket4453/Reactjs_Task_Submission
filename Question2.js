//0,0,1,1,0,0,0,1,0,0,1,1,1,0
//1,0,0,0,0,1,0,0,0,1
arr = [1,0,0,0,0,1,0,0,0,1]
function MaxConsecutiveOnes(arr) 
{
     let max = 0;
     let count = 0; 
     for(let i of arr){
         //console.log(i)
          if(i === 0){ 
              count = 0 
            }else{ 
                count++;
                if( max < count )
                max=count;
                //console.log(max);
              }
         } 
        return max
 };
 console.log(MaxConsecutiveOnes(arr))
