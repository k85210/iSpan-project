<script setup>
import { computed } from 'vue';

const props = defineProps({
  label: {
    type: String,
    default: 'Button'
  },
  color: {
    type: String,
    default: 'gdg', // gdg, outline-gdg, primary, secondary, etc.
  },
  size: {
    type: String,
    default: 'md', // sm, md, lg
  },
  type: {
    type: String,
    default: 'button'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  width: {
    type: String,
    default: '' // e.g., '150px', '100%', 'auto'
  },
  fullWidth: {
    type: Boolean,
    default: false
  }
});

defineEmits(['click']);

const buttonClasses = computed(() => {
  const classes = ['btn'];
  
  // Color mapping
  if (props.color === 'gdg') {
    classes.push('btn-gdg');
  } else if (props.color === 'outline-gdg') {
    classes.push('btn-outline-gdg');
  } else {
    classes.push(`btn-${props.color}`);
  }

  // Size mapping
  if (props.size === 'sm') {
    classes.push('btn-sm');
  } else if (props.size === 'lg') {
    classes.push('btn-lg');
  }
  
  return classes.join(' ');
});

const buttonStyles = computed(() => {
  const styles = {};
  
  if (props.fullWidth) {
    styles.width = '100%';
  } else if (props.width) {
    styles.width = props.width;
  }
  
  return styles;
});
</script>

<template>
  <button 
    :type="type" 
    :class="buttonClasses" 
    :style="buttonStyles"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<style scoped>
/* Scoped styles if needed, but mostly relying on custom.scss */
.btn {
  font-weight: 500;
  letter-spacing: 1px;
  height: auto; /* 確保高度不會因寬度調整而改變 */
}
</style>
