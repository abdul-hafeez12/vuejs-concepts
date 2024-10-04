<template>
  <div class="home">
    <h1>{{ configObjData.MainTitle }}</h1>
    <MyButton
     :data="configObjData"
      @GenericButton-onClick="$emit('SendButton-onClick')"
      @GenericButton1-onClick="$emit('ExitButton-onClick')"
    />
  </div>
</template>

<script>
import MyButton from "@/components/Button.vue";
import { reactive } from "vue";

export default {
  name: "AboutView",
  components: {
    MyButton,
  },
  props: {
    configData: {},
  },
  methods: {},
  setup(props) {
    const configObjData = reactive({
      ...props.configData,
    });

    return {
      configObjData,
    };
  },
};
</script>
