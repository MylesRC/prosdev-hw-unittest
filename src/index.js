const functions = {
  gradeClassifier: (grade) => {
    if (grade >= 95)
      return "O - Outstanding"
    else if (grade < 95 && grade >= 90)
      return "V - Very Good"
    else if (grade < 90 && grade >= 85)
      return "G - Good"
    else if (grade < 85 && grade >= 80)
      return "S - Satisfactory"
    else if (grade < 80 && grade >= 75)
      return "N - Needs Improvement"
    else
      return "D - Did not Meet Expectation"
  }
}

module.exports = functions;
