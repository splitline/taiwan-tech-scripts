courses = [...document.querySelectorAll('#Datagrid1 tr > td:nth-child(8)'),
    ...document.querySelectorAll('#Datagrid4 tr > td:nth-child(7)')
].map((e, i) => ({dim: e.textContent.trim(), id: i})).filter(t => t.dim.match(/^[A-F]$/));
credit = [...document.querySelectorAll('#Datagrid1 tr > td:nth-child(5)'),
    ...document.querySelectorAll('#Datagrid4 tr > td:nth-child(4)')
].map((e, i) => parseFloat(e.textContent) * courses.map(c => c.id).includes(i) || 0)
.reduce((a, b) => a + b);
dims = new Set(courses.map(c => c.dim));

alert(`
- 105 年度以前（含）入學：應達 16 學分，你已修 ${credit} 學分。
- 106 年度以後（含）入學：應達 15 學分，你已修 ${credit} 學分。
- A~F 向度中須修滿 4 個向度，你已修 ${dims.size} 向度（${[...dims].sort()}）。
`);