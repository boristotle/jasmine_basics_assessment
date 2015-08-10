GRADER.JS




 module.exports = {

letterGrader: function(testScore) {

  if (testScore < 100 && testScore >= 90) {
    return "A";
  }

  else if (testScore < 90 && testScore >= 80) {
    return "B";
  }

  else if (testScore < 80 && testScore >= 70) {
    return "C";
  }

  else if (testScore < 70 && testScore >= 60) {
    return "D";
  }

  else if (testScore < 60) {
    return "F";
  }

},  



averageScore: function(testScores) {
  return testScores.reduce(function(previous, current) {
  return previous + current
  }) / testScores.length;
},




medianScoreOdd:  function(testScores) {
totalNumberScores = (testScores.length);
adjustment = .5;

if (totalNumberScores % 2 != 0) {
    return testScores[totalNumberScores / 2 - adjustment]
}

},


medianScore: function(testScores) {
totalNumberScores = (testScores.length);
adjustment = .5;

if (totalNumberScores % 2 === 0) {
    return (testScores[totalNumberScores / 2] + 
      testScores[totalNumberScores / 2 -   1]) / 2
}

},

modeScore: function(testScores) {
return testScores.Math.mode();

}