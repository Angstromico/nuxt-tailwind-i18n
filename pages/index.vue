<template>
  <div>
    <button class="mr-2" @click="setLocale('en')">en</button>
    <button class="ml-2" @click="setLocale('es')">es</button>
    <p>{{ $t('welcome') }}</p>
  </div>
</template>

<script setup>
const { setLocale } = useI18n()
</script>
