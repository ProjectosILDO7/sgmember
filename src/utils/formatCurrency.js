const formatCurrency = (val) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "AOA",
  }).format(val);
  return formatter;
};

export { formatCurrency };
