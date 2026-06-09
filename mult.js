/*
File: mult.js
GUI Assignment: Creating an Interactive Dynamic Table
James Bord, UMass Lowell Computer Science, james_bord@student.uml.edu
Copyright (c) 2021 by Bord. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by JB on June 8, 2026
*/


// function to place an error string into the empty container in the html designed to hold it
function log_error(err_str) {
    document.getElementById("error-container").innerHTML = err_str;
}

// main function of the application, generates the table
function generate_multiplication_table(x_min, x_max, y_min, y_max) {

    // ERROR HANDLING
    var error = false;

    // row minimum greater than maximum
    if(x_min > x_max) {
        error = true;
        log_error(
            "Your row minimum must be less than or equal to your row maximum."
        );
    }

    // Column minimum greater than maximum
    if(y_min > y_max) {
        error = true;
        log_error(
            "Your column minimum must be less than or equal to your column maximum."
        );
    }

    // Range is too large
    if(((x_max - x_min) > 301) || ((y_max - y_min) > 301)) {
        error = true;
        log_error(
            "Neither of your ranges can exceed 301 numbers, as otherwise your \
            browser might be over taxed."
        );
    }

    // invalid input values
    if(isNaN(x_min) || isNaN(x_max) || isNaN(y_min) || isNaN(y_max)) {
        error = true;
        log_error(
            "Please remove any non-numeric characters from the input boxes."
        );
    }

    // Stop execution of the function on error
    if(error) return;

    // PROGRAM EXECUTION

    // aquire handle for the table container
    const table_cont = document.getElementById("table-container");

    // empty the table container and error container for resubmissions or resolved errors
    table_cont.innerHTML = "";
    log_error("");

    // make a table with a nice border
    const table = document.createElement("table");
    table.style.border = "2px solid black";


    // make header row using th elements for clarity
    const header_row = table.insertRow();
    // make the right hand box and corner of the table a header box with the multiplication symbol
    const empty_cell = document.createElement("th");
    empty_cell.innerHTML = "✖️";
    header_row.appendChild(empty_cell);

    // Fill the header row with the row range
    for(let j = x_min; j <= x_max; j++) {
        const header_cell = document.createElement("th");
        header_cell.innerHTML = String(j);
        header_row.appendChild(header_cell);
    }

    // Process columns
    for(let i = y_min; i <= y_max; i++) {

        // fill the header column with the column range
        const row = table.insertRow();
        const header_cell = document.createElement("th");
        header_cell.innerHTML = String(i);
        row.appendChild(header_cell);

        // fill the rest of the column with the actual multiplication results
        for(let j = x_min; j <= x_max; j++) {
            const cell = row.insertCell();
            cell.innerHTML = String(i * j);
        }
    }

    // Display the table
    table_cont.appendChild(table);
}






const submit_button = document.getElementById("submit");

function submit_onclick() {
    // Aquire all four numbers as numbers
    var x_min = Number(document.getElementById("min-x").value);
    var x_max = Number(document.getElementById("max-x").value);
    var y_min = Number(document.getElementById("min-y").value);
    var y_max = Number(document.getElementById("max-y").value);

    // Execute the main body of the program
    generate_multiplication_table (
        x_min, x_max, y_min, y_max
    );
}

// Add event listeners for the submit button
submit_button.addEventListener("click", submit_onclick);
