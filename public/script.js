function getQuote() {
    fetch('/quote')
        .then(response => response.json())
        .then(data => {
            document.getElementById('quote').innerText = data.quote;
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
        });
}
