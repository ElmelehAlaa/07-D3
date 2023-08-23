fetch("https://striveschool-api.herokuapp.com/books")
  .then((responseFetch) => {
    if (responseFetch.ok) {
      return responseFetch.json();
    }
  })
  .then((ciao) => {
    console.log(ciao);

    const row = document.querySelector("#rowBooks");
    console.log(row);
    let col;
    ciao.forEach((books) => {
      col = document.createElement("div");
      col.className = "col-3";
      console.log(col);
      row.appendChild(col);
      col.innerHTML = ` <div class="card">
        <img src="${books.img}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${books.title}</h5>
          <p class="card-text">
            ${books.price}$
          </p>
          <button class="btn btn-secondary">Scarta</button>
          <button class="btn btn-primary">Compra ora</button>
        </div>
        </div>`;
    });
    const scartaBtn = document.querySelectorAll(".btn-secondary");
    scartaBtn.forEach((scartaSingle) => {
      const allCol = document.querySelectorAll(".col-3");
      allCol.forEach((oneCol) =>
        scartaSingle.addEventListener("click", function (e) {
          e.currentTarget.closest(".card").style.display = "none";
        })
      );
    });
    const compraBtn = document.querySelectorAll(".btn-primary");
    compraBtn.forEach((compraSingle) =>
      compraSingle.addEventListener("click", function (e) {
        const carrello = e.currentTarget.closest(".card");
        console.log(carrello);
        const carrelloRow = document.querySelector("#carrelloRow");
        carrelloRow.appendChild(carrello);
        carrello.className = "col-2";
        compraSingle.style.display = "none";
      })
    );
  })
  .catch((error) => console.log(error));
