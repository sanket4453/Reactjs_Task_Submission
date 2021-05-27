var arr= [0,1,2,3,4,5,6,7,7,8,9,10]

function ReapetedNum(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===arr[i+1]){
            console.log(arr[i])
        }
    }
}
ReapetedNum(arr);