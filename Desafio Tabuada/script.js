function tabuada() {
    const num = document.getElementById('num');
    const end = document.getElementById('end');

    if (num === '' || num === ''){
        window.alert('Digite números!!')
    } else {

        const n1 = Number(num.value);
        const n2 = Number(end.value);
        let result;
        let answer = document.getElementById('resposta');
    
        answer.innerHTML = `Veja abaixo a tabuada do ${n1}: <br>`
        
        for (let i = 1; i <= n2; i++) {
    
            result = n1 * i
            answer.innerHTML += `${n1} x ${i} = ${result} <br>`;
    
        }
        
    }


}