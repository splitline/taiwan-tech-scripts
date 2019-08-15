d = {"A+": 4.3, "A": 4.0, "A-": 3.7, "B+": 3.3, "B": 3.0, "B-": 2.7, "C+": 2.3, "C": 2.0, "C-": 1.7, "D": 1.0, "E": 0.0, "X": 0.0};
c=[...document.querySelectorAll('#Datagrid1 tr > td:nth-child(5)'),
    ...document.querySelectorAll('#Datagrid4 tr > td:nth-child(4)')]
    .map(e=>parseFloat(e.innerText));
g=([... document.querySelectorAll('#Datagrid1 tr > td:nth-child(6)'),
    ...document.querySelectorAll('#Datagrid4 tr > td:nth-child(5)')])
    .map((e,i)=>d[e.innerText]*c[i]).slice(1);
gpa=g.reduce((a,b)=>a+(b||0)) / c.slice(1).filter((_,i)=>!isNaN(g[i])).reduce((a,b)=>a+b);
alert("gpa="+gpa);
