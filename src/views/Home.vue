<template>

  <v-container fluid class="pa-0">
    <v-app>
      <v-row>
        <v-col cols="12" class="pa-0 ma-0">
          <div class="cover">
            <h1 class="titles">THE BEST HOLLYWOOD MOVIE BROWSER</h1>
            <!-- <h2 class="stitles">BEST MOVIE BROWSER</h2> -->
            <div class="treve">
              <router-link to="/treve"><v-btn rounded color="#ffb32a" class="orderBtn">SEARCH FOR A MOVIE</v-btn></router-link>
            </div>
          </div>
          <div class="picture" >
            <div class="opacity"></div>
            <div class="icons">
              <v-btn fab color="#ffb32a" class="iconBtn"><v-icon>mdi-spa-outline</v-icon></v-btn> 
            </div>
          </div>
          <div class="plainColor ma-0 pa-0"></div>
        </v-col>
      </v-row>
      <v-row class="rows">
                 <v-col>
                <v-card
                  max-width="400"
                  class="mx-auto howWeWork"
                  style="background:#ffb32a;"
                  >
           <v-toolbar class="toolb" color="#ffb32a">
              <v-toolbar-title>NEW MOVIE RELEASES</v-toolbar-title>
            </v-toolbar>
              <v-list disabled>
                <v-list-item-group v-model="value" color="primary">
                  <v-list-item
                    v-for="(value, index) in shipInfo" v-bind:key="index">
                      <h3 v-text="value.shipName"></h3><v-spacer></v-spacer>
                      <h3 v-text="value.time_of_departure"></h3>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
              
                </v-card>
              </v-col>
       
      </v-row>
      
    </v-app>
    
  </v-container>

</template>

<script>
// export default {
//   name:'About',
//    data: () => ({
//       absolute: true,
//       overlay: false,
//       show: false,
//       showBtn:false,
//       showPorts:false,
      
//     }),
// }
import axios from 'axios'
 

export default {
  name: 'Home',
   data:function(){
        return{

        shipInfo:{
            
        },

        portInfo:{

        },

  
        dateElements: {
        hour:'numeric',
        minute:'numeric'
        }
     }
  },

    mounted(){
        axios
        .get('http://localhost:8087/api/movies')
        .then(response =>{
            this.movieInfo = response.data

        })
      }
      
  }


</script>

<style scoped lang="scss">

.txt {
  color: #ffffff;
}

.toolb {

  padding-left: 40px;
  // background-color: #1b1b1b;
}
.rows {
  background-image: url(../assets/enters.jpg);
  padding-top: 50px;
  padding-bottom: 90px;
  
}
.titles {
  color: #ffffff ;
  margin-bottom: -240px;
  font-weight: lighter;
  text-align:center; 
  padding-top: 170px;
  font-size: 50px;

}
.stitles {
  color: #ffffff ;
  margin-bottom: -110px;
  padding-left: 20px;
  font-weight: lighter;
  text-align:center; 
  padding-top: 80px;
  font-size: 20px;
}
  .cover {
     background-image: url(../assets/postermov.jpg);
     min-height: 500px;
     background-color: rgb(27, 27, 27);
     background-size: cover;
   
  }
.toolb {
  margin-top: 30px;
}
.treve {
    margin:0 auto;
    text-align:center;                 
    padding-top:240px;
}

.treve  a {
  text-decoration: none;


}
.picture {
    // background-image: url(../assets/postermov.jpg);
    // height: 200px;
    background-color: black;
    background-size: cover;
    background-position-y: -350px;
    position: relative;
    z-index: 2;

}


.icons {
  text-align:center;
  z-index: 1;
  // padding-top:40px;
  
}

.plainColor {
    height:150px; 
    background-color: #000000;
    
}

  
</style>
