const jsonData = {
    "vehicle_type_id": select3.value,
    "note": textArea1.value,
    "job_order_number": textInput1.value,
    "locations": [],
    "require_signatures": true,
    "allow_tolls_fees": checkbox8.value,
    "allow_parking_fees": checkbox9.value,
    "allow_waiting_time_fees": checkbox10.value,
    "send_first_to_favorite": text2.value === "จองด่วน" ? false : checkbox5.value
};

if (text2.value === "จองด่วน") {
    jsonData["time_type"] = "now";
} else {
    jsonData["time_type"] = "schedule";
    jsonData["pickup_time"] = whenClickedBooking.data.formattedDate;
}

for (let i = 0; i < tableData.data.length; i++) {
    jsonData.locations.push({
    "address": tableData.data[i]['LocationK'],
    "latitude": parseFloat(tableData.data[i]['Latitude']),
    "longitude": parseFloat(tableData.data[i]['Longitude']),
    "recipient_name": tableData.data[i]['NameK'],
    "recipient_phone": tableData.data[i]['PhoneK'],
    "note": tableData.data[i]['NoteK']
    });
}
if (select3.value === 3) {
    jsonData.extra_services = [];

    if (checkbox1.value) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": 1 });
    }

    if (select4.value !== 0) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": select4.value });
    }

    if (checkbox2.value) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": 1 });
    }

    if (checkbox6.value) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": 1 });
    }

    if (checkbox7.value) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": 1 });
    }
    if (checkbox11.value) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": 1 });
    }
    if (checkbox12.value) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": 1 });
    }
} else if (select3.value === 243) {
    jsonData.extra_services = [];

    if (checkbox1.value) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": 1 });
    }

    if (select4.value !== 0) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": select4.value });
    }

    if (checkbox2.value) {
        jsonData.extra_services.push({ "extra_requirement_id": 881, "selected_amount": 1 });
    }

    if (checkbox6.value) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": 1 });
    }

    if (checkbox7.value) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": 1 });
    }
    if (checkbox12.value) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": 1 });
    }
} else if (select3.value === 298) {
    jsonData.extra_services = [];

    if (checkbox1.value) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": 1 });
    }

    if (select4.value !== 0) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": select4.value });
    }

    if (checkbox2.value) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": 1 });
    }

    if (checkbox6.value) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": 1 });
    }

    if (checkbox7.value) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": 1 });
    }
} else if (select3.value === 55) {
    jsonData.extra_services = [];

    if (checkbox1.value) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": 1 });
    }

    if (select4.value !== 0) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": select4.value });
    }

    if (checkbox2.value) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": 1 });
    }

    if (checkbox3.value) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": 1 });
    }

    if (checkbox4.value) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": 1 });
    }
    if (checkbox12.value) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": 1 });
    }
} else if (select3.value === 244) {
    jsonData.extra_services = [];

    if (checkbox1.value) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": 1 });
    }

    if (select4.value !== 0) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": select4.value });
    }

    if (checkbox2.value) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": 1 });
    }

    if (checkbox3.value) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": 1 });
    }

    if (checkbox4.value) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": 1 });
    }

    if (checkbox12.value) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": 1 });
    }
} else if (select3.value === 299) {
    jsonData.extra_services = [];

    if (checkbox1.value) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": 1 });
    }

    if (select4.value !== 0) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": select4.value });
    }

    if (checkbox2.value) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": 1 });
    }

    if (checkbox3.value) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": 1 });
    }

    if (checkbox4.value) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": 1 });
    }
} else if (select3.value === 18) {
    jsonData.extra_services = [];

    if (checkbox1.value) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": 1 });
    }

    if (select4.value !== 0) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": select4.value });
    }
   
    if (checkbox2.value) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": 1 });
    }

    if (checkbox11.value) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": 1 });
    }
} else if (select3.value === 242) {
    jsonData.extra_services = [];

    if (checkbox1.value) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": 1 });
    }

    if (select4.value !== 0) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": select4.value });
    }
   
    if (checkbox2.value) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": 1 });
    }
} else if (select3.value === 297) {
    jsonData.extra_services = [];

    if (checkbox1.value) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": 1 });
    }

    if (select4.value !== 0) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": select4.value });
    }
   
    if (checkbox2.value) {
        jsonData.extra_services.push({ "extra_requirement_id": 88, "selected_amount": 1 });
    }
}


// Convert the JSON object to a string
const jsonString = JSON.stringify(jsonData, null, 2);

return jsonString;
