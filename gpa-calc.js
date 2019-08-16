d = {"A+": 4.3, "A": 4.0, "A-": 3.7, "B+": 3.3, "B": 3.0, "B-": 2.7, "C+": 2.3, "C": 2.0, "C-": 1.7, "D": 1.0, "E": 0.0, "X": 0.0};
c = [...document.querySelectorAll('#Datagrid4 tr > td:nth-child(4)')].map(e => parseFloat(e.innerText));
g = ([...document.querySelectorAll('#Datagrid4 tr > td:nth-child(5)')]).map((e, i) => d[e.innerText] * c[i]);
gpa = g.reduce((a, b) => a + (b || 0), 0) / c.filter((_, i) => !isNaN(g[i])).reduce((a, b) => a + b);
alert("GPA=" + gpa);