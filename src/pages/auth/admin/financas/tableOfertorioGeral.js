import { formatCurrency } from "src/utils/formatCurrency.js";

const columns = [
  {
    name: "valor",
    label: "Oferta Dominical",
    align: "left",
    field: "valor",
    sortable: true,
    format: (val) => formatCurrency(val),
  },
  {
    name: "created_at",
    label: "Data",
    align: "left",
    field: "created_at",
    sortable: true,
  },
  {
    name: "options",
    align: "left",
    label: "Opções",
    field: "options",
  },
];

export { columns };
