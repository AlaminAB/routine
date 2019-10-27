
// date vaiable 
var headertimer=document.getElementById("headerTime");
var headerHours=document.getElementById("headerHours");
var headerMinute=document.getElementById("header-minute");
var headerSecound=document.getElementById("header-secound");

const secound = 1000,
minute= secound * 60,
hours= minute * 60,
day = hours * 24;



// Header timining  
let countDown = new Date('nov 8, 2019 00:00:00').getTime();
function dateCount(){
	var date = new Date();
	let distance = countDown -date.getTime();
	headertimer.innerHTML= Math.floor(distance/ (day)+2) + " day ";
	headerHours.innerHTML= Math.floor(distance % (day) / (hours)) + " Hours ";
	headerMinute.innerHTML= Math.floor(distance % (hours) / (minute));
	headerSecound.innerHTML= Math.floor(distance % (minute) / (secound));
	if(distance <=0){
		document.getElementById("header-alert").innerHTML="<h4 style='color:red'>Exam Running</h4>";
	}
};
setInterval(dateCount,secound);




// main content here

// date vaiable 
var Englishtimer=document.getElementById("EnglishTime");
var EnglishHours=document.getElementById("EnglishHours");
var EnglishMinute=document.getElementById("English-minute");
var EnglishSecound=document.getElementById("English-secound");
// Subject timing
var English = new Date('nov 8, 2019 19:00:00').getTime();
function EnglishCount(){
	var Englishdate = new Date();
	let distance = English - Englishdate.getTime();
	Englishtimer.innerHTML= Math.floor(distance/ (day)+2) + " day ";
	EnglishHours.innerHTML= Math.floor(distance % (day) / (hours)) + " Hrs ";
	EnglishMinute.innerHTML= Math.floor(distance % (hours) / (minute));
	EnglishSecound.innerHTML= Math.floor(distance % (minute) / (secound));
	if(distance <=0){
		document.getElementById("english").innerHTML="<p style='color:red'>Exam finish</p>";
		document.getElementById("english-tr").classList.add("disabled");

	}

};
setInterval(EnglishCount,secound);


// mono biggan
// date vaiable 
var biggantimer=document.getElementById("bigganTime");
var bigganHours=document.getElementById("bigganHours");
var bigganMinute=document.getElementById("biggan-minute");
var bigganSecound=document.getElementById("biggan-secound");
// Subject timing
var biggan = new Date('nov 10, 2019 19:00:00').getTime();
function bigganCount(){
	var biggandate = new Date();
	let distance = biggan - biggandate.getTime();
	biggantimer.innerHTML= Math.floor(distance/ (day)+2) + " day ";
	bigganHours.innerHTML= Math.floor(distance % (day) / (hours)) + " Hrs ";
	bigganMinute.innerHTML= Math.floor(distance % (hours) / (minute));
	bigganSecound.innerHTML= Math.floor(distance % (minute) / (secound));
	if(distance <=0){
		document.getElementById("biggan").innerHTML="<p style='color:red'>Exam finish</p>";
		document.getElementById("biggan-tr").classList.add("disabled");

	}

};
setInterval(bigganCount,secound);



// Samajik samajikniti
// date vaiable 
var samajiknititimer=document.getElementById("samajiknitiTime");
var samajiknitiHours=document.getElementById("samajiknitiHours");
var samajiknitiMinute=document.getElementById("samajikniti-minute");
var samajiknitiSecound=document.getElementById("samajikniti-secound");
// Subject timing
var samajikniti = new Date('nov 13, 2019 19:00:00').getTime();
function samajiknitiCount(){
	var samajiknitidate = new Date();
	let distance = samajikniti - samajiknitidate.getTime();
	samajiknititimer.innerHTML= Math.floor(distance/ (day)+2) + " day ";
	samajiknitiHours.innerHTML= Math.floor(distance % (day) / (hours)) + " Hrs ";
	samajiknitiMinute.innerHTML= Math.floor(distance % (hours) / (minute));
	samajiknitiSecound.innerHTML= Math.floor(distance % (minute) / (secound));
	if(distance <=0){
		document.getElementById("samajikniti").innerHTML="<p style='color:red'>Exam finish</p>";
		document.getElementById("samajikniti-tr").classList.add("disabled");

	}

};
setInterval(samajiknitiCount,secound);




// Samajik Somessa
// date vaiable 
var Somessatimer=document.getElementById("SomessaTime");
var SomessaHours=document.getElementById("SomessaHours");
var SomessaMinute=document.getElementById("Somessa-minute");
var SomessaSecound=document.getElementById("Somessa-secound");
// Subject timing
var Somessa = new Date('nov 16, 2019 19:00:00').getTime();
function SomessaCount(){
	var Somessadate = new Date();
	let distance = Somessa - Somessadate.getTime();
	Somessatimer.innerHTML= Math.floor(distance/ (day)+2) + " day ";
	SomessaHours.innerHTML= Math.floor(distance % (day) / (hours)) + " Hrs ";
	SomessaMinute.innerHTML= Math.floor(distance % (hours) / (minute));
	SomessaSecound.innerHTML= Math.floor(distance % (minute) / (secound));
	if(distance <=0){
		document.getElementById("Somessa").innerHTML="<p style='color:red'>Exam finish</p>";
		document.getElementById("Somessa-tr").classList.add("disabled");

	}

};
setInterval(SomessaCount,secound);

// mono nibiggan
// date vaiable 
var nibiggantimer=document.getElementById("nibigganTime");
var nibigganHours=document.getElementById("nibigganHours");
var nibigganMinute=document.getElementById("nibiggan-minute");
var nibigganSecound=document.getElementById("nibiggan-secound");
// Subject timing
var nibiggan = new Date('nov 19, 2019 19:00:00').getTime();
function nibigganCount(){
  var nibiggandate = new Date();
  let distance = nibiggan - nibiggandate.getTime();
  nibiggantimer.innerHTML= Math.floor(distance/ (day)+2) + " day ";
  nibigganHours.innerHTML= Math.floor(distance % (day) / (hours)) + " Hrs ";
  nibigganMinute.innerHTML= Math.floor(distance % (hours) / (minute));
  nibigganSecound.innerHTML= Math.floor(distance % (minute) / (secound));
  if(distance <=0){
    document.getElementById("nibiggan").innerHTML="<p style='color:red'>Exam finish</p>";
    document.getElementById("nibiggan-tr").classList.add("disabled");

  }

};
setInterval(nibigganCount,secound);


// mono ict
// date vaiable 
var icttimer=document.getElementById("ictTime");
var ictHours=document.getElementById("ictHours");
var ictMinute=document.getElementById("ict-minute");
var ictSecound=document.getElementById("ict-secound");
// Subject timing
var ict = new Date('nov 22, 2019 19:00:00').getTime();
function ictCount(){
  var ictdate = new Date();
  let distance = ict - ictdate.getTime();
  icttimer.innerHTML= Math.floor(distance/ (day)+2) + " day ";
  ictHours.innerHTML= Math.floor(distance % (day) / (hours)) + " Hrs ";
  ictMinute.innerHTML= Math.floor(distance % (hours) / (minute));
  ictSecound.innerHTML= Math.floor(distance % (minute) / (secound));
  if(distance <=0){
    document.getElementById("ict").innerHTML="<p style='color:red'>Exam finish</p>";
    document.getElementById("ict-tr").classList.add("disabled");

  }

};
setInterval(ictCount,secound);


// mono porichiti
// date vaiable 
var porichititimer=document.getElementById("porichitiTime");
var porichitiHours=document.getElementById("porichitiHours");
var porichitiMinute=document.getElementById("porichiti-minute");
var porichitiSecound=document.getElementById("porichiti-secound");
// Subject timing
var porichiti = new Date('nov 24, 2019 19:00:00').getTime();
function porichitiCount(){
  var porichitidate = new Date();
  let distance = porichiti - porichitidate.getTime();
  porichititimer.innerHTML= Math.floor(distance/ (day)+2) + " day ";
  porichitiHours.innerHTML= Math.floor(distance % (day) / (hours)) + " Hrs ";
  porichitiMinute.innerHTML= Math.floor(distance % (hours) / (minute));
  porichitiSecound.innerHTML= Math.floor(distance % (minute) / (secound));
  if(distance <=0){
    document.getElementById("porichiti").innerHTML="<p style='color:red'>Exam finish</p>";
    document.getElementById("porichiti-tr").classList.add("disabled");

  }

};
setInterval(porichitiCount,secound);
