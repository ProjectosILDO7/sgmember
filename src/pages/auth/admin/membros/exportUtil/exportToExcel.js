// Importe o módulo exceljs
import * as ExcelJS from "exceljs";

// Função para exportar dados para o Excel
export function exportToExcel(data) {
  // Crie uma nova pasta de trabalho do Excel
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Sheet 1");

  // Adicione os cabeçalhos da tabela
  const headers = Object.keys(data[0]);
  worksheet.addRow(headers);

  // Adicione os dados à planilha
  data.forEach((item) => {
    const row = [];
    headers.forEach((header) => {
      row.push(item[header]);
    });
    worksheet.addRow(row);
  });

  // Crie um nome de arquivo para o Excel
  const fileName = "exportar_lista_membros.xlsx";

  // Salve o arquivo Excel
  workbook.xlsx.writeBuffer().then((buffer) => {
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  });
}
