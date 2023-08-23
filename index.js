fetch("https://striveschool-api.herokuapp.com/books")
  .then((responseFetch) => {
    if (responseFetch.ok) {
      return responseFetch.json();
    }
  })
  .then((ciao) => {
    console.log(ciao);

    const row = document.querySelector(".row");
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
          <button class="btn btn-primary">scarta</button>
        </div>
        </div>`;
    });
    const scartaBtn = document.querySelectorAll(".btn-primary");
    scartaBtn.forEach((btnSingle) => {
      const allCol = document.querySelectorAll(".col-3");
      allCol.forEach((oneCol) =>
        btnSingle.addEventListener("click", function (e) {
          e.currentTarget.closest(".card").style.display = "none";
        })
      );
    });
  })
  .catch((error) => console.log(error));
