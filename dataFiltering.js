
const FOLDERNAME = "chula";
const SHEETID = "16WHoe_20PR_1AbRr-ItBdN_-R-M-RwRxKxzzRr2PmRM";

function ListFilesInFolder(folderName=FOLDERNAME) {
  var folder = DriveApp.getFoldersByName(folderName).next();

  var files = folder.getFiles();

  var fileDetailsArray = [];

  while (files.hasNext()) {
    var file = files.next();
    var fileName = file.getName();
    var fileId = file.getId();
    var fileDetails = { name: fileName, id: fileId };
    fileDetailsArray.push(fileDetails);
  }

  Logger.log('Files in ' + folderName + ':\n' + JSON.stringify(fileDetailsArray));
}

function accessFormGoogleSheet(sheetName, sheetID=SHEETID) {
  var sheetActive = SpreadsheetApp.openById(sheetID);
  var sheet = sheetActive.getSheetByName(sheetName);

  if (!sheet) {
    Logger.log('Sheet not found: ' + sheetID);
    return null;
  }

  Logger.log("Sheet found: " + sheetID);
  return sheet;
}

function copyDatatoAnotherSheet() {
  // Folder ID, where everything is located
  var folderID = '11mUdlP39SQBGI-W6IajEVmvkwy_xQcCo';

  // Get all files in the specified folder
  var folder = DriveApp.getFolderById(folderID);
  var files = folder.getFilesByType(MimeType.GOOGLE_SHEET);

  // Main organizing sheet
  var mainOrganizingSheetId = '16WHoe_20PR_1AbRr-ItBdN_-R-M-RwRxKxzzRr2PmRM';
  var mainOrganizingSheet = accessFormGoogleSheet(SHEETNAME___, mainOrganizingSheetId);

  // Get data range
  var dataRange = mainOrganizingSheet.getDataRange();
  var values = dataRange.getValues();

  // Loop through files in the folder
  while (files.hasNext()) {
    var file = files.next();
    var sheetName = file.getName().replace(/\.gsheet$/, ''); // Remove the file extension

    // Loop to find the matching name
    for (var i = 0; i < values.length; i++) {
      var matchName = values[i][1];

      if (matchName === sheetName) {
        var exportedSheet = SpreadsheetApp.openById(file.getId()).getSheetByName(sheetName);

        if (exportedSheet) {
          // Copy entire row to the destination sheet
          exportedSheet.appendRow(values[i]);
        } else {
          Logger.log('Sheet not found for ' + sheetName);
        }
      }
    }
  }
}

function main() {
  ListFilesInFolder();
  copyDatatoAnotherSheet();
}
