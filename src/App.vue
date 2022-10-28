<script setup lang="ts">
import { Tree } from "./components/tree/index";
import { HInput } from "./components/input/index";
import { DefineComponent, ref } from "vue";
const myname = ref("hetx");
const data = ref([
  {
    label: "一级 1",
    level: 1,
    children: [
      {
        label: "二级 1-1",
        level: 2,
        children: [
          {
            label: "三级 1-1-1",
            level: 3,
          },
        ],
      },
    ],
  },
  {
    label: "一级 2",
    level: 1,
    open: true, // 新增
    children: [
      {
        label: "二级 2-1",
        level: 2,
        children: [
          {
            label: "三级 2-1-1",
            level: 3,
          },
        ],
      },
      {
        label: "二级 2-2",
        level: 2,
        children: [
          {
            label: "三级 2-2-1",
            level: 3,
          },
        ],
      },
    ],
  },
  {
    label: "一级 3",
    level: 1,
    open: true, // 新增
    children: [
      {
        label: "二级 3-1",
        level: 2,
        children: [
          {
            label: "三级 3-1-1",
            level: 3,
          },
        ],
      },
      {
        label: "二级 3-2",
        level: 2,
        open: true, // 新增
        children: [
          {
            label: "三级 3-2-1",
            level: 3,
          },
        ],
      },
    ],
  },
  {
    label: "一级 4",
    level: 1,
  },
]);
</script>

<template>
  <div>
    <!-- <Tree :data="data"></Tree> -->
    <div>{{ myname }}</div>
    <div class="m-10">
      <div class="text-4 text-#ff6700 bg-#ccc">Unocss</div>
    </div>
    <HInput v-model="myname" placeholder="名字"></HInput>
  </div>
</template>

<style scoped></style>
