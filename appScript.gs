let sheet=SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1wjp1uKMUUIeRakCCVwCk5o2_T2oPLDfvFLYnueghAl8/edit#gid=0')

let sheetName=sheet.getSheetByName('Sheet1');
function doPost(e){
  let data=e.parameter;
  sheetName.appendRow([data.name,data.email,data.phone]);
  return ContentService.createTextOutput("Data Save Succesfully");
}