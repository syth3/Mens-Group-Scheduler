function main() {
  // Get the respective sheet
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  // Build heading column indexes
  var headingColumnIndexes = generateHeadingIndexes(spreadsheet);

  // console.log("test")
}

function generateHeadingIndexes(spreadsheet) {
  var headingNameSheet = spreadsheet.getSheetByName("Heading Names");

  var headingSheetRange = getHeadingSheetRange(headingNameSheet);

  console.log(headingSheetRange.getValues());

  var allHeadings = headingNameSheet.getDataRange().getValues();

  var headingColumnIndexes = {}

  // allHeadings.forEach((heading) => {
  //   console.log("test")
  // })

  return headingColumnIndexes;
}

function getHeadingSheetRange(headingNameSheet) {
  // Get all cells in sheet
  var allCells = headingNameSheet.getDataRange();
  // console.log(allCells.getValues());

  // Get only cells in column A
  var columnACellValues = headingNameSheet.getRange(2, 1, allCells.getLastRow(), 1).getValues();

  // Count number of valid rows
  currentIndex = 0;
  validRows = 0;
  while (columnACellValues[currentIndex][0] !== "") {
    console.log(columnACellValues[currentIndex])
    validRows++;
    currentIndex++;
  }

  var rowStartingIndex = 2;
  var columnStartingIndex = 1;
  var numberOfRows = validRows;
  var numberOfColumns = 2;

  return headingNameSheet.getRange(rowStartingIndex, columnStartingIndex, numberOfRows, numberOfColumns);
}