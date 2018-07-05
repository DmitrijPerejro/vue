new Vue({
   el: '#app',
   data: {
       title: {
           '1': 'DynamicAttr',
           '2': 'add HTML',
           '3': 'Events',
           '4': 'Params in methods'
       },
       url: 'http://vuejs.org',
       myHTML: '<div><p>Hello, I m from script</p></div>',
       counter: 0,
       counterWithParams: 0
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
       addCountWithParams(step){
           this.counterWithParams += step
       }
    }
});