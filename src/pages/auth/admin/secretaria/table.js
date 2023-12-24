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
    name: "data_nascimento",
    label: "Data de nascimento",
    align: "left",
    field: "data_nascimento",
    sortable: true,
  },
  {
    name: "num_bilhete",
    label: "Nº do documento",
    align: "left",
    field: "num_bilhete",
    sortable: true,
  },
  {
    name: "status",
    label: "Status do membro",
    field: "status",
    align: "left",
    sortable: true,
  },
  {
    name: "options",
    align: "center",
    label: "Testificação",
    field: "options",
  },
];

export { columns };
