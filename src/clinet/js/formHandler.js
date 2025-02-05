async function handleSubmit(event) {
    event.preventDefault();

    let formText = document.getElementById('url').value;

    if (!validateURL(formText)) {
        alert("❌ الرجاء إدخال رابط صحيح.");
        return;
    }

    console.log("✅ استدعاء API مع الرابط:", formText);

    try {
        const response = await fetch('http://localhost:8081/analyze', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: formText }),
        });

        const data = await response.json();
        console.log("✅ استجابة API:", data);

        document.getElementById('results').innerHTML = `
            <p><strong>الموضوع:</strong> ${data.subject}</p>
            <p><strong>الثقة:</strong> ${data.confidence}</p>
        `;
    } catch (error) {
        console.error("❌ حدث خطأ أثناء استدعاء API:", error);
    }
}

function validateURL(url) {
    const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    return regex.test(url);
}

export { handleSubmit, validateURL };
