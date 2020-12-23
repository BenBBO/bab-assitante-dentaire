<template>
    <div id="tarif" class="tarif-container">
        <div class="container">
        <h1 class="main-title">
            Tarifs
        </h1>
        <div class="d-flex table-container justify-content-evenly align-items-stretch">
        <div class="table">
            <h2 class="heading">
                Préventions
            </h2>
            <div class="block">
                <p>Individuelles Adultes ou Enfants
                    <ul class="options">
                        <li>1h à 1h30 <span class="price">35 €</span></li>
                        <li>Les rendez-vous suivants dans les mêmes créneaux <span class="price">55 €</span></li>
                    </ul>  
                </p>
            </div>
            <div class="block">
                <p>Collectives Enfants (3 max)
                      <ul class="options">
                        <li>1h à 1h30 <span class="price">35 €</span></li>
                        <li>Les rendez-vous suivants dans les mêmes créneaux <span class="price">55 €</span></li>
                    </ul>                 
                </p>
            </div>
        </div>
        <div class="table">            
            <h2 class="heading">
                Services
            </h2>
            <div class="block">
            <p>Assistanat pour Enfants   
                 <ul class="options">
                    <li>Heure <span class="price">33 €</span></li>
                    <li>1/2 Journée (4h) <span class="price">120 €</span></li>
                    <li>Journée (8h) <span class="price">220 €</span></li>
                </ul>
            </p>
            </div>
            <div class="block">
            <p>Assistanat en Omnipratique    
                 <ul class="options">                    
                    <li>1/2 Journée (4h) <span class="price">114 €</span></li>
                    <li>Journée (8h) <span class="price">210 €</span></li>
                </ul>
            </p>
            </div>
            <div class="block">
                <p>Assistanat en omnipratique et collage de Facettes    
                    <ul class="options">
                        <li>Heure <span class="price">35 €</span></li>
                        <li>1/2 Journée (4h) <span class="price">132 €</span></li>
                        <li>Journée (8h) <span class="price">240 €</span></li>
                    </ul>
                </p>
            </div>
    
    
    </div>
    </div>
    </div>    
</div>
</template>
<script>
export default {
  name: "Tarifs",
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins");
$bgcolor: rgb(203 165 40 / 0.5);
$headingbg: #f0f4f2;

.tarif-container {
  background: $bgcolor;
  font-family: "Poppins", sans-serif;
}

.big-heading {
  color: #fff;
  text-align: center;
  font-size: 26pt;
  padding: 20px;
}

.table {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  -moz-box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  -webkit-box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  &:first-child{
      margin-right: 2em;
  }

  .heading {
    background: $headingbg;
    width: 100%;
    padding: 20px;
    text-align: center;
    font-size: 15pt;
    color: #272625;
    text-transform: capitalize;
  }
  .block {
    margin: auto;
    padding: 1em 3em;
    border-bottom: 1px dashed rgba(0, 0, 0, 0.2);

    &:last-child {
      border-bottom: none;
    }

    .price {
      float: right;
      position: relative;
      right: 30px;
    }
    .options {
      display: block;
      list-style: none;
      li {
        font-size: 13px;
        color: #676462;

        line-height: 2em;

        .price {
          font-weight: 600;
          font-size: 1.2em;
        }
      }
    }
  }
}
p {
  text-align: left;
  color: #272625;
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .table-container {
    flex-direction: column;
    padding: 1em;
  }

  .table {
    margin: 0;
    margin-bottom: 1em;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>