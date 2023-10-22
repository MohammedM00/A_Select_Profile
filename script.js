// Function to update the level 3 headings and the level 4 heading
function updateHeadings() {
    // Assign text to the level 3 headings using .text() method
    $("#name").text("Mohammed Mujaddidi");
    $("#major").text("CIT");
    $("#year").text("Senior");

    // Use .html() method to set the content of the level 4 heading with <em> tags
    $("#location").html("<em>Indiana</em>");
}

// Call the function when the page is ready
$(document).ready(function() {
});
