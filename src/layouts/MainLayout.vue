<template>
  <q-layout view="hHh lpR lFf" class="main-layout">
    <q-header elevated class="main-layout__header">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
            Quasar Blog
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer show-if-above v-model="left" bordered content-class="bg-white ">
      <q-list dense padding class="rounded-borders text-black q-pt-lg">
        <q-item clickable v-ripple :to="{ name: 'PostsList'}">
          <q-item-section avatar class="q-py-md">
            <q-icon color="black" name="home" />
          </q-item-section>
          <q-item-section>Home</q-item-section>
        </q-item>

        <q-item clickable v-ripple :to="{ name: 'AuthorsList'}">
          <q-item-section avatar class="q-py-md">
            <q-icon color="black" name="person" />
          </q-item-section>
          <q-item-section>Autores</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-layout{
    &__header{
      line-height: 3;
    }
    &q-list{
      z-index: 200;
    }
  }
</style>
