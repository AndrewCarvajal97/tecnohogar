<template>
    <div class="contenedor">
        <div class="icon">
            <IconWrapper 
                :iconName="icon" 
                prefix="fas" 
                width="30px" 
                height="30px" 
                color="#f7931e" 
            />  
        </div>
        <div class="info">
            <h2> {{ title }} </h2>
            <p>{{ descripcion }}</p>
        </div>
    </div>
</template>

<script setup>
    const props=defineProps({
        icon:{
            type:String,
            default:"check-circle"
        },
        title:{
            type:String,
            default:"Título por defecto"
        },
        descripcion:{
            type:String,
            default:"Descripción por defecto"
        }
    })
</script>

<style  scoped>
    .contenedor{
        display: flex;
        max-width:300px;
        border-right: 1px solid rgba(128, 128, 128, 0.168) ;
        
    }
    .icon{
        margin-right: 20px;
    }
    .info{
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
    }
    .info h2{
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    .info p{
        font-size: 1rem;
        font-weight: 800;
        color: gray;
    }
    @media (max-width: 768px) {
        .contenedor{
            min-width: 80%;
        }

    }
</style>