<script setup lang="ts" generic="T extends IColumnsField, K extends ICollumnHeader<T>">
interface Props {
  columnFileds: T;
  columnsConfig: K;
  columnData: ICollumnData<K>[];
}
const props = defineProps<Props>();
const headersValue = computed(() => Object.values(props.columnsConfig) as ICollumnHeaderValue<T>[]);

const myReactive = reactive(
  Object.fromEntries(
    Object.entries(props.columnsConfig).map(([key, config]) => {
      const parseConfig = config as ICollumnHeaderValue<T>;
      return [key, parseConfig.width];
    }),
  ),
);

const dynamicTableWith = computed(() => {
  return Object.values(myReactive).reduce((p, n) => p + n, 240);
});

const handleColumnChange = (key: string, width: number) => {
  myReactive[key] = width;
};
</script>

<template>
  <div class="relative overflow-hidden rounded-md">
    <p>Minwidth: {{ dynamicTableWith }}</p>
    <div class="relative scrollbar-none overflow-x-auto">
      <table
        class="w-full table-fixed"
        :style="{
          minWidth: `${dynamicTableWith}px`,
        }"
      >
        <!-- <colgroup>
          <col
            v-for="(col, index) in headersValue"
            :key="col.key"
            :style="{
              width: index == (headersValue || []).length - 1 ? 'auto' : `${col.width}px`,
            }"
            class="border-r border-white last:border-r-0"
          />
        </colgroup> -->

        <thead>
          <tr>
            <SmartColumn
              v-for="(col, index) in Object.entries(columnsConfig)"
              :key="index"
              :my-key="myReactive[col[0] as string]"
              :data="col[1] as ICollumnHeaderValue<T>"
              :is-last-colmn="index == (headersValue || []).length - 1"
              @change="(width) => handleColumnChange(col[0], width)"
            />
            <!-- <th
              v-for="(col, index) in tableHeader"
              :key="col.key"
              :style="{
                width: index === tableHeader.length - 1 ? 'auto' : `${col.width}px`,
              }"
              class="border-r border-white last:border-r-0"
            >
              <div
                class="flex items-center justify-between bg-blue-200 py-1.5 pr-1 text-start text-sm text-gray-700 uppercase"
                :class="col.headerClass"
              >
                <span> {{ col.label }}</span>
                <ColumnResizableTracker v-if="index != tableHeader.length - 1" :width="col.width" />
              </div>
            </th> -->
          </tr>
        </thead>

        <tbody>
          <tr v-for="(entry, i) in columnData" :key="i">
            <td
              v-for="(colData, index) in Object.values(entry)"
              :key="`${i}_${index}`"
              class="bg-blue-50 text-sm"
              :class="[headersValue[index]?.class]"
            >
              <div>
                {{ colData }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
