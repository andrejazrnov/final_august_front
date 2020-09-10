<template>
    <v-container fluid pa-0>
        <v-app class="cover">
            <v-row justify="center" align="center">
                <v-col cols="12" md="6" justify="center" align="center">
                    <div class="formDiv">
                        <div class="completed" v-if="visibility">
                            <h1 class="mt-3">MOVIE:</h1><br/>
                            <v-row>
                                <v-col cols=12 md="6">
                                    <h2>MOVIE NAME: </h2>
                                    <p>{{movieName}}</p>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols=12 md="6">
                                    <h2>GENRE: </h2>
                                    <p>{{genre}}</p>
                                </v-col>
                                <v-col cols=12 md="6">  
                                    <h2>YEAR OF RELEASE: </h2>
                                    <p>{{yearOR}}</p>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols=12 md="6">
                                    <h2>CAST: </h2>
                                    <p>{{cast}}</p>
                                </v-col>
                            </v-row>
                        </div>
                        <h1 class="titles">SEARCH FOR A MOVIE{{formInfo}}</h1>
                        <div v-for="(value, index) in formInfo" v-bind:key="index">
                            <div>{{value.name}}{{index}}</div>
                        </div>
                        <v-form class="form" ref="form" v-model="valid" lazy-validation>
                            <v-row>
                                <v-col cols=12 md="12">
                                    <div class="input">
                                        <v-text-field solo label="Movie name" 
                                        prepend-inner-icon="mdi-card-text-outline" 
                                        autofocus="true" 
                                        :rules="[v => !!v || 'This field is required']"
                                        required
                                        v-model="movieName"
                                        ></v-text-field>
                                    </div>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <div class="input">
                                        <v-text-field solo  
                                        label="Genre"
                                        prepend-inner-icon="mdi-movie-filter"
                                        :rules="[v => !!v || 'This field is required']"
                                        required
                                        v-model="genre"
                                        ></v-text-field>
                                    </div>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <div class="input">
                                        <v-text-field solo 
                                        label="Year of release"
                                        prepend-inner-icon="mdi-calendar" 
                                        :rules="[v => !!v || 'This field is required']"
                                        required
                                        v-model="yearOR"
                                        ></v-text-field>
                                    </div>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="12">
                                    <div class="input">
                                        <v-text-field solo
                                        label="Notable Actors"
                                        prepend-inner-icon="mdi-face"
                                        :rules="[v => !!v || 'This field is required']"
                                        required
                                        v-model="cast"
                                        ></v-text-field>  
                                    </div>
                                </v-col>
                            </v-row>
                            <v-row>
                            </v-row>
                            <v-row justify="center" align="center">
                                <v-col cols="12" md="6">
                                    <v-btn @click="validate" :class="{ orange: !valid, blue: valid }" class="submitButton" rounded >SUBMIT</v-btn>
                                </v-col >

                            </v-row>
                        </v-form>
                    </div>
                </v-col>
            </v-row>
        </v-app>
    </v-container>
</template>

<script>
import axios from 'axios'

export default {
    name:'Search',
    data:function(){
        return{
            valid: true,
            visibility:false
    }

},

methods:{
    validate () {
    var form = this.$refs.form.validate()
    if(form == true){
    this.submitData()
    this.visibility = true;

    }
    
    
    },

    reset () {
    this.$refs.form.reset()
    },
},

submitData(){
    axios
    .post('http://localhost:8087/forms', {
        formData:{
            id:null,
            movieName:this.movieName,
            genre:this.genre,
            yearOR:this.yearOR,
            cast:this.cast,
        }
    })

    .then(function(response){
        console.log(response.data)
    })
    .catch(function (error){
        console.log(error)
    })
        
  }

}
</script>

<style scoped lang="scss">

.titles {
  color: #000000 ;
//   margin-bottom: -240px;
  font-weight: lighter;
  text-align:center; 
  font-size: 50px;

}

.cover {
    background-image: url(../assets/black.jpg);
    background-color: rgb(31, 31, 31);
    background-repeat: no-repeat;
    position: relative;
    background-size: cover;
    background-size: 100%;
      
}

.formDiv {
    background-color: #f3f3f3;
    padding:20px;
    color:black;
    border-radius: 30px;
    z-index:2;
    position: relative;
     
  
h1 {
    padding-bottom: 30px;
}

.submitButton {
    height:45px;
    width:120px;

}
}

.completed {
    background-color: rgb(255, 255, 255);
    z-index:1;
    position:absolute;
    top:0;
    left:0;
    height:100%;
    width:100%;

p{
    color:grey;
}

 }



  
</style>