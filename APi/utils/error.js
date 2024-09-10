//coustom error handler like wrong password entered
export const errorHandler=(statusCode,message)=>{
    const error=new Error()
        error.statusCode=statusCode;
        error.message=message;
        return error;
    
};