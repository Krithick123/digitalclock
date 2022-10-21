const h=document.querySelectorAll('.h');
const m=document.querySelectorAll('.m');
const s=document.querySelectorAll('.s');
const m_span=document.querySelectorAll('.meridian span');
const days_span=document.querySelectorAll('.days span');
const month_span=document.querySelectorAll('.month span');
const date=document.querySelector('.date');

function runClock()
{

    var time=new Date();
    // DATE 
    var da=time.getDate();
    da=da<10?'0'+da:da;
    var mo=time.getMonth()+1;
    mo=mo<10?'0'+mo:mo;
    var ye=time.getFullYear();
    ye=ye<10?'0'+ye:ye;
    date.innerHTML=`${da}-${mo}-${ye}`;
    // DAY 
    days_span[time.getDay()].classList.add('day-active');
    // MONTH 
    month_span[time.getMonth()].classList.add('day-active');
    //times
    
    var hrs=time.getHours();
    
    var min=time.getMinutes();
   

    var sec=time.getSeconds();
    
    

    // CONVERTING RAILWAY TIME TO NORMAL TIME 

    // HOURS > 12 IT IS PM  i
    // HOURS < 12 IT IS AM 

    if(hrs>12)
    {
        hrs=hrs-12;
        
        m_span[1].classList.add('active');// PM
    }
    else{
        if(hrs==0)
        {
            hrs=12;
        } 

        m_span[0].classList.add('active');// AM
    }

    hrs=hrs<10?'0'+hrs:hrs;
    min=min<10?'0'+min:min;
    sec=sec<10?'0'+sec:sec;



    // CONVERTING TO STRING 
    hrs=hrs.toString();
    min=min.toString();
    sec=sec.toString();

// ACCSESSING THROUGH ARRAY INDEX 

    h[0].innerHTML=hrs[0];
    h[1].innerHTML=hrs[1];

    m[0].innerHTML=min[0];
    m[1].innerHTML=min[1];

    s[0].innerHTML=sec[0];
    s[1].innerHTML=sec[1];

}
setInterval(runClock,1000);
runClock();