(function () {
    document.querySelectorAll('font>a').forEach(e => {
        const i = document.createElement('iframe');
        i.src = e.href;
        document.body.appendChild(i);
        i.onload = _ => {
            const iw = i.contentWindow;
            iw.alert = console.log;
            [...iw.document.querySelectorAll("input[type=radio]")].filter((_, i) => i % 5 === 0).forEach(x => x.checked = true);
            iw.document.querySelector("input#Btn_save").click();
        }
    })
})()