<template>
    <div class="finanzas-container">
      <div class="finanzas-content">
        <h1>Finanzas</h1>
        <p class="description">
          Sube toda la información sobre tu negocio para que podamos ser muy claros con tus cuentas y
          tu tengas el control de tus finanzas y que todo sea muy claro. Si necesitas ayudar puedes
          pedirla a nuestro asistente de IA
        </p>
  
        <section>
          <h2>Gastos Operativos</h2>
          <div class="expenses-grid">
            <div class="expense-item">
              <label>Marketing</label>
              <div class="input-wrapper">
                <input type="number" v-model="marketing" placeholder="$0.00" />
                <span class="info-icon">ⓘ</span>
              </div>
            </div>
            <div class="expense-item">
              <label>Alquiler</label>
              <div class="input-wrapper">
                <input type="number" v-model="alquiler" placeholder="$0.00" />
                <span class="info-icon">ⓘ</span>
              </div>
            </div>
            <div class="expense-item">
              <label>Servicios</label>
              <div class="input-wrapper">
                <input type="number" v-model="servicios" placeholder="$0.00" />
                <span class="info-icon">ⓘ</span>
              </div>
            </div>
            <div class="expense-item">
              <label>Seguros</label>
              <div class="input-wrapper">
                <input type="number" v-model="seguros" placeholder="$0.00" />
                <span class="info-icon">ⓘ</span>
              </div>
            </div>
            <div class="expense-item">
              <label>Suministros de Oficina</label>
              <div class="input-wrapper">
                <input type="number" v-model="suministros" placeholder="$0.00" />
                <span class="info-icon">ⓘ</span>
              </div>
            </div>
            <div class="expense-item">
              <label>Depreciación</label>
              <div class="input-wrapper">
                <input type="number" v-model="depreciacion" placeholder="$0.00" />
                <span class="info-icon">ⓘ</span>
              </div>
            </div>
            <div class="expense-item">
              <label>Mantenimiento y Reparaciones</label>
              <div class="input-wrapper">
                <input type="number" v-model="mantenimiento" placeholder="$0.00" />
                <span class="info-icon">ⓘ</span>
              </div>
            </div>
            <div class="expense-item">
              <label>Salarios y Beneficios</label>
              <div class="input-wrapper">
                <input type="number" v-model="salarios" placeholder="$0.00" />
                <span class="info-icon">ⓘ</span>
              </div>
            </div>
          </div>
        </section>
  
        <section>
          <h2>Gastos Financieros</h2>
          <div class="expenses-grid">
            <div class="expense-item">
              <label>Intereses de Préstamo</label>
              <div class="input-wrapper">
                <input type="number" v-model="interesesPrestamo" placeholder="$0.00" />
                <span class="info-icon">ⓘ</span>
              </div>
            </div>
            <div class="expense-item">
              <label>Intereses Bancarios</label>
              <div class="input-wrapper">
                <input type="number" v-model="interesesBancarios" placeholder="$0.00" />
                <span class="info-icon">ⓘ</span>
              </div>
            </div>
          </div>
        </section>
  
        <section>
          <h2>Impuestos</h2>
          <div class="expenses-grid">
            <div class="expense-item">
              <label>Sobre la Renta</label>
              <div class="input-wrapper">
                <input type="number" v-model="impuestoRenta" placeholder="$0.00" />
                <span class="info-icon">ⓘ</span>
              </div>
            </div>
            <div class="expense-item">
              <label>IVA</label>
              <div class="input-wrapper">
                <input type="number" v-model="iva" placeholder="$0.00" />
                <span class="info-icon">ⓘ</span>
              </div>
            </div>
            <div class="expense-item">
              <label>Otros</label>
              <div class="input-wrapper">
                <input type="number" v-model="otrosImpuestos" placeholder="$0.00" />
                <span class="info-icon">ⓘ</span>
              </div>
            </div>
          </div>
        </section>
  
        <section>
          <h2>Costos</h2>
          <div class="expenses-grid">
            <div class="expense-item">
              <label>De producción</label>
              <div class="input-wrapper">
                <input type="number" v-model="costoProduccion" placeholder="$0.00" />
                <span class="info-icon">ⓘ</span>
              </div>
            </div>
            <div class="expense-item">
              <label>De servicio</label>
              <div class="input-wrapper">
                <input type="number" v-model="costoServicio" placeholder="$0.00" />
                <span class="info-icon">ⓘ</span>
              </div>
            </div>
          </div>
        </section>
      </div>
  
      <div class="sidebar-right">
        <div class="effectiveness">
          <h3>% De efectividad del modelo financiero</h3>
          <div class="progress-bar">
            <div class="progress" style="width: 80%"></div>
          </div>
          <p>80% Completado</p>
        </div>
  
        <div class="growth">
          <h3>Crecimiento</h3>
          <div class="growth-item">
            <span>Ventas</span>
            <span>$5,000.00</span>
          </div>
          <div class="growth-item">
            <span>Gastos</span>
            <span>$593.00</span>
          </div>
          <div class="growth-item">
            <span>Utilidad</span>
            <span>$3,030.98</span>
          </div>
        </div>
  
        <div class="highlighted-costs">
          <h3>Costos y Gastos Destacados</h3>
          <div class="cost-item">
            <span>Pago de luz</span>
            <span>$202.98</span>
          </div>
          <div class="cost-item">
            <span>Trabajador Jose</span>
            <span>$3,030.98</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Finanzas',
    data() {
      return {
        marketing: null,
        alquiler: null,
        servicios: null,
        seguros: null,
        suministros: null,
        depreciacion: null,
        mantenimiento: null,
        salarios: null,
        interesesPrestamo: null,
        interesesBancarios: null,
        impuestoRenta: null,
        iva: null,
        otrosImpuestos: null,
        costoProduccion: null,
        costoServicio: null,
      }
    },
  }
  </script>
  
  <style scoped>
  .finanzas-container {
    display: flex;
    background-color: #f5f5f5;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  .finanzas-content {
    flex: 3;
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-right: 20px;
  }
  
  .sidebar-right {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  h1, h2, h3 {
    color: #333;
    margin-bottom: 15px;
  }
  
  .description {
    margin-bottom: 20px;
    color: #666;
  }
  
  .effectiveness, .growth, .highlighted-costs {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }
  
  .progress-bar {
    background-color: #e0e0e0;
    height: 10px;
    border-radius: 5px;
    overflow: hidden;
    margin: 10px 0;
  }
  
  .progress {
    background-color: #4caf50;
    height: 100%;
  }
  
  .expenses-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 30px;
  }
  
  .expense-item {
    display: flex;
    flex-direction: column;
  }
  
  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    background-color: #f8f9fa;
  }
  
  .info-icon {
    position: absolute;
    right: 10px;
    color: #999;
    cursor: pointer;
  }
  
  .growth-item, .cost-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  </style>