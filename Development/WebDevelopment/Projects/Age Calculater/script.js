const datainput=document.querySelector("#date-input");
const calculatebtn=document.querySelector("#calc-age-btn");
const yearoutput=document.querySelector("#years");
const monthsoutput=document.querySelector("#months");
const daysoutput=document.querySelector("#days");

calculatebtn.addEventListener("click",CalculateAge)

function RestrictFutureDates(){
   let dtToday = new Date();
   let month = dtToday.getMonth() + 1;
   let day = dtToday.getDate();
   let year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();

   let maxDate = year + '-' + month + '-' + day;
    datainput.setAttribute("max",maxDate);
    // max="2024-01-01"
}

function CalculateAge(){
    let setdate= datainput.value;
    let inputyear=setdate.substring(0,4);
    let inputmonth=setdate.substring(5,7)
    let inputday=setdate.substring(8,10);

    let dtToday = new Date();
    let currmonth = dtToday.getMonth() + 1;
    let currday = dtToday.getDate();
    let curryear = dtToday.getFullYear();
     if(currmonth < 10)
         currmonth = '0' + currmonth.toString();
     if(currday < 10)
         currday = '0' + currday.toString();
    
    let diffyear=curryear-inputyear;
    let diffmonth=currmonth-inputmonth;
    let diffday=currday-inputday;

    
    if(diffmonth<0){
      diffyear--;
      currmonth=(currmonth*1)+12;
      diffmonth=currmonth-inputmonth;
    }

    if(diffday<0){

        if(diffmonth==0){
            diffyear--;
            currmonth=(currmonth*1)+12;
            diffmonth=currmonth-inputmonth;
        }
        diffmonth--;
        currday=(currday*1)+30;
        diffday=currday-inputday;
    }

    yearoutput.innerHTML=diffyear;
    monthsoutput.innerHTML=diffmonth;
    daysoutput.innerHTML=diffday;
   
}

RestrictFutureDates();