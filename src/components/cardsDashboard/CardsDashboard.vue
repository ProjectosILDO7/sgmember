<template>
  <q-card class="my-card" bordered>
    <q-card-section horizontal>
      <div class="col flex flex-center text-body1 text-h6">
        {{ count }} - {{ label }}
      </div>
      <q-card-actions vertical class="justify-around q-px-md">
        <q-btn flat round :color="color" :icon="icon" />
      </q-card-actions>
    </q-card-section>
  </q-card>
</template>
<script>
import userApi from "src/composible/userApi.js";
import userAuthUser from "src/composible/userAuthUser";
import { ref, onMounted } from "vue";
export default {
  props: {
    tabela: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
      default: "mdi-database-outline",
    },
    color: {
      type: String,
      required: false,
      default: "primary",
    },
  },

  setup(props) {
    const { user } = userAuthUser();
    const { fetchCount } = userApi();
    const count = ref(0);

    onMounted(async () => {
      try {
        const response = await fetchCount(props.tabela, user.value.id);
        count.value = response.count;
      } catch (error) {}
    });

    return { count };
  },
};
</script>
