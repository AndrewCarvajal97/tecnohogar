<template>
    <div class="contenedor">
        <div class="icon">
            <IconWrapper 
                :iconName="iconName" 
                :prefix="prefix" 
                width="40px" 
                height="40px" 
                :color="colorIcon" 
            />
        </div>
        <div class="info">
            <p class="superior" :style="superiorStyles">{{ InfoSuperiror }}</p>
            <p class="inferior" :style="inferiorStyles">{{ InfoInferior }}</p>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    colorIcon: {
        type: String,
        default: 'green'
    },
    iconName: {
        type: String,
        default: "whatsapp"
    },
    prefix: {
        type: String,
        default: "fab"
    },
    InfoSuperiror: {
        type: String,
        required: true
    },
    InfoInferior: {
        type: String,
        required: true
    },
    colorLetra: {
        type: String,
        default: 'black'
    },
    tamanoLetra: {
        type: String,
        default: '16px'
    }
})

const superiorStyles = computed(() => ({
    color: props.colorLetra, 
    fontSize: props.tamanoLetra
}))

const inferiorStyles = computed(() => ({
    color: props.colorLetra, 
    fontSize: props.tamanoLetra
}))
</script>

<style scoped>
.contenedor {
    display: flex;
    gap: 2rem;
    justify-content: start;
    align-items: center;
    margin: 1rem 0;
}


.info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
}

.info>.superior {
    font-size: 2rem;
    color: red;
}

.info>.inferior {
    font-size: 1rem;
    color: green;
}
</style>
