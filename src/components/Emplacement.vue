<template>
  <l-map id="map" ref="map" :zoom="zoom" :center="grenoble">
    <l-tile-layer :url="url" />
    <l-marker :lat-lng="grenoble" :icon="icon">
      <l-popup>
        <div>Région Grenobloise</div>
      </l-popup>
    </l-marker>
    <l-marker :lat-lng="bourgoin" :icon="icon">
      <l-popup>
        <div>Région Berjallienne</div>
      </l-popup>
    </l-marker>
  </l-map>
</template>

<script>
import { LMap, LTileLayer, LMarker,  LPopup } from "vue2-leaflet";
import { latLng, icon } from "leaflet";
import "leaflet/dist/leaflet.css";

export default {
  name: "Emplacement",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      grenoble: latLng(45.188529, 5.724524),
      bourgoin : latLng(45.597108, 5.27212),
      zoom: 13,
        icon: icon({
          iconUrl: require("@/assets/logo.webp"),
          iconSize: [30, 39],
          
        }),      
    };
  },
  mounted(){
       this.$refs.map.mapObject.fitBounds([this.grenoble, this.bourgoin], { padding: [20, 20] });
  }
};
</script>

<style lang="scss" scoped>
#map{
    height: 30vh;
}
</style>
