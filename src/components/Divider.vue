<template>
  <hr
    class="divider divider-center relative w-10 h-2 rounded-1 shadow-app-inner border-0"
  />
</template>

<script>
export default {};
</script>

<style>
hr.divider:after {
  position: absolute;
  content: '';
  height: 0.25rem;
  background: #f56c6d;
  width: 50%;
  border-radius: 3em;
}

hr.divider-center:after {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
