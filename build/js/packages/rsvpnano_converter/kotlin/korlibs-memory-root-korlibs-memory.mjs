import {
  arrayCopytctsywo3h7gj as arrayCopy,
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  protoOf180f3jzyo7rfj as protoOf,
  toString1pkumu07cwy4m as toString,
  IllegalStateException_init_$Create$3394faf8tdm0h as IllegalStateException_init_$Create$,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
initMetadataForClass(SimpleRingBuffer, 'SimpleRingBuffer');
//endregion
function arraycopy(src, srcPos, dst, dstPos, size) {
  // Inline function 'kotlin.collections.copyInto' call
  var endIndex = srcPos + size | 0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp = src;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp, dst, dstPos, srcPos, endIndex);
}
function getU16LE(_this__u8e3s4, offset) {
  // Inline function 'korlibs.memory.get16LE' call
  return u8(_this__u8e3s4, offset + 0 | 0) << 0 | u8(_this__u8e3s4, offset + 1 | 0) << 8;
}
function u8(_this__u8e3s4, offset) {
  return _this__u8e3s4[offset] & 255;
}
function SimpleRingBuffer(bits) {
  this.ij_1 = bits;
  this.jj_1 = 1 << this.ij_1;
  this.kj_1 = this.jj_1 - 1 | 0;
  this.lj_1 = new Int8Array(this.jj_1);
  this.mj_1 = 0;
  this.nj_1 = 0;
  this.oj_1 = this.jj_1;
  this.pj_1 = 0;
}
protoOf(SimpleRingBuffer).qj = function () {
  return this.lj_1;
};
protoOf(SimpleRingBuffer).rj = function () {
  return this.nj_1 & this.kj_1;
};
protoOf(SimpleRingBuffer).sj = function (count) {
  if (count < 0 || count > this.oj_1) {
    // Inline function 'kotlin.error' call
    var message = 'Try to write more than available';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  this.nj_1 = this.nj_1 + count | 0;
  this.pj_1 = this.pj_1 + count | 0;
  this.oj_1 = this.oj_1 - count | 0;
};
protoOf(SimpleRingBuffer).tj = function () {
  var tmp0 = this.pj_1;
  // Inline function 'kotlin.comparisons.minOf' call
  var b = this.jj_1 - (this.mj_1 & this.kj_1) | 0;
  return Math.min(tmp0, b);
};
protoOf(SimpleRingBuffer).uj = function () {
  var tmp0 = this.oj_1;
  // Inline function 'kotlin.comparisons.minOf' call
  var b = this.jj_1 - (this.nj_1 & this.kj_1) | 0;
  return Math.min(tmp0, b);
};
protoOf(SimpleRingBuffer).vj = function (data, offset, size) {
  return this.xj(this.wj(data, offset, size));
};
protoOf(SimpleRingBuffer).xj = function (size) {
  // Inline function 'kotlin.comparisons.minOf' call
  var a = this.pj_1;
  var toRead = Math.min(a, size);
  this.mj_1 = (this.mj_1 + toRead | 0) & this.kj_1;
  this.oj_1 = this.oj_1 + toRead | 0;
  this.pj_1 = this.pj_1 - toRead | 0;
  return toRead;
};
protoOf(SimpleRingBuffer).wj = function (data, offset, size) {
  // Inline function 'kotlin.comparisons.minOf' call
  var a = this.pj_1;
  var toRead = Math.min(a, size);
  var readCount = 0;
  var buffer = this.lj_1;
  var mask = this.kj_1;
  var coffset = offset;
  var lReadPos = this.mj_1;
  $l$loop: while (true) {
    var tmp0 = toRead;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = this.tj();
    var toReadChunk = Math.min(tmp0, b);
    if (toReadChunk <= 0)
      break $l$loop;
    arraycopy(buffer, lReadPos & mask, data, coffset, toReadChunk);
    toRead = toRead - toReadChunk | 0;
    coffset = coffset + toReadChunk | 0;
    lReadPos = lReadPos + toReadChunk | 0;
    readCount = readCount + toReadChunk | 0;
  }
  return readCount;
};
protoOf(SimpleRingBuffer).yj = function () {
  if (this.pj_1 <= 0)
    return -1;
  var out = this.lj_1[this.mj_1] & 255;
  this.mj_1 = (this.mj_1 + 1 | 0) & this.kj_1;
  this.pj_1 = this.pj_1 - 1 | 0;
  this.oj_1 = this.oj_1 + 1 | 0;
  return out;
};
protoOf(SimpleRingBuffer).zj = function (offset) {
  return this.lj_1[(this.mj_1 + offset | 0) & this.kj_1];
};
protoOf(SimpleRingBuffer).equals = function (other) {
  var tmp;
  var tmp_0;
  if (other instanceof SimpleRingBuffer) {
    tmp_0 = this.pj_1 === other.pj_1;
  } else {
    tmp_0 = false;
  }
  if (tmp_0) {
    var tmp2 = this.pj_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'korlibs.memory.SimpleRingBuffer.equaler' call
      var inductionVariable = 0;
      if (inductionVariable < tmp2)
        do {
          var n = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.zj(n) === other.zj(n))) {
            tmp$ret$0 = false;
            break $l$block;
          }
        }
         while (inductionVariable < tmp2);
      tmp$ret$0 = true;
    }
    tmp = tmp$ret$0;
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(SimpleRingBuffer).hashCode = function () {
  return this.ak();
};
protoOf(SimpleRingBuffer).ak = function () {
  // Inline function 'korlibs.memory.SimpleRingBuffer.hashCoder' call
  var count = this.pj_1;
  var out = 0;
  var inductionVariable = 0;
  if (inductionVariable < count)
    do {
      var n = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      out = imul(out, 7);
      var tmp = out;
      out = tmp + this.zj(n) | 0;
    }
     while (inductionVariable < count);
  return out;
};
//region block: exports
export {
  SimpleRingBuffer as SimpleRingBuffer1a4k3g2va6i8y,
  arraycopy as arraycopy3czrd9re36wzt,
  getU16LE as getU16LE2cizldw8qp53x,
};
//endregion

//# sourceMappingURL=korlibs-memory-root-korlibs-memory.mjs.map
