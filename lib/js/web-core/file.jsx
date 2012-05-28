// THIS FILE IS AUTOMATICALLY GENERATED.
import "./dom.jsx";
import "./typedarray.jsx";

/*
automatically generated from:
	http://www.w3.org/TR/FileAPI/
	idl2jsx/extra/file.idl
*/
native class FileList {

	function __native_index_operator__(
		index : int/*unsigned long*/
	) : MayBeUndefined.<File>;
	function /* getter */ item(
		index : int/*unsigned long*/
	) : MayBeUndefined.<File>;
	__readonly__ var length : int/*unsigned long*/;

} // end of FileList

native class Blob {

	__readonly__ var size : number/*unsigned long long*/;
	__readonly__ var type : string/*DOMString*/;
	//slice Blob into byte-ranged chunks

	function slice() : Blob;
	function slice(start : number/*long long*/) : Blob;
	function slice(
		start : number/*long long*/,
		end : number/*long long*/
	) : Blob;
	function slice(
		start : number/*long long*/,
		end : number/*long long*/,
		contentType : string/*DOMString*/
	) : Blob;

} // end of Blob

native class File extends Blob {

	__readonly__ var name : string/*DOMString*/;
	__readonly__ var lastModifiedDate : Date;

} // end of File

native class FileReader extends EventTarget {

	function constructor();

	// async read methods
	function readAsArrayBuffer(blob : Blob) : void;
	function readAsBinaryString(blob : Blob) : void;
	function readAsText(blob : Blob) : void;
	function readAsText(
		blob : Blob,
		encoding : string/*DOMString*/
	) : void;
	function readAsDataURL(blob : Blob) : void;
	function abort() : void;
	// states
	static const     EMPTY : int/*unsigned short*/;
	__readonly__ var EMPTY : int/*unsigned short*/;
	static const     LOADING : int/*unsigned short*/;
	__readonly__ var LOADING : int/*unsigned short*/;
	static const     DONE : int/*unsigned short*/;
	__readonly__ var DONE : int/*unsigned short*/;
	__readonly__ var readyState : int/*unsigned short*/;
	// File or Blob data
	__readonly__ var result : variant/*any*/;
	__readonly__ var error : DOMError;
	// event handler attributes
	var onloadstart : function(:Event):void/*Function?*/;
	var onprogress : function(:Event):void/*Function?*/;
	var onload : function(:Event):void/*Function?*/;
	var onabort : function(:Event):void/*Function?*/;
	var onerror : function(:Event):void/*Function?*/;
	var onloadend : function(:Event):void/*Function?*/;

} // end of FileReader

native class FileReaderSync {

	function constructor();

	// Synchronously return strings

	function readAsArrayBuffer(blob : Blob) : ArrayBuffer;
	function readAsBinaryString(blob : Blob) : string/*DOMString*/;
	function readAsText(blob : Blob) : string/*DOMString*/;
	function readAsText(
		blob : Blob,
		encoding : string/*DOMString*/
	) : string/*DOMString*/;
	function readAsDataURL(blob : Blob) : string/*DOMString*/;

} // end of FileReaderSync

native class URL {

	static function createObjectURL(blob : Blob) : string/*DOMString*/;
	static function revokeObjectURL(url : string/*DOMString*/) : void;

} // end of URL

native class webkitURL extends URL {
}

/*
end of generated files from:
	http://www.w3.org/TR/FileAPI/
	idl2jsx/extra/file.idl
*/

