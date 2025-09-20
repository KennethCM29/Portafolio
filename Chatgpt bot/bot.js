document.getElementById("askBtn").addEventListener("click", askChatGPT);

async function askChatGPT() {
  const apiKey = document.getElementById("apiKey").value.trim();
  const question = document.getElementById("question").value.trim();
  const responseDiv = document.getElementById("response");

  if (!apiKey || !question) {
    alert("Por favor, ingresa la API Key y una pregunta.");
    return;
  }

  responseDiv.textContent = "Cargando respuesta...";

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: question }],
        max_tokens: 1000,
        temperature: 0.7
      })
    });

    const data = await res.json();

    if (data.error) {
      responseDiv.textContent = "Error: " + data.error.message;
    } else {
      responseDiv.textContent = data.choices[0].message.content.trim();
    }
  } catch (err) {
    responseDiv.textContent = "Error en la conexión: " + err.message;
  }
}
