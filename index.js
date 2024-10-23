function receivesAFunction(returnsANamedFunction){
    returnsANamedFunction()
}
function returnsANamedFunction(){
    function namedFunction(){
        return 'name'
    }
    return namedFunction
}
function returnsAnAnonymousFunction(){
    return function(){
        return "anonymous"

    }
}