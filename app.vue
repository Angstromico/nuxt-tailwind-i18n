<script setup>
const { setLocale } = useI18n()
</script>

<template>
  <div
    class="bg-black text-white w-screen h-screen flex justify-center items-center"
  >
    <div>
      <button class="mr-2" @click="setLocale('en')">en</button>
      <button class="ml-2" @click="setLocale('es')">es</button>
      <p>{{ $t('welcome') }}</p>
    </div>
  </div>
</template>
