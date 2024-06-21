/**
 * Encodes a string using base64 encoding.
 *
 * @param str - The string to encode.
 * @returns The encoded string.
 */
export function encode(str: string) {
	return window?.btoa(unescape(encodeURIComponent(str)))
}

/**
 * Decodes a string by performing base64 decoding and URI decoding.
 * If the input string is empty, 'undefined', or contains a '+', an empty string is returned.
 *
 * @param str - The string to decode.
 * @returns The decoded string.
 */
export function decode(str: string) {
	if (!str || str == 'undefined' || str.includes('+')) {
		return ''
	}
	return !!str && str != 'undefined' ? decodeURIComponent(escape(window?.atob(str))) : ''
}
