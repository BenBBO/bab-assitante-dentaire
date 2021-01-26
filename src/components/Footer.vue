<template>
  <div class="footer">
    {{ `© ${new Date().getFullYear()} Barbara Bouillet` }}
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 1em;
  text-align: center;
  background-color: #3f6e82;
  color: white;
}
</style>