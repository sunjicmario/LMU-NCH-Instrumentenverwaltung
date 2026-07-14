async function loadInstrumente() {

    const response = await fetch("data/instrumente.json");
    const instrumente = await response.json();

    const grid = document.querySelector(".grid");
    const search = document.getElementById("search");

    function anzeigen(filter = "") {

        grid.innerHTML = "";

        instrumente
            .filter(item =>
                item.name.toLowerCase().includes(filter.toLowerCase())
            )
            .forEach(item => {

                grid.innerHTML += `
                <div class="card" onclick="window.open('images/${item.bild}','_blank')">

                    <h3>${item.name}</h3>

                    <p><strong>Schrank:</strong> ${item.schrank}</p>

                    <p><strong>Fach:</strong> ${item.fach}</p>

                    <p><strong>Anzahl:</strong> ${item.anzahl}</p>

                    <p><strong>Sterilisiert:</strong> ${item.steril}</p>

                    <p><strong>Steril bis:</strong> ${item.gueltig}</p>

                </div>
                `;

            });

    }

    anzeigen();

    search.addEventListener("input", () => {
        anzeigen(search.value);
    });

}

loadInstrumente();