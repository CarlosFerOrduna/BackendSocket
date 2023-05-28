const socket = io();

socket.on("load_products", (data) => {
    let containerProducts = document.querySelector("#products");

    containerProducts.innerHTML = "";

    data.products.forEach((p) => {
        const div = document.createElement("div");
        div.className = "col-5";
        div.innerHTML = `<div class="card m-1" style="width: 18rem;">
                                <img src="${p.thumbnails}" class="card-img-top" alt="${p.title}">
                                <div class="card-body">
                                    <h5 class="card-title">${p.title}</h5>
                                    <p class="card-text">${p.id}</p>
                                    <p class="card-text">${p.description}</p>
                                    <p class="card-text">${p.code}</p>
                                    <p class="card-text">${p.price}</p>
                                    <p class="card-text">${p.status}</p>
                                    <p class="card-text">${p.stock}</p>
                                    <p class="card-text">${p.category}</p>
                                </div>
                            </div>`;
        containerProducts.append(div);
    });
});

const createProduct = () => {
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const code = document.querySelector("#code").value;
    const price = document.querySelector("#price").value;
    const status = document.querySelector("#status").value;
    const stock = document.querySelector("#stock").value;
    const category = document.querySelector("#category").value;
    const thumbnails = document.querySelector("#thumbnail").value;
    socket.emit("create_product", {
        title,
        description,
        code,
        price,
        status,
        stock,
        category,
        thumbnails,
    });
};

const deleteProduct = () => {
    const id = document.querySelector("#id").value;
    socket.emit("delete_product", { id });
};

const btnCreate = document.querySelector("#btn-create");
btnCreate.addEventListener("click", createProduct);

const btnDelete = document.querySelector("#btn-delete");
btnDelete.addEventListener("click", deleteProduct);
