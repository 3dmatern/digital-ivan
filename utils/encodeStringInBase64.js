import base64 from "base-64";
import utf8 from "utf8";

export function encodeStringInBase64(value) {
    const bytesEncodeValue = utf8.encode(value);
    const base64EncodeValue = base64.encode(bytesEncodeValue);

    return base64EncodeValue;
}
