//是否返回时间,已加入参数表

var showTime;

//是否必须点‘确定’按钮选择日期，true为必须，false直接选中，默认为false

var needClickBtnOK = false;

//控件的暗色,默认为"#AAAAAA"

var DarkColor;

//控件的亮色,默认为"#EEEEEE"

var LightColor;

//控件的按钮背景色,默认为"#E6E6F6"

var BtnBgColor;

//控件的文字颜色,默认为"#000080"

var WordColor;

//控件的暗文字颜色,默认为"#AAAAAA"

var WordDark;

//日期数字背景色,默认为"#DDDDDD"

var DayBgColor;

//今天在日历上的标示背景色,默认为"#DD8333"

var TodayColor;

//日期显示的立体表达色,默认为"#777777"

var DarkBorder;

/**********************************************************
**********************************************************/

var value;
var strIframe;

var popDiv;
var popUp;
var ifmElement;
var ifm;
var inputText;
var nowTimeTemp;

var WebCalendarWidth;
var WebCalendarNowSelect;
var WebCalendarDaysMonth;
var WebCalendarDay;
var WebCalendarDayObj;
var WebCalendarDateStyle;
var WebCalendarObjExport;
var WebCalendarInputDate;
var WebCalendarThisYear;
var WebCalendarThisMonth;
var WebCalendarThisDay;
var WebCalendarToday;
var WebCalendarDateReg;
var WebCalendarYearFall;
var WebCalendarFormat;
var WebCalendarTimeShow;
var WebCalendarDarkColor;
var WebCalendarLightColor;
var WebCalendarBtnBgColor;
var WebCalendarWordColor;
var WebCalendarWordDark;
var WebCalendarDayBgColor;
var WebCalendarTodayColor;
var WebCalendarDarkBorder;


//弹出日历选择窗口,ctr为要设置日期的文本输入框id;
//showtime为是否显示时间，'true'为显示，'false'只显示日期
function popUpCalendar(ctr,showtime){
 try
 {
  if (showtime != 'true' && showtime != 'false')
  {
   alert("参数showtime必须为'true'或'false'");
   return -1;
  }
  showTime=showtime;
  popUp=null;
  initIt(ctr);
 }
 catch(exp){
 }
}

function initIt(ctr){
 inputText = ctr;
 value = inputText.value;
 initVar();
 showCalendar();
}

function initVar(){
 WebCalendarDaysMonth  = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
 
 WebCalendarDay        = new Array(42); //定义日历展示用的数组
 
 WebCalendarDayObj     = new Array(42); //定义日期展示控件数组
 
 WebCalendarDateStyle  = null; //保存格式化后日期数组
 
 WebCalendarObjExport  = null; //日历回传的显示控件
 
 WebCalendarInputDate  = null; //转化外的输入的日期(d/m/yyyy)
 
 WebCalendarThisYear   = new Date().getFullYear(); //定义年的变量的初始值 
 
 WebCalendarThisMonth  = new Date().getMonth()+ 1; //定义月的变量的初始值 
 
 WebCalendarThisDay    = new Date().getDate(); //定义日的变量的初始值 
 //今天(d/m/yyyy)
 WebCalendarToday      = WebCalendarThisDay +"/"+ WebCalendarThisMonth + "/" + WebCalendarThisYear; 
 
 WebCalendarNowSelect  = WebCalendarToday; 
 
 WebCalendarDateReg    = "";  //日历格式验证的正则式 
 
 WebCalendarYearFall   = 50;  //定义年下拉框的年差值  
 
 WebCalendarFormat     = "yyyy-mm-dd"; //回传日期的格式
 
 //是否返回时间 
 
 WebCalendarTimeShow   = (showTime != null && showTime != 'false');
 if (WebCalendarTimeShow){
  WebCalendarWidth = 255;
 }else{
  WebCalendarWidth = 242;
 }
 
 //控件的暗色
 
 WebCalendarDarkColor  = (DarkColor==null) ? "#AAAAAA" : DarkColor;
 
 //控件的亮色
 
 WebCalendarLightColor = (LightColor==null) ? "#EEEEEE" : LightColor;
 
 //控件的按钮背景色
 
 WebCalendarBtnBgColor = (BtnBgColor==null) ? "#E6E6F6" : BtnBgColor;
 
 //控件的文字颜色
 
 WebCalendarWordColor  = (WordColor==null) ? "#000080" : WordColor;
 
 //控件的暗文字颜色
 
 WebCalendarWordDark   = (WordDark==null) ? "#AAAAAA" : WordDark;
 
 //日期数字背景色
 
 WebCalendarDayBgColor = (DayBgColor==null) ? "#DDDDDD" : DayBgColor;
 
 //今天在日历上的标示背景色
 
 WebCalendarTodayColor = (TodayColor==null) ? "#DD8333" : TodayColor;
 
 //日期显示的立体表达色 
 
 WebCalendarDarkBorder = (DarkBorder==null) ? "#777777" : DarkBorder;
  
 nowTimeTemp = new Date();
 nowTimeTemp.setHours(0);
 nowTimeTemp.setMinutes(0);
 nowTimeTemp.setSeconds(0);
 if (value != null && value.trim().length > 0){
  var timeStr = value;
  var spaceP = timeStr.indexOf(" ");
  var timeStr = timeStr.substr(spaceP);
  var timesArray = timeStr.split(":");
  var hnn = timesArray[0];
  var mnn = timesArray[1];
  var snn = timesArray[2];
  nowTimeTemp.setHours(hnn);
  nowTimeTemp.setMinutes(mnn);
  nowTimeTemp.setSeconds(snn);
 }
  
}

function showCalendar(){
 if (popUp==null) {
  popUp = window.createPopup();
  var oPopBody = popUp.document.body;
  writeIframe();
 } 
 //edit 2005-11-23
 if(WebCalendarTimeShow){
  popUp.show( event.screenX+10 , event.screenY+10 , WebCalendarWidth+2, 220);
 }else{
  popUp.show( event.screenX+10 , event.screenY+10 , WebCalendarWidth+2, 214);
 }
 //popUp.show( event.screenX+10 , event.screenY+10 , WebCalendarWidth+2, 214);
 calendar();
}

function Iframe(){
 try{
  var selYLeft = 58;
  var selMleft=133;
  /*if(WebCalendarTimeShow){
   selYLeft=58;
   selMleft=133;
  }*/
       strIframe = "<html><head><meta http-equiv='Content-Type' content='text/html; charset=gb2312'><style>" + "*{font-size: 12px; font-family: 宋体}" + ".bg{  color: " + WebCalendarLightColor + "; cursor: default; background-color: " + WebCalendarDarkColor + ";}" +
                "table#tableMain{ width: "+WebCalendarWidth+"; height: 180;}" + 
                " table#tableWeek td{ text-align:center; color: " + WebCalendarLightColor + ";}" + 
                "table#tableDay  td{ font-weight: bold;}" + 
                "td#kxYearHead, td#kxYearMonth{ text-align:center; color: " + WebCalendarWordColor + "}" +
                ".over { text-align: center; border-top: 1px solid " + WebCalendarLightColor + ";border-left: 1px solid " + WebCalendarLightColor + ";" + "border-right: 1px solid " + WebCalendarDarkBorder + "; border-bottom: 1px solid " + WebCalendarDarkBorder + ";}" +
  ".selected { text-align: center; border-top: 1px solid " + WebCalendarDarkBorder + ";border-left: 1px solid " + WebCalendarDarkBorder + ";" + "border-right: 1px solid " + WebCalendarLightColor + "; border-bottom: 1px solid " + WebCalendarLightColor + ";}" +
                ".out{ text-align: center; border-top: 1px solid " + WebCalendarLightColor + "; border-left: 1px solid " + WebCalendarLightColor + ";" + "border-bottom: 1px solid " + WebCalendarDarkBorder + "; border-right: 1px solid " + WebCalendarDarkBorder + "}" + 
                ".inputstyle{ border: 1px solid " + WebCalendarDarkColor
                + "; padding-top: 1px; height: 20; cursor: hand;" + " color:" + WebCalendarWordColor + "; background-color: " + WebCalendarBtnBgColor + "}" +
                "</style></head>";
     
     strIframe+="<body onselectstart='return false;' scrolling='no' style='overflow:hidden;margin: 0px;border: 1px solid "+WebCalendarDarkBorder+";' oncontextmenu='return false;'><form id=kx>";
  
  strIframe += "<select id='tmpYearSelect' style='z-index:1;position:absolute;top:3;left:"+selYLeft+";display:none'>"+
  "</select>"+
  "<select id='tmpMonthSelect' style='z-index:1; position:absolute;top:3;left:"+selMleft+";display:none'"+
  "></select>"+
  
  "<table id=tableMain class=bg border=0 cellspacing=0 cellpadding=1>"+
  "<tr><td height=20 bgcolor='"+ WebCalendarLightColor +"'>"+
  "    <table width=100% id=tableHead border=0 cellspacing=1 cellpadding=0><tr align=center>"+
  "    <td width='50' align='left' height=20 class=bg ><input id=prevYear title='向前翻 1 年' class='inputstyle' type=button value='&lt;&lt; '"+
      "    onfocus='this.blur()' style='kx:expression(this.disabled=parent.WebCalendarThisYear==1000)'><input"+
      "    onfocus='this.blur()' id=prevMonth title='向前翻 1 月' class='inputstyle'  type=button value=' &lt;&nbsp;'></td>"+
  "    <td width='120' id=kxYearHead title='点击此处选择年份'"+
  "        onmouseover=\"this.bgColor='"+WebCalendarDarkColor+"'; this.style.color='"+WebCalendarLightColor+"';\""+
  "        onmouseout=\"this.bgColor='"+WebCalendarLightColor+"'; this.style.color='"+WebCalendarWordColor+"';\"></td>"+
  "    <td width='120' id=kxYearMonth title='点击此处选择月份'"+
  "        onmouseover=\"this.bgColor='"+WebCalendarDarkColor+"'; this.style.color='"+WebCalendarLightColor+"'\""+
  "        onmouseout=\"this.bgColor='"+WebCalendarLightColor+"'; this.style.color='"+WebCalendarWordColor+"'\"></td>"+
  "    <td align='right' class=bg ><input title='向后翻 1 月' class='inputstyle' id=nextMonth type=button value='&nbsp;&gt; '"+
      "    onfocus='this.blur()'><input id=nextYear title='向后翻 1 年' class='inputstyle' type=button value='&gt;&gt; '"+
      "    onfocus='this.blur()' style='kx:expression(this.disabled=parent.WebCalendarThisYear==9999)'></td></tr></table>"+
  "</td></tr><tr><td height=20px>";
  strIframe += "<table id=tableWeek border=1 width=100% cellpadding=0 cellspacing=0";
  strIframe += " borderColorLight='#888888' borderColorDark='#DDDDDD'>"+
  "    <tr align='center' height=20px><td background='#CCC000'>日</td><td>一</td><td>二</td><td>三</td><td>四</td><td>五</td><td>六</td></tr></table>"+
  "</td></tr><tr><td valign='middle' height='122px'>"+
  "    <table bgcolor='"+WebCalendarDarkColor+"' id=tableDay height='100%' width='100%' cellspacing=0 cellpadding=0>";
  //new Array ("Sun","Mon","Tue","Wed","Thu","Fri","Sat")
        for (var x = 0; x < 5; x++)
        {
                strIframe += "<tr height='20px'>";
                for (var y = 0; y < 7; y++)
                        strIframe += "<td class=out id='kxDay" + (x * 7+y) + "'></td>";
                strIframe += "</tr>";
        }         
  strIframe += "<tr>";

         for(var x=35; x<42; x++) {
    strIframe += "<td class=out id='kxDay"+ x +"'></td>";
   }

         strIframe +="</tr></table>"+
    "    </td></tr><tr><td height=20 bgcolor='"+ WebCalendarLightColor +"'>"+
    "    <table border=0 cellpadding=1 cellspacing=0 width=100%>"+
    "    <tr height='18px'><td id='nowSelectObj' width='89px'>&nbsp;</td><td colspan=2 align='left'>";
    if (WebCalendarTimeShow){
     //var nowTimeTemp = new Date();
     strIframe+="<INPUT type='text' readonly  id='hou'  style='LEFT: 84px; WIDTH: 20px; POSITION: absolute; TOP: 172px; HEIGHT: 16px'>";
     strIframe+="<INPUT id='addhour' style='Z-INDEX: 101; LEFT: 105px; WIDTH: 16px; POSITION: absolute; TOP: 172px; HEIGHT: 8px' type='button' value=''>";
     strIframe+="<INPUT id='subhour' style='Z-INDEX: 102; LEFT: 105px; WIDTH: 16px; POSITION: absolute; TOP: 181px; HEIGHT: 8px' type='button' value=''>";
     strIframe+="<span style='LEFT: 122px; POSITION: absolute; '>时</span>";
     strIframe+="<INPUT id='min' readonly style='LEFT: 137px; WIDTH: 20px; POSITION: absolute; TOP: 172px; HEIGHT: 16px' type='text'>";
     strIframe+="<INPUT id='addmin' style='Z-INDEX: 103; LEFT: 158px; WIDTH: 16px; POSITION: absolute; TOP: 172px; HEIGHT: 8px' type='button' value='Button'>";
     strIframe+="<INPUT id='submin' style='Z-INDEX: 104; LEFT: 158px; WIDTH: 16px; POSITION: absolute; TOP: 181px; HEIGHT: 8px' type='button' value='Button'>";
     strIframe+="<span style='LEFT: 175px; POSITION: absolute; '>分</span>";
     strIframe+="<INPUT id='sec' readonly style='LEFT: 190px; WIDTH: 20px; POSITION: absolute; TOP: 172px; HEIGHT: 16px' type='text'>";
     strIframe+="<INPUT id='addsec' style='Z-INDEX: 105; LEFT: 211px; WIDTH: 16px; POSITION: absolute; TOP: 172px; HEIGHT: 8px' type='button' value='Button'>";
     strIframe+="<INPUT id='subsec' style='Z-INDEX: 106; LEFT: 211px; WIDTH: 16px; POSITION: absolute; TOP: 181px; HEIGHT: 8px' type='button' value='Button'>";
     strIframe+="<span style='LEFT: 228px; POSITION: absolute; '>秒</span>";
     /*
     
     */
       
 }
    strIframe+="&nbsp;</td></tr>"+
    "    <tr><td align='left'>&nbsp</td><td align=center>"+
    "    </td><td align='right'><input name=today type=button value='现在' onfocus='this.blur()' class='inputstyle' style='width: 30' title='当前日期'>&nbsp;<input name='doOk' type=button value='确定' onfocus='this.blur()' class='inputstyle' style='width: 30'>&nbsp;<input type='button' name='closeCalendar' value='关闭' class='inputstyle' style='width: 30' title='取消'></td></tr></table>"+
    "</td></tr><table></form></body></html>";

    
    }
    catch(excp4) {}
}
var interset;
function writeIframe(){

 if (strIframe == null){
  Iframe();
 }
 with(popUp)
    { 
  document.writeln(strIframe); 
  document.close(); 
  //document.body.onkeydown=doKeyDown;
  with(document.all){
   kxYearHead.onclick=funYearSelect;
   kxYearMonth.onclick=funMonthSelect;
   prevYear.onclick=prevY;
   prevMonth.onclick=prevM;
   nextMonth.onclick=nextM;
   nextYear.onclick=nextY;
   today.onclick=setToday;
   tmpYearSelect.onchange=newYearSelect;
   tmpYearSelect.onblur=hiddenSelect;
   tmpMonthSelect.onchange=newMonthSelect;
   tmpMonthSelect.onblur=hiddenSelect;
   doOk.onclick=returnDate;
   closeCalendar.onclick=hiddenCalendar;

   for(var i=0; i<42; i++)
         {
             WebCalendarDayObj[i] = eval("kxDay"+ i);
             WebCalendarDayObj[i].onmouseover = dayMouseOver;
             WebCalendarDayObj[i].onmouseout  = dayMouseOut;
             WebCalendarDayObj[i].onmouseup   = newDateSelect;
             //WebCalendarDayObj[i].onclick     = newDateSelect;
         }
         if (WebCalendarTimeShow){
    //
    //addhour.onclick=addH; 
    addhour.onmousedown=addHour;
    addhour.onmouseup=addaHou;
    addhour.onmouseout=stop;
    //
    //subhour.onclick=subH;
    subhour.onmousedown=subHour;
    subhour.onmouseup=subaHou;
    subhour.onmouseout=stop;
    //
    //addmin.onclick=addM;
    addmin.onmousedown=addMin;
    addmin.onmouseup=addaMin;
    addmin.onmouseout=stop;
    //
    //submin.onclick=subM;
    submin.onmousedown=subMin;
    submin.onmouseup=subaMin;
    submin.onmouseout=stop;
    //
    //addsec.onclick=addS;    
    addsec.onmousedown=addSec;
    addsec.onmouseup=addaSec;
    addsec.onmouseout=stop;
    //
    //subsec.onclick=subS;    
    subsec.onmousedown=subSec;
    subsec.onmouseup=subaSec;
    subsec.onmouseout=stop;
    //
    popUp.document.all.hou.value = appendZero(nowTimeTemp.getHours());
    popUp.document.all.min.value = appendZero(nowTimeTemp.getMinutes());
    popUp.document.all.sec.value = appendZero(nowTimeTemp.getSeconds()); 
         }
         
  }        
    }
}

//
function stop(){
 clearInterval(interset);
}
function addHour(){
 clearInterval(interset);
 interset=setInterval("addH()",120);
}
function addaHou(){
 stop();
 addH();
}
function subaHou(){
 stop();
 subH();
}
function subHour(){
 clearInterval(interset);
 interset=setInterval("subH()",120);
}
function addH(){
 var h = parseInt(popUp.document.all.hou.value,10) + 1;
 popUp.document.all.hou.value = h > 23? "00" : (h<10?appendZero(h):h);
}
function subH(){
 var h = parseInt(popUp.document.all.hou.value,10) - 1;
 popUp.document.all.hou.value=h < 0 ? "23" : appendZero(h);
}
function addaMin(){
 stop();
 addM();
}
function subaMin(){
 stop();
 subM();
}
function addMin(){
 clearInterval(interset);
 interset=setInterval("addM()",120);
}
function subMin(){
 clearInterval(interset);
 interset=setInterval("subM()",120);
}
function addM(){
 var m = parseInt(popUp.document.all.min.value,10) + 1;
 popUp.document.all.min.value = m > 59? "00" : appendZero(m);
}
function subM(){
 var m = parseInt(popUp.document.all.min.value,10) - 1;
 popUp.document.all.min.value = m < 0? "59" : appendZero(m);
}
function addaSec(){
 stop();
 addS();
}
function subaSec(){
 stop();
 subS();
}
function addSec(){
 clearInterval(interset);
 interset=setInterval("addS()",120);
}
function subSec(){
 clearInterval(interset);
 interset=setInterval("subS()",120);
}
function addS(){
 var s = parseInt(popUp.document.all.sec.value,10) + 1;
 popUp.document.all.sec.value = s > 59? "00" : appendZero(s);
}
function subS(){
 var s = parseInt(popUp.document.all.sec.value,10) - 1;
 popUp.document.all.sec.value = s < 0? "59" : appendZero(s);
}
//

function appendZero(n){
 return (("00" + n).substr(("00" + n).length - 2));
}

function String.prototype.trim(){
 return this.replace(/(^\s*)|(\s*$)/g,"");
}

function hiddenSelect(nows){
 try{
  var ee=nows;
  for(var i = (ee.options.length - 1); i > -1; i--)
  {
   ee.options.remove(i);
  }
  nows.style.display="none";
 }catch(e){}
}

function hiddenCalendar(){
 if(popUp){
  if(popUp.isOpen){
   popUp.hide();
  }
 }
}

function dayMouseOver(){
    try{
        this.style.backgroundColor = WebCalendarWordDark;
        var d = WebCalendarDay[this.id.substr(5)];
        if (WebCalendarNowSelect == d) {
                return ;
        }
        this.className = "over";
        if (d.split("/")[1] == WebCalendarThisMonth) {
                this.style.color = WebCalendarLightColor;
        }else{
         this.style.color = WebCalendarLightColor;
        }
    }
    catch(excp5) {}
}

function dayMouseOut() {
    try{
        var d = WebCalendarDay[this.id.substr(5)];
        if (WebCalendarNowSelect == d) {
         if(WebCalendarNowSelect == WebCalendarToday){
          this.style.background = WebCalendarTodayColor; 
         }
         return ;
        }
        if (WebCalendarInputDate==d){
          this.bgColor = WebCalendarWordDark;
          this.style.color = WebCalendarLightColor;
  }
        this.className = "out";
        a = d.split("/");
        this.style.removeAttribute('backgroundColor');
        if (a[1] == WebCalendarThisMonth && d != WebCalendarToday) {
                if (WebCalendarDateStyle && a[0] == parseInt(WebCalendarDateStyle[4], 10)) {
     this.style.background = WebCalendarLightColor;
                }
                this.style.color = WebCalendarWordColor;
        }
        else if (d == WebCalendarToday){
         this.style.color = WebCalendarLightColor;
        }
        else{
   this.style.color = WebCalendarWordDark;
  }
 }
 catch(excp6) {}
}


function newYearSelect(){
 WebCalendarThisYear =this.value;
 writeCalendar();
 hiddenSelect(popUp.document.all.tmpYearSelect);
}

function hidenYearSelect(){
 hiddenSelect(popUp.document.all.tmpYearSelect);
}

function newMonthSelect(){
 WebCalendarThisMonth=this.value;
 hiddenSelect(popUp.document.all.tmpMonthSelect);
 writeCalendar();
}

function hidenMonthSelect(){
 hiddenSelect(popUp.document.all.tmpMonthSelect);
}

function hiddenAllSelect(){
 hidenMonthSelect();
 hidenYearSelect();
}

function setToday(){
 WebCalendarNowSelect = WebCalendarToday;
 var a = WebCalendarToday.split("/");
 WebCalendarThisYear = a[2];
 WebCalendarThisMonth  = a[1];
 WebCalendarThisDay = a[0];
 if(WebCalendarTimeShow){
  nowTimeTemp = new Date();
  writeIframe();
 }
 writeCalendar();
}

function calendar(){
    var e = window.event.srcElement;
    WebCalendarObjExport = inputText;
    if  (!WebCalendarTimeShow) WebCalendarDateReg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/;
    else WebCalendarDateReg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
    try
    {
        if (WebCalendarObjExport.value.trim() != ""){
            WebCalendarDateStyle = WebCalendarObjExport.value.trim().match(WebCalendarDateReg);
            if (WebCalendarDateStyle == null)
            {
                WebCalendarThisYear   = new Date().getFullYear();
                WebCalendarThisMonth  = new Date().getMonth()+ 1;
                WebCalendarThisDay    = new Date().getDate();
                alert("原文本框里的日期有错误！\n可能与你定义的显示时分秒有冲突！");
                writeCalendar();
                return false;
            }
            else
            {
                WebCalendarThisYear   = parseInt(WebCalendarDateStyle[1], 10);
                WebCalendarThisMonth  = parseInt(WebCalendarDateStyle[3], 10);
                WebCalendarThisDay    = parseInt(WebCalendarDateStyle[4], 10);
                WebCalendarInputDate  = parseInt(WebCalendarThisDay, 10) + "/" + 
          parseInt(WebCalendarThisMonth, 10) + "/" + 
          parseInt(WebCalendarThisYear, 10);
                WebCalendarNowSelect  = WebCalendarInputDate;
                writeCalendar();
                return;
            }
        }
        else writeCalendar();
    }
    catch(e){writeCalendar();}
}

function funMonthSelect(){
  hidenYearSelect();
  popUp.document.all.kxYearMonth.innerText="";
        var y = WebCalendarThisYear;
        popUp.document.all.kxYearHead.innerText  =  y + " 年";
        var m = isNaN(parseInt(WebCalendarThisMonth, 10)) ? (new Date().getMonth() + 1) : parseInt(WebCalendarThisMonth, 10);
        var ee = popUp.document.all.tmpMonthSelect;
        var tempStrOption = "";
        for(var i = 1; i < 13; i++)
        {   
   var op =popUp.document.createElement("OPTION");
   op.value = i;
      //op.text = i + "月";
   op.text = i + "月";
   ee.add(op);
  }
  ee.style.display = "inline";
  ee.value = m;
  try{
   ee.focus();
  }
  catch(ex){}
}

function funYearSelect(){
 hidenMonthSelect();
        popUp.document.all.kxYearHead.innerText="";
        var m = WebCalendarThisMonth;
        popUp.document.all.kxYearMonth.innerText =  parseInt(m, 10) + " 月";
        var es = popUp.document.forms[0].tmpYearSelect;
        var n = WebCalendarYearFall;
        var y = isNaN(parseInt(WebCalendarThisYear, 10)) ? (new Date().getFullYear()) : parseInt(WebCalendarThisYear);
        y = (y <= 1000) ? 1000 : ((y >= 9999) ? 9999 : y);
        var min = (y - n >= 1000) ? y - n: 1000;
        var max = (y + n <= 9999) ? y + n: 9999;
        min = (max == 9999) ? max - n * 2: min;
        max = (min == 1000) ? min + n * 2: max;
        for (var i = min; i <= max; i++)
        {
   var op = popUp.document.createElement("OPTION");
      op.value = i;
      //op.text = i + "年";
      op.text = i + "年";
      es.add(op);
        }
        es.style.display = "";
        es.value = y;
        try{
   es.focus();
  }
  catch(e) {}
}

//往前翻月份

function prevM()
{
    try{
  //WebCalendarThisDay = 1;
  hidenYearSelect();
  hidenMonthSelect();
  if (WebCalendarThisMonth==1)
  {
   WebCalendarThisYear--;
   WebCalendarThisMonth=13;
  }
  WebCalendarThisMonth--;
  writeCalendar();
    }
    catch(e) {}
}

//往后翻月份

function nextM()
{
    try{
    //WebCalendarThisDay = 1;
    hidenYearSelect();
    hidenMonthSelect();
    if (WebCalendarThisMonth==12)
    {
        WebCalendarThisYear++;
        WebCalendarThisMonth=0;
    }
    WebCalendarThisMonth++;
    writeCalendar();
    }
    catch(e) {}
}

//往前翻 Year

function prevY()
{
 try 
 {
  //WebCalendarThisDay = 1; 
  hidenYearSelect();
  hidenMonthSelect();
  WebCalendarThisYear--; 
  writeCalendar();
 } catch(e) {}
}

//往后翻 Year

function nextY()
{
 try 
 {
  //WebCalendarThisDay = 1; 
  hidenYearSelect();
  hidenMonthSelect();
  WebCalendarThisYear++; 
  writeCalendar();
 } catch(e) {}
}

function writeCalendar()
{
 try
 {
  var y = WebCalendarThisYear;
  var m = WebCalendarThisMonth;
  var d = WebCalendarThisDay;
  WebCalendarDaysMonth[1] = (0==y%4 && (y%100!=0 || y%400==0)) ? 29 : 28;
  if (!(y <= 9999 && y >= 1000 && parseInt(m, 10) > 0 && parseInt(m, 10) < 13 && parseInt(d, 10) > 0)){
   alert("对不起，你输入了错误的日期！");
   WebCalendarThisYear   = new Date().getFullYear();
   WebCalendarThisMonth  = new Date().getMonth() + 1;
   WebCalendarThisDay    = new Date().getDate();
  }
  y = WebCalendarThisYear;
  m = WebCalendarThisMonth;
  d = WebCalendarThisDay;
  
  popUp.document.all.kxYearHead.innerText  =  y + " 年";
  popUp.document.all.kxYearMonth.innerText =  parseInt(m, 10) + " 月";
  
  //闰年二月为29天  
  
  WebCalendarDaysMonth[1] = (0==y%4 && (y%100!=0 || y%400==0)) ? 29 : 28;
  var w = new Date(y, m-1, 1).getDay();
  var prevDays = (m==1) ? WebCalendarDaysMonth[11] : WebCalendarDaysMonth[m-2];
  
  //这三个 for 循环为日历赋数据源（数组 WebCalendarDay）格式是 d/m/yyyy      
  
  for(var i=(w-1); i>=0; i--)
  {
   WebCalendarDay[i] = prevDays + "/" + (parseInt(m, 10)-1) + "/" + y;
   if(m==1) WebCalendarDay[i] = prevDays +"/"+ 12 +"/"+ (parseInt(y, 10)-1);
   prevDays--;
  }
  for(var i=1; i<=WebCalendarDaysMonth[m-1]; i++) WebCalendarDay[i+w-1] = i + "/" + m + "/" + y;
  for(var i=1; i<42-w-WebCalendarDaysMonth[m-1]+1; i++)
  {
   WebCalendarDay[WebCalendarDaysMonth[m-1]+w-1+i] = i + "/" + (parseInt(m, 10)+1) + "/" + y;
   if(m==12) WebCalendarDay[WebCalendarDaysMonth[m-1]+w-1+i] = i +"/"+ 1 +"/"+ (parseInt(y, 10)+1);
  }
  //edit 2005-11-29 15:42 
  if (WebCalendarDaysMonth[m-1]<d)
  {
   d=WebCalendarDaysMonth[m-1];
   WebCalendarThisDay=d;
  }
  WebCalendarNowSelect=d + "/" + m + "/" + y; 
  
  //显示当前选择的时间  
  
  var tempArray=WebCalendarNowSelect.split("/");
  popUp.document.all.nowSelectObj.innerHTML=tempArray[2]+"-"+appendZero(tempArray[1])+"-"+appendZero(tempArray[0])+""; 
  
  //这个循环是根据源数组写到日历里显示    
  
  for(var i=0; i<42; i++){
       var a = WebCalendarDay[i].split("/");
       WebCalendarDayObj[i].className='out';
    WebCalendarDayObj[i].innerText    = a[0];
    WebCalendarDayObj[i].title        = a[2] +"-"+ appendZero(a[1]) +"-"+ appendZero(a[0]);
    WebCalendarDayObj[i].bgColor      = WebCalendarDayBgColor;
    WebCalendarDayObj[i].style.color  = WebCalendarWordColor;
    WebCalendarDayObj[i].style.removeAttribute('backgroundColor');
                   
    if ((i<10 && parseInt(WebCalendarDay[i], 10)>22) || (i>27 && parseInt(WebCalendarDay[i], 10)<14)){
           WebCalendarDayObj[i].style.color = WebCalendarWordDark;
    }
    
    //设置输入框里的日期在日历上的颜色  
    
    if (WebCalendarInputDate==WebCalendarDay[i]){
     WebCalendarDayObj[i].bgColor = WebCalendarDarkColor;
     WebCalendarDayObj[i].style.color = WebCalendarLightColor;
    }
    
    //设置今天在日历上反应出来的颜色  
    
    if (WebCalendarDay[i] == WebCalendarToday)
    {
     WebCalendarDayObj[i].bgColor = WebCalendarTodayColor; WebCalendarDayObj[i].style.color = WebCalendarLightColor;
    }
       if(WebCalendarDay[i] == WebCalendarNowSelect){
        WebCalendarDayObj[i].className='selected';
        WebCalendarDayObj[i].style.color=WebCalendarLightColor;
        if(WebCalendarToday!=WebCalendarNowSelect){
         WebCalendarDayObj[i].style.background = WebCalendarDarkColor;
        }
       }
       
   }
   if(WebCalendarTimeShow){
    popUp.document.all.hou.value = appendZero(nowTimeTemp.getHours());
    popUp.document.all.min.value = appendZero(nowTimeTemp.getMinutes());
    popUp.document.all.sec.value = appendZero(nowTimeTemp.getSeconds()); 
  }
 }
 catch(excp2){
 }
}

//根据日期格式等返回用户选定的日期

function newDateSelect()
{
    if (needClickBtnOK)
    {
  if(WebCalendarObjExport)
  {   
   var selectObj = (arguments.length==0) ? WebCalendarDay[this.id.substr(5)]: arguments[0];
   var a = selectObj.split("/");
   WebCalendarNowSelect = WebCalendarDay[this.id.substr(5)];
   if(a[2]>WebCalendarThisYear){
          nextM();
   }else if(a[2]<WebCalendarThisYear){
          prevM();
   }else if(a[1]>WebCalendarThisMonth){
          nextM();
   }else if(a[1]<WebCalendarThisMonth){
          prevM();
   }
   else{
    writeCalendar();
   }
  }
    }
    else
    {
  if(WebCalendarObjExport)
  {
   WebCalendarNowSelect = WebCalendarDay[this.id.substr(5)];
   returnDate();
  }
    }
    
}

function returnDate() {
        if (WebCalendarObjExport) {
                var returnValue;
                var a = (arguments.length == 0) ? WebCalendarNowSelect.split("/"): arguments[0].split("/");
                var d = WebCalendarFormat.match(/^(\w{4})(-|\/)(\w{1,2})\2(\w{1,2})$/);
                if (d == null) {
                        alert("你设定的日期输出格式不对！\r\n\r\n请重新定义 WebCalendarFormat ！");
                        return false;
                }
                
                //判断返回的日期格式是否要补零
                
                var flag = d[3].length == 2 || d[4].length == 2;
                returnValue = flag ? a[2] + d[2] + appendZero(a[1]) + d[2] + appendZero(a[0]) : a[2] + d[2] + a[1] + d[2] + a[0];
                if (WebCalendarTimeShow) {
                        var h = popUp.document.all.hou.value;
                        var m = popUp.document.all.min.value;
                        var s = popUp.document.all.sec.value;
                        nowTimeTemp.setHours(h);
      nowTimeTemp.setMinutes(m);
      nowTimeTemp.setSeconds(s);
                        returnValue += flag ? " " + appendZero(h) + ":" + appendZero(m) + ":" + appendZero(s): " " + h + ":" + m + ":" + s;
                }
                //var tempValue = WebCalendarObjExport.value;
                WebCalendarObjExport.value = returnValue;
                hiddenCalendar();
                /*if(tempValue != returnValue){
                 onchangeID.fire();
                } */   
        }
}

