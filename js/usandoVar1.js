{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}
console.log(sera) // Visível globalmente

function teste() {
    var local = 123
    console.log(local)
}

teste()
// console.log(local) // Não é visível fora do escopo da function