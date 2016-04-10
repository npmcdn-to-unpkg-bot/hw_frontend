
var base = 60; 
var clocktimer,dateObj,dh,dm,ds,ms; 
var readout=''; 
var h=1, m=1, tm=1,s=0,ts=0,ms=0,show=true, init=0, ii=0; 


function clearСlock() { 
    clearTimeout(clocktimer); 
    h=1;m=1;tm=1;s=0;ts=0;ms=0; 
    init=0;show=true; 
    readout='00:00:00.000'; 
    document.form.stopwatch.value=readout; 
    ii = 0; 
} 


function startTIME() { 
    var cdateObj = new Date(); 
    var t = (cdateObj.getTime() - dateObj.getTime())-(s*1000); 
    if (t>999) { s++; } 
    if (s>=(m*base)) { 
        ts=0; 
        m++; 
    } else { 
        ts=parseInt((ms/1000)+s); 
        if(ts>=base) { ts=ts-((m-1)*base); } 
    } 
    if (m>(h*base)) { 
        tm=1; 
        h++; 
    } else { 
        tm=parseInt((ms/1000)+m); 
        if(tm>=base) { tm=tm-((h-1)*base); } 
    } 
    ms = Math.round(t/1); 
    if (ms>999) {ms=0;} 
    if (ms==0) {ms='000';} 
    if (ms>0&&ms<10) { ms = '00'+ms; } 
    if (ms>9&&ms<100) { ms = '0'+ms; } 
    if (ts>0) { 
        ds = ts; 
        if (ts<10) { 
            ds = '0'+ts; 
        }
    } 
    else { 
        ds = '00'; 
    } 
    dm=tm-1; 
    if (dm>0) {
            if (dm<10) {
             dm = '0'+dm; 
         }
     } else { 
        dm = '00'; 
    } 
    dh=h-1; 
    if (dh>0) {
        if (dh<10) {
            dh = '0'+dh;
            }
    } else { 
        dh = '00';
        } 
    readout = dh + ':' + dm + ':' + ds + '.' + ms; 
    if (show==true) { document.form.stopwatch.value = readout; } 
    clocktimer = setTimeout("startTIME()",10); 
} 


function pause() { 
    if (init==0) { dateObj = new Date(); 
        startTIME(); 
        init=1; 
    } else { if(show==true) { 
        show=false; 
    } else { show=true;}
    }  
    var buttonChange=document.querySelector('.stopStart');
    if (buttonChange.getAttribute('value')=='Start'){
        buttonChange.setAttribute('value','Stop');
    }
    else {
        buttonChange.setAttribute('value','Start');
    }
} 