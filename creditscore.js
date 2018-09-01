
 function calc(){
 	// declare variables
 	var years = document.getElementById('years').value;
 	var incomenetmonthly = document.getElementById('incomenetmonthly').value;
 	var averagesalespermonth = document.getElementById('averagesalespermonth').value;
 	var depositspermonth = document.getElementById('depositspermonth').value;
 	var age = document.getElementById('age').value;
 	var education = document.getElementById('education').value;
 	var homeownership = document.getElementById('homeownership').value;
 	var personalsavingbalance = document.getElementById('personalsavingbalance').value;
 	var purpose = document.getElementById('purpose').value;
 	var duration = document.getElementById('duration').value;
 	var amountrequired = document.getElementById('amountrequired').value;
 	var financing = document.getElementById('financing').value;
 	var financialperfomanceweight = 0.5;
 	var ownerdataweight = 0.25;
 	var loantermsweight = 0.25;
 	var yearscore;
 	var incomenetmonthlyscore;
 	var averagesalespermonthscore;
 	var depositspermonthscore;
 	var agescore;
 	var educationscore;
 	var homeownershipscore;
 	var personalsavingbalancescore;
 	var	purposescore;
 	var durationscore;
 	var amountrequiredscore;
 	var financingscore;
  var weak = "WEAK";
  var challenging = "CHALLENGING";
  var fair = "FAIR";
  var good = "GOOD";
  var excellent = "EXCELLENT";


 	// financial peformance
  if (years > 5) {
    yearscore = 5;
  }else if (5 > years && years >= 4) {
    yearscore = 4;
  }else if (4 >= years && years >= 3) {
    yearscore = 3;
  }else if (3 >= years && years >= 2) {
    yearscore = 2;
  } else if (2 >= years && years >= 0) {
    yearscore = 1;
  }else{
    alert("error in years of operation");
  }

 	
  if (incomenetmonthly > 1000) {
    incomenetmonthlyscore = 5;
  }else if (1000 >= incomenetmonthly && incomenetmonthly >= 500 ) {
    incomenetmonthlyscore = 4;
  }else if (500 >= incomenetmonthly && incomenetmonthly >= 200) {
    incomenetmonthlyscore = 3;
  }else if (199 >= incomenetmonthly && incomenetmonthly >= 1) {
    incomenetmonthlyscore = 2;
  }else if (incomenetmonthly == "") {
    incomenetmonthlyscore = 1;
  } else{
    alert ("error in income net monthly");
  }

   
  if (averagesalespermonth > 1000) {
    averagesalespermonthscore = 5;
  }else if (1000 >= averagesalespermonth && averagesalespermonth >= 500 ) {
    averagesalespermonthscore = 4;
  }else if (499 >= averagesalespermonth && averagesalespermonth >= 300) {
    averagesalespermonthscore = 3;
  }else if (299 >= averagesalespermonth && averagesalespermonth >= 1) {
    averagesalespermonthscore = 2;
  }else if (averagesalespermonth == "") {
    averagesalespermonthscore = 1;
  } else{
    alert ("error in average sales per month");
  }
    

  if (depositspermonth > 500) {
    depositspermonthscore = 5;
  }else if (500 >= depositspermonth && depositspermonth >= 300 ) {
    depositspermonthscore = 4;
  }else if (299 >= depositspermonth && depositspermonth >= 100) {
    depositspermonthscore = 3;
  }else if (99 >= depositspermonth && depositspermonth >= 1) {
    depositspermonthscore = 2;
  }else if (depositspermonth == "") {
    depositspermonthscore = 1;
  } else{
    alert ("error in deposits per month");
  }


     // owner information

     if (age > 60 || age < 18) {
      agescore = 1;
     }else if (60 >= age && age >= 46) {
      agescore = 5;
     }else if (45 >= age && age >=36 ) {
      agescore = 4;
     }else if (35 >= age && age >= 26) {
      agescore = 3;
     }else if (25 >= age && age >= 18) {
      agescore = 1
     }else{
      alert("error in age field");    
     }
     
  	
    if (education == "Basic") {
    	educationscore = 1;
    } else if (education == "Secondary/Vocational") {
    	educationscore = 2;
    } else if (education == "Diploma") {
    	educationscore = 3;
    } else if (education == "Degree") {
    	educationscore = 4;
    } else if (education == "Masters or Higher") {
    	educationscore = 5;
    } else{
    	alert("error education");
    }
 	 
 	

 	if (homeownership == "Renting") {
 		homeownershipscore = 1;
 	} else if (homeownership == "Home Owner") {
 		homeownershipscore = 2;
 	} else {
 		alert("error homeownership");
 	}


 	 if (personalsavingbalance > 7500) {
    personalsavingbalancescore = 5;
  }else if (7500 >= personalsavingbalance && personalsavingbalance >= 5000 ) {
    personalsavingbalancescore = 4;
  }else if (5000 >= personalsavingbalance && personalsavingbalance >= 3500) {
    personalsavingbalancescore = 3;
  }else if (3500 >= personalsavingbalance && personalsavingbalance >= 1000) {
    personalsavingbalancescore = 2;
  }else if (999 >= personalsavingbalance && personalsavingbalance >= 1) {
    personalsavingbalancescore = 1;
  } else{
    alert ("error in personal saving");
  }

    
   // loan terms
  	if (purpose =="Capital Expensiture") {
   		purposescore = 1;
    } else if (purpose == "Payroll Finance") {
    	purposescore = 2;
    } else if (purpose == "Overhead Expenses") {
    	purposescore = 3;
    } else if (purpose == "Purchase Order Finance") {
    	purposescore = 4;
    } else if (purpose == "Invoice Finance") {
    	purposescore = 5;
    } else {
    	alert ("error purpose");
    }		

    
    if (duration > 36) {
      durationscore = 1;
    }else if (36 >= duration && duration >= 12) {
      durationscore = 2;
    }else if (12 >= duration && duration >= 6) {
      durationscore = 3;
    }else if (6 >= durationscore && duration >= 3) {
      durationscore = 4;
    }else if (2 >= duration && duration >= 1) {
      durationscore = 5;
    } else{
      alert("error duration");
    }

    if (amountrequired > 10000) {
      amountrequiredscore = 1;
    } else if (9999 >= amountrequired && amountrequired >= 5000 ) {
      amountrequiredscore = 2;
    } else if (4999 >= amountrequired && amountrequired >= 3000 ) {
      amountrequiredscore = 3;
    } else if (2999 >= amountrequired && amountrequired >= 1000) {
      amountrequiredscore = 4;
    } else if (999 >= amountrequired && amountrequired >=1 ) {
      amountrequiredscore = 5;
    } else {
      alert("error amountrequired");
    }

    

    if (financing == "No Working Capital") {
    	financingscore = 1;
    } else if (financing == "Stretched Resources") {
    	financingscore = 2;
    } else if (financing == "Limited Financing") {
    	financingscore = 3;
    } else if (financing == "Cash Rich") {
    	financingscore = 4;
    } else if (financing == "Low Leverage") {
    	financingscore = 5;
    } else{
    	alert("error financing");
    }
  

    //calculate weighted score 1 
    var weightedscore1 = ((yearscore + incomenetmonthlyscore + depositspermonthscore + incomenetmonthlyscore)/20)*10;

 
    // calculate weighted score 2
    var weightedscore2 = ((agescore + educationscore + homeownershipscore + personalsavingbalancescore)/17)*10;


    //calculate weighted score 3
    var weightedscore3 = ((purposescore + durationscore + amountrequiredscore + financingscore)/20)*10

    // calculate final credit score
    var creditscore = (weightedscore3 * 0.5) + (weightedscore2 * 0.25) + (weightedscore1 * 0.25)/1;
    document.getElementById('creditscore').value = creditscore.toFixed(2);


    //display credit score class
   if (creditscore > 0 && creditscore <= 3.99) {
    document.getElementById('class').value = weak;
  } else if (creditscore >= 4 && creditscore <= 5.99 ) {
    document.getElementById('class').value = challenging;
  } else if (creditscore >= 6 && creditscore <= 6.99 ) {
    document.getElementById('class').value = fair;
  } else if (creditscore > 7 && creditscore <= 7.99) {
    document.getElementById('class').value = good;
  } else if (creditscore >= 8 && creditscore <= 10 ) {
    document.getElementById('class').value = excelvalue;
  }


// display credit score risk decision
  if (creditscore > 0 && creditscore <= 3.99) {
    document.getElementById('riskdecision').value = "AVOID";
  } else if (creditscore >= 4 && creditscore <= 5.99 ) {
    document.getElementById('riskdecision').value = "POOL";
  } else if (creditscore >= 6 && creditscore <= 6.99 ) {
    document.getElementById('riskdecision').value = "POOL/TRANSFER";
  } else if (creditscore > 7 && creditscore <= 7.99) {
    document.getElementById('riskdecision').value = "ELIGIBLE";
  } else if (creditscore >= 8 && creditscore <= 10 ) {
    document.getElementById('riskdecision').value = "ELIGIBLE";
  } 
   

   
   


 }


