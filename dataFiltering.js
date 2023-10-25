function main() {
  copyDatatoAnotherSheet();
}

function copyDatatoAnotherSheet() {
  // Folder ID, where everything is located
  var folderID = '11mUdlP39SQBGI-W6IajEVmvkwy_xQcCo';

  // Get all files in the specified folder
  var folder = DriveApp.getFolderById(folderID);
  var files = folder.getFilesByType(MimeType.GOOGLE_SHEET);

  // Main organizing sheet
  var mainOrganizingSheetId = '16WHoe_20PR_1AbRr-ItBdN_-R-M-RwRxKxzzRr2PmRM';
  var mainOrganizingSheet = SpreadsheetApp.openById(mainOrganizingSheetId).getSheetByName('KPI Response');

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
