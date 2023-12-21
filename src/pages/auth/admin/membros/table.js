const columns = [
  {
    name: "nome",
    required: true,
    label: "Nome completo",
    align: "left",
    field: "nome",
    sortable: true,
  },
  {
    name: "naturalidade",
    align: "left",
    label: "Naturalidade",
    field: "naturalidade",
    sortable: true,
  },
  {
    name: "data_nascimento",
    label: "Data de nascimento",
    field: "data_nascimento",
    sortable: true,
  },
  {
    name: "num_bilhete",
    label: "Nº do documento",
    field: "num_bilhete",
    sortable: true,
  },
  {
    name: "status",
    label: "Status do membro",
    field: "status",
    sortable: true,
  },
  {
    name: "options",
    label: "Opções",
    field: "optins",
  },
];

export { columns };
