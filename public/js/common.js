(function(factory){
    if(typeof(define)=="function"){
        define(factory);
    }else{
        window.page=factory()||{}; 
    }; 
})(function(){
    
    return {
        test:function(){
               alert("cc");
        } 
    } 
});
