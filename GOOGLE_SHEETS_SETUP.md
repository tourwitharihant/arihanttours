# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets integration to store enquiry form data.

## Step 1: Create Google Sheets

Create three separate Google Sheets for each enquiry type:

1. **Flight Enquiries Sheet**
   - Column headers: Timestamp, Name, Mobile, From, To, Depart Date, Return Date, Travellers, Class

2. **Hotel Enquiries Sheet**
   - Column headers: Timestamp, Name, Mobile, Area, Check-in Date, Check-out Date, Guests, Star Category, Nationality, Free Cancellation, Breakfast Included

3. **Cruise Enquiries Sheet**
   - Column headers: Timestamp, Name, Mobile, Destination, Departure Date, Duration, Passengers, Cabin Type, Special Requests

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete any existing code and paste the following:

```javascript
function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    const type = data.type;
    const enquiryData = data.data;

    // Get the active spreadsheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet;

    // Select the appropriate sheet based on enquiry type
    switch(type) {
      case 'flight':
        sheet = ss.getSheetByName('Flight Enquiries') || ss.insertSheet('Flight Enquiries');
        // Add headers if sheet is new
        if (sheet.getLastRow() === 0) {
          sheet.appendRow(['Timestamp', 'Name', 'Mobile', 'From', 'To', 'Depart Date', 'Return Date', 'Travellers', 'Class']);
        }
        // Add data
        sheet.appendRow([
          enquiryData.timestamp,
          enquiryData.name,
          enquiryData.mobile,
          enquiryData.from,
          enquiryData.to,
          enquiryData.depart,
          enquiryData.return,
          enquiryData.travellers,
          enquiryData.class
        ]);
        break;

      case 'hotel':
        sheet = ss.getSheetByName('Hotel Enquiries') || ss.insertSheet('Hotel Enquiries');
        // Add headers if sheet is new
        if (sheet.getLastRow() === 0) {
          sheet.appendRow(['Timestamp', 'Name', 'Mobile', 'Area', 'Check-in Date', 'Check-out Date', 'Guests', 'Star Category', 'Nationality', 'Free Cancellation', 'Breakfast Included']);
        }
        // Add data
        sheet.appendRow([
          enquiryData.timestamp,
          enquiryData.name,
          enquiryData.mobile,
          enquiryData.area,
          enquiryData.checkIn,
          enquiryData.checkOut,
          enquiryData.guests,
          enquiryData.starCategory,
          enquiryData.nationality,
          enquiryData.freeCancellation,
          enquiryData.breakfastIncluded
        ]);
        break;

      case 'cruise':
        sheet = ss.getSheetByName('Cruise Enquiries') || ss.insertSheet('Cruise Enquiries');
        // Add headers if sheet is new
        if (sheet.getLastRow() === 0) {
          sheet.appendRow(['Timestamp', 'Name', 'Mobile', 'Destination', 'Departure Date', 'Duration', 'Passengers', 'Cabin Type', 'Special Requests']);
        }
        // Add data
        sheet.appendRow([
          enquiryData.timestamp,
          enquiryData.name,
          enquiryData.mobile,
          enquiryData.destination,
          enquiryData.departureDate,
          enquiryData.duration,
          enquiryData.passengers,
          enquiryData.cabinType,
          enquiryData.specialRequests
        ]);
        break;
    }

    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Enquiry submitted successfully'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Step 3: Deploy the Script

1. Click **Deploy > New deployment**
2. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
3. Fill in the details:
   - Description: "Arihant Tours Enquiry Form Handler"
   - Execute as: **Me**
   - Who has access: **Anyone** (Important: This allows your website to submit data)
4. Click **Deploy**
5. Copy the **Web app URL** - it will look like:
   ```
   https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```

## Step 4: Configure Your Website

1. Open the `.env` file in your project
2. Add the Google Apps Script URL:
   ```
   VITE_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```
3. Save the file and restart your development server

## Step 5: Test the Integration

1. Navigate to one of the enquiry forms (Flights, Hotels, or Cruises)
2. Fill out the form with test data
3. Submit the form
4. Check your Google Sheet - you should see the data appear in the appropriate sheet

## Troubleshooting

### Forms not submitting
- Check that the Google Apps Script URL is correctly set in `.env`
- Verify the script is deployed with "Anyone" access
- Check browser console for any errors

### Data not appearing in sheets
- Verify the script code is exactly as shown above
- Check the Apps Script execution logs (View > Logs in Apps Script editor)
- Ensure you're checking the correct sheet tabs

### CORS errors
- The `mode: 'no-cors'` setting in the code handles this
- You won't receive detailed responses due to CORS, but data will still be saved

## Email Notifications (Optional)

To receive email notifications when forms are submitted, add this to your Apps Script:

```javascript
function doPost(e) {
  // ... existing code ...

  // Send email notification
  const emailAddress = 'your-email@example.com';
  const subject = `New ${type} Enquiry from ${enquiryData.name}`;
  const message = `New enquiry received:\n\n${JSON.stringify(enquiryData, null, 2)}`;

  MailApp.sendEmail(emailAddress, subject, message);

  // ... rest of the code ...
}
```

## Security Notes

- The Google Apps Script URL is publicly accessible but only accepts POST requests
- No sensitive authentication keys are exposed
- All data is stored securely in your Google Drive
- You can restrict access to the Google Sheet itself using Google's sharing settings
