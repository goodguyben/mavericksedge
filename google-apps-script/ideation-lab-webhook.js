/**
 * Google Apps Script for Ideation Lab Webhook
 * 
 * SETUP INSTRUCTIONS:
 * 1. Create a new Google Sheet for storing Ideation Lab submissions
 * 2. Open Tools > Script editor (or Extensions > Apps Script)
 * 3. Paste this code
 * 4. Update the SHARED_SECRET below to match your .env file
 * 5. Deploy as Web App (Deploy > New deployment)
 * 6. Set "Execute as: Me" and "Who has access: Anyone"
 * 7. Copy the deployment URL
 * 8. Add to your .env file as GOOGLE_SHEETS_WEBHOOK_URL
 */

// Configuration - update this to match your IDEATION_SHARED_SECRET in .env
const SHARED_SECRET = "YOUR_SECRET_HERE"; // Must match IDEATION_SHARED_SECRET in .env

function doPost(e) {
  try {
    // Check if event object exists
    if (!e) {
      Logger.log('Event object is undefined - check deployment settings');
      return ContentService.createTextOutput(
        JSON.stringify({ 
          error: "Event object undefined",
          message: "Make sure the web app is deployed with 'Execute as: Me' and 'Who has access: Anyone'"
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }
    
    Logger.log('Event object exists');
    Logger.log('postData: ' + (e.postData ? 'exists' : 'missing'));
    Logger.log('parameter: ' + (e.parameter ? JSON.stringify(e.parameter) : 'missing'));
    
    // Handle different ways the data might come in
    let data;
    if (e.postData && e.postData.contents) {
      Logger.log('Parsing from postData.contents');
      data = JSON.parse(e.postData.contents);
    } else if (e.postData && e.postData.getDataAsString) {
      Logger.log('Parsing from postData.getDataAsString()');
      data = JSON.parse(e.postData.getDataAsString());
    } else if (e.parameter) {
      Logger.log('Using parameter object');
      data = e.parameter;
    } else {
      Logger.log('No data found in request');
      return ContentService.createTextOutput(
        JSON.stringify({ error: "No data received" })
      ).setMimeType(ContentService.MimeType.JSON);
    }
    
    Logger.log('Parsed data successfully');
    Logger.log('Has boardId: ' + !!data.boardId);
    Logger.log('Has selectedByCategory: ' + !!data.selectedByCategory);
    Logger.log('Has items: ' + !!data.items);
    
    // Verify secret
    if (data.secret !== SHARED_SECRET) {
      Logger.log('Secret mismatch');
      return ContentService.createTextOutput(
        JSON.stringify({ error: "Unauthorized" })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    Logger.log('Secret verified');

    // Route based on the data content
    if (data.selectedByCategory) {
      Logger.log('Routing to handleBoardUpsert');
      return handleBoardUpsert(data);
    } else if (data.items) {
      Logger.log('Routing to handleItemsBulk');
      return handleItemsBulk(data);
    }
    
    Logger.log('Unknown request type');
    return ContentService.createTextOutput(
      JSON.stringify({ error: "Unknown request type" })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log('Error in doPost: ' + error.toString());
    if (error.stack) {
      Logger.log('Error stack: ' + error.stack);
    }
    return ContentService.createTextOutput(
      JSON.stringify({ error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ 
      status: "active",
      message: "Ideation Lab Webhook is running",
      timestamp: new Date().toISOString()
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

function handleBoardUpsert(data) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName("Submissions");
    
    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = ss.insertSheet("Submissions");
      sheet.appendRow([
        "Timestamp",
        "Board ID",
        "URL",
        "Design Inspiration Sites",
        "Design Inspiration Notes",
        "Navigation Menu",
        "Hero",
        "Buttons",
        "Carousel",
        "Text Animations",
        "Color Palettes",
        "Typography"
      ]);
      // Format header row
      sheet.getRange(1, 1, 1, 12).setFontWeight("bold").setBackground("#f3f4f6");
    }
    
    // Parse the JSON data
    const selectedByCategory = data.selectedByCategory ? JSON.parse(data.selectedByCategory) : {};
    const inspirationNotes = data.inspirationNotes ? JSON.parse(data.inspirationNotes) : {};
    
    // Format design inspiration data
    const designInspirationSites = selectedByCategory["Design Inspiration"] || [];
    const designInspirationNotesText = Object.entries(inspirationNotes)
      .filter(([_, note]) => note && note.trim())
      .map(([site, note]) => `${site}: ${note}`)
      .join(" | ");
    
    // Format selections for each category
    const navigationMenu = (selectedByCategory["Navigation Menu"] || []).join(", ");
    const hero = (selectedByCategory["Hero"] || []).join(", ");
    const buttons = (selectedByCategory["Buttons"] || []).join(", ");
    const carousel = (selectedByCategory["Carousel"] || []).join(", ");
    const textAnimations = (selectedByCategory["Text Animations"] || []).join(", ");
    const colorPalettes = (selectedByCategory["Color Palettes"] || []).join(", ");
    const typography = (selectedByCategory["Typography"] || []).join(", ");
    
    // Append row
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.boardId,
      data.url,
      designInspirationSites.join(", "),
      designInspirationNotesText,
      navigationMenu,
      hero,
      buttons,
      carousel,
      textAnimations,
      colorPalettes,
      typography
    ]);
    
    Logger.log('Successfully saved board: ' + data.boardId);
    
    return ContentService.createTextOutput(
      JSON.stringify({ success: true, boardId: data.boardId })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    Logger.log('Error in handleBoardUpsert: ' + error.toString());
    throw error;
  }
}

function handleItemsBulk(data) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName("Items");
    
    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = ss.insertSheet("Items");
      sheet.appendRow([
        "Timestamp",
        "Board ID",
        "Item ID",
        "Category",
        "I'm Flexible?",
        "Priority"
      ]);
      // Format header row
      sheet.getRange(1, 1, 1, 6).setFontWeight("bold").setBackground("#f3f4f6");
    }
    
    const timestamp = new Date().toISOString();
    
    // Parse skipByCategory to check flexible status
    const skipByCategory = data.skipByCategory ? JSON.parse(data.skipByCategory) : {};
    Logger.log('skipByCategory in Items: ' + JSON.stringify(skipByCategory));
    
    // Append each item with category info and flexible status
    (data.items || []).forEach(item => {
      const isFlexible = item.category ? (skipByCategory[item.category] ? "Yes" : "No") : "No";
      
      sheet.appendRow([
        timestamp,
        data.boardId,
        item.itemId,
        item.category || "",
        isFlexible,
        item.priority || ""
      ]);
    });
    
    Logger.log('Successfully saved ' + (data.items || []).length + ' items for board: ' + data.boardId);
    
    return ContentService.createTextOutput(
      JSON.stringify({ 
        success: true, 
        boardId: data.boardId,
        itemCount: (data.items || []).length 
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    Logger.log('Error in handleItemsBulk: ' + error.toString());
    throw error;
  }
}

