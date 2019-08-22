[...document.querySelectorAll('#Datagrid1 tr')].slice(1).map(e => {
    data = [...e.querySelectorAll('td')].slice(1).map(e => e.textContent.trim());
    return Object.assign({},
        ...["semester", "no", "name", "credits", "gp", "note", "dim"]
        .map((k, i) => ({
            [k]: data[i]
        }))
    );
})