package org.ssssssss.magicapi.utils;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.module.SimpleModule;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import java.util.Iterator;
import java.util.Map;
/**
 * JSON工具包
 *
 * @author mxd
 */
public class JsonUtils {

	private static final ObjectMapper MAPPER = new ObjectMapper();

	private static final Logger logger = LoggerFactory.getLogger(JsonUtils.class);

	static {
		MAPPER.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
		MAPPER.disable(SerializationFeature.FAIL_ON_EMPTY_BEANS);
		SimpleModule simpleModule = new SimpleModule();
		simpleModule.addSerializer(Logger.class, new JsonSerializer<Logger>() {
			@Override
			public void serialize(Logger value, JsonGenerator gen, SerializerProvider serializers) throws IOException {
				gen.writeString(value.toString());
			}
		});
		MAPPER.registerModule(simpleModule);
	}

	public static String toJsonString(Object target) {
		try {
			return MAPPER.writerWithDefaultPrettyPrinter().writeValueAsString(target);
		} catch (JsonProcessingException e) {
			logger.error("json序列化失败", e);
			return null;
		}
	}

	public static String toJsonStringWithoutPretty(Object target) {
		try {
			return MAPPER.writeValueAsString(target);
		} catch (JsonProcessingException e) {
			logger.error("json序列化失败", e);
			return null;
		}
	}

	public static String toJsonStringWithoutLog(Object target) {
		try {
			return MAPPER.writeValueAsString(target);
		} catch (Exception e) {
			return target == null ? null : target.toString();
		}
	}

	public static <T> T readValue(String json, TypeReference<T> typeReference) {
		try {
			return MAPPER.readValue(json, typeReference);
		} catch (IOException e) {
			logger.error("读取json失败,json:{}", json, e);
			return null;
		}
	}

	public static <T> T readValue(String json, Class<T> clazz) {
		try {
			return MAPPER.readValue(json, clazz);
		} catch (IOException e) {
			logger.error("读取json失败,json:{}", json, e);
			return null;
		}
	}

	public static <T> T readValue(byte[] bytes, Class<T> clazz) {
		try {
			return MAPPER.readValue(bytes, clazz);
		} catch (IOException e) {
			logger.error("读取json失败,json:{}", new String(bytes), e);
			return null;
		}
	}

	public static <T> T readValue(byte[] bytes, JavaType javaType) {
		try {
			return MAPPER.readValue(bytes, javaType);
		} catch (IOException e) {
			logger.error("读取json失败,json:{}", new String(bytes), e);
			return null;
		}
	}

	public static byte[] toJsonBytes(Object target) {
		String json = toJsonString(target);
		return json == null ? new byte[0] : json.getBytes(StandardCharsets.UTF_8);
	}

	public static String diffJson(JsonNode json1, JsonNode json2)  {
		ObjectMapper mapper = new ObjectMapper();
		ObjectNode diffNode = mapper.createObjectNode();
		if(json1==json2)
			return "{}";
		if(json1==null || json2 ==null)
			return "{\"result\":\"Invalid JSON Format error.\"}";
		compareJsonNodes(json1, json2, diffNode, mapper);
		return diffNode.toPrettyString();

	}

	public static String diffJson(String json1, String json2)  {
		ObjectMapper mapper = new ObjectMapper();
		JsonNode tree1;
		JsonNode tree2;

		try {
			tree1 = mapper.readTree(json1);
			tree2 = mapper.readTree(json2);
		} catch (IOException e) {
			System.err.println("Invalid JSON: " + e.getMessage());
			return "{\"result\":\"Invalid JSON Format error.\"}";
		}

		ObjectNode diffNode = mapper.createObjectNode();
		compareJsonNodes(tree1, tree2, diffNode, mapper);
		return diffNode.toPrettyString();

	}

	private static void compareJsonNodes(JsonNode node1, JsonNode node2, ObjectNode diffNode, ObjectMapper mapper) {
		Iterator<Map.Entry<String, JsonNode>> fields = node1.fields();
		while (fields.hasNext()) {
			Map.Entry<String, JsonNode> entry = fields.next();
			String fieldName = entry.getKey();
			JsonNode value1 = entry.getValue();
			JsonNode value2 = node2.get(fieldName);

			if (value2 == null) {
				ObjectNode values = mapper.createObjectNode();
				values.set("value1", value1);
				values.put("value2", "");
				diffNode.set(fieldName, values);
			} else if (!value1.equals(value2)) {
				if (value1.isObject() && value2.isObject()) {
					ObjectNode nestedDiff = mapper.createObjectNode();
					compareJsonNodes(value1, value2, nestedDiff, mapper);
					diffNode.set(fieldName, nestedDiff);
				} else {
					ObjectNode values = mapper.createObjectNode();
					values.set("value1", value1);
					values.set("value2", value2);
					diffNode.set(fieldName, values);
				}
			}
		}

		fields = node2.fields();
		while (fields.hasNext()) {
			Map.Entry<String, JsonNode> entry = fields.next();
			String fieldName = entry.getKey();
			if (!node1.has(fieldName)) {
				ObjectNode values = mapper.createObjectNode();
				values.put("value1", "");
				values.set("value2", entry.getValue());
				diffNode.set(fieldName, values);
			}
		}
	}
	public static void main(String[] args) {
		String json1 = "{\"name\":\"John\",\"gender\":\"Male\", \"age\":30, \"city\":\"New York\", \"ext\":{\"sub\":\"json1sub\"}}";
		String json2 = "{\"name\":\"John\",\"sex\":\"Male\", \"age\":31, \"city\":\"New York\", \"country\":\"USA\"}";

		String diff = diffJson(json1, json2);
		System.out.println(diff);
	}
}
