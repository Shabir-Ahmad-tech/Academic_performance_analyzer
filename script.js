function calculate() {
    // 1. Get values from all 7 inputs
    var iVal = document.getElementById('ict').value;
    var pVal = document.getElementById('prog').value;
    var mVal = document.getElementById('math').value;
    var eVal = document.getElementById('eng').value;
    var pkVal = document.getElementById('pak').value;
    var isVal = document.getElementById('isl').value;
    var qVal = document.getElementById('quran').value;

    // 2. Convert to numbers
    var ict = Number(iVal);
    var prog = Number(pVal);
    var math = Number(mVal);
    var eng = Number(eVal);
    var pak = Number(pkVal);
    var isl = Number(isVal);
    var quran = Number(qVal);

    // 3. Calculation for 7 subjects
    var totalMarks = ict + prog + math + eng + pak + isl + quran;
    var percentage = (totalMarks / 700) * 100;

    // 4. Logic for Grading (If/Else)
    var grade = "F";
    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    // 5. Update the UI
    document.getElementById('result-card').style.display = "block";
    document.getElementById('total').textContent = totalMarks + " / 700";
    document.getElementById('percent').textContent = Math.round(percentage) + "%";
    document.getElementById('grade').textContent = grade;

    // 6. Pass or Fail Logic
    var statusBox = document.getElementById('status-box');
    if (percentage >= 50) {
        statusBox.textContent = "PASS";
        statusBox.className = "status-box pass";
    } else {
        statusBox.textContent = "FAIL";
        statusBox.className = "status-box fail";
    }
}
