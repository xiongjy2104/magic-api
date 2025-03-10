//package trace;
//
//import com.alibaba.fastjson.JSON;
//import com.alibaba.fastjson.JSONArray;
//import com.alibaba.fastjson.JSONObject;
//import com.alibaba.fastjson.util.ParameterizedTypeImpl;
//import com.bingoplus.office.bean.greatQuery.GreatQueryResponse;
//import com.bingoplus.office.bean.greatQuery.GreatQueryResponsePageData;
//import com.cn.schema.request.WSDepositReport;
//import com.cn.schema.request.WSQueryCountAmount;
//import com.fasterxml.jackson.core.type.TypeReference;
//
//import java.lang.reflect.Type;
//import java.util.List;
//
//public class GenericJsonTest
//{
//    public static void main(String[] args) {
//        String post = """
//                {"code":200,"message":"success","data":{"count":0,"sumamount":0.000000,"sumamount1":0,"depositornum":0,"firstdepositornum":0,"sumbtc":0E-8,"sumfeeamount":0.000000}
//                ,"timestamp":1712352,"executeTime":123}
//               """;
//        String post3 = """
//                {"code":200,"message":"success","data":{"total":1, "list": [{"count":0,"sumamount":0.000000,"sumamount1":0,"depositornum":0,"firstdepositornum":0,"sumbtc":0E-8,"sumfeeamount":0.000000}]}
//                ,"timestamp":1712352,"executeTime":123}
//               """;
////        GreatQueryResponse<JSONObject> resp1 =  JSON.parseObject(post,GreatQueryResponse.class);
////        WSQueryCountAmount wsQueryCountAmount=  JSON.toJavaObject(resp1.getData(),WSQueryCountAmount.class);
//
////        GreatQueryResponse<JSONObject> resp3 =  JSON.parseObject(post3,GreatQueryResponse.class);
//////        GreatQueryResponsePageData<JSONObject> greatQueryResponsePageData=  JSON.toJavaObject(resp3.getData(),GreatQueryResponsePageData.class);
////        GreatQueryResponsePageData<List<WSQueryCountAmount>> wsQueryCountAmountList3=  parseListResult((resp3.getData()).toJSONString(),WSQueryCountAmount.class);
//////        List<WSQueryCountAmount> wsQueryCountAmountList=  JSON.toJavaObject(greatQueryResponsePageData.getList(),WSQueryCountAmount.class);
////
////
////        String post2 = """
////                {"code":200,"message":"success","data":[{"count":0,"sumamount":0.000000,"sumamount1":0,"depositornum":0,"firstdepositornum":0,"sumbtc":0E-8,"sumfeeamount":0.000000}]
////                ,"timestamp":1712352,"executeTime":123}
////               """;
////        GreatQueryResponse<JSONObject> resp2 =  JSON.parseObject(post2,GreatQueryResponse.class);
//////        GreatQueryResponsePageData<List<WSQueryCountAmount>> wsQueryCountAmountList=  parseListResult2(resp2.getData().toJSONString(),WSQueryCountAmount.class);
//
//
//        TypeReference<GreatQueryResponse<WSQueryCountAmount>> typeRef1 = new TypeReference<>() {};
//        TypeReference<GreatQueryResponse<WSQueryCountAmount>> typeRef11 = new TypeReference<GreatQueryResponse<WSQueryCountAmount>>() {};
//        GreatQueryResponse<WSQueryCountAmount> resp = JSON.parseObject(post, typeRef1.getType());
////        WSQueryCountAmount wsQueryCountAmount= (resp==null || resp.getData()==null)? (new WSQueryCountAmount()) : resp.getData();
//
////        TypeReference< GreatQueryResponsePageData<List<WSQueryCountAmount>>> typeRef = new TypeReference< GreatQueryResponsePageData<List<WSQueryCountAmount>>>() {};
//        TypeReference<GreatQueryResponse<GreatQueryResponsePageData<WSQueryCountAmount>>> typeRef = new TypeReference<GreatQueryResponse<GreatQueryResponsePageData<WSQueryCountAmount>>>() {};
//        GreatQueryResponse< GreatQueryResponsePageData<WSQueryCountAmount>> result = JSON.parseObject(post3, typeRef.getType());
//
//
//        GreatQueryResponse<WSQueryCountAmount> responline = JSON.parseObject(post,  (new TypeReference<GreatQueryResponse<WSQueryCountAmount>>(){}).getType());
//        GreatQueryResponse< GreatQueryResponsePageData<WSQueryCountAmount>> resultoneline = JSON.parseObject(post3, (new TypeReference<>(){}).getType());
//
////        //error parse
//        GreatQueryResponse<WSQueryCountAmount> responline2 = JSON.parseObject(post,  (new TypeReference<>(){}).getType());
////        GreatQueryResponse< GreatQueryResponsePageData<WSQueryCountAmount>> resultoneline = JSON.parseObject(post3, (new TypeReference<GreatQueryResponse< GreatQueryResponsePageData<WSQueryCountAmount>>>(){}).getType());
//
////            GreatQueryResponse<WSQueryCountAmount> resp =  string2Generic(post,GreatQueryResponse.class);
//
//
//
////        GreatQueryResponse<WSQueryCountAmount> resp = parseResult(post,WSQueryCountAmount.class);
//
////        resp=  parseResult3(post,type1);
//        System.out.println(resp);
//
//
//    }
//
//    private static <T> T parseResultV2(String json, Class<T> clazz) {
//        return JSONObject.parseObject(json, (new TypeReference<T>(){}).getType());
//    }
//
//    private static <T> T parseResult3(JSONObject json, Class<T> clazz) {
//        ParameterizedTypeImpl inner = new ParameterizedTypeImpl(new Type[]{clazz}, null, List.class);
//        ParameterizedTypeImpl outer = new ParameterizedTypeImpl(new Type[]{inner}, null, GreatQueryResponse.class);
//        return JSON.toJavaObject(json, clazz);
//    }
//
////    private static <T> GreatQueryResponsePageData<List<T>> parseListResult(JSONObject json, Class<T> clazz) {
////        ParameterizedTypeImpl inner = new ParameterizedTypeImpl(new Type[]{clazz}, null, List.class);
////        ParameterizedTypeImpl outer = new ParameterizedTypeImpl(new Type[]{inner}, null, GreatQueryResponsePageData.class);
////        return JSON.parseObject(json.toJSONString(), outer);
////    }
//    private static <T> GreatQueryResponsePageData<List<T>> parseListResult(String json, Class<T> clazz) {
//        ParameterizedTypeImpl inner = new ParameterizedTypeImpl(new Type[]{clazz}, null, List.class);
//        ParameterizedTypeImpl outer = new ParameterizedTypeImpl(new Type[]{inner}, null, GreatQueryResponsePageData.class);
//        return JSON.parseObject(json, outer);
//    }
//
//    private static <T> GreatQueryResponse<List<T>> parseListResult2(String json, Class<T> clazz) {
//        ParameterizedTypeImpl inner = new ParameterizedTypeImpl(new Type[]{clazz}, null, List.class);
//        ParameterizedTypeImpl outer = new ParameterizedTypeImpl(new Type[]{inner}, null, GreatQueryResponse.class);
//        return JSON.parseObject(json, outer);
//    }
//    private static <T> GreatQueryResponse<T> parseResult(String json, Class<T> clazz) {
//        ParameterizedTypeImpl inner = new ParameterizedTypeImpl(new Type[]{clazz}, null, clazz);
//        ParameterizedTypeImpl outer = new ParameterizedTypeImpl(new Type[]{inner}, null, GreatQueryResponse.class);
//        return JSON.parseObject(json, outer);
//    }
//    private static <T> T parseResult(JSONObject json, Class<T> clazz) {
//        ParameterizedTypeImpl inner = new ParameterizedTypeImpl(new Type[]{clazz}, null, clazz);
//        ParameterizedTypeImpl outer = new ParameterizedTypeImpl(new Type[]{inner}, null, GreatQueryResponse.class);
//        return JSON.toJavaObject(json,clazz);
//    }
//    /**
//     * 字符串转泛型(不嵌套)
//     * @param str   str
//     * @param clazz clazz
//     * @return {@link T}
//     */
//    public static <T> T string2Generic(String str, Class<T> clazz) {
//        T t = JSON.parseObject(str, clazz);
//        return t;
//    }
//
//
//    /**
//     * 字符串转泛型(嵌套)
//     * @param str    str
//     * @param clazzT clazzt
//     * @param clazzV clazzv
//     * @return {@link T}
//     */
//    public static <T, V> T string2Generic(String str, Class<T> clazzT, Class<V> clazzV) {
//        T t = JSON.parseObject(str, buildType(clazzT, clazzV));
//        return t;
//    }
//
////    public static <T> BaseResult<T> string2BaseResult(String str, Class<T> clazzT) {
////        // 注意 new TypeReference<BaseResult<T>>(clazzT) {}的用法
////        BaseResult<T> baseResult = JSON.parseObject(str, new TypeReference<BaseResult<T>>(clazzT) {});
////        return baseResult;
////    }
//
//    public static Type buildType(Type... types) {
//        ParameterizedTypeImpl beforeType = null;
//        if (types != null && types.length > 0) {
//            for (int i = types.length - 1; i > 0; i--) {
//                beforeType = new ParameterizedTypeImpl(new Type[]{beforeType == null ? types[i] : beforeType}, null, types[i - 1]);
//            }
//        }
//        return beforeType;
//    }
//
//
//}
