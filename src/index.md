---
toc: false
---

```js
const dataClientesAfectados = await FileAttachment("./data/clientesAfectados.json").json();

const chileTimeZone = 'America/Santiago';
```

# Clientes afectados por suministro eléctrico
## 
## Útimos 4 días

```js
Plot.plot({
  marginLeft: 90,
  y: { grid: true },
  //x: {tickFormat:d => moment.tz(d, chileTimeZone).format("H")},
  marks: [
    Plot.ruleY([0]),
    Plot.areaY(dataClientesAfectados.slice(-96), {
      x: (d) =>
        moment.utc(`${d.anho}-${d.mes}-${d.dia} ${d.hora}`, `YYYY-M-D H`).toDate(),
      y: "clientes_afectados",
      fill: (d) => "afectados",
      tip:true
    })
  ]
})
```

## Últimas 24 horas 

```js
Plot.plot({
  marginLeft: 90,
  y: { grid: true },
  //x: {tickFormat:d => moment.tz(d, chileTimeZone).format("H")},
  marks: [
    Plot.ruleY([0]),
    Plot.areaY(dataClientesAfectados.slice(-24), {
      x: (d) =>
        moment.utc(`${d.anho}-${d.mes}-${d.dia} ${d.hora}`, `YYYY-M-D H`).toDate(),
      y: "clientes_afectados",
      fill: (d) => "afectados",
      tip:true
    })
  ]
})
```



<style>

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--sans-serif);
  margin: 4rem 0 8rem;
  text-wrap: balance;
  text-align: center;
}

.hero h1 {
  margin: 1rem 0;
  padding: 1rem 0;
  max-width: none;
  font-size: 14vw;
  font-weight: 900;
  line-height: 1;
  background: linear-gradient(30deg, var(--theme-foreground-focus), currentColor);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero h2 {
  margin: 0;
  max-width: 34em;
  font-size: 20px;
  font-style: initial;
  font-weight: 500;
  line-height: 1.5;
  color: var(--theme-foreground-muted);
}

@media (min-width: 640px) {
  .hero h1 {
    font-size: 90px;
  }
}

</style>


```js
// Import required modules and configurations
import moment from 'npm:moment-timezone'
```