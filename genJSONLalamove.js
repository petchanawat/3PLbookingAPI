const SECRET = '#########################';
const time = new Date().getTime().toString(); // => `1545880607433`

const method = 'POST';
const path = '/v3/quotations';

const jsonData = {};

if (text2.value !== "จองด่วน") {
    jsonData["scheduleAt"] = whenClickedBooking.data.dateLaLamove;
}

if (select3.value === 3 || select3.value === 243 || select3.value === 298) {
    jsonData["serviceType"] = "XXXXXXXXX";
    jsonData.specialRequests = []; // Initialize specialRequests as an empty array

    if (select7.value === 0) {
        jsonData.specialRequests.push("");
    }

    if (select7.value === 1) {
        jsonData.specialRequests.push("XXXXXXXXX");
    }

    if (select7.value === 2) {
        jsonData.specialRequests.push("XXXXXXX");
    }

    if (checkbox19.value) {
        jsonData.specialRequests.push("XXXXXXXXX");
    }

    if (checkbox20.value) {
        jsonData.specialRequests.push("XXXXXXXXX");
    }
    if (checkbox14.value) {
        jsonData.specialRequests.push("XXXXXXXXXXX");
    }
} else if (select3.value === 55 || select3.value === 244 || select3.value === 299) {
    jsonData["serviceType"] = "XXXXXXXXX";
    jsonData.specialRequests = [];
    if (select7.value === 0) {
        jsonData.specialRequests.push("");
    }

    if (select7.value === 1) {
        jsonData.specialRequests.push("XXXXXXXXXXX");
    }

    if (select7.value === 2) {
        jsonData.specialRequests.push("XXXXXXXXXXX");
    }

    if (checkbox19.value) {
        jsonData.specialRequests.push("XXXXXXXXXXX");
    }

    if (checkbox20.value) {
        jsonData.specialRequests.push("XXXXXXXXXXX");
    }

    if (checkbox21.value) {
        jsonData.specialRequests.push("XXXXXXXXXXX");
    }
    // Add conditions and modifications specific to this case
} else if (select3.value === 18 || select3.value === 242 || select3.value === 297) {
    jsonData["serviceType"] = "XXXXXXXXXXX";
    jsonData.specialRequests = [];
    if (select7.value === 1) {
        jsonData.specialRequests.push("XXXXXXXXXXX");
    }

    // Add conditions and modifications specific to this case
}

jsonData["language"] = "en_TH";

const stops = [];

for (let i = 0; i < tableData.data.length; i++) {
    stops.push({
        "coordinates": {"lat": tableData.data[i]['Latitude'], "lng": tableData.data[i]['Longitude']},
        "address": tableData.data[i]['LocationK']
    });
}

// Assign stops array to jsonData
jsonData["stops"] = stops;

const jsonData_final = {"data": jsonData};

const jsonString = JSON.stringify(jsonData_final);

const rawSignature = `${time}\r\n${method}\r\n${path}\r\n\r\n${jsonString}`;

const SIGNATURE = CryptoJS.HmacSHA256(rawSignature, SECRET).toString();

const API_KEY = '##################################';
const TOKEN = `hmac ${API_KEY}:${time}:${SIGNATURE}`;

return {"Authorization": TOKEN, "Body": jsonString};
