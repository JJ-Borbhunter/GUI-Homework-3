function log_error(err_str) {
    document.getElementById("error-container").innerHTML = err_str;
}



function generate_multiplication_table(x_min, x_max, y_min, y_max) {

    var error = false;
    if(x_min > x_max) {
        error = true;
        log_error(
            "Your row minimum must be less than or equal to your row maximum."
        );
    }

    if(y_min > y_max) {
        error = true;
        log_error(
            "Your column minimum must be less than or equal to your column maximum."
        );
    }

    if(((x_max - x_min) > 301) || ((y_max - y_min) > 301)) {
        error = true;
        log_error(
            "Neither of your ranges can exceed 301 numbers, as otherwise your \
            browser might be over taxed."
        );
    }

    if(error) return;

    const table_cont = document.getElementById("table-container");

    // empty the table container for resubmissions
    table_cont.innerHTML = "";
    log_error("");

    const table = document.createElement("table");
    table.style.border = "2px solid black";


    // make header row using th elements for clarity
    const header_row = table.insertRow();
    // make the right hand box empty to giv e space for the header column
    const empty_cell = document.createElement("th");
    empty_cell.innerHTML = "✖️";
    header_row.appendChild(empty_cell);
    for(let j = x_min; j <= x_max; j++) {
        const header_cell = document.createElement("th");
        header_cell.innerHTML = String(j);
        header_row.appendChild(header_cell);
    }

    for(let i = y_min; i <= y_max; i++) {
        const row = table.insertRow();
        const header_cell = document.createElement("th");
        header_cell.innerHTML = String(i);
        row.appendChild(header_cell);

        for(let j = x_min; j <= x_max; j++) {
            const cell = row.insertCell();
            cell.innerHTML = String(i * j);
        }
    }

    table_cont.appendChild(table);
}









const submit_button = document.getElementById("submit");

function submit_onclick() {
    var x_min = Number(document.getElementById("min-x").value);
    var x_max = Number(document.getElementById("max-x").value);
    var y_min = Number(document.getElementById("min-y").value);
    var y_max = Number(document.getElementById("max-y").value);

    generate_multiplication_table (
        x_min, x_max, y_min, y_max
    );
}

submit_button.addEventListener("click", submit_onclick);