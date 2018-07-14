let vue1 = new Vue({
   el: '#app',
   data: {
       title: {
           '1': 'DynamicAttr',
           '2': 'add HTML',
           '3': 'Events',
           '4': 'Params in methods',
           '5': 'Modification events',
           '6': 'Modification events board',
           '7': 'v-model',
           '8': 'css class',
           '9': 'inline style',
           '10': 'v-if v-else-if v-else',
           '11': 'v-show == display:none',
           '12': 'v-for',
           '13': 'computed',
           '14': 'watch',
           '15': 'instance Vue',
           '16': 'ref',
           '17': '$mount for Vue and tamplate'
       },
       url: 'http://vuejs.org',
       myHTML: '<div><p>Hello, I m from script</p></div>',
       counter: 0,
       counterWithParams: 0,
       counterWithParamsTitle: '',
       formValue: '',
       isActive: true,
       color: 'blue',
       height: 150,
       isVisible: true,
       skills: '',
       isShow: true,
       people: [
           {
               name: 'Alex',
               age: 25,
               skills: 'JS, PHP, HTML'
           },
           {
               name: 'Denis',
               age: 30,
               skills: 'none'
           },
           {
               name: "Olga",
               age:40,
               skills: 'PHP'
           }
       ],
       perejro: {
           'name': "Dima",
           'lastname': "Krulkevych",
           'age': 27,
           'skills': 'Front-end'
       },
       counter3: 0,
       counter4: 0
   },
    methods: {
       addCount(){
           this.counter++;
       },
       hover(event) {
           event.target.style.outline = '2px solid blue'
       },
       unHover(event) {
           event.target.style.outline = ''
       },
       addCountWithParams(step,str,event){
           this.counterWithParamsTitle = str;
           this.counterWithParams += step;

           if (step % 2 == 0) {
               event.target.style.color = 'blue'
           } else {
               event.target.style.color = 'red'
           }
       },
       showAlert(){
           alert(`I am ${this.title[5]}`)
       },
        showAlertBoard(event){
           alert(event.target.value)
       },
       addCounter3(){
           this.counter3++;
       },
       subCounter3(){
        this.counter3--;
       },
       addCounter4(){
           this.counter4++;
       },
       subCounter4(){
        this.counter4--;
       },
       refsUpdate(){
           let $h2 = this.$refs.heading;
           $h2.textContent = 'Native JS methods';

       }
    },
    computed: {
        getCssClasses(){
            return {
                'background':this.color, 
                'height': this.height + 'px'
            }
        },
        resultCounter3(){
            console.log('Now I m work');
            return this.counter3 > 3 ? 'Counter > 3' : 'counter < 3'
        }
    },
    watch: {
        counter4() {
            console.log(`now сounter4 is ${this.counter4}`)
        }
    }
});


let Vue2 = new Vue ({
    el: '#app2',
    data: {
        title: vue1.title
    }
})

let vue = new Vue({
    data: {
        title: vue1.title[17]
    },
    template: '<div><h2 class="alert alert-primary">{{ title }}</h2></div>'
})

vue.$mount('#app3');