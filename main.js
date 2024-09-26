// Line Analyzer

// Add Event Listener
document.getElementById("analyze").addEventListener("click", analyzeLine);

// Event Function
function analyzeLine() {
  // Get Inputted Point Data (pt1x, pt1y) and (pt2x, pt2y)
  let pt1x = Number(document.getElementById("pt1x").value);
  let pt1y = Number(document.getElementById("pt1y").value);
  let pt2x = Number(document.getElementById("pt2x").value);
  let pt2y = Number(document.getElementById("pt2y").value);

  // Call Analyze Functions and Display results

  document.getElementById("length").innerHTML = getLength(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
  document.getElementById("slope").innerHTML = getSlope(pt1x, pt1y, pt2x, pt2y);
  document.getElementById("description").innerHTML = getDescription(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
  document.getElementById("location-1").innerHTML = getPointLocation(
    pt1x,
    pt1y
  );
  document.getElementById("location-2").innerHTML = getPointLocation(
    pt2x,
    pt2y
  );
  document.getElementById("slope-point").innerHTML = getPointSlope(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
  document.getElementById("equation").innerHTML = getEquation(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
}

// Line Analyzer Functions (Write your solutions here. Uncomment above code when ready to test)

function getLength(x1, y1, x2, y2) {
  var output;
  output = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  output = output.toFixed(2);
  return output;
}
function getSlope(x1, y1, x2, y2) {
  var output;
  output = (y2 - y1) / (x2 - x1);
  output = output.toFixed(2);
  return output;
}
function getDescription(x1, y1, x2, y2) {
  if (y1 == y2 && x1 == x2) return "Not a line";
  else if (y1 == y2) return "horizontal";
  else if (x1 == x2) return "vertical";
  else if (y2 > x1) return "increasing";
  else return "decreasing";
}
function getPointLocation(x, y) {
  var output;
  output = `${x}, ${y}`;
  return output;
}
function getPointSlope(x1, y1, x2, y2) {
  var output;
  var sign = "-";
  var sign2 = "-";
  var m = getSlope(x1, y1, x2, y2);
  if (y1 < 0) {
    y1 = Math.abs(y1);
    sign = "+";
  }
  if (x1 < 0) {
    x1 = Math.abs(x1);
    sign2 = "+";
  }
  output = `y ${sign} ${y1} = ${m}(x ${sign2} ${x1})`;
  return output;
}
function getEquation(x1, y1, x2, y2) {
  var output;
  var sign = "-";
  var m = getSlope(x1, y1, x2, y2);
  var b = (-m * x1) / y1;
  if (b < 0) {
    sign = "+";
    b = Math.abs(b);
  }
  output = `y = ${m}x ${sign} ${b}`;
  return output;
}

// slope is 7 and one of the points is (1, 3)
// y = mx + b
// b = -mx/y
// 3 = 7(1) + b
// b = -4
