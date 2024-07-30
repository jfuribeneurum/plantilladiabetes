function toggleInsulinPumpFields() {
    const insulinPumpSelect = document.getElementById('Bombainsulina');
    const insulinPumpFields = document.getElementById('insulinPumpFields');
    
    if (insulinPumpSelect.value === 'yes') {
        insulinPumpFields.style.display = 'block';
    } else {
        insulinPumpFields.style.display = 'none';
    }
}

function toggleCateterObstructionFields() {
    const cateterObstructionSelect = document.getElementById('obstruccionCateter');
    const cateterObstructionFields = document.getElementById('cateterObstructionFields');
    
    if (cateterObstructionSelect.value === 'yes') {
        cateterObstructionFields.style.display = 'block';
    } else {
        cateterObstructionFields.style.display = 'none';
        document.getElementById('numObstrucciones').value = ''; // Limpiar el valor del campo de texto
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Mostrar tabla de agentes orales si cambia el valor
    document.getElementById('agentesorales').addEventListener('change', function() {
        var table = document.getElementById('tablaAgentesOrales');
        table.style.display = this.value === 'siagentes' ? 'block' : 'none';
    });

    // Mostrar tabla de insulina si cambia el valor
    document.getElementById('insulina').addEventListener('change', function() {
        var table = document.getElementById('tablainsulina');
        table.style.display = this.value === 'siinsulina' ? 'block' : 'none';
    });

    // Mostrar estrategia nutricional si cambia la selección de ajuste de insulina
    document.getElementById('insulinaPrandial').addEventListener('change', function() {
        var div = document.getElementById('estrategiaNutricional');
        div.style.display = this.value === 'yes' ? 'block' : 'none';

        var div2 = document.getElementById('insulinaPrandialTabla');
        div2.style.display = this.value === 'yes' ? 'block' : 'none';
    });

    // Inicializar estado de visibilidad de campos según la carga inicial
    toggleInsulinPumpFields();
    toggleCateterObstructionFields();
});