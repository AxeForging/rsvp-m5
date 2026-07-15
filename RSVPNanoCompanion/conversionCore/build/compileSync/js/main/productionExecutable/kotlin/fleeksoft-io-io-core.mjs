import {
  protoOf180f3jzyo7rfj as protoOf,
  _Char___init__impl__6a9atx2yltdocdrxs4d as _Char___init__impl__6a9atx,
  Char__toInt_impl_vasixd1ka89vowck9tn as Char__toInt_impl_vasixd,
  numberToChar93r9buh19yek as numberToChar,
  isSurrogatewe8xicw8z84n as isSurrogate,
  isHighSurrogate11jfjw70ar0zf as isHighSurrogate,
  isLowSurrogateujxcv7hjn4ma as isLowSurrogate,
  Char__minus_impl_a2frrh370khreoakmi6 as Char__minus_impl_a2frrh,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  VOID3gxj6tk5isa35 as VOID,
  IllegalArgumentException_init_$Create$1mgk48flhjim3 as IllegalArgumentException_init_$Create$,
  Exception_init_$Create$23mij58tpicbv as Exception_init_$Create$,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  compareTo3ankvs086tmwq as compareTo,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  arrayCopytctsywo3h7gj as arrayCopy,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  Comparable198qfk8pnblz0 as Comparable,
  charCodeAt1yspne1d8erbm as charCodeAt,
  toString1pkumu07cwy4m as toString,
  charArray2ujmm1qusno00 as charArray,
  toCharArray32huqyw9tt7kx as toCharArray,
  concatToString3cxf0c1gqonpo as concatToString,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  Exception_init_$Init$2vwhrp06ljvx1 as Exception_init_$Init$,
  objectCreate1ve4bgxiu4x98 as objectCreate,
  captureStack1fzi4aczwc4hg as captureStack,
  Exception_init_$Init$1ksq2fk0jxaag as Exception_init_$Init$_0,
  Exceptiondt2hlxn7j7vw as Exception,
  Error3ofk6owajcepa as Error_0,
  Error_init_$Init$2ft2ujg4ktuas as Error_init_$Init$,
  RuntimeException1r3t0zl97011n as RuntimeException,
  RuntimeException_init_$Init$2qjnmbxgyhko7 as RuntimeException_init_$Init$,
  defineProp3ur6h3slcvq4x as defineProp,
  UnsupportedOperationException2tkumpmhredt3 as UnsupportedOperationException,
  UnsupportedOperationException_init_$Init$2sn372cc1qtvi as UnsupportedOperationException_init_$Init$,
  IndexOutOfBoundsException_init_$Create$1dzbcrcoqjvjq as IndexOutOfBoundsException_init_$Create$,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
initMetadataForObject(Character, 'Character');
initMetadataForClass(Buffer, 'Buffer');
initMetadataForCompanion(Companion);
initMetadataForClass(ByteBuffer, 'ByteBuffer', VOID, Buffer, [Comparable]);
initMetadataForObject(ByteBufferFactory, 'ByteBufferFactory');
initMetadataForCompanion(Companion_0);
initMetadataForClass(CharBuffer, 'CharBuffer', VOID, Buffer, [Comparable]);
initMetadataForObject(CharBufferFactory, 'CharBufferFactory');
initMetadataForClass(HeapByteBuffer, 'HeapByteBuffer', VOID, ByteBuffer);
initMetadataForClass(HeapCharBuffer, 'HeapCharBuffer', VOID, CharBuffer);
initMetadataForClass(Reader, 'Reader');
initMetadataForClass(StringReader, 'StringReader', VOID, Reader);
initMetadataForClass(IOException, 'IOException', IOException_init_$Create$, Exception);
initMetadataForClass(CoderMalfunctionError, 'CoderMalfunctionError', VOID, Error_0);
initMetadataForClass(BufferUnderflowException, 'BufferUnderflowException', BufferUnderflowException, RuntimeException);
initMetadataForClass(BufferOverflowException, 'BufferOverflowException', BufferOverflowException, RuntimeException);
initMetadataForClass(CharacterCodingException, 'CharacterCodingException', CharacterCodingException, IOException);
initMetadataForClass(MalformedInputException, 'MalformedInputException', VOID, CharacterCodingException);
initMetadataForClass(UnmappableCharacterException, 'UnmappableCharacterException', VOID, Exception);
initMetadataForClass(ReadOnlyBufferException, 'ReadOnlyBufferException', ReadOnlyBufferException, UnsupportedOperationException);
initMetadataForObject(ArraysSupport, 'ArraysSupport');
initMetadataForObject(ObjHelper, 'ObjHelper');
//endregion
function getInt(_this__u8e3s4) {
  return _this__u8e3s4.tn();
}
function Character() {
  this.d11_1 = 65536;
  this.e11_1 = 1114111;
  this.f11_1 = 12;
  this.g11_1 = 13;
  this.h11_1 = 14;
  this.i11_1 = 2;
  this.j11_1 = 36;
  this.k11_1 = 9;
  this.l11_1 = -1;
  this.m11_1 = -1;
  this.n11_1 = 0;
  this.o11_1 = 14;
  this.p11_1 = 15;
  this.q11_1 = 16;
  this.r11_1 = 17;
  this.s11_1 = 18;
  this.t11_1 = 19;
  this.u11_1 = 20;
  this.v11_1 = 21;
  this.w11_1 = 22;
  this.x11_1 = 0;
  this.y11_1 = 18;
}
protoOf(Character).z11 = function (codePoint) {
  return codePoint >= 65536 && codePoint < 1114112;
};
protoOf(Character).a12 = function (codePoint) {
  var tmp = codePoint >>> 10 | 0;
  // Inline function 'kotlin.code' call
  var this_0 = _Char___init__impl__6a9atx(55296);
  var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
  return numberToChar(tmp + (tmp$ret$0 - 64 | 0) | 0);
};
protoOf(Character).b12 = function (codePoint) {
  var tmp = codePoint & 1023;
  // Inline function 'kotlin.code' call
  var this_0 = _Char___init__impl__6a9atx(56320);
  var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
  return numberToChar(tmp + tmp$ret$0 | 0);
};
protoOf(Character).c12 = function (char) {
  return isSurrogate(char);
};
protoOf(Character).d12 = function (char) {
  return isHighSurrogate(char);
};
protoOf(Character).e12 = function (char) {
  return isLowSurrogate(char);
};
protoOf(Character).f12 = function (high, low) {
  // Inline function 'kotlin.code' call
  var tmp = Char__toInt_impl_vasixd(high) << 10;
  // Inline function 'kotlin.code' call
  var tmp_0 = tmp + Char__toInt_impl_vasixd(low) | 0;
  // Inline function 'kotlin.code' call
  var this_0 = _Char___init__impl__6a9atx(55296);
  var tmp_1 = 65536 - (Char__toInt_impl_vasixd(this_0) << 10) | 0;
  // Inline function 'kotlin.code' call
  var this_1 = _Char___init__impl__6a9atx(56320);
  return tmp_0 + (tmp_1 - Char__toInt_impl_vasixd(this_1) | 0) | 0;
};
protoOf(Character).g12 = function (codePoint) {
  return (codePoint >>> 16 | 0) === 0;
};
protoOf(Character).h12 = function (codePoint) {
  return (codePoint >>> 16 | 0) < 17;
};
protoOf(Character).i12 = function (x, y) {
  return Char__minus_impl_a2frrh(x, y);
};
var Character_instance;
function Character_getInstance() {
  return Character_instance;
}
function Buffer(bufferPosition, bufferLimit, cap, bufferMark) {
  bufferPosition = bufferPosition === VOID ? 0 : bufferPosition;
  bufferMark = bufferMark === VOID ? -1 : bufferMark;
  this.j12_1 = bufferPosition;
  this.k12_1 = bufferLimit;
  this.l12_1 = cap;
  this.m12_1 = bufferMark;
  if (this.m12_1 >= 0 && this.m12_1 > this.j12_1) {
    throw IllegalArgumentException_init_$Create$('mark > position: (' + this.m12_1 + ' > ' + this.j12_1 + ')');
  }
}
protoOf(Buffer).n12 = function () {
  var rem = this.k12_1 - this.j12_1 | 0;
  return rem > 0 ? rem : 0;
};
protoOf(Buffer).o12 = function () {
  return this.k12_1;
};
protoOf(Buffer).q12 = function () {
  return this.j12_1;
};
protoOf(Buffer).r12 = function (pos) {
  if (this.m12_1 > pos)
    this.m12_1 = -1;
  this.j12_1 = pos;
  return this;
};
protoOf(Buffer).s12 = function () {
  this.k12_1 = this.j12_1;
  this.j12_1 = 0;
  this.m12_1 = -1;
  return this;
};
protoOf(Buffer).t12 = function () {
  return this.j12_1 < this.k12_1;
};
protoOf(Buffer).v12 = function () {
  var p = this.j12_1;
  if (p >= this.k12_1)
    throw new BufferOverflowException();
  this.j12_1 = p + 1 | 0;
  return p;
};
protoOf(Buffer).w12 = function () {
  var p = this.j12_1;
  if (p >= this.k12_1)
    throw new BufferUnderflowException();
  this.j12_1 = p + 1 | 0;
  return p;
};
protoOf(Buffer).x12 = function (index) {
  if (index < 0 || index >= this.k12_1)
    throw Exception_init_$Create$('Invalid index: ' + index);
  return index;
};
protoOf(Buffer).y12 = function (fromIndex, size, destSize) {
  if ((destSize | fromIndex | size) < 0 || size > (destSize - fromIndex | 0)) {
    throw new BufferUnderflowException();
  }
  return fromIndex;
};
function mismatch($this, a, aOff, b, bOff, length) {
  var i = 0;
  while (i < length) {
    if (!(a.m(aOff + i | 0) === b.m(bOff + i | 0))) {
      return i;
    }
    i = i + 1 | 0;
  }
  return -1;
}
function putArray($this, index, src, off, len) {
  var end = off + len | 0;
  var inductionVariable = off;
  if (inductionVariable < end)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      $this.z12(index + (i - off | 0) | 0, src[i]);
    }
     while (inductionVariable < end);
}
function putBuffer($this, pos, src, srcPos, srcRem) {
  return src.b13($this, $this.a13(pos), srcPos, srcRem);
}
function Companion() {
}
protoOf(Companion).c13 = function (x, y) {
  return compareTo(x, y);
};
var Companion_instance;
function Companion_getInstance() {
  return Companion_instance;
}
function ByteBuffer(byteArray, position, offset, limit, mark, cap, readOnly) {
  mark = mark === VOID ? -1 : mark;
  cap = cap === VOID ? byteArray.length : cap;
  readOnly = readOnly === VOID ? false : readOnly;
  Buffer.call(this, position, limit, cap, mark);
  this.a11_1 = byteArray;
  this.b11_1 = readOnly;
  this.c11_1 = offset;
}
protoOf(ByteBuffer).e13 = function (src) {
  return this.f13(src, 0, src.length);
};
protoOf(ByteBuffer).f13 = function (src, off, len) {
  if (this.p12()) {
    throw new ReadOnlyBufferException();
  }
  this.y12(off, len, src.length);
  var pos = this.q12();
  if (len > (this.o12() - pos | 0)) {
    throw new BufferOverflowException();
  }
  putArray(this, pos, src, off, len);
  this.r12(pos + len | 0);
  return this;
};
protoOf(ByteBuffer).g13 = function (src) {
  if (this.p12()) {
    throw new ReadOnlyBufferException();
  }
  var srcPos = src.q12();
  var srcLim = src.o12();
  var srcRem = srcPos <= srcLim ? srcLim - srcPos | 0 : 0;
  var pos = this.q12();
  var lim = this.o12();
  var rem = pos <= lim ? lim - pos | 0 : 0;
  if (srcRem > rem) {
    throw new BufferOverflowException();
  }
  putBuffer(this, pos, src, srcPos, srcRem);
  this.r12(pos + srcRem | 0);
  src.r12(srcPos + srcRem | 0);
  return this;
};
protoOf(ByteBuffer).b13 = function (dst, destOffset, srcPos, length) {
  var tmp0 = this.a11_1;
  var tmp2 = dst.a11_1;
  // Inline function 'kotlin.collections.copyInto' call
  var endIndex = srcPos + length | 0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp = tmp0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp, tmp2, destOffset, srcPos, endIndex);
  return this;
};
protoOf(ByteBuffer).a13 = function (i) {
  return i + this.c11_1 | 0;
};
protoOf(ByteBuffer).h13 = function () {
  if (this.p12())
    throw new ReadOnlyBufferException();
  return this.a11_1;
};
protoOf(ByteBuffer).i13 = function () {
  return true;
};
protoOf(ByteBuffer).u12 = function () {
  if (this.p12())
    throw new ReadOnlyBufferException();
  return this.c11_1;
};
protoOf(ByteBuffer).r12 = function (pos) {
  protoOf(Buffer).r12.call(this, pos);
  return this;
};
protoOf(ByteBuffer).s12 = function () {
  protoOf(Buffer).s12.call(this);
  return this;
};
protoOf(ByteBuffer).equals = function (other) {
  if (this === other) {
    return true;
  }
  if (!(other instanceof ByteBuffer)) {
    return false;
  }
  var that = other;
  var thisPos = this.q12();
  var thisRem = this.o12() - thisPos | 0;
  var thatPos = that.q12();
  var thatRem = that.o12() - thatPos | 0;
  if (thisRem < 0 || !(thisRem === thatRem)) {
    return false;
  }
  return mismatch(Companion_instance, this, thisPos, that, thatPos, thisRem) < 0;
};
protoOf(ByteBuffer).j13 = function (other) {
  var thisPos = this.q12();
  var thisRem = this.o12() - thisPos | 0;
  var thatPos = other.q12();
  var thatRem = other.o12() - thatPos | 0;
  // Inline function 'kotlin.comparisons.minOf' call
  var length = Math.min(thisRem, thatRem);
  if (length < 0) {
    return -1;
  }
  var i = mismatch(Companion_instance, this, thisPos, other, thatPos, length);
  if (i >= 0) {
    return Companion_instance.c13(this.m(thisPos + i | 0), other.m(thatPos + i | 0));
  }
  return thisRem - thatRem | 0;
};
protoOf(ByteBuffer).d = function (other) {
  return this.j13(other instanceof ByteBuffer ? other : THROW_CCE());
};
protoOf(ByteBuffer).hashCode = function () {
  var h = 1;
  var p = this.q12();
  var inductionVariable = this.o12() - 1 | 0;
  if (p <= inductionVariable)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + -1 | 0;
      h = imul(31, h) + this.m(i) | 0;
    }
     while (!(i === p));
  return h;
};
function ByteBufferFactory() {
}
protoOf(ByteBufferFactory).k13 = function (byteArray, off, len) {
  var tmp0_limit = off + len | 0;
  return new HeapByteBuffer(byteArray, off, 0, tmp0_limit, -1);
};
protoOf(ByteBufferFactory).l13 = function (byteArray, off, len, $super) {
  off = off === VOID ? 0 : off;
  len = len === VOID ? byteArray.length : len;
  return $super === VOID ? this.k13(byteArray, off, len) : $super.k13.call(this, byteArray, off, len);
};
protoOf(ByteBufferFactory).m13 = function (capacity) {
  var tmp0_byteArray = new Int8Array(capacity);
  return new HeapByteBuffer(tmp0_byteArray, 0, 0, capacity, -1);
};
var ByteBufferFactory_instance;
function ByteBufferFactory_getInstance() {
  return ByteBufferFactory_instance;
}
function mismatch_0($this, a, aOff, b, bOff, length) {
  var i = 0;
  while (i < length) {
    if (!(a.b(aOff + i | 0) === b.b(bOff + i | 0))) {
      return i;
    }
    i = i + 1 | 0;
  }
  return -1;
}
function putBuffer_0($this, pos, src, srcPos, n) {
  var posMax = pos + n | 0;
  var inductionVariable = pos;
  if (inductionVariable < posMax)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var j = srcPos + (i - pos | 0) | 0;
      $this.u13(i, src.b(j));
    }
     while (inductionVariable < posMax);
  return $this;
}
function Companion_0() {
}
var Companion_instance_0;
function Companion_getInstance_0() {
  return Companion_instance_0;
}
function CharBuffer(charArray, position, offset, limit, mark, cap, readOnly) {
  mark = mark === VOID ? -1 : mark;
  cap = cap === VOID ? charArray.length : cap;
  readOnly = readOnly === VOID ? false : readOnly;
  Buffer.call(this, position, limit, cap, mark);
  this.r13_1 = charArray;
  this.s13_1 = readOnly;
  this.t13_1 = offset;
}
protoOf(CharBuffer).x13 = function (src) {
  if (this.p12()) {
    throw new ReadOnlyBufferException();
  }
  var srcPos = src.q12();
  var srcLim = src.o12();
  var srcRem = srcPos <= srcLim ? srcLim - srcPos | 0 : 0;
  var pos = this.q12();
  var lim = this.o12();
  var rem = pos <= lim ? lim - pos | 0 : 0;
  if (srcRem > rem) {
    throw new BufferOverflowException();
  }
  putBuffer_0(this, pos, src, srcPos, srcRem);
  this.r12(pos + srcRem | 0);
  src.r12(srcPos + srcRem | 0);
  return this;
};
protoOf(CharBuffer).y13 = function (src) {
  return this.z13(src, 0, src.length);
};
protoOf(CharBuffer).z13 = function (src, start, end) {
  this.y12(start, end - start | 0, src.length);
  if (this.p12())
    throw new ReadOnlyBufferException();
  if ((end - start | 0) > this.n12())
    throw new BufferOverflowException();
  var inductionVariable = start;
  if (inductionVariable < end)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      this.w13(charCodeAt(src, i));
    }
     while (inductionVariable < end);
  return this;
};
protoOf(CharBuffer).h13 = function () {
  if (this.s13_1)
    throw new ReadOnlyBufferException();
  return this.r13_1;
};
protoOf(CharBuffer).i13 = function () {
  return true;
};
protoOf(CharBuffer).u12 = function () {
  if (this.s13_1)
    throw new ReadOnlyBufferException();
  return this.t13_1;
};
protoOf(CharBuffer).r12 = function (pos) {
  protoOf(Buffer).r12.call(this, pos);
  return this;
};
protoOf(CharBuffer).s12 = function () {
  protoOf(Buffer).s12.call(this);
  return this;
};
protoOf(CharBuffer).hashCode = function () {
  var h = 1;
  var p = this.q12();
  var inductionVariable = this.o12() - 1 | 0;
  if (p <= inductionVariable)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + -1 | 0;
      var tmp = imul(31, h);
      // Inline function 'kotlin.code' call
      var this_0 = this.b(i);
      h = tmp + Char__toInt_impl_vasixd(this_0) | 0;
    }
     while (!(i === p));
  return h;
};
protoOf(CharBuffer).equals = function (other) {
  if (this === other) {
    return true;
  }
  if (!(other instanceof CharBuffer)) {
    return false;
  }
  var that = other;
  var thisPos = this.q12();
  var thisRem = this.o12() - thisPos | 0;
  var thatPos = that.q12();
  var thatRem = that.o12() - thatPos | 0;
  if (thisRem < 0 || !(thisRem === thatRem)) {
    return false;
  }
  return mismatch_0(Companion_instance_0, this, thisPos, that, thatPos, thisRem) < 0;
};
protoOf(CharBuffer).a14 = function (other) {
  var thisPos = this.q12();
  var thisRem = this.o12() - thisPos | 0;
  var thatPos = other.q12();
  var thatRem = other.o12() - thatPos | 0;
  // Inline function 'kotlin.comparisons.minOf' call
  var length = Math.min(thisRem, thatRem);
  if (length < 0)
    return -1;
  var i = mismatch_0(Companion_instance_0, this, thisPos, other, thatPos, length);
  return i >= 0 ? Character_instance.i12(this.b(thisPos + i | 0), other.b(thatPos + i | 0)) : thisRem - thatRem | 0;
};
protoOf(CharBuffer).d = function (other) {
  return this.a14(other instanceof CharBuffer ? other : THROW_CCE());
};
protoOf(CharBuffer).toString = function () {
  return this.b14(this.q12(), this.o12());
};
protoOf(CharBuffer).g = function (value) {
  var tmp;
  if (value == null) {
    tmp = this.y13('null');
  } else {
    if (value instanceof CharBuffer) {
      tmp = this.x13(value);
    } else {
      tmp = this.y13(toString(value));
    }
  }
  return tmp;
};
protoOf(CharBuffer).w7 = function (value) {
  return this.w13(value);
};
function CharBufferFactory() {
}
protoOf(CharBufferFactory).m13 = function (capacity) {
  // Inline function 'kotlin.require' call
  if (!(capacity >= 0)) {
    var message = 'capacity must be >= 0';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  return new HeapCharBuffer(charArray(capacity), 0, 0, capacity);
};
var CharBufferFactory_instance;
function CharBufferFactory_getInstance() {
  return CharBufferFactory_instance;
}
function HeapByteBuffer(byteArray, position, offset, limit, mark, cap, readOnly) {
  mark = mark === VOID ? -1 : mark;
  cap = cap === VOID ? byteArray.length : cap;
  readOnly = readOnly === VOID ? false : readOnly;
  ByteBuffer.call(this, byteArray, position, offset, limit, mark, cap, readOnly);
}
protoOf(HeapByteBuffer).p12 = function () {
  return this.b11_1;
};
protoOf(HeapByteBuffer).tn = function () {
  return this.a11_1[this.a13(this.w12())];
};
protoOf(HeapByteBuffer).m = function (index) {
  return this.a11_1[this.a13(this.x12(index))];
};
protoOf(HeapByteBuffer).d13 = function (b) {
  this.a11_1[this.a13(this.v12())] = b;
  return this;
};
protoOf(HeapByteBuffer).z12 = function (index, b) {
  this.a11_1[this.a13(this.x12(index))] = b;
  return this;
};
protoOf(HeapByteBuffer).f13 = function (src, off, len) {
  this.y12(off, len, src.length);
  var pos = this.q12();
  if (len > (this.o12() - pos | 0)) {
    throw new BufferOverflowException();
  }
  var tmp2 = this.a11_1;
  var tmp4 = this.a13(pos);
  // Inline function 'kotlin.collections.copyInto' call
  var endIndex = off + len | 0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp = src;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp, tmp2, tmp4, off, endIndex);
  this.r12(pos + len | 0);
  return this;
};
function ix($this, i) {
  return i + $this.t13_1 | 0;
}
function HeapCharBuffer(charArray, position, offset, limit, mark, cap, readOnly) {
  mark = mark === VOID ? -1 : mark;
  cap = cap === VOID ? charArray.length : cap;
  readOnly = readOnly === VOID ? false : readOnly;
  CharBuffer.call(this, charArray, position, offset, limit, mark, cap, readOnly);
}
protoOf(HeapCharBuffer).p12 = function () {
  return this.s13_1;
};
protoOf(HeapCharBuffer).v13 = function () {
  return this.r13_1[ix(this, this.w12())];
};
protoOf(HeapCharBuffer).b = function (index) {
  return this.r13_1[ix(this, this.x12(index))];
};
protoOf(HeapCharBuffer).w13 = function (c) {
  this.r13_1[ix(this, this.v12())] = c;
  return this;
};
protoOf(HeapCharBuffer).u13 = function (index, c) {
  this.r13_1[ix(this, this.x12(index))] = c;
  return this;
};
protoOf(HeapCharBuffer).z13 = function (src, start, end) {
  var length = end - start | 0;
  this.y12(start, length, src.length);
  var pos = this.q12();
  var lim = this.o12();
  var rem = pos <= lim ? lim - pos | 0 : 0;
  if (length > rem)
    throw new BufferOverflowException();
  var tmp0 = toCharArray(src);
  var tmp2 = this.r13_1;
  // Inline function 'kotlin.collections.copyInto' call
  var destinationOffset = ix(this, pos);
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp = tmp0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp, tmp2, destinationOffset, start, end);
  this.r12(pos + length | 0);
  return this;
};
protoOf(HeapCharBuffer).b14 = function (start, end) {
  return concatToString(this.r13_1, this.q12(), this.o12());
};
function Reader() {
  this.q14_1 = null;
}
function ensureOpen($this) {
  if ($this.v14_1 == null)
    throw IOException_init_$Create$_0('Stream closed');
}
function StringReader(str) {
  Reader.call(this);
  this.t14_1 = new Object();
  this.u14_1 = str.length;
  this.v14_1 = str;
  this.w14_1 = 0;
  this.x14_1 = 0;
}
protoOf(StringReader).r14 = function (cbuf, off, len) {
  // Inline function 'kotlinx.atomicfu.locks.synchronized' call
  this.t14_1;
  ensureOpen(this);
  ObjHelper_instance.y14(off, len, cbuf.length);
  if (len === 0) {
    return 0;
  }
  if (this.w14_1 >= this.u14_1)
    return -1;
  // Inline function 'kotlin.math.min' call
  var a = this.u14_1 - this.w14_1 | 0;
  var n = Math.min(a, len);
  var inductionVariable = 0;
  if (inductionVariable < n)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      cbuf[off + i | 0] = charCodeAt(ensureNotNull(this.v14_1), this.w14_1 + i | 0);
    }
     while (inductionVariable < n);
  this.w14_1 = this.w14_1 + n | 0;
  return n;
};
protoOf(StringReader).v3 = function () {
  // Inline function 'kotlinx.atomicfu.locks.synchronized' call
  this.t14_1;
  this.v14_1 = null;
};
function IOException_init_$Init$($this) {
  Exception_init_$Init$($this);
  IOException.call($this);
  return $this;
}
function IOException_init_$Create$() {
  var tmp = IOException_init_$Init$(objectCreate(protoOf(IOException)));
  captureStack(tmp, IOException_init_$Create$);
  return tmp;
}
function IOException_init_$Init$_0(msg, $this) {
  Exception_init_$Init$_0(msg, $this);
  IOException.call($this);
  return $this;
}
function IOException_init_$Create$_0(msg) {
  var tmp = IOException_init_$Init$_0(msg, objectCreate(protoOf(IOException)));
  captureStack(tmp, IOException_init_$Create$_0);
  return tmp;
}
function IOException() {
  captureStack(this, IOException);
}
function CoderMalfunctionError(cause) {
  Error_init_$Init$(cause, this);
  captureStack(this, CoderMalfunctionError);
}
function BufferUnderflowException() {
  RuntimeException_init_$Init$(this);
  captureStack(this, BufferUnderflowException);
}
function BufferOverflowException() {
  RuntimeException_init_$Init$(this);
  captureStack(this, BufferOverflowException);
}
function MalformedInputException(inputLength) {
  CharacterCodingException.call(this);
  captureStack(this, MalformedInputException);
  this.z14_1 = 'Input length = ' + inputLength;
  delete this.message;
}
protoOf(MalformedInputException).e = function () {
  return this.z14_1;
};
function UnmappableCharacterException(inputLength) {
  Exception_init_$Init$(this);
  captureStack(this, UnmappableCharacterException);
  this.a15_1 = 'Input length = ' + inputLength;
  delete this.message;
}
protoOf(UnmappableCharacterException).e = function () {
  return this.a15_1;
};
function ReadOnlyBufferException() {
  UnsupportedOperationException_init_$Init$(this);
  captureStack(this, ReadOnlyBufferException);
}
function CharacterCodingException() {
  IOException_init_$Init$(this);
  captureStack(this, CharacterCodingException);
}
function hugeLength($this, oldLength, minGrowth) {
  var minLength = oldLength + minGrowth | 0;
  if (minLength < 0) {
    throw Exception_init_$Create$('Required array length ' + oldLength + ' + ' + minGrowth + ' is too large');
  }
  return minLength <= 2147483639 ? 2147483639 : minLength;
}
function ArraysSupport() {
  this.b15_1 = 2147483639;
}
protoOf(ArraysSupport).c15 = function (oldLength, minGrowth, prefGrowth) {
  // Inline function 'kotlin.comparisons.maxOf' call
  var prefLength = oldLength + Math.max(minGrowth, prefGrowth) | 0;
  var tmp;
  if (1 <= prefLength ? prefLength <= 2147483639 : false) {
    tmp = prefLength;
  } else {
    tmp = hugeLength(this, oldLength, minGrowth);
  }
  return tmp;
};
var ArraysSupport_instance;
function ArraysSupport_getInstance() {
  return ArraysSupport_instance;
}
function ObjHelper() {
}
protoOf(ObjHelper).y14 = function (fromIndex, size, length) {
  if ((length | fromIndex | size) < 0 || size > (length - fromIndex | 0)) {
    throw IndexOutOfBoundsException_init_$Create$('Range [' + fromIndex + ', ' + size + ') out of bounds for length ' + length);
  }
};
var ObjHelper_instance;
function ObjHelper_getInstance() {
  return ObjHelper_instance;
}
//region block: post-declaration
defineProp(protoOf(MalformedInputException), 'message', function () {
  return this.e();
});
defineProp(protoOf(UnmappableCharacterException), 'message', function () {
  return this.e();
});
//endregion
//region block: init
Character_instance = new Character();
Companion_instance = new Companion();
ByteBufferFactory_instance = new ByteBufferFactory();
Companion_instance_0 = new Companion_0();
CharBufferFactory_instance = new CharBufferFactory();
ArraysSupport_instance = new ArraysSupport();
ObjHelper_instance = new ObjHelper();
//endregion
//region block: exports
export {
  BufferOverflowException as BufferOverflowException3vvryj2hjqusa,
  BufferUnderflowException as BufferUnderflowExceptionsgels97lgs0q,
  CoderMalfunctionError as CoderMalfunctionError1vzrfnmootjki,
  IOException as IOException3o1t95jcr9mhu,
  MalformedInputException as MalformedInputException29godudhd6qpb,
  UnmappableCharacterException as UnmappableCharacterException2tpe2rxf0gsxr,
  StringReader as StringReader14lh3n71rw7y9,
  getInt as getInt217urr7ge0mza,
  ArraysSupport_instance as ArraysSupport_instance1czs81vr29dio,
  ByteBufferFactory_instance as ByteBufferFactory_instanceq7mfrljhgssx,
  CharBufferFactory_instance as CharBufferFactory_instance1y2fzvjfa1a18,
  Character_instance as Character_instance2m7rjao9soixx,
  IOException_init_$Create$_0 as IOException_init_$Create$w94coqpmgsgs,
};
//endregion

//# sourceMappingURL=fleeksoft-io-io-core.mjs.map
