//----------------------------- enum
// program1
enum Colors{
    red = 10,
    blue,
    green,
    pink
}
console.log(Colors.red)


//program2
enum Dir{
    EAST,
    WEST,
    NORTH,
    SOUTH
}
console.log(Dir.WEST)
console.log(Dir[2])


//program3
enum Gender{
    female = -1,
    male,
}
console.log(Gender.female)
console.log(Gender.male)


// program4w
enum HTTPSTATUS{
    OK = 200,
    NOTFOUND = 204,
    TIMEOUT = 503
}
function getstatus(status:HTTPSTATUS):string{
    switch(status){
        case HTTPSTATUS.OK:
            return "Ok"
        case HTTPSTATUS.NOTFOUND:
            return "NotFound"
        case HTTPSTATUS.TIMEOUT:
            return "Timeout"
        default:
            return "Unkown"
    }
}
getstatus(503)


