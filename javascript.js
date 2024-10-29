function updateChart(type, val1, val2, result) {
    const chart = window.myChart;
    let label;
    
    if (type === 'voltaggio') {
        label = `I: ${val1} A, R: ${val2} Ω`;
    } else if (type === 'intensita') {
        label = `V: ${val1} V, R: ${val2} Ω`;
    } else if (type === 'resistenza') {
        label = `V: ${val1} V, I: ${val2} A`;
    }
    
    chart.data.labels.push(label);
    chart.data.datasets[0].data.push(result);
    chart.update();
}
function adjustValue(inputId, adjustment) {
    const input = document.getElementById(inputId);
    let currentValue = parseFloat(input.value) || 0; // Se non è un numero, partiamo da 0
    currentValue += adjustment;
    input.value = currentValue >= 0 ? currentValue : 0; // Non permettere valori negativi
}

