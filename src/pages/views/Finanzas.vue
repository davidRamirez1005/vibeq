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
            <div v-for="(item, index) in otrosImpuestos" :key="index" class="expense-item">
              <label>{{ item.nombre }}</label>
              <div class="input-wrapper">
                <input type="number" v-model="item.valor" placeholder="$0.00" />
                <span class="info-icon">ⓘ</span>
              </div>
            </div>
            <div class="expense-item new-tax" v-if="mostrarNuevoImpuesto">
              <input type="text" v-model="nuevoImpuestoNombre" placeholder="Nombre del impuesto" @keyup.enter="confirmarNuevoImpuesto" />
              <button @click="confirmarNuevoImpuesto">Confirmar</button>
              <button @click="cancelarNuevoImpuesto">Cancelar</button>
            </div>
            <div class="expense-item otros-impuestos" v-else>
              <label>Otros</label>
              <button class="add-item" @click="iniciarNuevoImpuesto">+</button>
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
          <p class="subtitle">Entre más llenes los datos de tus finanzas será más exacto tus cuentas y serás claro con tus cuentas</p>
          <h2> 80% completado</h2>
          <div class="progress-bar">
            <div class="progress" :style="{ width: efectividad + '%' }"></div>
          </div>
          <p class="percentage">{{ efectividad }}% Completado</p>
        </div>
  
        <div class="growth">
          <h3>Crecimiento</h3>
          <div class="growth-item">
            <span><i class="icon-sales"><img src="https://cdn-icons-png.flaticon.com/128/6067/6067132.png" alt="logo"></i> Ventas</span>
            <span>${{ ventas.toFixed(2) }}</span>
          </div>
          <div class="growth-item">
            <span><i class="icon-expenses"></i> Gastos</span>
            <span>${{ gastos.toFixed(2) }}</span>
          </div>
          <div class="growth-item">
            <span><i class="icon-profit"></i> Utilidad</span>
            <span>${{ utilidad.toFixed(2) }}</span>
          </div>
        </div>
  
        <div class="highlighted-costs">
          <h3>Costos y Gastos Destacados</h3>
          <div class="cost-item">
            <span><i class="icon-electricity"></i> Pago de luz</span>
            <span>${{ pagoDeLuz.toFixed(2) }}</span>
          </div>
          <div class="cost-item">
            <span><i class="icon-employee"></i> Trabajador Jose</span>
            <span>${{ trabajadorJose.toFixed(2) }}</span>
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
        otrosImpuestos: [],
        costoProduccion: null,
        costoServicio: null,
        efectividad: 80,
        ventas: 5000.00,
        gastos: 593.00,
        utilidad: 3030.98,
        pagoDeLuz: 202.98,
        trabajadorJose: 3030.98,
        mostrarNuevoImpuesto: false,
        nuevoImpuestoNombre: '',
      }
    },
    methods: {
      iniciarNuevoImpuesto() {
        this.mostrarNuevoImpuesto = true;
        this.nuevoImpuestoNombre = '';
      },
      confirmarNuevoImpuesto() {
        if (this.nuevoImpuestoNombre.trim()) {
          this.otrosImpuestos.push({ nombre: this.nuevoImpuestoNombre.trim(), valor: null });
          this.mostrarNuevoImpuesto = false;
          this.nuevoImpuestoNombre = '';
        }
      },
      cancelarNuevoImpuesto() {
        this.mostrarNuevoImpuesto = false;
        this.nuevoImpuestoNombre = '';
      }
    }
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
    background-color: #38627a;
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
    color: #333;
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
    color: #666666;
  }
  
  input::placeholder {
    color: #888888; 
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
  
  .add-item {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    margin-top: 5px;
  }
  
  .icon-sales, .icon-expenses, .icon-profit, .icon-electricity, .icon-employee {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 5px;
    background-color: #ccc;
  }
  
  .subtitle {
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
  }
  
  .new-tax {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .new-tax input {
    flex-grow: 1;
  }
  
  .new-tax button {
    padding: 5px 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .new-tax button:last-child {
    background-color: #f44336;
  }
  
  .otros-impuestos {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .otros-impuestos label {
    margin-bottom: 5px;
  }
  
  .otros-impuestos .add-item {
    align-self: flex-start;
  }

  .finanzas-content h1 {
    font-size: 4em; 
    font-weight: bold; 
}

.finanzas-container h2 {
    font-size: 2.0em; 
    font-weight: bold; 
}

.sidebar-right .effectiveness h3 {
    font-size: 1.8em; 
    font-weight: bold; 
    color: black; 
}

.growth h3,
.highlighted-costs h3 {
    font-size: 1.5em; 
    font-weight: bold; 
    color: black; 
}
.growth .growth-item span {
    display: block; 
    font-size: 1em; 
}

.highlighted-costs .growth-item span {
    display: block; 
    font-size: 1em; 
}


</style>