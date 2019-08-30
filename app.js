new Vue({
    el:"#vue-app",
    data:{
        name:"米斯特王",
        job:"web开发",
        website:"zhiyongking.com",
        websiteTag:"<a href='zhiyongking.com'>ZY</a>"
    },
    methods:{
        greet: function(time){
            return  'Good ' + time + "!" + " " +"Nice to meet you!" + " " + "My name is" + this.name;
        }
    }
});