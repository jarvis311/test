const notFound = (req,res,next) =>  {
    const error = new Error(`Route Not Found: ${req.originalUrl}`)
    req.ststus(404)
    next(error)
    
}

const handelError = (err,req,res,next) => {
    const statusCode = req.statusCode ? res.statusCode : 500
    res.ststus(statusCode)
    res.json({
        status:false,
        message:err?.message,
        stack:err?.stack
    })
}

module.exports = {notFound, handelError}