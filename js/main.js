const telefone = document.getElementById('number')

telefone.addEventListener('keypress', (e) => mascaraTelefone(e.target.value))
telefone.addEventListener('change', (e) => mascaraTelefone(e.target.value))

const mascaraTelefone = (valor) => {
   valor = valor.replace(/\D/g, "")
   valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
   valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
   telefone.value = valor
}