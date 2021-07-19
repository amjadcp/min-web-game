// var sum = 0

// /* function add(){
//        sum = sum + Number(document.frm1.one.value);
//        sum = sum + Number(document.frm1.two.value);
//        sum = sum + Number(document.frm1.three.value);
//        sum = sum + Number(document.frm2.four.value);
//        sum = sum + Number(document.frm2.five.value);
//        sum = sum + Number(document.frm2.six.value);
//        sum = sum + Number(document.frm3.seven.value);
//        sum = sum + Number(document.frm3.eight.value);
//        sum = sum + Number(document.frm3.nine.value);
//        sum = sum + Number(document.frm3.ten.value);
//        document.write(sum);
// } */

// function add(){
//        one = document.getElementsByValue('10');
//        document.write(one);
// }

function loadNext(){
       currentPage = (localStorage.getItem('current_page') == null) ? 1 : localStorage.getItem('current_page');
       loadPage(currentPage+1);
}

function loadPage(pageNumber){
       console.log('calling ' + 'form_'+ pageNumber +'.html');
              document.location.replace('form_'+ pageNumber +'.html');
              switch(pageNumber){
              case 1:
                     let one = Number(document.frm1.one.value);
                     let two = Number(document.frm1.two.value);
                     let three = Number(document.frm1.three.value);
                     localStorage.setItem('score', one + two + three);

              case 2:
                     let four = Number(document.frm2.four.value);
                     let five = Number(document.frm2.five.value);
                     let six = Number(document.frm2.six.value);
                     var currentScore = localStorage.get('score');
                     localStorage.setItem('score', currentScore + foure + five + six);

              case 3:
                     let seven = Number(document.frm3.seven.value);
                     let eight = Number(document.frm3.eight.value);
                     let nine = Number(document.frm3.nine.value);
                     let ten = Number(document.frm3.ten.value);
                     var currentScore = localStorage.get('score');
                     localStorage.setItem('score', currentScore + seven + eight + nine + ten);
              default:
                     console.log("Invalid reachpoint!!!");
}
}