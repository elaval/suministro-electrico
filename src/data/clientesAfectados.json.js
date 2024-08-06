
async function clientesAfectados() {
  const url = "https://apps.sec.cl/INTONLINEv1/ClientesAfectados/Get";
  const response = await fetch(url, {
    method:"POST"
  });
  if (!response.ok) throw new Error(`fetch failed: ${response.status}`);
  return response.text();
}

const data = await clientesAfectados();

// Write out csv formatted data.
process.stdout.write(data);
