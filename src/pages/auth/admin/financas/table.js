import { formatCurrency } from "src/utils/formatCurrency.js";

const columns = [
  {
    name: "membro_id",
    required: true,
    label: "Código",
    align: "left",
    field: "membro_id",
    sortable: true,
  },
  {
    name: "dizimo",
    align: "left",
    label: "Dízimos",
    field: "dizimo",
    sortable: true,
    format: (val) => formatCurrency(val),
  },
  {
    name: "oferta",
    label: "Ofertas",
    align: "left",
    field: "oferta",
    sortable: true,
    format: (val) => formatCurrency(val),
  },
  {
    name: "data",
    label: "Data",
    align: "left",
    field: "data",
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
