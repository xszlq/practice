/**
 * Created by LiuQiang on 2019/2/19.
 */

/**
 * 38题
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    function getNext(before){
        let now,next,rv="";
        let length = 1;
        for(let i=0, j=0; i<before.length; i++){
            j++;
            now = before.charAt(i);
            next = before.charAt(j);

            if(next){
                if(next === now){
                    length++;
                }else{
                    rv += length+now;
                    length = 1;
                }
            }else{
                rv += length + now;
            }
        }

        return rv;
    }

    let begin = "1", rv = "1";
    for(let i=1; i<n; i++){
        rv = getNext(begin);
        begin = rv;
    }

    return rv;
};


console.log(countAndSay(7));
