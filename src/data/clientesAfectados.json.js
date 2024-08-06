async function clientesAfectados() {
    const url = "https://apps.sec.cl/INTONLINEv1/ClientesAfectados/Get";
    const maxRetries = 3;
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const response = await fetch(url, {
          method: "POST",
          timeout: 20000 // 20 seconds timeout
        });
        if (!response.ok) throw new Error(`fetch failed: ${response.status}`);
        return await response.text();
      } catch (error) {
        console.error(`Attempt ${attempt} failed: ${error.message}`);
        if (attempt < maxRetries) {
          await delay(1000 * attempt); // Exponential backoff
        } else {
          throw error;
        }
      }
    }
  }
  
  (async () => {
    try {
      const data = await clientesAfectados();
      process.stdout.write(data);
    } catch (error) {
      console.error(`Failed to fetch data: ${error.message}`);
      process.exit(1);
    }
  })();