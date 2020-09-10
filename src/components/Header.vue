<template>

  <v-toolbar color=#000000>
    <STYLE>A {text-decoration: none;} </STYLE>
     <router-link to="/"><v-btn fab color="#ffb32a" class="iconBtn"><v-icon>mdi-facebook-gaming</v-icon></v-btn></router-link>
     <router-link to="/"><h1>FLIX</h1></router-link>
    
    <v-spacer></v-spacer>
    <nav class="d-none d-sm-flex">
      <router-link to="/"><span>HOME</span></router-link>  
      <router-link to="/qalendar"><span>CALENDAR</span></router-link> 
      <router-link to="/treve"><span>SEARCH</span></router-link>
      <router-link to="/contact"><span>CONTACT</span></router-link>
    </nav>
    <div class="text-center d-sm-flex d-md-none">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color=#000000
            dark
            v-bind="attrs"
            v-on="on"
          >
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            router :to="item.route"
            
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-toolbar>
</template>



<script>
export default {
    name:'Header',
      data: () => ({
      items: [
        { title: 'HOME', route:'/', },
        { title: 'CALENDAR', route:'/qalendar', },
        { title: 'SEARCH', route:'/treve', },
        { title: 'CONTACT', route:'/contact', },
      ],
    }),
  
}
</script>


<style scoped lang="scss">

// .iconBtn{
//   text-decoration-style: none;
// }
.toolbar{
  background-color: #000000;
  // border-width: 40px;

  }
  
  h1{
    // font-weight: lighter; 
    text-decoration: none;
    font-size: 60px;
    font-family: "Arial", sans-serif;
    color:white;
    padding: 10px;
}
  h1:hover{
    color: #ffa600;
  }

  nav a{
    padding: 0 15px;
    text-decoration: none;
    color:#ffff
  }

  nav a:hover {
  // border-bottom: 1px solid white;
  color: #ffa600;
  // background-color: rgba(143, 143, 143, 0.432);
  // border-radius: 5%;
}



</style>