<script setup lang="ts" generic="T extends IColumnsField, K extends ICollumnHeader<T>">
interface Props {
  isLoading?: boolean;
  columnFileds: T;
  columnsConfig: K;
  columnsData: ICollumnData<K>[];
}
const props = withDefaults(defineProps<Props>(), { isLoading: false });
const recordIds = ref<Set<number>>(new Set());

/**
 * @description: Hold all columns configuration
 */
const headerConfigs = computed(
  () => Object.values(props.columnsConfig) as ICollumnHeaderValue<T>[],
);

/**
 * @description: Extract column config
 */
const extractColumnConfig = (key: keyof K) => {
  const config = props.columnsConfig[key] as ICollumnHeaderValue<T>;
  return config;
};

/**
 * @description: Extract row data
 */
const extractRowDataProperty = (row: ICollumnData<K>, key: keyof K) => {
  const propertyValue = row[key];
  return propertyValue;
};

/**
 * @description: Hold as {key: value} -> ex: {id: 230, email: 340}, which 230 & 340 are width
 */
const reactiveColumnsWidth = reactive(
  Object.fromEntries(
    Object.entries(props.columnsConfig).map(([key, config]) => {
      const parseConfig = config as ICollumnHeaderValue<T>;
      return [key, parseConfig.width];
    }),
  ),
);

const dynamicMinWithTable = computed(() => {
  const lastColumnWidth = 240; //-- Please adjust this value if you want the last column minWidth
  return Object.values(reactiveColumnsWidth).reduce((p, n) => p + n, lastColumnWidth);
});

/**
 * @description: This fuction will invoked only when each column is get resized
 * @param key
 * @param width
 */
const handleColumnWidthResize = (key: string, width: number) => {
  reactiveColumnsWidth[key] = width;
};

/**
 * @description: Handle select all table records
 */
const handleSelectAll = (isChecked: boolean) => {
  if (!isChecked) {
    recordIds.value.clear();
    return;
  }

  const ids = (props.columnsData || [])
    .map((data) => {
      const id = (data as Record<string, unknown>)['id'];
      return id;
    })
    .filter((id) => typeof id === 'number');

  if (!ids?.length) return;
  recordIds.value = new Set(ids);
};

/**
 * @description: Handle select each table record
 */
const handleSelectIndividual = (isChecked: boolean, recordId: number | null | undefined) => {
  if (!recordId) return;
  if (isChecked) recordIds.value.add(recordId);
  else recordIds.value.delete(recordId);
};
</script>

<template>
  <div>
    <SmartTableScrollable>
      <table class="w-full table-fixed" :style="{ minWidth: `${dynamicMinWithTable}px` }">
        <thead>
          <tr>
            <!--! Select all record -->
            <th
              :style="{ width: `40px` }"
              class="sticky left-0 z-10 bg-blue-400/90 last:border-r-0"
            >
              <div class="flex items-center justify-center">
                <SmartCheckBox :disabled="isLoading" @change="handleSelectAll" />
              </div>
            </th>

            <SmartColumn
              v-for="(colConfig, i) in Object.entries(columnsConfig)"
              :key="(colConfig[1] as ICollumnHeaderValue<T>)?.key"
              :columnConfigs="colConfig[1] as ICollumnHeaderValue<T>"
              :is-last-colmn="i == (headerConfigs || []).length - 1"
              :class="{ 'sticky left-10 z-10 backdrop-blur-sm': i == 0 }"
              @change="
                (width) => {
                  handleColumnWidthResize(colConfig[0], width);
                }
              "
            />
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(row, i) in columnsData"
            :key="i"
            class="border-b border-b-white/70 duration-200 ease-linear last:border-none even:bg-blue-200 hover:bg-blue-400"
            :class="[
              {
                'bg-blue-500 even:bg-blue-500': recordIds.has(
                  extractRowDataProperty(row, 'id') as number,
                ),
              },
            ]"
          >
            <!--!select individual record  -->
            <td class="borde-r sticky left-0 border-r-white bg-blue-50 text-sm last:border-none">
              <div class="relative flex items-center justify-center">
                <SmartCheckBox
                  :is-checked="recordIds.has(extractRowDataProperty(row, 'id') as number)"
                  :disabled="isLoading"
                  @change="
                    (checked) =>
                      handleSelectIndividual(checked, (row as Record<string, any>)['id'] as number)
                  "
                />
              </div>
            </td>

            <td
              v-for="([colKey, valueData], j) in Object.entries(row)"
              :key="`${i}_${j}`"
              class="border-r border-r-white/70 bg-blue-50/70 text-sm last:border-none"
              :class="[
                'px-5 py-2',
                { 'sticky left-10 z-10 bg-blue-200 px-8 text-center font-medium': j == 0 },
                headerConfigs[i]?.class,
              ]"
            >
              <div>
                <span class="text-gray-700" :class="extractColumnConfig(colKey)?.textClass">{{
                  valueData
                }}</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </SmartTableScrollable>

    <!-- Data fetching loader -->
    <div class="flex items-center justify-between rounded-b-lg bg-blue-400/90 py-2 pr-2.5 pl-1.5">
      <span class="rounded-sm px-3 py-0.5 text-[11px] font-bold text-white">SVI AEC</span>
      <SmartLoader :is-loading="isLoading" />
      <span class="text-[11px] text-white">Smart Table 1.0.0</span>
    </div>
  </div>
</template>
