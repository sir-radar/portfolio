<template>
  <hr class="divider divider-center relative w-60 h-2 rounded-1 shadow-app-inner border-0" />
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
hr.divider:after {
  position: absolute;
  content: "";
  height: 0.25rem;
  background: #f56c6d;
  width: 50%;
  border-radius: 3em;
}

hr.divider-center:after {
  left: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
}
</style>>


