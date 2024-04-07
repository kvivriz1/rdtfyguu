var tabelaDados = [
    { time: 'Time A', pontos: 10, vitorias: 3, empates: 1, derrotas: 0 },
    { time: 'Time B', pontos: 7, vitorias: 2, empates: 1, derrotas: 1 },
    { time: 'Time C', pontos: 5, vitorias: 1, empates: 2, derrotas: 1 },
    { time: 'Time D', pontos: 2, vitorias: 0, empates: 2, derrotas: 2 },
    { time: 'Time E', pontos: 1, vitorias: 0, empates: 1, derrotas: 3 }
];

// Função para atualizar a tabela
function atualizarTabela() {
    // Lógica de atualização da tabela (simulada aqui)
    tabelaDados.forEach(time => {
        time.pontos += Math.floor(Math.random() * 4) - 2; // Incrementa ou decrementa aleatoriamente pontos
        time.vitorias += Math.floor(Math.random() * 2) - 1; // Incrementa ou decrementa aleatoriamente vitórias
        time.empates += Math.floor(Math.random() * 2) - 1; // Incrementa ou decrementa aleatoriamente empates
        time.derrotas += Math.floor(Math.random() * 2) - 1; // Incrementa ou decrementa aleatoriamente derrotas
    });

    // Recria a tabela com os novos dados
    var tabela = document.getElementById('tabela');
    tabela.innerHTML = '';
    tabela.innerHTML += '<table>';
    tabela.innerHTML += '<tr><th>Time</th><th>Pontos</th><th>Vitórias</th><th>Empates</th><th>Derrotas</th></tr>';
    tabelaDados.forEach(time => {
        tabela.innerHTML += `<tr><td>${time.time}</td><td>${time.pontos}</td><td>${time.vitorias}</td><td>${time.empates}</td><td>${time.derrotas}</td></tr>`;
    });
    tabela.innerHTML += '</table>';
}

// Chama a função inicialmente para exibir a tabela
atualizarTabela();
