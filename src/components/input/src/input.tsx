import { defineComponent } from "vue";
import "./input.scss";
export default defineComponent({
  name: "h-input",
  props: {
    modelValue: {
      type: String,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit, attrs }) {
    return () => {
      return (
        <>
          <input
            id='myinput'
            value={props.modelValue}
            {...attrs}
            class={`text-10
            px-8
            py-2
            rounded-10
          w-100 h-10`}
            onInput={(e: any) => {
              emit("update:modelValue", e.target.value);
            }}
          ></input>
          <label htmlFor='myinput'>名字</label>
        </>
      );
    };
  },
});
