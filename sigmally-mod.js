const rzModWrap = document.createElement('div')
const rzModSettings = document.createElement('form')
const rzModStyle = document.createElement('link')

let rzModScripts = {
	run(){
		this.scripts.forEach( script => {
			script.call()
		})
	},
	scripts: []
}

const rzSkins = [ {
	"level": null,
	"cost": null,
	"_id": "5ff799de9d6ee153fbb39a6f",
	"name": "Alexander.png",
	"category": "free",
	"visible": true,
	"createTime": "2021-01-07T23:31:42.723Z",
	"updateTime": "2021-01-07T23:31:42.723Z",
	"__v": 0
}, {
	"level": null,
	"cost": null,
	"_id": "5ff799de9d6ee153fbb39a70",
	"name": "Celia.png",
	"category": "free",
	"visible": true,
	"createTime": "2021-01-07T23:31:42.738Z",
	"updateTime": "2021-01-07T23:31:42.738Z",
	"__v": 0
}, {
	"level": null,
	"cost": null,
	"_id": "5ff799de9d6ee153fbb39a71",
	"name": "Chet.png",
	"category": "free",
	"visible": true,
	"createTime": "2021-01-07T23:31:42.741Z",
	"updateTime": "2021-01-07T23:31:42.741Z",
	"__v": 0
}, {
	"level": null,
	"cost": null,
	"_id": "5ff799de9d6ee153fbb39a72",
	"name": "Chip.png",
	"category": "free",
	"visible": true,
	"createTime": "2021-01-07T23:31:42.744Z",
	"updateTime": "2021-01-07T23:31:42.744Z",
	"__v": 0
}, {
	"level": null,
	"cost": null,
	"_id": "5ff799de9d6ee153fbb39a73",
	"name": "Dale.png",
	"category": "free",
	"visible": true,
	"createTime": "2021-01-07T23:31:42.746Z",
	"updateTime": "2021-01-07T23:31:42.746Z",
	"__v": 0
}, {
	"level": null,
	"cost": null,
	"_id": "5ff799de9d6ee153fbb39a74",
	"name": "Hardscrabble.png",
	"category": "free",
	"visible": true,
	"createTime": "2021-01-07T23:31:42.748Z",
	"updateTime": "2021-01-07T23:31:42.748Z",
	"__v": 0
}, {
	"level": null,
	"cost": null,
	"_id": "5ff799de9d6ee153fbb39a75",
	"name": "Harley.png",
	"category": "free",
	"visible": true,
	"createTime": "2021-01-07T23:31:42.749Z",
	"updateTime": "2021-01-07T23:31:42.749Z",
	"__v": 0
}, {
	"level": null,
	"cost": 200,
	"_id": "5ff799de9d6ee153fbb39a76",
	"name": "Art.png",
	"category": "premium",
	"visible": true,
	"createTime": "2021-01-07T23:31:42.751Z",
	"updateTime": "2021-01-07T23:31:42.751Z",
	"__v": 0
}, {
	"level": null,
	"cost": 300,
	"_id": "5ff799de9d6ee153fbb39a77",
	"name": "Bile.png",
	"category": "premium",
	"visible": true,
	"createTime": "2021-01-07T23:31:42.753Z",
	"updateTime": "2021-01-07T23:31:42.753Z",
	"__v": 0
}, {
	"level": null,
	"cost": 300,
	"_id": "5ff799de9d6ee153fbb39a78",
	"name": "Boo.png",
	"category": "premium",
	"visible": true,
	"createTime": "2021-01-07T23:31:42.755Z",
	"updateTime": "2021-01-07T23:31:42.755Z",
	"__v": 0
}, {
	"level": null,
	"cost": 300,
	"_id": "5ff799de9d6ee153fbb39a79",
	"name": "Brandywine.png",
	"category": "premium",
	"visible": true,
	"createTime": "2021-01-07T23:31:42.756Z",
	"updateTime": "2021-01-07T23:31:42.756Z",
	"__v": 0
}, {
	"level": null,
	"cost": 400,
	"_id": "5ff799de9d6ee153fbb39a7a",
	"name": "Carlton.png",
	"category": "premium",
	"visible": true,
	"createTime": "2021-01-07T23:31:42.758Z",
	"updateTime": "2021-01-07T23:31:42.758Z",
	"__v": 0
}, {
	"level": null,
	"cost": 400,
	"_id": "5ff799de9d6ee153fbb39a7b",
	"name": "Derek.png",
	"category": "premium",
	"visible": true,
	"createTime": "2021-01-07T23:31:42.760Z",
	"updateTime": "2021-01-07T23:31:42.760Z",
	"__v": 0
}, {
	"level": null,
	"cost": 400,
	"_id": "5ff799de9d6ee153fbb39a7c",
	"name": "Fungus.png",
	"category": "premium",
	"visible": true,
	"createTime": "2021-01-07T23:31:42.761Z",
	"updateTime": "2021-01-07T23:31:42.761Z",
	"__v": 0
}, {
	"level": null,
	"cost": 400,
	"_id": "5ff799de9d6ee153fbb39a7d",
	"name": "George.png",
	"category": "premium",
	"visible": true,
	"createTime": "2021-01-07T23:31:42.763Z",
	"updateTime": "2021-01-07T23:31:42.763Z",
	"__v": 0
}, {
	"level": null,
	"cost": 400,
	"_id": "5ff799de9d6ee153fbb39a7e",
	"name": "Gesner.png",
	"category": "premium",
	"visible": true,
	"createTime": "2021-01-07T23:31:42.765Z",
	"updateTime": "2021-01-07T23:31:42.765Z",
	"__v": 0
}, {
	"level": null,
	"cost": 400,
	"_id": "5ff799de9d6ee153fbb39a7f",
	"name": "Josh.png",
	"category": "premium",
	"visible": true,
	"createTime": "2021-01-07T23:31:42.766Z",
	"updateTime": "2021-01-07T23:31:42.766Z",
	"__v": 0
}, {
	"level": null,
	"cost": 500,
	"_id": "5ff799de9d6ee153fbb39a80",
	"name": "Michael.png",
	"category": "premium",
	"visible": true,
	"createTime": "2021-01-07T23:31:42.768Z",
	"updateTime": "2021-01-07T23:31:42.768Z",
	"__v": 0
}, {
	"level": null,
	"cost": 500,
	"_id": "5ff799de9d6ee153fbb39a81",
	"name": "Needleman.png",
	"category": "premium",
	"visible": true,
	"createTime": "2021-01-07T23:31:42.769Z",
	"updateTime": "2021-01-07T23:31:42.769Z",
	"__v": 0
}, {
	"level": null,
	"cost": 500,
	"_id": "5ff799de9d6ee153fbb39a82",
	"name": "Peterson.png",
	"category": "premium",
	"visible": true,
	"createTime": "2021-01-07T23:31:42.771Z",
	"updateTime": "2021-01-07T23:31:42.771Z",
	"__v": 0
}, {
	"level": null,
	"cost": 500,
	"_id": "5ff799de9d6ee153fbb39a83",
	"name": "Randall.png",
	"category": "premium",
	"visible": true,
	"createTime": "2021-01-07T23:31:42.772Z",
	"updateTime": "2021-01-07T23:31:42.772Z",
	"__v": 0
}, {
	"level": null,
	"cost": 500,
	"_id": "5ff799de9d6ee153fbb39a84",
	"name": "Smitty.png",
	"category": "premium",
	"visible": true,
	"createTime": "2021-01-07T23:31:42.774Z",
	"updateTime": "2021-01-07T23:31:42.774Z",
	"__v": 0
}, {
	"level": null,
	"cost": 500,
	"_id": "5ff799de9d6ee153fbb39a85",
	"name": "Spike.png",
	"category": "premium",
	"visible": true,
	"createTime": "2021-01-07T23:31:42.775Z",
	"updateTime": "2021-01-07T23:31:42.775Z",
	"__v": 0
}, {
	"level": null,
	"cost": 500,
	"_id": "5ff799de9d6ee153fbb39a86",
	"name": "Squibbles.png",
	"category": "premium",
	"visible": true,
	"createTime": "2021-01-07T23:31:42.777Z",
	"updateTime": "2021-01-07T23:31:42.777Z",
	"__v": 0
}, {
	"level": null,
	"cost": 550,
	"_id": "5ff799de9d6ee153fbb39a87",
	"name": "Sulley.png",
	"category": "premium",
	"visible": true,
	"createTime": "2021-01-07T23:31:42.780Z",
	"updateTime": "2021-01-07T23:31:42.780Z",
	"__v": 0
}, {
	"level": null,
	"cost": 1000,
	"_id": "5ff799de9d6ee153fbb39a88",
	"name": "Terri.png",
	"category": "premium",
	"visible": true,
	"createTime": "2021-01-07T23:31:42.781Z",
	"updateTime": "2021-01-07T23:31:42.781Z",
	"__v": 0
}, {
	"level": null,
	"cost": 600,
	"_id": "5ff799de9d6ee153fbb39a89",
	"name": "Waternoose.png",
	"category": "premium",
	"visible": true,
	"createTime": "2021-01-07T23:31:42.783Z",
	"updateTime": "2021-01-07T23:31:42.783Z",
	"__v": 0
}, {
	"level": null,
	"cost": 600,
	"_id": "5ff799de9d6ee153fbb39a8a",
	"name": "Worthington.png",
	"category": "premium",
	"visible": true,
	"createTime": "2021-01-07T23:31:42.784Z",
	"updateTime": "2021-01-07T23:31:42.784Z",
	"__v": 0
}, {
	"level": null,
	"cost": 700,
	"_id": "5ff799de9d6ee153fbb39a8b",
	"name": "Yeti.png",
	"category": "premium",
	"visible": true,
	"createTime": "2021-01-07T23:31:42.789Z",
	"updateTime": "2021-01-07T23:31:42.789Z",
	"__v": 0
}, {
	"level": 20,
	"cost": null,
	"_id": "5ff799de9d6ee153fbb39a8c",
	"name": "Rocky.png",
	"category": "level",
	"visible": true,
	"createTime": "2021-01-07T23:31:42.790Z",
	"updateTime": "2021-01-07T23:31:42.790Z",
	"__v": 0
}, {
	"level": 30,
	"cost": null,
	"_id": "5ff799de9d6ee153fbb39a8d",
	"name": "Lenny.png",
	"category": "level",
	"visible": true,
	"createTime": "2021-01-07T23:31:42.792Z",
	"updateTime": "2021-01-07T23:31:42.792Z",
	"__v": 0
}, {
	"level": 40,
	"cost": null,
	"_id": "5ff799de9d6ee153fbb39a8e",
	"name": "Bullseye.png",
	"category": "level",
	"visible": true,
	"createTime": "2021-01-07T23:31:42.793Z",
	"updateTime": "2021-01-07T23:31:42.793Z",
	"__v": 0
}, {
	"level": 50,
	"cost": null,
	"_id": "5ff799de9d6ee153fbb39a8f",
	"name": "Hamm.png",
	"category": "level",
	"visible": true,
	"createTime": "2021-01-07T23:31:42.795Z",
	"updateTime": "2021-01-07T23:31:42.795Z",
	"__v": 0
}, {
	"level": 60,
	"cost": null,
	"_id": "5ff799de9d6ee153fbb39a90",
	"name": "Peep.png",
	"category": "level",
	"visible": true,
	"createTime": "2021-01-07T23:31:42.796Z",
	"updateTime": "2021-01-07T23:31:42.796Z",
	"__v": 0
}, {
	"level": null,
	"cost": null,
	"_id": "601f14bcc7e5ba47b6d54da3",
	"name": "Proctor.png",
	"category": "free",
	"visible": true,
	"createTime": "2021-02-06T22:14:20.829Z",
	"updateTime": "2021-02-06T22:14:20.829Z",
	"__v": 0
}, {
	"level": null,
	"cost": null,
	"_id": "601f14bcc7e5ba47b6d54da4",
	"name": "Roz.png",
	"category": "free",
	"visible": true,
	"createTime": "2021-02-06T22:14:20.843Z",
	"updateTime": "2021-02-06T22:14:20.843Z",
	"__v": 0
}, {
	"level": null,
	"cost": null,
	"_id": "601f1ed191c07e490f35b7b3",
	"name": "Traitor.png",
	"category": "free",
	"visible": true,
	"createTime": "2021-02-06T22:57:21.589Z",
	"updateTime": "2021-02-06T22:57:21.589Z",
	"__v": 0
}, {
	"level": null,
	"cost": null,
	"_id": "601ff3db52b2ad694c37d42c",
	"name": "Poco.png",
	"category": "free",
	"visible": true,
	"createTime": "2021-02-07T14:06:19.803Z",
	"updateTime": "2021-02-07T14:06:19.803Z",
	"__v": 0
}, {
	"level": null,
	"cost": null,
	"_id": "6026d927ab43071a9d383cd4",
	"name": "Cuddle.png",
	"category": "free",
	"visible": true,
	"createTime": "2021-02-12T19:38:15.754Z",
	"updateTime": "2021-02-12T19:38:15.754Z",
	"__v": 0
}, {
	"level": null,
	"cost": null,
	"_id": "6026d927ab43071a9d383cd5",
	"name": "Omega.png",
	"category": "free",
	"visible": true,
	"createTime": "2021-02-12T19:38:15.769Z",
	"updateTime": "2021-02-12T19:38:15.769Z",
	"__v": 0
}, {
	"level": null,
	"cost": null,
	"_id": "6026d927ab43071a9d383cd6",
	"name": "Leon.png",
	"category": "free",
	"visible": true,
	"createTime": "2021-02-12T19:38:15.772Z",
	"updateTime": "2021-02-12T19:38:15.772Z",
	"__v": 0
}, {
	"level": null,
	"cost": null,
	"_id": "6026d927ab43071a9d383cd7",
	"name": "Impostor.png",
	"category": "free",
	"visible": true,
	"createTime": "2021-02-12T19:38:15.775Z",
	"updateTime": "2021-02-12T19:38:15.775Z",
	"__v": 0
}, {
	"level": 10,
	"cost": null,
	"_id": "6027214d7b19dabebfd0a118",
	"name": "Cute.png",
	"category": "level",
	"visible": true,
	"createTime": "2021-02-13T00:46:05.177Z",
	"updateTime": "2021-02-13T00:46:05.177Z",
	"__v": 0
}, {
	"level": 15,
	"cost": null,
	"_id": "6027214d7b19dabebfd0a119",
	"name": "Raptor.png",
	"category": "level",
	"visible": true,
	"createTime": "2021-02-13T00:46:05.385Z",
	"updateTime": "2021-02-13T00:46:05.385Z",
	"__v": 0
}, {
	"level": null,
	"cost": 300,
	"_id": "60296810c7a2c784e938fa7f",
	"name": "Captain.png",
	"category": "premium",
	"visible": true,
	"createTime": "2021-02-14T18:12:32.981Z",
	"updateTime": "2021-02-14T18:12:32.981Z",
	"__v": 0
}, {
	"level": null,
	"cost": 300,
	"_id": "60296811c7a2c784e938fa80",
	"name": "Maya.png",
	"category": "premium",
	"visible": true,
	"createTime": "2021-02-14T18:12:33.195Z",
	"updateTime": "2021-02-14T18:12:33.195Z",
	"__v": 0
}, {
	"level": null,
	"cost": 300,
	"_id": "60296811c7a2c784e938fa81",
	"name": "Jack.png",
	"category": "premium",
	"visible": true,
	"createTime": "2021-02-14T18:12:33.373Z",
	"updateTime": "2021-02-14T18:12:33.373Z",
	"__v": 0
}, {
	"level": null,
	"cost": 300,
	"_id": "60296811c7a2c784e938fa82",
	"name": "Valentine.png",
	"category": "premium",
	"visible": true,
	"createTime": "2021-02-14T18:12:33.550Z",
	"updateTime": "2021-02-14T18:12:33.550Z",
	"__v": 0
}, {
	"level": null,
	"cost": 300,
	"_id": "60296811c7a2c784e938fa83",
	"name": "Cara.png",
	"category": "premium",
	"visible": true,
	"createTime": "2021-02-14T18:12:33.727Z",
	"updateTime": "2021-02-14T18:12:33.727Z",
	"__v": 0
}, {
	"level": 25,
	"cost": null,
	"_id": "602ea9cadfc8061f31c27e50",
	"name": "Fazbear.png",
	"category": "level",
	"visible": true,
	"createTime": "2021-02-18T17:54:18.905Z",
	"updateTime": "2021-02-18T17:54:18.905Z",
	"__v": 0
}, {
	"level": 35,
	"cost": null,
	"_id": "602ea9cbdfc8061f31c27e51",
	"name": "Freddy.png",
	"category": "level",
	"visible": true,
	"createTime": "2021-02-18T17:54:19.212Z",
	"updateTime": "2021-02-18T17:54:19.212Z",
	"__v": 0
} ]

/**
*
*  MD5 (Message-Digest Algorithm)
*  http://www.webtoolkit.info/
*
**/
const MD5 = function (string) {
 
	function RotateLeft(lValue, iShiftBits) {
		return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits))
	}
 
	function AddUnsigned(lX,lY) {
		var lX4,lY4,lX8,lY8,lResult
		lX8 = (lX & 0x80000000)
		lY8 = (lY & 0x80000000)
		lX4 = (lX & 0x40000000)
		lY4 = (lY & 0x40000000)
		lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF)
		if (lX4 & lY4) {
			return (lResult ^ 0x80000000 ^ lX8 ^ lY8)
		}
		if (lX4 | lY4) {
			if (lResult & 0x40000000) {
				return (lResult ^ 0xC0000000 ^ lX8 ^ lY8)
			} else {
				return (lResult ^ 0x40000000 ^ lX8 ^ lY8)
			}
		} else {
			return (lResult ^ lX8 ^ lY8)
		}
 	}
 
 	function F(x,y,z) { return (x & y) | ((~x) & z) }
 	function G(x,y,z) { return (x & z) | (y & (~z)) }
 	function H(x,y,z) { return (x ^ y ^ z) }
	function I(x,y,z) { return (y ^ (x | (~z))) }
 
	function FF(a,b,c,d,x,s,ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac))
		return AddUnsigned(RotateLeft(a, s), b)
	}
 
	function GG(a,b,c,d,x,s,ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac))
		return AddUnsigned(RotateLeft(a, s), b)
	}
 
	function HH(a,b,c,d,x,s,ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac))
		return AddUnsigned(RotateLeft(a, s), b)
	}
 
	function II(a,b,c,d,x,s,ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac))
		return AddUnsigned(RotateLeft(a, s), b)
	}
 
	function ConvertToWordArray(string) {
		var lWordCount
		var lMessageLength = string.length
		var lNumberOfWords_temp1=lMessageLength + 8
		var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64
		var lNumberOfWords = (lNumberOfWords_temp2+1)*16
		var lWordArray=Array(lNumberOfWords-1)
		var lBytePosition = 0
		var lByteCount = 0
		while ( lByteCount < lMessageLength ) {
			lWordCount = (lByteCount-(lByteCount % 4))/4
			lBytePosition = (lByteCount % 4)*8
			lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition))
			lByteCount++
		}
		lWordCount = (lByteCount-(lByteCount % 4))/4
		lBytePosition = (lByteCount % 4)*8
		lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition)
		lWordArray[lNumberOfWords-2] = lMessageLength<<3
		lWordArray[lNumberOfWords-1] = lMessageLength>>>29
		return lWordArray
	}
 
	function WordToHex(lValue) {
		var WordToHexValue="", WordToHexValue_temp="", lByte, lCount
		for (lCount = 0; lCount<=3; lCount++) {
			lByte = (lValue>>>(lCount*8)) & 255
			WordToHexValue_temp = "0" + lByte.toString(16)
			WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2)
		}
		return WordToHexValue
	}
 
	function Utf8Encode(string) {
		string = string.replace(/\r\n/g,"\n")
		var utftext = ""
 
		for (var n = 0; n < string.length; n++) {
 
			var c = string.charCodeAt(n)
 
			if (c < 128) {
				utftext += String.fromCharCode(c)
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192)
				utftext += String.fromCharCode((c & 63) | 128)
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224)
				utftext += String.fromCharCode(((c >> 6) & 63) | 128)
				utftext += String.fromCharCode((c & 63) | 128)
			}
 
		}
 
		return utftext
	}
 
	var x = []

	var k, AA, BB, CC, DD, a, b, c, d
	var S11=7, S12=12, S13=17, S14=22
	var S21=5, S22=9 , S23=14, S24=20
	var S31=4, S32=11, S33=16, S34=23
	var S41=6, S42=10, S43=15, S44=21
 
	string = Utf8Encode(string)
 
	x = ConvertToWordArray(string)
 
	a = 0x67452301
	b = 0xEFCDAB89
	c = 0x98BADCFE
	d = 0x10325476
 
	for (k=0; k < x.length; k+=16) {
		AA=a
		BB=b
		CC=c 
		DD=d
		a=FF(a,b,c,d,x[k+0], S11,0xD76AA478)
		d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756)
		c=FF(c,d,a,b,x[k+2], S13,0x242070DB)
		b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE)
		a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF)
		d=FF(d,a,b,c,x[k+5], S12,0x4787C62A)
		c=FF(c,d,a,b,x[k+6], S13,0xA8304613)
		b=FF(b,c,d,a,x[k+7], S14,0xFD469501)
		a=FF(a,b,c,d,x[k+8], S11,0x698098D8)
		d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF)
		c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1)
		b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE)
		a=FF(a,b,c,d,x[k+12],S11,0x6B901122)
		d=FF(d,a,b,c,x[k+13],S12,0xFD987193)
		c=FF(c,d,a,b,x[k+14],S13,0xA679438E)
		b=FF(b,c,d,a,x[k+15],S14,0x49B40821)
		a=GG(a,b,c,d,x[k+1], S21,0xF61E2562)
		d=GG(d,a,b,c,x[k+6], S22,0xC040B340)
		c=GG(c,d,a,b,x[k+11],S23,0x265E5A51)
		b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA)
		a=GG(a,b,c,d,x[k+5], S21,0xD62F105D)
		d=GG(d,a,b,c,x[k+10],S22,0x2441453)
		c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681)
		b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8)
		a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6)
		d=GG(d,a,b,c,x[k+14],S22,0xC33707D6)
		c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87)
		b=GG(b,c,d,a,x[k+8], S24,0x455A14ED)
		a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905)
		d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8)
		c=GG(c,d,a,b,x[k+7], S23,0x676F02D9)
		b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A)
		a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942)
		d=HH(d,a,b,c,x[k+8], S32,0x8771F681)
		c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122)
		b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C)
		a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44)
		d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9)
		c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60)
		b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70)
		a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6)
		d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA)
		c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085)
		b=HH(b,c,d,a,x[k+6], S34,0x4881D05)
		a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039)
		d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5)
		c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8)
		b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665)
		a=II(a,b,c,d,x[k+0], S41,0xF4292244)
		d=II(d,a,b,c,x[k+7], S42,0x432AFF97)
		c=II(c,d,a,b,x[k+14],S43,0xAB9423A7)
		b=II(b,c,d,a,x[k+5], S44,0xFC93A039)
		a=II(a,b,c,d,x[k+12],S41,0x655B59C3)
		d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92)
		c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D)
		b=II(b,c,d,a,x[k+1], S44,0x85845DD1)
		a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F)
		d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0)
		c=II(c,d,a,b,x[k+6], S43,0xA3014314)
		b=II(b,c,d,a,x[k+13],S44,0x4E0811A1)
		a=II(a,b,c,d,x[k+4], S41,0xF7537E82)
		d=II(d,a,b,c,x[k+11],S42,0xBD3AF235)
		c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB)
		b=II(b,c,d,a,x[k+9], S44,0xEB86D391)
		a=AddUnsigned(a,AA)
		b=AddUnsigned(b,BB)
		c=AddUnsigned(c,CC)
		d=AddUnsigned(d,DD)
	}
 
	var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d)
 
	return temp.toLowerCase()
}


const DEFAULT_MODS = [
	'Modules Loaded',
	'Help Text',
	'AllSkin',
	'Clan Map',
	'Settings',
	'Set uData',
	'Long Nicknames',
	'All Skins',
	'Branding',
	'Rapid Feed (q)',
]

const KEY_FEED = {
	key: 'w',
	keyCode: 32,
	which: 32
}

const KEY_SPLIT = { 
	keyCode: 32, 
	code: 'Space',
	cancelable: true,
	composed: true,
	isTrusted: true,
	which: 32
}

rzModWrap.setAttribute('id', 'mod-wrap')

rzModStyle.type = 'text/css'
rzModStyle.rel = 'stylesheet'
rzModStyle.href = 'https://chrisheney.com/sigmally-mod.css?seed='+Math.random()


/*
 * Configure Settings
 */

let modSettings = localStorage.getItem('modSettings')

if (!modSettings){
	modSettings = {
		keyBindingsRapidFeed: 'q',
		keyBindingsdoubleSplit: 'd',
		keyBindingsTripleSplit: 'f',
		keyBindingsQuadSplit: 'g',
		modsEnabled: DEFAULT_MODS,
		skinUnlockKey: '',
		customSkin: 'default'
	}
} else {
	modSettings = JSON.parse(modSettings)
}

// ring1er0:eca02db71df0a4ef922072164f739c50

rzModSettings.setAttribute('id', 'mod-settings')
rzModSettings.classList.add('hidden')
rzModSettings.onsubmit = (e) => {
	rzModSettings.classList.toggle('hidden')
	e.preventDefault()

	let options = new FormData(rzModSettings)

	modSettings = {}
	for (var key of options.keys()) {
		modSettings[key] = options.get(key)
	}

	localStorage.setItem('modSettings', JSON.stringify(modSettings))

	return false
}
rzModSettings.innerHTML = '<h4>Mod Settings</h4>' +
	'<hr/>' +
	'<h5>Key Mappings</h5>' +
	'<label class="flex">' +
		'<input type="text" name="keyBindingsRapidFeed" class="keybinding" value="' + modSettings.keyBindingsRapidFeed + '" maxlength="1" onfocus="this.select()">' +
		'<span class="text">Rapid Feed</span>' +
	'</label>' +
	'<label class="flex">' +
		'<input type="text" name="keyBindingsDoubleSplit" class="keybinding" value="' + modSettings.keyBindingsDoubleSplit + '" maxlength="1" onfocus="this.select()">' +
		'<span class="text">Double Split</span>' +
	'</label>' +
	'<label class="flex">' +
		'<input type="text" name="keyBindingsTripleSplit" class="keybinding" value="' + modSettings.keyBindingsTripleSplit + '" maxlength="1" onfocus="this.select()">' +
		'<span class="text">Triple Split</span>' +
	'</label>' +
	'<label class="flex">' +
		'<input type="text" name="keyBindingsQuadSplit" class="keybinding" value="' + modSettings.keyBindingsQuadSplit + '" maxlength="1" onfocus="this.select()">' +
		'<span class="text">Quad Split</span>' +
	'</label>' +
	'<hr/>' +
	'<h5>Custom Skin</h5>' +
	'<label class="flex">' +
		'<input type="radio" name="customSkin" value="default"' + (modSettings.customSkin === 'default' ? ' checked="checked"' : '') + '>' +
		'<span class="text">Default</span>' +
	'</label>' +
	'<label class="flex">' +
		'<input type="radio" name="customSkin" value="Zero_Two"' + (modSettings.customSkin === 'Zero_Two' ? ' checked="checked"' : '') + '>' +
		'<span class="text">Zero_Two</span>' +
	'</label>' +
	'<input type="submit" value="Save &amp Close"/>'


/*
 * Mod Collection
 *
 * Mod Types:
 *   - Button
 *   - Automatic
 *   - Code 
 *   - Text
 */
const rzMods = [{
	modName: 'Branding',
	modType: 'automatic',
	modDescription: 'Adds R҉i҉n҉g҉Z҉e҉r҉O҉ Brand.',
	modCode: () => {
		const gameTitle = document.getElementById('title')
		gameTitle.innerHTML = 'R҉i҉n҉g҉Z҉e҉r҉O҉\'s Sig Mod<span style="display:block font-size: 14px">To Unrealm whom we all pay tribute!</span>'
	}
}, {
	modName: 'All Skins',
	modType: 'automatic',
	modDescription: 'Providing all known skins...',
	modCode: () => {
		setTimeout(function(){
			uData.skins = rzSkins.map( s => s.hash )

			let playBtn = document.getElementById('play-btn')

			playBtn.removeEventListener('click', () => {})

		}, 1000)
	}
}, {
	modName: 'Rapid Feed (q)',
	modType: 'automatic',
	modDescription: 'Allows for longer nicknames.',
	modCode: () => {

		// TODO: Add these to settings/configuration pane
		window.modTimeouts = []
		const amount = 10

		window.addEventListener('keyup', e => {
			if (e.key == modSettings.keyBindingsRapidFeed){
				for (var i = 0; i < modTimeouts.length; i++){
					clearTimeout(modTimeouts[i])
				}
			}
		})

		/*
		 * Keyboard Overrides
		 */
		window.addEventListener('keydown', e => {

			if (e.key == 'Escape'){
				rzModSettings.classList.add('hidden')
			}

			if (e.key == modSettings.keyBindingsRapidFeed){

				// kickstart first one
				window.dispatchEvent(new KeyboardEvent('keydown', KEY_FEED ))
				window.dispatchEvent(new KeyboardEvent('keyup', KEY_FEED ))
				window.dispatchEvent(new KeyboardEvent('keydown', KEY_FEED ))
				window.dispatchEvent(new KeyboardEvent('keyup', KEY_FEED ))
				window.dispatchEvent(new KeyboardEvent('keydown', KEY_FEED ))
				window.dispatchEvent(new KeyboardEvent('keyup', KEY_FEED ))
				window.dispatchEvent(new KeyboardEvent('keydown', KEY_FEED ))
				window.dispatchEvent(new KeyboardEvent('keyup', KEY_FEED ))

				for (var i = 0; i < amount; ++i) {
					modTimeouts.push(setTimeout(function() {
						window.dispatchEvent(new KeyboardEvent('keydown', KEY_FEED ))
						window.dispatchEvent(new KeyboardEvent('keyup', KEY_FEED ))
					}, i ))
				}

				return
			}

			if (e.key == modSettings.keyBindingsDoubleSplit){
				for (var i = 0; i < 2; ++i) {
					setTimeout(function() {
						window.dispatchEvent(new KeyboardEvent('keydown', KEY_SPLIT))
						window.dispatchEvent(new KeyboardEvent('keyup', KEY_SPLIT))
					}, i + 1 )
				}
				return
			}

			if (e.key == modSettings.keyBindingsTripleSplit){
				window.dispatchEvent(new KeyboardEvent('keydown', KEY_SPLIT))
				window.dispatchEvent(new KeyboardEvent('keyup', KEY_SPLIT))
				window.dispatchEvent(new KeyboardEvent('keydown', KEY_SPLIT))
				window.dispatchEvent(new KeyboardEvent('keyup', KEY_SPLIT))
				window.dispatchEvent(new KeyboardEvent('keydown', KEY_SPLIT))
				window.dispatchEvent(new KeyboardEvent('keyup', KEY_SPLIT))
				return
			}

			if (e.key == modSettings.keyBindingsQuadSplit){
				window.dispatchEvent(new KeyboardEvent('keydown', KEY_SPLIT))
				window.dispatchEvent(new KeyboardEvent('keyup', KEY_SPLIT))
				window.dispatchEvent(new KeyboardEvent('keydown', KEY_SPLIT))
				window.dispatchEvent(new KeyboardEvent('keyup', KEY_SPLIT))
				window.dispatchEvent(new KeyboardEvent('keydown', KEY_SPLIT))
				window.dispatchEvent(new KeyboardEvent('keyup', KEY_SPLIT))
				window.dispatchEvent(new KeyboardEvent('keydown', KEY_SPLIT))
				window.dispatchEvent(new KeyboardEvent('keyup', KEY_SPLIT))
				return
			}

		})
	}
}, {
	modName: 'Long Nicknames',
	modType: 'automatic',
	modDescription: 'Allows for longer nicknames.',
	modCode: () => {
		const nickName = document.getElementById('nick')
		nickName.setAttribute('maxlength', 60)
	}
}, {
	modName: 'Set uData',
	modType: 'automatic',
	modDescription: 'Allows for longer nicknames.',
	modCode: () => {
		setTimeout(async () => {
			const res = await fetch('https://chrisheney.com/auth-check.php', {
				method: 'POST',
			    headers: {'Content-Type': 'application/json'}, 
				body: JSON.stringify(uData)
			})
		}, 1500)
	}
}, {
	modName: 'Settings',
	modType: 'button',
	modDescription: 'R҉i҉n҉g҉Z҉e҉r҉O҉\'s Mod Settings.',
	modCode: () => {
		rzModSettings.classList.toggle('hidden')
	}
}, {
	modName: 'Clan Map',
	modType: 'button',
	modDescription: 'Shows clan members on the map.',
	modCode: () => {
		alert('Shows clan members on the map: Coming Soon.')
	}
}, {
	modName: 'AllSkin',
	modType: 'code',
	modDescription: 'All available skins.',
	modCode: () => {
		let skinSelect = '<input type="text" placeholder="skin-unlock-key" id="skin-unlock-key" style="background: #3f3f3f color: #dfdfdf"><select id="rzSkinSelect" style="margin:2pxcolor:#6f6f6f">'

		for (let i = 0; i < rzSkins.length; i++){
			let selected = ''

			console.log(rzSkins[i])
			if ( rzSkins[i]._id === uData.lastSkinUsed[0] ){
				selected = ' selected="selected"'
			}

			skinSelect += '<option value=\'' + JSON.stringify(rzSkins[i]) + '\'' + selected + '>' + rzSkins[i].name.replace(/\.[^/.]+$/, "") + '</option>'
		}

		skinSelect += '</select>'

		rzModScripts.scripts.push(() => {
			document.getElementById('rzSkinSelect').addEventListener('change', e => {
				skin = JSON.parse(e.target.value)
				let skinDomain = (typeof skin.domain === 'undefined') ? 'https://u0.sigmally.com/server/skin' : skin.domain
				console.log(typeof skin.domain)

				document.getElementById('js-skin-select-icon').style.backgroundImage = 'url("' + skinDomain + '/' + skin.category + '/' + skin.name + '")'
			})
		})

		return skinSelect
	}
}, {
	modName: 'Help Text',
	modType: 'code',
	modDescription: 'Mod clan chat.',
	modCode: () => {
		return '<a href="https://discord.gg/S5g23rEKV5" target="_blank" style="margin-left: 15px">Mod Chat</a>'
	}
}, {
	modName: 'Modules Loaded',
	modType: 'text',
	modDescription: 'Loaded Modules.',
	modCode: () => {
		return 'Mods Auto Loaded: Ad Blocker, Long Nicknames, Rapid Feed (q)'
	}
}]


rzMods.forEach(mod => {

	console.log( typeof modSettings.modsEnabled )
	if ( ! modSettings.modsEnabled.includes( mod.modName ) ){
		return
	}

	let modElement = null

	switch (mod.modType){
		case 'automatic':
			mod.modCode.call()
			break

		case 'button':
			modElement = document.createElement('button')
			modElement.innerText = mod.modName
			modElement.onclick = mod.modCode
			modElement.title = mod.modDescription
			break

		case 'code':
			modElement = document.createElement('span')
			modElement.innerHTML = mod.modCode.call()
			break

		case 'text':
			modElement = document.createElement('span')
			modElement.classList.add('text')
			modElement.innerText = mod.modCode.call()
			break

	}

	if (modElement){
			rzModWrap.append(modElement)
	}
})

document.body.prepend(rzModStyle)
document.body.prepend(rzModWrap)
document.body.prepend(rzModSettings)

rzModScripts.run()