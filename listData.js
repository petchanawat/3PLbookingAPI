const API_KEY = '##############################';
const BASE_ID = '##############################';
const TABLE_NAME = '##############################';
const VIEW_NAME = '##############################'; // Replace with the name of your desired view
const BATCH_SIZE = 100;

let offset = '';
let allRecords = [];

while (true) {
    const endpoint = `https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(TABLE_NAME)}?offset=${offset}&limit=${BATCH_SIZE}&view=${encodeURIComponent(VIEW_NAME)}`;
    
    try {
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            }
        });

        const jsonData = await response.json();

        if (!jsonData.records || jsonData.records.length === 0) {
            // No more records, break the loop
            break;
        }

        // Concatenate the batch with the existing records
        allRecords = allRecords.concat(jsonData.records);

        // Update the offset for the next batch
        offset = jsonData.offset;
    } catch (error) {
        console.error('Error fetching data:', error);
        break;
    }
}

// Transform the data if needed
const transformedData = allRecords.map(record => {
    const transformedRecord = {};
    for (const key in record.fields) {
        transformedRecord[key] = record.fields[key];
    }

    // Include specific fields
    transformedRecord['Pickup Order'] = record.fields['Pickup Order'];
    transformedRecord['Deliver Order'] = record.fields['Deliver Order'];
    transformedRecord['Receive Parcel (Test)'] = record.fields['Receive Parcel (Test)'];
    transformedRecord['Delivered to buyer (Test)'] = record.fields['Delivered to buyer (Test)'];
    transformedRecord['Receive Parcel Time (Test)'] = record.fields['Receive Parcel Time (Test)'];
    transformedRecord['Delivered Time (Test)'] = record.fields['Delivered Time (Test)'];
    transformedRecord['Recieve Parcel Time'] = record.fields['Recieve Parcel Time'];
    transformedRecord['Delivered Time'] = record.fields['Delivered Time'];
    transformedRecord['Evidence of Pickup'] = record.fields['Evidence of Pickup'];
    transformedRecord['Evidence of Delivery'] = record.fields['Evidence of Delivery'];
    transformedRecord['Password for Mini TMS'] = record.fields['Password for Mini TMS'];
    transformedRecord['carrierName for Mini TMS'] = record.fields['carrierName for Mini TMS'];
    transformedRecord['Note for Pickup'] = record.fields['Note for Pickup'];
    transformedRecord['Note for Delivery'] = record.fields['Note for Delivery'];
    transformedRecord['Ordered Record Driver Name'] = record.fields['Ordered Record Driver Name'];
    transformedRecord['First Mile of The Day'] = record.fields['First Mile of The Day'];
    transformedRecord['First Mile Timestamp'] = record.fields['First Mile Timestamp'];
    transformedRecord['Last Mile of The Day'] = record.fields['Last Mile of The Day'];
    transformedRecord['Last Mile Timestamp'] = record.fields['Last Mile Timestamp'];
    transformedRecord['Carrier Status'] = record.fields['Carrier Status'];
    transformedRecord['Ordered Record'] = record.fields['Ordered Record'];
    transformedRecord['Pickup Latitude, Longitude'] = record.fields['Pickup Latitude, Longitude'];
    transformedRecord['Deliver Latitude, Longitude'] = record.fields['Deliver Latitude, Longitude'];
    transformedRecord['Last Actual Tracking (carrier)'] = record.fields['Last Actual Tracking (carrier)'];
    

    return transformedRecord;
});

// Filter the transformedData based on specific conditions
const filteredData = transformedData.filter(record => 
    record['Ordered Record'] === select5.value);

// Now, continue with the rest of the code
const originalData = filteredData;

// Function to unpivot the specified columns
const unpivotColumns = (data, pickupColumnName, deliverColumnName) => {
  const unpivotedData = [];

  data.forEach(row => {
    // Check if the columns exist in the row
    if (row[pickupColumnName]) {

      unpivotedData.push({
        // Copy other columns as is
        ...row,
        // Add a new column for the event type (Pickup or Deliver)
        EventType: 'เข้ารับสินค้า',
        // Add a new column for the date time
        Rank: row[pickupColumnName],
        LocationK: row['Warehouse Address (all)'],
        NoteK: row['Note for Pickup'],
        NameK: row['Seller Name'],
        PhoneK: row['WH Phone'],
        LaLong: row['Pickup Latitude, Longitude'],
        Latitude: row['Pickup Latitude, Longitude'].split(', ')[0],
        Longitude: row['Pickup Latitude, Longitude'].split(', ')[1],
        //Latitude: row['Pickup Latitude'],
        //Longitude: row['Pickup Longitude'],
        // Add a new column for the formatted pickup date
        
        // Add a new column for the value from dhlEcommerce['Receive Parcel (Test)']
        
      });
    }

    if (row[deliverColumnName]) {
      unpivotedData.push({
        // Copy other columns as is
        ...row,
        // Add a new column for the event type (Pickup or Deliver)
        EventType: 'ส่งสินค้า',
        // Add a new column for the date time
        Rank: row[deliverColumnName],

        LocationK: row['Buyer Address (New)'],
        NoteK: row['Note for Delivery'],
        NameK: row['Customer Name'],
        PhoneK: row['Buyer Phone (New)'],
        LaLong: row['Deliver Latitude, Longitude'],
        Latitude: row['Deliver Latitude, Longitude'].split(', ')[0],
        Longitude: row['Deliver Latitude, Longitude'].split(', ')[1],
        //Latitude: row['Deliver Latitude'],
        //Longitude: row['Deliver Longitude'],
        // Add a new column for the formatted pickup date
        // Adjust this if you want to add a formatted date for deliveries

        // Add a new column for the value from dhlEcommerce['Delivered to buyer (Test)']
        
      });
    }
  });

  return unpivotedData;
};

// Unpivot the specified columns
const unpivotedPickupDeliverData = unpivotColumns(originalData, 'Pickup Order', 'Deliver Order');

// Sort the result by the Rank column
const sortedData = unpivotedPickupDeliverData.sort((a, b) => a.Rank - b.Rank);

const uniqueSortedData = [];
for (let i = 0; i < sortedData.length; i++) {
  // If the 'Rank' of the current record is not the same as the previous record or it's the first record, add it to the uniqueSortedData
  if (i === 0 || sortedData[i].Rank !== sortedData[i - 1].Rank) {
    uniqueSortedData.push(sortedData[i]);
  }
}

return uniqueSortedData;
