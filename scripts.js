
function downloadZip() {
    const link = document.createElement('a'); // Create a new anchor element
    link.href = 'https://github.com/armenkay03/web/archive/refs/heads/main.zip'; // Set the URL to download
    link.download = 'web.zip'; // Set a default filename
    document.body.appendChild(link); // Append the link to the body
    link.click(); // Programmatically click the link to trigger the download
    document.body.removeChild(link); // Remove the link from the document
}






document.addEventListener('DOMContentLoaded', function() {
    // Example JavaScript for interactive elements

    // Form validation example
    const form = document.querySelector('#add-product-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            const name = document.querySelector('#product-name').value;
            const description = document.querySelector('#product-description').value;
            if (name === '' || description === '') {
                alert('All fields are required!');
                event.preventDefault(); // Prevent form submission
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('generate-report-form');
    const downloadSection = document.getElementById('download-section');
    const downloadButton = document.getElementById('downloadReport');

    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;
        const notes = document.getElementById('additional-notes').value;

        if (!startDate || !endDate) {
            alert("Please enter both start and end dates.");
            return;
        }

        // Simulate generating the report (Here you can add logic to actually generate a report)
        console.log(`Generating report from ${startDate} to ${endDate} with notes: ${notes}`);

        // Show download button after report is generated
        downloadSection.style.display = 'block';
    });

    // Handle ZIP download
    downloadButton.addEventListener('click', function() {
        // Simulate ZIP creation (In real usage, you'd create and download the ZIP here)
        console.log("Generating and downloading report as ZIP...");
        alert("ZIP file generated and ready for download!");

        // Example of how you would trigger the download:
        // window.location.href = 'path_to_your_generated_report.zip';
    });
});
