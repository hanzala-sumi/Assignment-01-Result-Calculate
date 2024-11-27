function calculateResult() {
  let usernumber = document.getElementById("resultnumber").value;

  let calculate = (usernumber / 750) * 100;
  if (calculate >= 80) {
    let gradeA = "Your Grade: A";
    alert(gradeA);
    document.getElementById("showresult").innerHTML = gradeA;
  } else if (calculate >= 70) {
    let gradeB = "Your Grade: B";
    alert(gradeB);
    document.getElementById("showresult").innerHTML = gradeB;
  } else if (calculate >= 60) {
    let gradeC = "Your Grade: C";
    alert(gradeC);
    document.getElementById("showresult").innerHTML = gradeC;
  } else if (calculate >= 50) {
    let gradeD = "Your Grade: D";
    alert(gradeD);
    document.getElementById("showresult").innerHTML = gradeD;
  } else {
    let fail = "Your are Fail";
    alert(fail);
    document.getElementById("showresult").innerHTML = fail;
  }
}
