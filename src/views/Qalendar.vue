<template>
  <v-container fluid class="pa-0">
    <v-app>
      <div class="cover">
      <div class="aboutTitle">
        <h1>MOVIE SCHEDULES</h1>
      </div>
      </div>
        <div>
          
    <v-sheet
    
      tile
      height="54"
      color="#ffb32a"
      class="d-flex"
    >
      <v-btn
        icon
        class="ma-2"
        @click="$refs.calendar.prev()"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-select
        v-model="type"
        :items="types"
        dense
        outlined
        hide-details
        class="ma-2"
        label="type"
        
      ></v-select>
      <v-select
        v-model="mode"
        :items="modes"
        dense
        outlined
        hide-details
        label="event-overlap-mode"
        class="ma-2"
      ></v-select>
      <v-select
      
        v-model="weekday"
        :items="weekdays"
        dense
        outlined
        hide-details
        label="weekdays"
        class="ma-2"
      ></v-select>
      <v-spacer></v-spacer>
      <v-btn
        icon
        class="ma-2"
        @click="$refs.calendar.next()"
      >
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-sheet>
    <v-sheet height="600">
      <v-calendar
        ref="calendar"
        v-model="value"
        :weekdays="weekday"
        :type="type"
        :events="events"
        :event-overlap-mode="mode"
        :event-overlap-threshold="30"
        :event-color="getEventColor"
        @change="getEvents"
      ></v-calendar>
    </v-sheet>
  </div>
    </v-app>
  </v-container>
</template>

<script>

  export default {
    
    
    data: () => ({
      type: 'month',
      types: ['month', 'week', 'day', '4day'],
      mode: 'stack',
      modes: ['stack', 'column'],
      weekday: [0, 1, 2, 3, 4, 5, 6],
      weekdays: [
        { text: 'Sun - Sat', value: [0, 1, 2, 3, 4, 5, 6] },
        { text: 'Mon - Sun', value: [1, 2, 3, 4, 5, 6, 0] },
        { text: 'Mon - Fri', value: [1, 2, 3, 4, 5] },
        { text: 'Mon, Wed, Fri', value: [1, 3, 5] },
      ],
      value: '',
      events: [],
      colors: ['blue', 'black', 'deep-purple', 'cyan', '#464646', '#ffb32a', 'grey darken-1'],
      names: ['Avengers:Endgame', 'Arrival', 'Pulp Fiction', 'The Godfather', 'Lord of the Rings : The Two Towers', 'Interstellar', 'Joker', 'Knives Out'],
    }),
    methods: {
      getEvents ({ start, end }) {
        const events = []

        const min = new Date(`${start.date}T00:00:00`)
        const max = new Date(`${end.date}T23:59:59`)
        const days = (max.getTime() - min.getTime()) / 86400000
        const eventCount = this.rnd(days, days + 20)

        for (let i = 0; i < eventCount; i++) {
          const allDay = this.rnd(0, 3) === 0
          const firstTimestamp = this.rnd(min.getTime(), max.getTime())
          const first = new Date(firstTimestamp - (firstTimestamp % 900000))
          const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
          const second = new Date(first.getTime() + secondTimestamp)

          events.push({
            name: this.names[this.rnd(0, this.names.length - 1)],
            start: first,
            end: second,
            color: this.colors[this.rnd(0, this.colors.length - 1)],
            timed: !allDay,
          })
        }

        this.events = events
      },
      getEventColor (event) {
        return event.color
      },
      rnd (a, b) {
        return Math.floor((b - a + 1) * Math.random()) + a
      },
    },
  }
</script>

<style scoped lang="scss">

.cover {
    // background-image: url(../assets/postermov.jpg);
    background-color: rgb(17, 17, 17);
    min-height: 250px;
    background-size: cover;
    background-position-y: -100px;
            
}

.aboutTitle {
    z-index:1;
    position: relative;
  
}

.aboutTitle h1 {
    padding-top:50px;
    color: #ffb32a;
    font-weight: lighter;
    font-size: 80px;
    text-align: center;
    z-index:2;

  }
    
h1 {
  text-align: center;
  padding-top:20px;

}

p {
  padding:30
}
  
.place {
    width: 300px;
    height:300px;
    border-radius: 50%;
    background-color: white;
    transition:1s, width;
     margin-left:300px;
    box-shadow: 2px 0px 2px 2px grey;

h1 {
  padding-top:30px;
  padding-left:50px;
  }

p {
  padding:30px;

}
}

  
  
</style>