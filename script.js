function age() {
    let d1 = document.getElementById('date').value;
    let m1 = document.getElementById('month').value;
    let y1 = document.getElementById('year').value;

    let date = new Date(); // Correct capitalization
    let d2 = date.getDate(); // Correct method
    let m2 = 1 + date.getMonth(); // Correct method
    let y2 = date.getFullYear(); // Correct method

    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (d1 > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }

    let d = d2 - d1;
    let m = m2 - m1;
    let y = y2 - y1;

    document.getElementById('age').innerHTML = `Your age is ${y} years, ${m} months, and ${d} days.`;
}
