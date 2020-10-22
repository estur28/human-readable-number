const items = ['', 'one', 'two', 'three',
'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

const doubleItems = ['', '', 'twenty', 'thirty',
 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = function toReadable (num) {
    if  (num === 0) {
        return 'zero';
    } else if(num < 20) {
        return items[num];
    } else if (num>= 20 && num < 100) {
        return decadeNum(num);
    } else if(num >= 100 && num < 1000) {
        return hundredNum(num);
     }
    }
    
    function decadeNum(num) {
         num = num.toString().split('');
         if(num[1] == 0) {
             return doubleItems[num[0]];
         } else {
            return doubleItems[num[0]] + ' ' + items[num[1]];
         }
     }
    

function hundredNum(num) {
    num = num.toString().split('');
    if(num[1] == 0 && num[2] == 0) {
        return items[num[0]] + ' hundred';
     } else if(num[1] == 0 && num[2] != 0 ) {
        return items[num[0]] + ' hundred ' + items[num[2]];
     } else if (num[1] != 0 && num[2] == 0) {
         return items[num[0]] +  ' hundred ' + doubleItems[num[1]];
     }else {
       return items[num[0]] +  ' hundred ' + doubleItems[num[1]] + ' ' + items[num[2]];
     }
};






 