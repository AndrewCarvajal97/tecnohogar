<script setup>
const sections = [
  {
    title: 'Información que es recogida',
    content: 'Nuestro sitio web podrá recoger información personal, por ejemplo: nombre, información de contacto como su dirección de correo electrónico e información demográfica. Así mismo, cuando sea necesario, podrá ser requerida información específica para procesar algún pedido o realizar una entrega o facturación.'
  },
  {
    title: 'Uso de la información recogida',
    content: 'Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible, particularmente para mantener un registro de usuarios, de pedidos en caso que aplique, y mejorar nuestros productos y servicios. Es posible que sean enviados correos electrónicos periódicamente a través de nuestro sitio con ofertas especiales, nuevos productos y otra información publicitaria que consideremos relevante para usted o que pueda brindarle algún beneficio.'
  },
  {
    title: 'Cookies',
    content: 'Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso para almacenarse en su ordenador. Al aceptar dicho fichero, se crea la cookie, que sirve para tener información respecto al tráfico web y también facilita las futuras visitas a una web recurrente.'
  },
  {
    title: 'Enlaces a Terceros',
    content: 'Este sitio web pudiera contener enlaces a otros sitios que pudieran ser de su interés. Una vez que usted haga clic en estos enlaces y abandone nuestra página, ya no tenemos control sobre al sitio al que es redirigido y, por lo tanto, no somos responsables de los términos o privacidad ni de la protección de sus datos en esos otros sitios terceros.'
  },
  {
    title: 'Control de su información personal',
    content: 'En cualquier momento, usted puede restringir la recopilación o el uso de la información personal que es proporcionada a nuestro sitio web. Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea requerido por un juez con una orden judicial.'
  }
]
</script>

<template>
  <div class="privacy-container">
    <section class="privacy-hero">
      <h1>Política de Privacidad</h1>
      <div class="intro-text">
        <p>
          El presente Política de Privacidad establece los términos en que TecnoHogar usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web.
        </p>
      </div>
    </section>

    <div class="privacy-content">
      <section v-for="section in sections" :key="section.title" class="privacy-section">
        <h2>{{ section.title }}</h2>
        <p>{{ section.content }}</p>
      </section>

      <section class="privacy-footer">
        <p>TecnoHogar se reserva el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento.</p>
        <div class="update-date">
          Última actualización: {{ new Date().toLocaleDateString() }}
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.privacy-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.privacy-hero {
  text-align: center;
  margin-bottom: 60px;
  background-color: #f5f5f5;
  padding: 40px;
  border-radius: 8px;
}

.privacy-hero h1 {
  font-size: 2.5em;
  color: #2c5282;
  margin-bottom: 20px;
}

.intro-text {
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1em;
  line-height: 1.6;
}

.privacy-content {
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.privacy-section {
  margin-bottom: 40px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.privacy-section h2 {
  color: #2c5282;
  font-size: 1.5em;
  margin-bottom: 20px;
  border-bottom: 2px solid #2c5282;
  padding-bottom: 10px;
}

.privacy-section p {
  line-height: 1.8;
  color: #4a5568;
}

.privacy-footer {
  margin-top: 60px;
  padding-top: 20px;
  border-top: 1px solid #ddd;
  text-align: center;
}

.update-date {
  margin-top: 20px;
  color: #666;
  font-style: italic;
}

@media (max-width: 768px) {
  .privacy-container {
    padding: 20px;
  }
  
  .privacy-hero {
    padding: 20px;
  }
  
  .privacy-section {
    padding: 15px;
  }
}
</style>