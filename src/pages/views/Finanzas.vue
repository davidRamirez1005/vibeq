<template>
    <div class="finanzas">
      <h1>Finanzas</h1>
      <p>Sube toda la información sobre tu negocio para que podamos ser muy claros con tus cuentas y tu tengas el control de tus finanzas y que todo sea muy claro. Si necesitas ayudar puedes pedirla a nuestro asistente de IA</p>
      
      <div class="efectividad">
        <h3>% De efectividad del modelo financiero</h3>
        <p>Entre más llenes los datos de tus finanzas será más exacto tus cuentas y serás más claro con tus cuentas</p>
        <div class="progress-bar">
          <div class="progress" :style="{ width: '80%' }"></div>
          <span>80% Completado</span>
        </div>
      </div>
  
      <section class="gastos-operativos">
        <h2>Gastos Operativos</h2>
        <div class="grid">
          <div class="input-group">
            <label>Marketing</label>
            <input type="number" v-model="gastos.marketing" step="0.01">
          </div>
          <div class="input-group">
            <label>Alquiler</label>
            <input type="number" v-model="gastos.alquiler" step="0.01">
          </div>
          <!-- Añade aquí el resto de campos de gastos operativos -->
        </div>
      </section>
  
      <section class="gastos-financieros">
        <h2>Gastos Financieros</h2>
        <div class="grid">
          <div class="input-group">
            <label>Intereses de Préstamo</label>
            <input type="number" v-model="gastosFinancieros.prestamo" step="0.01">
          </div>
          <div class="input-group">
            <label>Intereses Bancarios</label>
            <input type="number" v-model="gastosFinancieros.bancarios" step="0.01">
          </div>
        </div>
      </section>
  
      <section class="impuestos">
        <h2>Impuestos</h2>
        <div class="grid">
          <div class="input-group">
            <label>Sobre la Renta</label>
            <input type="number" v-model="impuestos.renta" step="0.01">
          </div>
          <div class="input-group">
            <label>IVA</label>
            <input type="number" v-model="impuestos.iva" step="0.01">
          </div>
          <div class="input-group">
            <label>Otros</label>
            <input type="number" v-model="impuestos.otros" step="0.01">
          </div>
        </div>
      </section>
  
      <section class="costos">
        <h2>Costos</h2>
        <div class="grid">
          <div class="input-group">
            <label>De producción</label>
            <input type="number" v-model="costos.produccion" step="0.01">
          </div>
          <div class="input-group">
            <label>De servicio</label>
            <input type="number" v-model="costos.servicio" step="0.01">
          </div>
        </div>
      </section>
  
      <aside class="crecimiento">
        <h3>Crecimiento</h3>
        <div class="stat">
          <span>Ventas</span>
          <strong>$5,000.00</strong>
        </div>
        <div class="stat">
          <span>Gastos</span>
          <strong>$593.00</strong>
        </div>
        <div class="stat">
          <span>Utilidad</span>
          <strong>$3,030.98</strong>
        </div>
      </aside>
  
      <aside class="costos-destacados">
        <h3>Costos y Gastos Destacados</h3>
        <div class="destacado">
          <span>Pago de luz</span>
          <strong>$202.98</strong>
        </div>
        <div class="destacado">
          <span>Trabajador Jose</span>
          <strong>$3,030.98</strong>
        </div>
      </aside>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Finanzas',
    data() {
      return {
        gastos: {
          marketing: 0,
          alquiler: 0,
          // ... otros gastos
        },
        gastosFinancieros: {
          prestamo: 0,
          bancarios: 0
        },
        impuestos: {
          renta: 0,
          iva: 0,
          otros: 0
        },
        costos: {
          produccion: 0,
          servicio: 0
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .finanzas {
    padding: 20px;
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
  
  .input-group {
    display: flex;
    flex-direction: column;
  }
  
  .input-group label {
    margin-bottom: 5px;
  }
  
  .input-group input {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .progress-bar {
    background-color: #f0f0f0;
    border-radius: 10px;
    height: 20px;
    position: relative;
  }
  
  .progress {
    background-color: #4CAF50;
    height: 100%;
    border-radius: 10px;
  }
  
  .crecimiento, .costos-destacados {
    margin-top: 20px;
  }
  
  .stat, .destacado {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  </style>