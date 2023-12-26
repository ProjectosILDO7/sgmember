import { createApp } from "vue";
const app = createApp({});
import JsonExcel from "vue-json-excel3";
const downloadExcel = app.component("downloadExcel", JsonExcel);

export { downloadExcel };
