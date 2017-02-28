
export default class DatarService {
    static getData(data,callback) {
         $.ajax({
            type:"POST",
            url:"/api/metal/v1/index.do",
            data: JSON.stringify(data),
            dataType:"json",
            contentType:"application/json",
            error:function () {
                return "error";
            },
            success:function (result) {
                console.log("result:"+JSON.stringify(result))
                callback(result)
            }
            })
    }

}

