const { gradeClassifier } = require('./index');

// TODO: Write unit tests here
describe('Displaying corresponding letter grade with description given the final numerical score of the student', () => {
  it('When the user inputs a grade between 95.00 - 100, then "O - Outstanding" should be displayed', () => {
    // Arrange
    const grade_low = 95.00;
    const grade_high = 100.00;
    const grade_middle = 97.50;

    // Act
    const result_low = gradeClassifier(grade_low)
    const result_high = gradeClassifier(grade_high)
    const result_middle = gradeClassifier(grade_middle)

    // Assert
    expect(result_low).toEqual("O - Outstanding")
    expect(result_high).toEqual("O - Outstanding")
    expect(result_middle).toEqual("O - Outstanding")
  });

  it('When the user inputs a grade between 90.00 - 94.99, then "V - Very Good" should be displayed', () => {
    // Arrange
    const grade_low = 90.00;
    const grade_high = 94.99;
    const grade_middle = 92.50;

    // Act
    const result_low = gradeClassifier(grade_low)
    const result_high = gradeClassifier(grade_high)
    const result_middle = gradeClassifier(grade_middle)

    // Assert
    expect(result_low).toEqual("V - Very Good")
    expect(result_high).toEqual("V - Very Good")
    expect(result_middle).toEqual("V - Very Good")
  });

  it('When the user inputs a grade between 85.00 - 89.99, then "G - Good" should be displayed', () => {
    // Arrange
    const grade_low = 85.00;
    const grade_high = 89.99;
    const grade_middle = 87.50;

    // Act
    const result_low = gradeClassifier(grade_low)
    const result_high = gradeClassifier(grade_high)
    const result_middle = gradeClassifier(grade_middle)

    // Assert
    expect(result_low).toEqual("G - Good")
    expect(result_high).toEqual("G - Good")
    expect(result_middle).toEqual("G - Good")
  });

  it('When the user inputs a grade between 80.00 - 84.99, then "S - Satisfactory" should be displayed', () => {
    // Arrange
    const grade_low = 80.00;
    const grade_high = 84.99;
    const grade_middle = 82.50;

    // Act
    const result_low = gradeClassifier(grade_low)
    const result_high = gradeClassifier(grade_high)
    const result_middle = gradeClassifier(grade_middle)

    // Assert
    expect(result_low).toEqual("S - Satisfactory")
    expect(result_high).toEqual("S - Satisfactory")
    expect(result_middle).toEqual("S - Satisfactory")
  });

  it('When the user inputs a grade between 75.00 - 79.99, then "N - Needs Improvement" should be displayed', () => {
    // Arrange
    const grade_low = 75.00;
    const grade_high = 79.99;
    const grade_middle = 77.50;

    // Act
    const result_low = gradeClassifier(grade_low)
    const result_high = gradeClassifier(grade_high)
    const result_middle = gradeClassifier(grade_middle)

    // Assert
    expect(result_low).toEqual("N - Needs Improvement")
    expect(result_high).toEqual("N - Needs Improvement")
    expect(result_middle).toEqual("N - Needs Improvement")
  });

  it('When the user inputs a grade that is equal to or less than 74.99, then "D - Did not Meet Expectation" should be displayed', () => {
    // Arrange
    const grade_low = 0;
    const grade_high = 74.99;
    const grade_middle = 35.50;

    // Act
    const result_low = gradeClassifier(grade_low)
    const result_high = gradeClassifier(grade_high)
    const result_middle = gradeClassifier(grade_middle)

    // Assert
    expect(result_low).toEqual("D - Did not Meet Expectation")
    expect(result_high).toEqual("D - Did not Meet Expectation")
    expect(result_middle).toEqual("D - Did not Meet Expectation")
  });
});
