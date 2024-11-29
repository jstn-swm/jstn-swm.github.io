document.body.addEventListener('click', function(e) {
    if(e.target.classList.contains('instructions')) {
        const originalHTML = document.body.innerHTML;
        e.preventDefault();
        const fileLink = e.target.getAttribute('href');
        const pageTitle = e.target.getAttribute('alt');
        document.body.innerHTML = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${pageTitle}</title>
                <link rel="stylesheet" href="../css/style.css">
            </head>
            <header>
                <a href="./index.html"><h1>Course Project</h1></a>
            </header>
            <nav>
                <a href="./index.html">Home</a>
                <a href="./resume.html">Resume</a>
                <a href="./contacts.html">Contacts</a>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-braces" viewBox="0 0 16 16"><path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6"/></svg>
            </nav>
            <style>
                video {
                    height: auto;
                    width: 80%;
                    margin-left: 10%;
                    margin-right: 10%;
                }
                #backButton {
                    margin-top: auto;
                    padding-left: auto;
                }
                h2 {
                    font-size: 2rem;
                    margin-bottom: 0;
                    margin-top: 0;
                }
                footer {
                    min-height: 150px;
                }
            </style>
            <body>
                <main>
                    <h2 style="margin-left: 10%;">${pageTitle}</h2>
                    <embed src="${fileLink}" type="application/pdf">
                        Embed not supported
                    </embed>
                    <a id="backButton" class="button">Back</a>
                </main>
                <footer>
                </footer>
            </body>
        </html>
        `;
        document.getElementById("backButton").addEventListener('click', function() {
            document.body.innerHTML = originalHTML;
        });
    }
});