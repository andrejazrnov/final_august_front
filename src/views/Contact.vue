<template>
    <v-container fluid pa-0>
        <v-app class="cover" >
            <h1 class="titles">CONTACT</h1>
            <v-row justify="center" align="center"> 
                <v-col cols="12" md="4"  justify="center" align="center">
                    <div class="cdnt" shaped>
                            <h2>LEAVE US A NOTE</h2>
                            <v-form class="form" ref="form" v-model="valid" lazy-validation>
                                <v-row>
                                    <v-col cols="12" md="5">
                                        <v-text-field regular label="Name"
                                        placeholder="First & Last name"
                                        :rules="[v => !!v || 'Name is required',
                                        v => (v && v.length <= 10) || 'Name must be less than 10 characters']"
                                        required
                                        v-model="name" >
                                        </v-text-field> 
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field regular label="Email Address"
                                        placeholder="Input your address here..."
                                        :rules="[v => !!v || 'Email is required',
                                        v => /.+@.+\..+/.test(v) || 'The email must be valid']"
                                        required
                                        v-model="address" >
                                        </v-text-field> 
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12" md="5">
                                        <v-text-field regular label="Phone"
                                        placeholder="Input your number here..."
                                        :rules="[v => !!v || 'Number is required']"
                                        required
                                        v-model="phone" >
                                        </v-text-field> 
                                    </v-col>
                                          <v-col cols="12" md="6">
                                        <v-text-field regular label="Message"
                                        placeholder="Write your message here..."
                                        :rules="[v => !!v || 'Message is required']"
                                        required
                                        v-model="message" >
                                        </v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>

                                    <v-col cols="" md="3">
                                        <v-btn  @click="validate" :class="{ red: !valid, green: valid }" class="sendButton" rounded dark><v-icon>mdi-checkbox-marked-circle</v-icon></v-btn>
                                    </v-col>
                                </v-row>
                            </v-form>
                        </div>
                </v-col>
                <v-col cols="12" md="4" justify="center" align="center">
                    <div v-for="(info, index) in information" :key="index" class="contactInfo">
                        <p>{{info.address}}</p>
                        <p>{{info.email}}</p>
                        <p>{{info.ceo}}</p>
                    
                    </div>
                    
                </v-col>
                
            </v-row>
            
        </v-app>
       
    </v-container>
</template>



<script>
import axios from "axios";

export default {
    name:'Contact',
    data(){
        return{
            visibility:false,   
            valid: true,
            information:[

                {
                   
                    address: '3221 Toronto, Canada',
                    email:'flix@gmail.com',
                    ceo:'Lucious Montgomery & Serana W. Smith'
                }
            ],
        }
    },

methods:{
   validate () {
    var messageForm = this.$refs.form.validate()
    if(messageForm == true){
    this.submit()
    this.visibility = true;

    
    }
},

submit(){
    axios
    .post('http://localhost:8087/messages', {
        messageData:{
            id:null,
            name:this.name,
            address:this.address,
            phone:this.phone,
            message:this.message,
            
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

}
</script>

<style scoped lang="scss">
.titles {
  color: #ffffff ;
  margin-bottom: -240px;
  font-weight: lighter;
  text-align:center; 
  padding-top: 170px;
  font-size: 50px;

}

.form{
    border-radius: 50px;
}

.cover {
    background-image: url(../assets/cinema.jpg);
    background-repeat: no-repeat;
    position: relative;
    background-size: cover;
    background-size: 100%;

} 
h1  {
    color:white;
    font-size: 50px;
    text-align: center;
    padding-top:50px;
    font-weight: normal;
    
}
.cdnt {
    width:740px;
    min-height:300px;
    background-color: rgb(240, 240, 240);
    // opacity:10px;
    padding-left:20px;
    border-radius: 30px;
    

h2{
    padding:10px 0 10px 0;
    text-align:left;
    font-weight: 300;
}

.sendButton {
    margin-top:20px;
         
}
     
}

.contactInfo {
    width:300px;
    height:330px;
    background-color: #1d1d1d;
    border-radius: 0px 30px 30px 0px;
    padding-top: 35px;
   

h2  {
    padding-top:30px;
    color:white;
}

p {
    padding-top:30px;
    color:white;

}

.sendButton { 
    border-radius: 50%; 
}

}

</style>