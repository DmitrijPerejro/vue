new Vue({
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
           '9': 'inline style'
       },
       url: 'http://vuejs.org',
       myHTML: '<div><p>Hello, I m from script</p></div>',
       counter: 0,
       counterWithParams: 0,
       counterWithParamsTitle: '',
       formValue: '',
       isActive: true,
       color: 'blue',
       height: 150
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
        }
    },
    computed: {
        getCssClasses(){
            return {
                'background':this.color, 
                'height': this.height + 'px'
            }
        }
    }
});