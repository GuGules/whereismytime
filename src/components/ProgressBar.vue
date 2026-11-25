<script setup>
import { computed } from 'vue'

const props = defineProps({
  value: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  label: {
    type: String,
    default: 'Progression',
  },
})

const percentage = computed(() => {
  if (props.max <= 0) return 0
  return Math.min(100, Math.max(0, (props.value / props.max) * 100))
})
</script>

<template>
  <div class="progress">
    <div class="progress__label">
      <span>{{ label }}</span>
      <span>{{ Math.round(percentage) }} %</span>
    </div>

    <div
      class="progress__track"
      role="progressbar"
      :aria-label="label"
      :aria-valuenow="Math.round(percentage)"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div
        class="progress__fill"
        :style="{ width: `${percentage}%` }"
      />
    </div>
  </div>
</template>

<style scoped>
.progress {
  width: 100%;
}

.progress__label {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: #333;
  font-size: 0.875rem;
}

.progress__track {
  height: 0.75rem;
  overflow: hidden;
  border-radius: 999px;
  background: #e5e7eb;
}

.progress__fill {
  height: 100%;
  border-radius: inherit;
  background: #3b82f6;
  transition: width 250ms ease;
}
</style>