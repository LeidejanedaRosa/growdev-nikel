const myModal = new bootstrap.Modal("#transactions-modal") 
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

let data = {
    transactions: [],
}

document.getElementById("button-logout").addEventListener("click", logout);
checkLogged();

// ADICIONAR LANÇAMENTO

document.getElementById("transactions-form").addEventListener("submit", function(e){
    e.preventDefault();
    
    const value =  parseFloat(document.getElementById("value-input").value);
    const description =  document.getElementById("description-input").value;
    const date =  document.getElementById("date-input").value;
    const type =  document.querySelector('input[name="type-input"]:checked').value;

    data.transactions.unshift({
        value: value,
        description: description,
        date: date,
        type: type
    });
    saveData(data);
    e.target.reset();
    myModal.hide();

    getTransactions();
    alert("Lançamento adicionado com sucesso!");
}
)

function logout() {
    sessionStorage.removeItem("logged");
    localStorage.removeItem("session");
    window.location.href = "index.html";
}

function checkLogged() {
    if(session){
       sessionStorage.setItem("logged", session);
       logged = session
    }
    if(!logged){
        window.location.href = "index.html";
        return
    }

    const dataUser = localStorage.getItem(logged);
    if(dataUser){
        data = JSON.parse(dataUser);
    }
    getTransactions();
}
function saveData(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}

function getTransactions() {
    const transactions = data.transactions;
    let transactionsHtml=``;

    if(transactions.length){
        transactions.forEach((transaction, index) => {
            let type = "Entrada";

            if(transaction.type === "2"){
                type = "Saída";
            }
          
            transactionsHtml += `
                <tr>
                    <th scope="row">${transaction.date}</th>
                    <td>R$ ${transaction.value.toFixed(2)}</td>
                    <td>${type}</td>
                    <td>${transaction.description}</td>
                </tr>
            `;
        });
    }
    document.getElementById("transactions-list").innerHTML = transactionsHtml;
    
}