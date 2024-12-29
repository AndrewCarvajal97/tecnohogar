<template>
    <div class="contenedor">
        <IconWrapper 
            iconName="instagram" 
            prefix="fab" 
            width="30px" 
            height="30px" 
            color="#f7931e" 
        />
        <IconWrapper 
            iconName="facebook" 
            prefix="fab" 
            width="30px" 
            height="30px" 
            color="#f7931e" 
        />
        <IconWrapper 
            iconName="youtube" 
            prefix="fab" 
            width="30px" 
            height="30px" 
            color="#f7931e" 
        />
    </div>
</template>

<script setup>

</script>

<style  scoped>
    .contenedor{
        display: flex;
        min-width: 150px;
        align-items: center;
        justify-content: space-between;
        margin: 2rem 0;
    }
</style>