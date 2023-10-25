function copyDatatoAnotherSheet() {
    // Main organizing sheet https://docs.google.com/spreadsheets/d/16WHoe_20PR_1AbRr-ItBdN_-R-M-RwRxKxzzRr2PmRM/edit#gid=972334631
    var mainOrganizingSheetId = '16WHoe_20PR_1AbRr-ItBdN_-R-M-RwRxKxzzRr2PmRM';
    var mainOrganizingSheet = SpreadsheetApp.openById(mainOrganizingSheetId).getSheetByName('KPI Response ');
    // Folder ID, where everything is located
    var folderID = '11mUdlP39SQBGI-W6IajEVmvkwy_xQcCo';

    //Get data range
    var dataRange = mainOrganizingSheet.getDataRange();
    var values = dataRange.getValues();
    //Loop to find the matching name
    for (var i = 0; i < values.length; i++) {
      var matchName = values[i][1]; 
      //find the matching sheet name in the folder
      var sheetName = getSheetNameFromOrganizingSheet(mainOrganizingSheet, matchName);

      if (sheetName) {
        var exportedSheet = openSheetInFolder(folderID, matchName);

        if (exportedSheet){
          //copy entire row to the destination sheet
          exportedSheet.appendRow(values[i]);
        } else {
          Logger.log('Sheet not found for' + matchName);
        } 
      }
        else {
          Logger.log('Sheet name not found for' + matchName);
        }
      }
    }

//Function to open sheet in another folder
function openSheetInFolder(folderID, sheetName) {
  var folder = DriveApp.getFolderById(folderID);
  var files = folder.getFilesByType(MimeType.GOOGLE_SHEET);

  while (files.hasNext()) {
    var file = files.next
    var sheet = SpreadsheetApp.openById(file.getID()).getSheetByName(sheetName);

    if (sheet) {
      return sheet;
    } 
  }
  return null
}
