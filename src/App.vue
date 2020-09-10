<template>
  <v-app >
    <Header/>
    <div id="nav">
      <Cookie id="cookie"/>
      </div>
      <v-main>
      <router-view/>
      </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import Cookie from './components/Cookie';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Cookie
    
  },

  data: function(){
       return {

    }
  }
}

</script>

<style lang="scss">

body{
  margin:0;
  padding:0;

}

</style>
