// function productsAdd() {
//     // First check if a <tbody> tag exists, add one if not
//     if ($("#table tbody").length == 0) {
//         $("#table").append("<tbody></tbody>");
//     }
    
//     // Append product to the table
//     $("#table tbody").append("<tr>" + "<td>6/11/2015</td>" + "<td>Shuttle</td>" + "<td>$74.06</td>" + "<td>From trip to dubai</td>" + "<td>new</td>" + "</tr>");
        
//     $("#table tbody").append("<tr>" + "<td>7/11/2015</td>" + "<td>Taxi</td>" + "<td>$274.06</td>" + "<td>From trip to dubai</td>" + "<td>new</td>" + "</tr>")
// }

// $(document).ready(function () {
//     productsAdd();
// });


function inputUpdate() {
    if ($("#total").val() != null && $("#total").val() != '') {

        productAddToTable();

        formClear();

        $("#total").focus();
    }
}

function productAddToTable() {
    // First check if a <tbody> tag exists, add one if not
    if ($("#table tbody").length == 0) {
        $("#table").append("<tbody></tbody>");
    }

    $("table tbody").append("<tr>" + "<td>" + $("#date").val() + "</td>" + "<td>" + $("#merchant").val() + "</td>" + "<td>" + $("#total").val() + "</td>" + "<td>" + $("#comment").val() + "</td>" + "<td>new</td>" + "</tr>");
}

function formClear() {
    $("#merchant").val("");
    $("#date").val("");
    $("#total").val("");
    $("#comment").val("");
}



var popup = document.getElementById('myPopup');

var btn = document.getElementById('updateButton');

var span = document.getElementById('cancel');

btn.onclick = function(event) {
    event.preventDefault()
    popup.style.display = 'block';
}
span.onclick = function() {
    popup.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}