<template>
    <div id="tarif" class="tarif-container">
        <div class="container">
        <h1 class="main-title">
            Tarifs
        </h1>
        <h2 class="subtitle">Tarifs HT. TVA non applicable art. 293 du GGI</h2>
        <div class="d-flex table-container justify-content-evenly align-items-stretch">
        <div class="tarif-table">
            <h2 class="heading">
                Préventions
            </h2>
            <div class="block">
                <p>Individuelles Adultes ou Enfants
                    <ul class="options">
                          <li class="d-flex">
                              <div class="duration">1h à 1h30</div> 
                              <div class="price">65 €</div>                              
                            </li>
                            <li class="d-flex">
                              <div class="duration">Les rendez-vous suivants dans les mêmes créneaux</div> 
                              <div class="price">55 €</div>
                          </li>
                    </ul>  
                </p>
            </div>
            <div class="block">
                <p>Collectives Enfants (3 max)
                      <ul class="options">
                        <li class="d-flex">
                              <div class="duration">1h à 1h30</div> 
                              <div class="price">65 €</div>                              
                            </li>
                            <li class="d-flex">
                              <div class="duration">Les rendez-vous suivants dans les mêmes créneaux</div> 
                              <div class="price">55 €</div>
                          </li>
                    </ul>                 
                </p>
            </div>
             <div class="block">
                <p>ODF enfants et adultes
                      <ul class="options">
                        <li class="d-flex">
                              <div class="duration">15 min à 30 min</div> 
                              <div class="price">25 €</div>                              
                            </li>
                            <li class="d-flex">
                              <div class="duration">Les rendez-vous suivants dans les mêmes créneaux</div> 
                              <div class="price">18 €</div>
                          </li>
                    </ul>                 
                </p>
            </div>
        </div>
        <div class="tarif-table">            
            <h2 class="heading">
                Services
            </h2>
            <div class="block">
            <p>Assistanat pour Enfants   
                 <ul class="options">
                   <li class="d-flex">
                      <div class="duration">Heure</div> 
                      <div class="price">33 €</div>                              
                    </li>
                   <li class="d-flex">
                      <div class="duration">1/2 Journée (4h)</div> 
                      <div class="price">120 €</div>                              
                    </li>             
                   <li class="d-flex">
                      <div class="duration">Journée (8h)</div> 
                      <div class="price">220 €</div>                              
                    </li>                    
                </ul>
            </p>
            </div>
            <div class="block">
            <p>Assistanat en Omnipratique    
                 <ul class="options">        
                   <li class="d-flex">
                      <div class="duration">1/2 Journée (4h)</div> 
                      <div class="price">114 €</div>                              
                    </li>                   
                   <li class="d-flex">
                      <div class="duration">Journée (8h)</div> 
                      <div class="price">210 €</div>                              
                    </li>                                                                                       
                </ul>
            </p>
            </div>
            <div class="block">
                <p>Assistanat en Chirurgie et collage de Facettes    
                    <ul class="options">
                    <li class="d-flex">
                        <div class="duration">Heure</div> 
                        <div class="price">35 €</div>                              
                      </li>
                    <li class="d-flex">
                        <div class="duration">1/2 Journée (4h)</div> 
                        <div class="price">132 €</div>                              
                      </li>             
                    <li class="d-flex">
                        <div class="duration">Journée (8h)</div> 
                        <div class="price">240 €</div>                              
                      </li>
                    </ul>
                </p>
            </div>    
            <div class="block">
                <p>Assistanat ODF    
                    <ul class="options">
                    <li class="d-flex">
                        <div class="duration">Heure</div> 
                        <div class="price">33 €</div>                              
                      </li>
                    <li class="d-flex">
                        <div class="duration">1/2 Journée (4h)</div> 
                        <div class="price">120 €</div>                              
                      </li>             
                    <li class="d-flex">
                        <div class="duration">Journée (8h)</div> 
                        <div class="price">220 €</div>                              
                      </li>
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

$bgcolor: rgb(203 165 40 / 0.5);
$headingbg: #3f6e82;

.tarif-container {
  background-color: #efefef;

  .table-container {
    margin-top: 1.5rem;
  }
}

.big-heading {
  color: #fff;
  text-align: center;
  font-size: 26pt;
  padding: 20px;
}

.tarif-table {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  -moz-box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  -webkit-box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  width: 100%;

  &:first-child {
    margin-right: 2em;
  }

  .heading {
    background: $headingbg;
    width: 100%;
    padding: 20px;
    text-align: center;
    font-size: 15pt;
    color: white;
    text-transform: capitalize;
  }
  .block {
    margin: auto;
    padding: 1em 2em;
    border-bottom: 1px dashed rgba(0, 0, 0, 0.2);

    &:last-child {
      border-bottom: none;
    }

    .options {
      display: block;
      list-style: none;
      li {
        font-size: 13px;
        color: #676462;

        line-height: 2em;
        .duration {
          width: 75%;
        }
        .price {
          width: 25%;
          text-align: right;
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

  .tarif-table {
    margin: 0;
    margin-bottom: 1em;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>