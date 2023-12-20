import { useQuasar } from "quasar";

export default function usenotification() {
  const $q = useQuasar();

  const notifySuccess = async (message) => {
    $q.notify({
      position: "top-right",
      type: "positive",
      message: message || "Tudo certo",
    });
  };

  const notifyError = async (message) => {
    $q.notify({
      position: "top-right",
      type: "negative",
      message: message || "Falha na execução",
    });
  };

  return {
    notifySuccess,
    notifyError,
  };
}
