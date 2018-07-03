//Program using Javascript, HTML, class
//Utalizes JSON request to look up tax rate from online api
//

$('.outputBox').hide();

$(document).ready(function () {
  let my401k1= 0;
  let   salary1 = 0;
  let   daysOff1 = 0;
  let   parking1 = 0;
  let   miles1 = 0;
  let   insurance1 = 0;
  let   bonus1 = 0;
  let   cellPhone1 = 0;
  let   tuition1 = 0;
  let   hourlyWage1 = 0;
  let   total1 = 0;
  let   taxRate1 = 0;
  let state1= "";
  let status1= "";
  let costIndex = [];
  let  marginalTaxTotal1=0;

  let my401k2= 0;
  let   salary2 = 0;
  let   daysOff2 = 0;
  let   parking2 = 0;
  let   miles2 = 0;
  let   insurance2 = 0;
  let   bonus2 = 0;
  let   cellPhone2 = 0;
  let   tuition2 = 0;
  let   hourlyWage2 = 0;
  let   total2 = 0;
  let   taxRate2 = 0;
  let   state2= "";
  let status2= "";
  let marginalTaxTotal2 = 0;
  let multiplier1 =1;
  let multiplier2 =1;

  costIndex = [
  ["AL","88.8"  ],
  ["AK","130.9"  ],
  ["AZ","94.6"  ],
  ["AR","88.8"  ],
  ["CA","141"  ],
  ["CO","103.9"  ],
  ["CT","127.1"  ],
  ["DE","105.4"  ],
  ["DC","161.8"  ],
  ["FL","98.9"  ],
  ["GA","90.8"  ],
  ["HI","186.3"  ],
  ["ID","92.7"  ],
  ["IL","96.7"  ],
  ["IN","91.5"  ],
  ["IA","91.9"  ],
  ["KS","89.5"  ],
  ["KY","92.6"  ],
  ["LA","93.4"  ],
  ["ME","116.3"  ],
  ["MD","130.4"  ],
  ["MA","127.6"  ],
  ["MI","88.7"  ],
  ["MN","100.2"  ],
  ["MS","84"  ],
  ["MO","88.9"  ],
  ["MT","103.9"  ],
  ["NE","93.4"  ],
  ["NV","110.3"  ],
  ["NH","112"  ],
  ["NJ","118.4"  ],
  ["NM","92.9"  ],
  ["NY","133.9"  ],
  ["NC","93.9"  ],
  ["ND","99"  ],
  ["OH","92.7"  ],
  ["OK","88.3"  ],
  ["OG","130"  ],
  ["PA","101.2"  ],
  ["RI","122.2"  ],
  ["SC","98.3"  ],
  ["SD","101.2"  ],
  ["TN","89.4"  ],
  ["TX","91.3"  ],
  ["UT","96.6"  ],
  ["VT","117.4"  ],
  ["VA","102.1"  ],
  ["WA","108.3"  ],
  ["WV","96.8"  ],
  ["WI","96.3"  ],
  ["WY","91.4"  ]
]

$('#send').on("click",  function () {
reset();


  status1= $('#taxStatus_1').val();
  if (status1 != null) {
  } else {
    alert("please select a filing status for option 1")
    return false
  }

state1= $('#state_1').val();
  if (state1 != null) {
  } else {
    alert("please select a state for option 1")
    return false
  }

Multiplier();

  salary1 = parseInt($("#salary_1").val()*multiplier1);
  if (salary1 > 0) {
  } else {
    alert("please input salary for option 1")
        return false
  }

  my401k1= $("#401k_1").val();
  if (my401k1 == "") {
    my401k1 = 0;
  } else {
    my401k1 = parseInt(my401k1)
  }

  daysOff1= $("#daysOff_1").val();
  if (daysOff1 == "") {
    daysOff1 = 0;
  } else {
    daysOff1 = parseInt(daysOff1)
  }

  parking1= $("#parking_1").val();
  if (parking1 == "") {
    parking1 = 0;
  } else {
    parking1 = parseInt(parking1)*multiplier1
  }

  tuition1= $("#tuition_1").val();
  if (tuition1 == "") {
    tuition1 = 0;
  } else {
    tuition1 = parseInt(tuition1)*multiplier1
  }

  cellPhone1= $("#cellPhone_1").val();
  if (cellPhone1 == "") {
    cellPhone1 = 0;
  } else {
    cellPhone1 = parseInt(cellPhone1)*multiplier1
  }

  bonus1= $("#bonus_1").val();
  if (bonus1 == "") {
    bonus1 = 0;
  } else {
    bonus1 = parseInt(bonus1)*multiplier1
  }

  insurance1= $("#insurance_1").val();
  if (insurance1 == "") {
    insurance1 = 0;
  } else {
    insurance1 = parseInt(insurance1)*multiplier1
  }

  miles1= $("#miles_1").val();
  if (miles1 == "") {
    miles1 = 0;
  } else {
    miles1 = parseInt(miles1)*multiplier1
  }


  // function validate(value, id) {
  //   value= id;
  //   if (value == "" || value == 0 || value == NaN) {
  //     value = 0;
  //     alert('value zero')
  //   } else {
  //     return true;
  //   }
  // }
  //
  // if (validate(miles1, ($("#miles_1").val())) == true) {
  //   miles1 = parseInt($("#miles_1").val());
  // } else {
  //   miles1=0;
  // }
  //
  // if (validate(parking1, ($("#parking_1").val())) == true) {
  //   miles1 = parseInt($("#parking_1").val());
  // }



  status2= $('#taxStatus_2').val();
  if (status2 != null) {
  } else {
    alert("please select a filing status for option 2")
    return false
  }

state2= $('#state_2').val();
  if (state2 != null) {
  } else {
    alert("please select a state for option 2")
    return false
  }
Multiplier();
  salary2 = parseInt($("#salary_2").val()*multiplier2);
  if (salary2 > 0) {
  } else {
    alert("please input salary for option 2")
        return false
  }

  my401k2= $("#401k_2").val();
  if (my401k2 == "") {
    my401k2 = 0;
  } else {
    my401k2 = parseInt(my401k2)
  }

  daysOff2= $("#daysOff_2").val();
  if (daysOff2 == "") {
    daysOff2 = 0;
  } else {
    daysOff2 = parseInt(daysOff2)
  }

  parking2= $("#parking_2").val();
  if (parking2 == "") {
    parking2 = 0;
  } else {
    parking2 = parseInt(parking2)*multiplier2
  }

  tuition2= $("#tuition_2").val();
  if (tuition2 == "") {
    tuition2 = 0;
  } else {
    tuition2 = parseInt(tuition2)*multiplier2
  }

  cellPhone2= $("#cellPhone_2").val();
  if (cellPhone2 == "") {
    cellPhone2 = 0;
  } else {
    cellPhone2 = parseInt(cellPhone2)*multiplier2
  }

  bonus2= $("#bonus_2").val();
  if (bonus2 == "") {
    bonus2 = 0;
  } else {
    bonus2 = parseInt(bonus2)*multiplier2
  }

  insurance2= $("#insurance_2").val();
  if (insurance2 == "") {
    insurance2 = 0;
  } else {
    insurance2 = parseInt(insurance2)*multiplier2
  }

  miles2= $("#miles_2").val();
  if (miles2 == "") {
    miles2 = 0;
  } else {
    miles2 = parseInt(miles2)*multiplier2
  }

    GetTax1();
    GetTax2();
  });


  function GetTax1() {
    tempSalary1 = salary1;
   bracketArray1 = [];
   marginalTaxTotal1=0;

    var url = ' https://taxee.io/api/v1/state/'+2015+'/'+state1;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", url, true);
    xmlhttp.onload = function() {
            var result = JSON.parse(this.responseText);
            // console.log(result.data.single.income_tax_brackets[1].bracket + " " + result.data.single.income_tax_brackets[1].marginal_rate);  //need to loop through brackets and compare to salary, if only 1 bracket, use 1st bracket
            bracketArray1 = (result.data[status1].income_tax_brackets)

for (i = (bracketArray1.length-1); i >= 0; i--) {
  if (salary1 > bracketArray1[i].bracket) {
    console.log(bracketArray1[i].marginal_rate);
    // alert(salary1);
    marginalTaxTotal1 = marginalTaxTotal1 + (tempSalary1 - bracketArray1[i].bracket)*bracketArray1[i].marginal_rate/100;
    tempSalary1 = tempSalary1 - (tempSalary1 - bracketArray1[i].bracket)
  } else {

  };
  // console.log(bracketArray[i].bracket)

}


Total();

            xmlhttp.abort();
    }
    xmlhttp.send();



  }


  function GetTax2() {
  tempSalary2 = salary2;
   bracketArray2 = [];
   marginalTaxTotal2=0;

    var url = ' https://taxee.io/api/v1/state/'+2015+'/'+state2;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", url, true);
    xmlhttp.onload = function() {
            var result = JSON.parse(this.responseText);
            // console.log(result.data.single.income_tax_brackets[1].bracket + " " + result.data.single.income_tax_brackets[1].marginal_rate);  //need to loop through brackets and compare to salary, if only 1 bracket, use 1st bracket
            bracketArray2 = (result.data[status2].income_tax_brackets)



for (x = (bracketArray2.length-1); x >= 0; x--) {
  if (salary2 > bracketArray2[x].bracket) {
    // console.log(bracketArray2[x].marginal_rate);
    marginalTaxTotal2 = marginalTaxTotal2 + (tempSalary2 - bracketArray2[x].bracket)*bracketArray2[x].marginal_rate/100;
    tempSalary2 = tempSalary2 - (tempSalary2 - bracketArray2[x].bracket)
  } else {

  };
  // console.log(bracketArray[i].bracket)
}

Total();


            xmlhttp.abort();
    }
    xmlhttp.send();



  }



  function Populate() {
    $('#adjustedSalary').html('<strong>Adjusted Salary option 1:</strong> '+ salary1);
    $('#total').html('total compensation option 1: '+ total1);
    $('#401kValue').html("401k value:" + (salary1*my401k1/100).toFixed(2));
    $('#daysOffValue').html("Days Off Value:" + (hourlyWage1*daysOff1*8).toFixed(2));
    $('#stateTax').html('State Tax: -' + marginalTaxTotal1);
    $('#annualParkingCost').html("Annual Parking Cost: -" + parking1*12);
    $('#annualCommuteCost').html("Annual Commute Cost: -" + miles1*2*0.60*260);
    $('#annualCellPhoneValue').html("Annual Cell Phone Value:" + cellPhone1*12);
    $('#otherBenefits').html("insurance benefit:" + insurance1);
    $('#optionalBenefits').html("Bonus and tuition:" + (bonus1+tuition1));

    $('#adjustedSalary2').html('Adjusted Salary option 2: '+ salary2);
    $('#total2').html('total compensation option 2: '+ total2);
    $('#401kValue2').html("401k value:" + (salary2*my401k2/100).toFixed(2));
    $('#daysOffValue2').html("Days Off Value:" + (hourlyWage2*daysOff2*8).toFixed(2));
    $('#stateTax2').html('State Tax: -' + marginalTaxTotal2);
    $('#annualParkingCost2').html("Annual Parking Cost: -" + parking2*12);
    $('#annualCommuteCost2').html("Annual Commute Cost: -" + miles2*2*0.60*260);
    $('#annualCellPhoneValue2').html("Annual Cell Phone Value:" + cellPhone2*12);
    $('#otherBenefits2').html("insurance benefit:" + insurance2);
    $('#optionalBenefits2').html("Bonus and tuition:" + (bonus2+tuition2));

  }


  function Total() {
      $('.outputBox').show();
    hourlyWage1 = salary1/40/52
    hourlyWage2 = salary2/40/52
    total1 = (salary1 + my401k1*salary1/100 + hourlyWage1*daysOff1*8 - marginalTaxTotal1 - parking1*12 - miles1*2*0.60*260 + insurance1 + bonus1 + cellPhone1*12 + tuition1).toFixed(2);
    total2 = (salary2 + my401k2*salary2/100 + hourlyWage2*daysOff2*8 - marginalTaxTotal2 - parking2*12 - miles2*2*0.60*260 + insurance2 + bonus2 + cellPhone2*12 + tuition2).toFixed(2);
    Populate();
  }


  function Multiplier() {
    // state1= $('#state_1').val();
    // status1= $('#taxStatus_1').val();
    // state2= $('#state_2').val();
    // status2= $('#taxStatus_2').val();

    if (document.getElementById("checkBox").checked == true) {
      console.log(costIndex);
      for (var i=0; i < costIndex.length; i++) {
        if (costIndex[i][0] == state1) {
          multiplier1 = 100/(costIndex[i][1])
        }
      }

      for (var x=0; x < costIndex.length; x++) {
        if (costIndex[x][0] == state2) {
          multiplier2 = 100/costIndex[x][1]
        }
      }

    }
  }

  function reset() {
     my401k1= 0;
       salary1 = 0;
     daysOff1 = 0;
     parking1 = 0;
     miles1 = 0;
     insurance1 = 0;
     bonus1 = 0;
     cellPhone1 = 0;
     tuition1 = 0;
     hourlyWage1 = 0;
     total1 = 0;
     taxRate1 = 0;
     state1= "";
     status1= "";
    marginalTaxTotal1=0;

    let my401k2= 0;
     salary2 = 0;
     daysOff2 = 0;
     parking2 = 0;
     miles2 = 0;
     insurance2 = 0;
     bonus2 = 0;
     cellPhone2 = 0;
     tuition2 = 0;
     hourlyWage2 = 0;
     total2 = 0;
     taxRate2 = 0;
     state2= "";
     status2= "";
     marginalTaxTotal2 = 0;
     multiplier1 =1;
     multiplier2 =1;
  }


});
