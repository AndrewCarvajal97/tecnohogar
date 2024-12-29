<!-- src/components/Icon.vue -->
<template>
    <div :class="wrapperClass">
      <font-awesome-icon 
        :icon="[prefix, iconName]" 
        :style="iconStyle" 
      />
    </div>
  </template>
  
  <script setup>
  import { defineProps, computed } from 'vue';
  import { FontAwesomeIcon } from '../fontawesome.js';
  
  const props = defineProps({
    iconName: {
      type: String,
      required: true
    },
    prefix: {
      type: String,
      default: 'fas'
    },
    wrapperClass: {
      type: String,
      default: 'icon-wrapper'
    },
    width: {
      type: [String, Number],
      default: '24px'
    },
    height: {
      type: [String, Number],
      default: '24px'
    },
    color: {
      type: String,
      default: 'black'
    }
  });
  
  // Computed property to handle inline styles dynamically
  const iconStyle = computed(() => ({
    width: typeof props.width === 'number' ? `${props.width}px` : props.width,
    height: typeof props.height === 'number' ? `${props.height}px` : props.height,
    color: props.color
  }));
  </script>
  
  <style scoped>
  .icon-wrapper {
    display: inline-flex;
    margin: auto;
    align-items: center;
    justify-content: center;
    padding: 0px;
    border-radius: 50%;
  }
  </style>
  