import {
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  fill2542d4m9l93pn as fill,
  objectCreate1ve4bgxiu4x98 as objectCreate,
  VOID3gxj6tk5isa35 as VOID,
  toByte4i43936u611k as toByte,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  toShort36kaw0zjdq3ex as toShort,
  toString1pkumu07cwy4m as toString,
  IllegalStateException_init_$Create$3394faf8tdm0h as IllegalStateException_init_$Create$,
  until1jbpn0z3f8lbg as until,
  step18s9qzr5xwxat as step,
  CoroutineImpl2sn3kjnwmfr10 as CoroutineImpl,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  initMetadataForCoroutine1i7lbatuf5bnt as initMetadataForCoroutine,
  arrayCopytctsywo3h7gj as arrayCopy,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  constructCallableReference23y65rf941mch as constructCallableReference,
  KProperty02ce7r476m8633 as KProperty0,
  getPropertyCallableRef3hckxc0xueiaj as getPropertyCallableRef,
  lazy2hsh8ze7j6ikd as lazy,
} from './kotlin-kotlin-stdlib.mjs';
import {
  SimpleRingBuffer1a4k3g2va6i8y as SimpleRingBuffer,
  getU16LE2cizldw8qp53x as getU16LE,
} from './korlibs-memory-root-korlibs-memory.mjs';
import {
  unsupported198cz39rr1ztw as unsupported,
  ByteArrayBuilder_init_$Create$23eei1jfx3acd as ByteArrayBuilder_init_$Create$,
} from './korlibs-platform-root-korlibs-platform.mjs';
import {
  MemorySyncStream1uv927me2xl9s as MemorySyncStream,
  openSync2m3qn99fqytu0 as openSync,
  toAsync26jtc2k5wi4gn as toAsync,
  toAsync2pa2d6thtq8t4 as toAsync_0,
} from './korlibs-io-stream-root-korlibs-io-stream.mjs';
import { runBlockingNoSuspensions25hsuevf2mle as runBlockingNoSuspensions } from './korlibs-concurrent-root-korlibs-concurrent.mjs';
//region block: imports
var clz32 = Math.clz32;
var imul = Math.imul;
//endregion
//region block: pre-declaration
initMetadataForCompanion(Companion);
initMetadataForCompanion(Companion_0);
initMetadataForClass(SlidingWindowWithOutput, 'SlidingWindowWithOutput', VOID, VOID, VOID, [0, 1]);
function uncompress(i, o, $completion) {
  unsupported();
}
initMetadataForInterface(CompressionMethod, 'CompressionMethod', VOID, VOID, VOID, [2, 3]);
function uncompress_0(i, o, $completion) {
  return this.kw(toDeflater(new BitReader(i)), toDeflater_0(o), $completion);
}
initMetadataForInterface(IDeflaterInternal, 'IDeflaterInternal', VOID, VOID, [CompressionMethod], [2, 3]);
initMetadataForClass(DeflaterPortable, 'DeflaterPortable', VOID, VOID, [IDeflaterInternal], [3, 2]);
initMetadataForCompanion(Companion_1, DeflaterPortable, VOID, [3, 2]);
initMetadataForClass(HuffmanTree, 'HuffmanTree', HuffmanTree);
initMetadataForClass(SlidingWindow, 'SlidingWindow');
initMetadataForClass(FixedSizeByteArrayBuilder, 'FixedSizeByteArrayBuilder');
initMetadataForCoroutine($uncompressCOROUTINE$, CoroutineImpl);
initMetadataForCompanion(Companion_2, VOID, VOID, [1]);
initMetadataForCoroutine($prepareBytesUpToCOROUTINE$, CoroutineImpl);
initMetadataForCoroutine($abytesCOROUTINE$, CoroutineImpl);
initMetadataForCoroutine($readCOROUTINE$, CoroutineImpl);
initMetadataForClass(BitReader, 'BitReader', VOID, VOID, VOID, [0, 1, 2, 3]);
initMetadataForCoroutine($prepareBigChunkIfRequiredCOROUTINE$, CoroutineImpl);
initMetadataForClass(toDeflater$1, VOID, VOID, VOID, VOID, [0, 1, 3]);
initMetadataForClass(toDeflater$2, VOID, VOID, VOID, VOID, [3, 1]);
initMetadataForLambda(uncompress$slambda, CoroutineImpl, VOID, [0]);
//endregion
function Companion() {
  this.ku_1 = 8388608;
  this.lu_1 = 131072;
}
var Companion_instance;
function Companion_getInstance() {
  return Companion_instance;
}
function Companion_0() {
  this.mu_1 = -1;
  this.nu_1 = -2;
  this.ou_1 = 1023;
  this.pu_1 = 16;
  this.qu_1 = 288;
  this.ru_1 = true;
  this.su_1 = true;
  this.tu_1 = 10;
}
var Companion_instance_0;
function Companion_getInstance_0() {
  return Companion_instance_0;
}
function resetAlloc($this) {
  $this.xu_1 = 0;
}
function alloc($this, value, left, right) {
  var _unary__edvuaz = $this.xu_1;
  $this.xu_1 = _unary__edvuaz + 1 | 0;
  // Inline function 'kotlin.apply' call
  $this.uu_1[_unary__edvuaz] = value;
  $this.vu_1[_unary__edvuaz] = left;
  $this.wu_1[_unary__edvuaz] = right;
  return _unary__edvuaz;
}
function allocLeaf($this, value) {
  return alloc($this, value, 1023, 1023);
}
function allocNode($this, left, right) {
  return alloc($this, -1, left, right);
}
function computeFastLookup($this) {
  fill($this.av_1, -1);
  computeEncodedValues($this, $this.yu_1, 0, 0);
}
function computeEncodedValues($this, node, encoded, encodedBits) {
  // Inline function 'korlibs.compression.deflate.HuffmanTree.value' call
  if ($this.uu_1[node] === -1) {
    if (encodedBits < 10) {
      // Inline function 'korlibs.compression.deflate.HuffmanTree.left' call
      var tmp$ret$1 = $this.vu_1[node];
      computeEncodedValues($this, tmp$ret$1, encoded, encodedBits + 1 | 0);
      // Inline function 'korlibs.compression.deflate.HuffmanTree.right' call
      var tmp$ret$2 = $this.wu_1[node];
      computeEncodedValues($this, tmp$ret$2, encoded | 1 << encodedBits, encodedBits + 1 | 0);
    } else {
      writeVariants($this, encoded, encodedBits, node, -2);
    }
  } else {
    // Inline function 'korlibs.compression.deflate.HuffmanTree.value' call
    var tmp$ret$3 = $this.uu_1[node];
    writeVariants($this, encoded, encodedBits, node, tmp$ret$3);
  }
}
function writeVariants($this, encoded, encodedBits, node, nvalue) {
  var encodedInfo = nvalue & 65535 | encodedBits << 16;
  var rangeCount = 1 << (10 - encodedBits | 0);
  var inductionVariable = 0;
  if (inductionVariable < rangeCount)
    do {
      var n = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var i = encoded | n << encodedBits;
      $this.av_1[i] = encodedInfo;
      $this.bv_1[i] = node;
    }
     while (inductionVariable < rangeCount);
}
function FixedSizeByteArrayBuilder_init_$Init$(size, $this) {
  FixedSizeByteArrayBuilder.call($this, new Int8Array(size));
  return $this;
}
function FixedSizeByteArrayBuilder_init_$Create$(size) {
  return FixedSizeByteArrayBuilder_init_$Init$(size, objectCreate(protoOf(FixedSizeByteArrayBuilder)));
}
function SlidingWindowWithOutput(sliding, out, flushSize, extraSize) {
  flushSize = flushSize === VOID ? 8388608 : flushSize;
  extraSize = extraSize === VOID ? 131072 : extraSize;
  this.gv_1 = sliding;
  this.hv_1 = out;
  this.iv_1 = flushSize;
  this.jv_1 = extraSize;
  this.kv_1 = FixedSizeByteArrayBuilder_init_$Create$(this.iv_1 + this.jv_1 | 0);
}
protoOf(SlidingWindowWithOutput).lv = function () {
  return this.kv_1.nv_1 >= this.iv_1;
};
protoOf(SlidingWindowWithOutput).ov = function (distance, length) {
  var inductionVariable = 0;
  if (inductionVariable < length)
    do {
      var n = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var v = this.gv_1.tv(distance);
      this.kv_1.uv(toByte(v));
    }
     while (inductionVariable < length);
};
protoOf(SlidingWindowWithOutput).vv = function (bytes, offset, len) {
  this.kv_1.wv(bytes, offset, len);
  this.gv_1.xv(bytes, offset, len);
};
protoOf(SlidingWindowWithOutput).yv = function (byte) {
  this.kv_1.uv(byte);
  this.gv_1.zv(get_unsigned(byte));
};
function Companion_1() {
  Companion_instance_1 = this;
  DeflaterPortable.call(this, 15);
  var tmp = this;
  var tmp_0 = new HuffmanTree();
  // Inline function 'kotlin.apply' call
  var this_0 = new Int32Array(288);
  var inductionVariable = 0;
  if (inductionVariable <= 143)
    do {
      var n = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      this_0[n] = 8;
    }
     while (inductionVariable <= 143);
  var inductionVariable_0 = 144;
  if (inductionVariable_0 <= 255)
    do {
      var n_0 = inductionVariable_0;
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      this_0[n_0] = 9;
    }
     while (inductionVariable_0 <= 255);
  var inductionVariable_1 = 256;
  if (inductionVariable_1 <= 279)
    do {
      var n_1 = inductionVariable_1;
      inductionVariable_1 = inductionVariable_1 + 1 | 0;
      this_0[n_1] = 7;
    }
     while (inductionVariable_1 <= 279);
  var inductionVariable_2 = 280;
  if (inductionVariable_2 <= 287)
    do {
      var n_2 = inductionVariable_2;
      inductionVariable_2 = inductionVariable_2 + 1 | 0;
      this_0[n_2] = 8;
    }
     while (inductionVariable_2 <= 287);
  tmp.bw_1 = tmp_0.iw(this_0);
  var tmp_1 = this;
  var tmp_2 = new HuffmanTree();
  var tmp_3 = 0;
  var tmp_4 = new Int32Array(32);
  while (tmp_3 < 32) {
    tmp_4[tmp_3] = 5;
    tmp_3 = tmp_3 + 1 | 0;
  }
  tmp_1.cw_1 = tmp_2.iw(tmp_4);
  var tmp_5 = this;
  // Inline function 'kotlin.intArrayOf' call
  tmp_5.dw_1 = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0]);
  var tmp_6 = this;
  // Inline function 'kotlin.intArrayOf' call
  tmp_6.ew_1 = new Int32Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]);
  var tmp_7 = this;
  // Inline function 'kotlin.intArrayOf' call
  tmp_7.fw_1 = new Int32Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]);
  var tmp_8 = this;
  // Inline function 'kotlin.intArrayOf' call
  tmp_8.gw_1 = new Int32Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]);
  var tmp_9 = this;
  // Inline function 'kotlin.intArrayOf' call
  tmp_9.hw_1 = new Int32Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
}
var Companion_instance_1;
function Companion_getInstance_1() {
  if (Companion_instance_1 == null)
    new Companion_1();
  return Companion_instance_1;
}
function HuffmanTree() {
  this.uu_1 = new Int32Array(1024);
  this.vu_1 = new Int32Array(1024);
  this.wu_1 = new Int32Array(1024);
  this.xu_1 = 0;
  this.yu_1 = 1023;
  this.zu_1 = 0;
  var tmp = this;
  var tmp_0 = 0;
  var tmp_1 = new Int32Array(1024);
  while (tmp_0 < 1024) {
    tmp_1[tmp_0] = -1;
    tmp_0 = tmp_0 + 1 | 0;
  }
  tmp.av_1 = tmp_1;
  var tmp_2 = this;
  var tmp_3 = 0;
  var tmp_4 = new Int32Array(1024);
  while (tmp_3 < 1024) {
    tmp_4[tmp_3] = 0;
    tmp_3 = tmp_3 + 1 | 0;
  }
  tmp_2.bv_1 = tmp_4;
  this.cv_1 = new Int32Array(17);
  this.dv_1 = new Int32Array(17);
  this.ev_1 = new Int32Array(17);
  this.fv_1 = new Int32Array(288);
}
protoOf(HuffmanTree).mw = function (reader) {
  reader.nw(10);
  var node = this.yu_1;
  if (true && reader.qw() >= 10) {
    var bits = reader.ow(10);
    var raw = this.av_1[bits];
    var value = toShort(raw);
    var len = raw >> 16;
    if (len > 0) {
      reader.pw(len);
      if (value === -2) {
        node = this.bv_1[bits];
      } else {
        return value;
      }
    }
  }
  $l$1: do {
    $l$0: do {
      var tmp;
      if (reader.rw()) {
        // Inline function 'korlibs.compression.deflate.HuffmanTree.right' call
        var this_0 = node;
        tmp = this.wu_1[this_0];
      } else {
        // Inline function 'korlibs.compression.deflate.HuffmanTree.left' call
        var this_1 = node;
        tmp = this.vu_1[this_1];
      }
      node = tmp;
    }
     while (false);
    var tmp_0;
    if (!(node === 1023)) {
      // Inline function 'korlibs.compression.deflate.HuffmanTree.value' call
      var this_2 = node;
      tmp_0 = this.uu_1[this_2] === -1;
    } else {
      tmp_0 = false;
    }
  }
   while (tmp_0);
  // Inline function 'korlibs.compression.deflate.HuffmanTree.value' call
  var this_3 = node;
  return this.uu_1[this_3];
};
protoOf(HuffmanTree).sw = function (codeLengths, start, end) {
  var oldOffset = 0;
  var oldCount = 0;
  var ncodes = end - start | 0;
  resetAlloc(this);
  fill(this.cv_1, 0);
  var inductionVariable = start;
  if (inductionVariable < end)
    do {
      var n = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var codeLen = codeLengths[n];
      if (!(0 <= codeLen ? codeLen <= 16 : false)) {
        // Inline function 'kotlin.error' call
        var message = 'Invalid HuffmanTree.codeLengths ' + codeLen;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      var _array__4zh2yp = this.cv_1;
      _array__4zh2yp[codeLen] = _array__4zh2yp[codeLen] + 1 | 0;
    }
     while (inductionVariable < end);
  var currentOffset = 0;
  var inductionVariable_0 = 0;
  if (inductionVariable_0 < 16)
    do {
      var n_0 = inductionVariable_0;
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      var count = this.cv_1[n_0];
      this.dv_1[n_0] = currentOffset;
      this.ev_1[n_0] = currentOffset;
      currentOffset = currentOffset + count | 0;
    }
     while (inductionVariable_0 < 16);
  var inductionVariable_1 = start;
  if (inductionVariable_1 < end)
    do {
      var n_1 = inductionVariable_1;
      inductionVariable_1 = inductionVariable_1 + 1 | 0;
      var codeLen_0 = codeLengths[n_1];
      var _array__4zh2yp_0 = this.ev_1;
      var _unary__edvuaz = _array__4zh2yp_0[codeLen_0];
      _array__4zh2yp_0[codeLen_0] = _unary__edvuaz + 1 | 0;
      this.fv_1[_unary__edvuaz] = n_1 - start | 0;
    }
     while (inductionVariable_1 < end);
  var inductionVariable_2 = 16;
  if (1 <= inductionVariable_2)
    do {
      var i = inductionVariable_2;
      inductionVariable_2 = inductionVariable_2 + -1 | 0;
      var newOffset = this.xu_1;
      var OFFSET = this.dv_1[i];
      var SIZE = this.cv_1[i];
      var inductionVariable_3 = 0;
      if (inductionVariable_3 < SIZE)
        do {
          var j = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          allocLeaf(this, this.fv_1[OFFSET + j | 0]);
        }
         while (inductionVariable_3 < SIZE);
      var progression = step(until(0, oldCount), 2);
      var inductionVariable_4 = progression.u_1;
      var last = progression.v_1;
      var step_0 = progression.w_1;
      if (step_0 > 0 && inductionVariable_4 <= last || (step_0 < 0 && last <= inductionVariable_4))
        do {
          var j_0 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + step_0 | 0;
          allocNode(this, oldOffset + j_0 | 0, (oldOffset + j_0 | 0) + 1 | 0);
        }
         while (!(j_0 === last));
      oldOffset = newOffset;
      oldCount = SIZE + (oldCount / 2 | 0) | 0;
      if (oldCount >= 2 && !((oldCount % 2 | 0) === 0)) {
        // Inline function 'kotlin.error' call
        var message_0 = 'This canonical code does not represent a Huffman code tree: ' + oldCount;
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
    }
     while (1 <= inductionVariable_2);
  if (!(oldCount === 2)) {
    // Inline function 'kotlin.error' call
    var message_1 = 'This canonical code does not represent a Huffman code tree';
    throw IllegalStateException_init_$Create$(toString(message_1));
  }
  this.yu_1 = allocNode(this, this.xu_1 - 2 | 0, this.xu_1 - 1 | 0);
  this.zu_1 = ncodes;
  computeFastLookup(this);
  return this;
};
protoOf(HuffmanTree).iw = function (codeLengths, start, end, $super) {
  start = start === VOID ? 0 : start;
  end = end === VOID ? codeLengths.length : end;
  return $super === VOID ? this.sw(codeLengths, start, end) : $super.sw.call(this, codeLengths, start, end);
};
function SlidingWindow(nbits) {
  this.pv_1 = nbits;
  this.qv_1 = new Int8Array(1 << this.pv_1);
  this.rv_1 = this.qv_1.length - 1 | 0;
  this.sv_1 = 0;
}
protoOf(SlidingWindow).m = function (offset) {
  return this.qv_1[(this.sv_1 - offset | 0) & this.rv_1] & 255;
};
protoOf(SlidingWindow).tv = function (offset) {
  return this.zv(this.m(offset));
};
protoOf(SlidingWindow).zv = function (value) {
  this.qv_1[this.sv_1] = toByte(value);
  this.sv_1 = (this.sv_1 + 1 | 0) & this.rv_1;
  return value;
};
protoOf(SlidingWindow).xv = function (bytes, offset, len) {
  var inductionVariable = 0;
  if (inductionVariable < len)
    do {
      var n = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      this.zv(get_unsigned(bytes[offset + n | 0]));
    }
     while (inductionVariable < len);
};
function FixedSizeByteArrayBuilder(data) {
  this.mv_1 = data;
  this.nv_1 = 0;
}
protoOf(FixedSizeByteArrayBuilder).h2 = function () {
  this.nv_1 = 0;
};
protoOf(FixedSizeByteArrayBuilder).wv = function (array, offset, len) {
  arraycopy(array, offset, this.mv_1, this.nv_1, len);
  this.nv_1 = this.nv_1 + len | 0;
};
protoOf(FixedSizeByteArrayBuilder).uv = function (v) {
  var _unary__edvuaz = this.nv_1;
  this.nv_1 = _unary__edvuaz + 1 | 0;
  this.mv_1[_unary__edvuaz] = v;
};
function $uncompressCOROUTINE$(_this__u8e3s4, reader, out, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.bx_1 = _this__u8e3s4;
  this.cx_1 = reader;
  this.dx_1 = out;
}
protoOf($uncompressCOROUTINE$).x8 = function () {
  var suspendResult = this.r8_1;
  $sm: do
    try {
      var tmp = this.p8_1;
      switch (tmp) {
        case 0:
          this.q8_1 = 18;
          this.fx_1 = new SlidingWindowWithOutput(new SlidingWindow(this.bx_1.jw_1), this.dx_1, this.cx_1.sx(), this.cx_1.tx());
          this.qx_1 = false;
          this.nx_1 = new HuffmanTree();
          this.mx_1 = new HuffmanTree();
          this.px_1 = new Int32Array(32);
          this.ox_1 = new Int32Array(512);
          this.p8_1 = 1;
          continue $sm;
        case 1:
          if (!!this.qx_1) {
            this.p8_1 = 15;
            continue $sm;
          }

          var this_0 = this.fx_1;
          if (false || this_0.lv()) {
            this.rx_1 = this_0;
            this.p8_1 = 2;
            suspendResult = this.rx_1.hv_1.dt(this.rx_1.kv_1.mv_1, 0, this.rx_1.kv_1.nv_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }
            continue $sm;
          } else {
            this.p8_1 = 3;
            continue $sm;
          }

        case 2:
          this.rx_1.kv_1.h2();
          this.p8_1 = 3;
          continue $sm;
        case 3:
          this.p8_1 = 4;
          suspendResult = this.cx_1.ux(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 4:
          this.qx_1 = this.cx_1.rw();
          var blockType = this.cx_1.vx(2);
          if (!(0 <= blockType ? blockType <= 2 : false)) {
            var message = 'invalid bit';
            throw IllegalStateException_init_$Create$(toString(message));
          }

          if (blockType === 0) {
            this.hx_1 = this.cx_1.wx();
            var nlen = this.cx_1.wx();
            var nnlen = ~nlen & 65535;
            if (!(this.hx_1 === nnlen)) {
              var message_0 = 'Invalid deflate stream: len(' + this.hx_1 + ') != ~nlen(' + nnlen + ') :: nlen=' + nlen;
              throw IllegalStateException_init_$Create$(toString(message_0));
            }
            this.p8_1 = 11;
            suspendResult = this.cx_1.xx(this.hx_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }
            continue $sm;
          } else {
            if (blockType === 1) {
              this.lx_1 = Companion_getInstance_1().bw_1;
              this.jx_1 = Companion_getInstance_1().cw_1;
            } else {
              var hlit = this.cx_1.vx(5) + 257 | 0;
              var hdist = this.cx_1.vx(5) + 1 | 0;
              var hclen = this.cx_1.vx(4) + 4 | 0;
              fill(this.px_1, 0);
              var inductionVariable = 0;
              if (inductionVariable < hclen)
                do {
                  var i = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  this.px_1[Companion_getInstance_1().hw_1[i]] = this.cx_1.vx(3);
                }
                 while (inductionVariable < hclen);
              this.nx_1.iw(this.px_1);
              var codeLen = this.nx_1;
              var hlithdist = hlit + hdist | 0;
              var n = 0;
              fill(this.ox_1, 0);
              while (n < hlithdist) {
                this.bx_1;
                var this_1 = this.cx_1;
                var value = codeLen.mw(this_1);
                if (!(0 <= value ? value <= 18 : false)) {
                  throw IllegalStateException_init_$Create$(toString('Invalid'));
                }
                var len;
                switch (value) {
                  case 16:
                    len = this.cx_1.vx(2) + 3 | 0;
                    break;
                  case 17:
                    len = this.cx_1.vx(3) + 3 | 0;
                    break;
                  case 18:
                    len = this.cx_1.vx(7) + 11 | 0;
                    break;
                  default:
                    len = 1;
                    break;
                }
                var vv;
                switch (value) {
                  case 16:
                    vv = this.ox_1[n - 1 | 0];
                    break;
                  case 17:
                    vv = 0;
                    break;
                  case 18:
                    vv = 0;
                    break;
                  default:
                    vv = value;
                    break;
                }
                fill(this.ox_1, vv, n, n + len | 0);
                n = n + len | 0;
              }
              this.nx_1.sw(this.ox_1, 0, hlit);
              this.mx_1.sw(this.ox_1, hlit, hlithdist);
              this.lx_1 = this.nx_1;
              this.jx_1 = this.mx_1;
            }
            this.p8_1 = 5;
            continue $sm;
          }

        case 5:
          if (!true) {
            this.p8_1 = 10;
            continue $sm;
          }

          this.p8_1 = 6;
          suspendResult = this.cx_1.ux(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 6:
          this.kx_1 = this.lx_1.mw(this.cx_1);
          if (this.kx_1 === 256) {
            this.p8_1 = 10;
            continue $sm;
          } else {
            this.p8_1 = 7;
            continue $sm;
          }

        case 7:
          if (this.kx_1 < 256) {
            this.fx_1.yv(toByte(this.kx_1));
          } else {
            var zlenof = this.kx_1 - 257 | 0;
            var lengthExtra = this.cx_1.vx(Companion_getInstance_1().dw_1[zlenof]);
            this.bx_1;
            var tmp2 = this.cx_1;
            var distanceData = this.jx_1.mw(tmp2);
            var distanceExtra = this.cx_1.vx(Companion_getInstance_1().fw_1[distanceData]);
            var distance = Companion_getInstance_1().gw_1[distanceData] + distanceExtra | 0;
            var length = Companion_getInstance_1().ew_1[zlenof] + lengthExtra | 0;
            this.fx_1.ov(distance, length);
          }

          var this_2 = this.fx_1;
          if (false || this_2.lv()) {
            this.ix_1 = this_2;
            this.p8_1 = 8;
            suspendResult = this.ix_1.hv_1.dt(this.ix_1.kv_1.mv_1, 0, this.ix_1.kv_1.nv_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }
            continue $sm;
          } else {
            this.p8_1 = 9;
            continue $sm;
          }

        case 8:
          this.ix_1.kv_1.h2();
          this.p8_1 = 9;
          continue $sm;
        case 9:
          this.p8_1 = 5;
          continue $sm;
        case 10:
          this.p8_1 = 14;
          continue $sm;
        case 11:
          var bytes = suspendResult;
          this.fx_1.vv(bytes, 0, this.hx_1);
          var this_3 = this.fx_1;
          if (false || this_3.lv()) {
            this.gx_1 = this_3;
            this.p8_1 = 12;
            suspendResult = this.gx_1.hv_1.dt(this.gx_1.kv_1.mv_1, 0, this.gx_1.kv_1.nv_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }
            continue $sm;
          } else {
            this.p8_1 = 13;
            continue $sm;
          }

        case 12:
          this.gx_1.kv_1.h2();
          this.p8_1 = 13;
          continue $sm;
        case 13:
          this.p8_1 = 14;
          continue $sm;
        case 14:
          this.p8_1 = 1;
          continue $sm;
        case 15:
          var this_4 = this.fx_1;
          if (true || this_4.lv()) {
            this.ex_1 = this_4;
            this.p8_1 = 16;
            suspendResult = this.ex_1.hv_1.dt(this.ex_1.kv_1.mv_1, 0, this.ex_1.kv_1.nv_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }
            continue $sm;
          } else {
            this.p8_1 = 17;
            continue $sm;
          }

        case 16:
          this.ex_1.kv_1.h2();
          this.p8_1 = 17;
          continue $sm;
        case 17:
          return Unit_instance;
        case 18:
          throw this.s8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.q8_1 === 18) {
        throw e;
      } else {
        this.p8_1 = this.q8_1;
        this.s8_1 = e;
      }
    }
   while (true);
};
function DeflaterPortable(windowBits) {
  Companion_getInstance_1();
  this.jw_1 = windowBits;
}
protoOf(DeflaterPortable).kw = function (reader, out, $completion) {
  var tmp = new $uncompressCOROUTINE$(this, reader, out, $completion);
  tmp.r8_1 = Unit_instance;
  tmp.s8_1 = null;
  return tmp.x8();
};
function get_unsigned(_this__u8e3s4) {
  return _this__u8e3s4 & 255;
}
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
function toDeflater(_this__u8e3s4) {
  return new toDeflater$1(_this__u8e3s4);
}
function Companion_2() {
  this.yx_1 = 8388608;
  this.zx_1 = 32768;
}
var Companion_instance_2;
function Companion_getInstance_2() {
  return Companion_instance_2;
}
function $prepareBytesUpToCOROUTINE$(_this__u8e3s4, expectedBytes, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.iy_1 = _this__u8e3s4;
  this.jy_1 = expectedBytes;
}
protoOf($prepareBytesUpToCOROUTINE$).x8 = function () {
  var suspendResult = this.r8_1;
  $sm: do
    try {
      var tmp = this.p8_1;
      switch (tmp) {
        case 0:
          this.q8_1 = 6;
          this.p8_1 = 1;
          continue $sm;
        case 1:
          if (!(this.iy_1.ry_1.pj_1 < this.jy_1)) {
            this.p8_1 = 5;
            continue $sm;
          }

          var tmp_0 = this;
          var tmp0 = this.jy_1;
          var b = this.iy_1.ry_1.uj();
          tmp_0.ly_1 = Math.min(tmp0, b);
          if (this.ly_1 <= 0) {
            this.p8_1 = 5;
            continue $sm;
          } else {
            this.p8_1 = 2;
            continue $sm;
          }

        case 2:
          this.p8_1 = 3;
          suspendResult = this.iy_1.my_1.zr(this.iy_1.ry_1.qj(), this.iy_1.ry_1.rj(), this.ly_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 3:
          this.ky_1 = suspendResult;
          if (this.ky_1 <= 0) {
            this.p8_1 = 5;
            continue $sm;
          } else {
            this.p8_1 = 4;
            continue $sm;
          }

        case 4:
          this.iy_1.ry_1.sj(this.ky_1);
          this.iy_1.ty_1 = this.iy_1.ty_1 + this.ky_1;
          this.p8_1 = 1;
          continue $sm;
        case 5:
          return Unit_instance;
        case 6:
          throw this.s8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.q8_1 === 6) {
        throw e;
      } else {
        this.p8_1 = this.q8_1;
        this.s8_1 = e;
      }
    }
   while (true);
};
function $abytesCOROUTINE$(_this__u8e3s4, count, out, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.dz_1 = _this__u8e3s4;
  this.ez_1 = count;
  this.fz_1 = out;
}
protoOf($abytesCOROUTINE$).x8 = function () {
  var suspendResult = this.r8_1;
  $sm: do
    try {
      var tmp = this.p8_1;
      switch (tmp) {
        case 0:
          this.q8_1 = 2;
          this.p8_1 = 1;
          suspendResult = this.dz_1.gz(this.ez_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          return this.dz_1.hz(this.ez_1, this.fz_1);
        case 2:
          throw this.s8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.q8_1 === 2) {
        throw e;
      } else {
        this.p8_1 = this.q8_1;
        this.s8_1 = e;
      }
    }
   while (true);
};
function $readCOROUTINE$(_this__u8e3s4, buffer, offset, len, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.qz_1 = _this__u8e3s4;
  this.rz_1 = buffer;
  this.sz_1 = offset;
  this.tz_1 = len;
}
protoOf($readCOROUTINE$).x8 = function () {
  var suspendResult = this.r8_1;
  $sm: do
    try {
      var tmp = this.p8_1;
      switch (tmp) {
        case 0:
          this.q8_1 = 2;
          this.p8_1 = 1;
          suspendResult = this.qz_1.gz(this.tz_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var out = this.qz_1.ry_1.vj(this.rz_1, this.sz_1, this.tz_1);
          this.qz_1.sy_1 = this.qz_1.sy_1 + out;
          return out;
        case 2:
          throw this.s8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.q8_1 === 2) {
        throw e;
      } else {
        this.p8_1 = this.q8_1;
        this.s8_1 = e;
      }
    }
   while (true);
};
function BitReader(s, bigChunkSize, readWithSize) {
  bigChunkSize = bigChunkSize === VOID ? 8388608 : bigChunkSize;
  readWithSize = readWithSize === VOID ? 32768 : readWithSize;
  this.my_1 = s;
  this.ny_1 = bigChunkSize;
  this.oy_1 = readWithSize;
  this.py_1 = 0;
  this.qy_1 = 0;
  this.ry_1 = new SimpleRingBuffer(ilog2(get_nextPowerOfTwo(this.ny_1)));
  this.sy_1 = 0.0;
  this.ty_1 = 0.0;
  this.uy_1 = new Int8Array(4);
}
protoOf(BitReader).toString = function () {
  return 'BitReader(' + toString(this.my_1) + ', bigChunkSize=' + this.ny_1 + ', readWithSize=' + this.oy_1 + ')';
};
protoOf(BitReader).uz = function () {
  return this.ry_1.pj_1 < this.oy_1;
};
protoOf(BitReader).gz = function (expectedBytes, $completion) {
  var tmp = new $prepareBytesUpToCOROUTINE$(this, expectedBytes, $completion);
  tmp.r8_1 = Unit_instance;
  tmp.s8_1 = null;
  return tmp.x8();
};
protoOf(BitReader).nw = function (bitcount) {
  while (this.qy_1 < bitcount) {
    var tmp = this;
    var tmp_0 = this.py_1;
    // Inline function 'korlibs.compression.deflate.BitReader._su8' call
    this.sy_1 = this.sy_1 + 1;
    tmp.py_1 = tmp_0 | this.ry_1.yj() << this.qy_1;
    this.qy_1 = this.qy_1 + 8 | 0;
  }
};
protoOf(BitReader).ow = function (bitcount) {
  return this.py_1 & ((1 << bitcount) - 1 | 0);
};
protoOf(BitReader).pw = function (bitcount) {
  this.py_1 = this.py_1 >>> bitcount | 0;
  this.qy_1 = this.qy_1 - bitcount | 0;
};
protoOf(BitReader).vx = function (bitcount) {
  this.nw(bitcount);
  var readed = this.ow(bitcount);
  this.pw(bitcount);
  return readed;
};
protoOf(BitReader).rw = function () {
  return !(this.vx(1) === 0);
};
protoOf(BitReader).vz = function (count, out) {
  var offset = 0;
  var count_0 = count;
  if (this.qy_1 >= 8) {
    if (!((this.qy_1 % 8 | 0) === 0)) {
      var bits = this.qy_1 % 8 | 0;
      this.pw(bits);
    }
    while (this.qy_1 >= 8) {
      var byte = toByte(this.vx(8));
      var _unary__edvuaz = offset;
      offset = _unary__edvuaz + 1 | 0;
      out[_unary__edvuaz] = byte;
      count_0 = count_0 - 1 | 0;
    }
  }
  // Inline function 'korlibs.compression.deflate.BitReader.discardBits' call
  this.py_1 = 0;
  this.qy_1 = 0;
  var readCount = this.ry_1.vj(out, offset, count_0);
  if (readCount > 0)
    this.sy_1 = this.sy_1 + readCount;
};
protoOf(BitReader).hz = function (count, out) {
  this.vz(count, out);
  return out;
};
protoOf(BitReader).wx = function () {
  this.vz(2, this.uy_1);
  return getU16LE(this.uy_1, 0);
};
protoOf(BitReader).wz = function (count, out, $completion) {
  var tmp = new $abytesCOROUTINE$(this, count, out, $completion);
  tmp.r8_1 = Unit_instance;
  tmp.s8_1 = null;
  return tmp.x8();
};
protoOf(BitReader).xz = function (count, out, $completion, $super) {
  out = out === VOID ? new Int8Array(count) : out;
  return $super === VOID ? this.wz(count, out, $completion) : $super.wz.call(this, count, out, $completion);
};
protoOf(BitReader).zr = function (buffer, offset, len, $completion) {
  var tmp = new $readCOROUTINE$(this, buffer, offset, len, $completion);
  tmp.r8_1 = Unit_instance;
  tmp.s8_1 = null;
  return tmp.x8();
};
function toDeflater_0(_this__u8e3s4) {
  return new toDeflater$2(_this__u8e3s4);
}
function ilog2(v) {
  var tmp;
  if (v === 0) {
    tmp = -1;
  } else {
    // Inline function 'kotlin.countLeadingZeroBits' call
    tmp = 31 - clz32(v) | 0;
  }
  return tmp;
}
function get_nextPowerOfTwo(_this__u8e3s4) {
  var v = _this__u8e3s4;
  v = v - 1 | 0;
  v = v | v >> 1;
  v = v | v >> 2;
  v = v | v >> 4;
  v = v | v >> 8;
  v = v | v >> 16;
  v = v + 1 | 0;
  return v;
}
function $prepareBigChunkIfRequiredCOROUTINE$(_this__u8e3s4, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.g10_1 = _this__u8e3s4;
}
protoOf($prepareBigChunkIfRequiredCOROUTINE$).x8 = function () {
  var suspendResult = this.r8_1;
  $sm: do
    try {
      var tmp = this.p8_1;
      switch (tmp) {
        case 0:
          this.q8_1 = 3;
          var this_0 = this.g10_1.h10_1;
          if (this_0.uz()) {
            this.p8_1 = 1;
            suspendResult = this_0.gz(this_0.ny_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }
            continue $sm;
          } else {
            this.p8_1 = 2;
            continue $sm;
          }

        case 1:
          this.p8_1 = 2;
          continue $sm;
        case 2:
          return Unit_instance;
        case 3:
          throw this.s8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.q8_1 === 3) {
        throw e;
      } else {
        this.p8_1 = this.q8_1;
        this.s8_1 = e;
      }
    }
   while (true);
};
function toDeflater$1($this_toDeflater) {
  this.h10_1 = $this_toDeflater;
}
protoOf(toDeflater$1).sx = function () {
  return this.h10_1.ny_1;
};
protoOf(toDeflater$1).tx = function () {
  return this.h10_1.oy_1;
};
protoOf(toDeflater$1).qw = function () {
  return this.h10_1.qy_1;
};
protoOf(toDeflater$1).nw = function (bits) {
  return this.h10_1.nw(bits);
};
protoOf(toDeflater$1).xx = function (count, $completion) {
  return this.h10_1.xz(count, VOID, $completion);
};
protoOf(toDeflater$1).wx = function () {
  return this.h10_1.wx();
};
protoOf(toDeflater$1).rw = function () {
  return this.h10_1.rw();
};
protoOf(toDeflater$1).pw = function (bits) {
  return this.h10_1.pw(bits);
};
protoOf(toDeflater$1).ow = function (count) {
  return this.h10_1.ow(count);
};
protoOf(toDeflater$1).vx = function (count) {
  return this.h10_1.vx(count);
};
protoOf(toDeflater$1).ux = function ($completion) {
  var tmp = new $prepareBigChunkIfRequiredCOROUTINE$(this, $completion);
  tmp.r8_1 = Unit_instance;
  tmp.s8_1 = null;
  return tmp.x8();
};
function toDeflater$2($this_toDeflater) {
  this.i10_1 = $this_toDeflater;
}
protoOf(toDeflater$2).dt = function (bytes, offset, size, $completion) {
  return this.i10_1.dt(bytes, offset, size, $completion);
};
function IDeflaterInternal() {
}
function CompressionMethod() {
}
function uncompress_1(_this__u8e3s4, bytes, outputSizeHint) {
  outputSizeHint = outputSizeHint === VOID ? imul(bytes.length, 2) : outputSizeHint;
  // Inline function 'korlibs.io.stream.MemorySyncStreamToByteArray' call
  var buffer = ByteArrayBuilder_init_$Create$(outputSizeHint);
  var s = MemorySyncStream(buffer);
  uncompress_2(_this__u8e3s4, openSync(bytes), s);
  return buffer.fk();
}
function uncompress_2(_this__u8e3s4, i, o) {
  return runBlockingNoSuspensions(uncompress$slambda_0(_this__u8e3s4, i, o, null));
}
function uncompress$slambda($this_uncompress, $i, $o, resultContinuation) {
  this.r10_1 = $this_uncompress;
  this.s10_1 = $i;
  this.t10_1 = $o;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(uncompress$slambda).u10 = function ($completion) {
  var tmp = this.v10($completion);
  tmp.r8_1 = Unit_instance;
  tmp.s8_1 = null;
  return tmp.x8();
};
protoOf(uncompress$slambda).f9 = function ($completion) {
  return this.u10($completion);
};
protoOf(uncompress$slambda).x8 = function () {
  var suspendResult = this.r8_1;
  $sm: do
    try {
      var tmp = this.p8_1;
      switch (tmp) {
        case 0:
          this.q8_1 = 2;
          this.p8_1 = 1;
          suspendResult = this.r10_1.lw(toAsync(this.s10_1), toAsync_0(this.t10_1), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          return Unit_instance;
        case 2:
          throw this.s8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.q8_1 === 2) {
        throw e;
      } else {
        this.p8_1 = this.q8_1;
        this.s8_1 = e;
      }
    }
   while (true);
};
protoOf(uncompress$slambda).v10 = function (completion) {
  return new uncompress$slambda(this.r10_1, this.s10_1, this.t10_1, completion);
};
function uncompress$slambda_0($this_uncompress, $i, $o, resultContinuation) {
  var i = new uncompress$slambda($this_uncompress, $i, $o, resultContinuation);
  return constructCallableReference(function ($completion) {
    return i.u10($completion);
  }, 0);
}
function get_Deflate() {
  _init_properties_Deflate_kt__jbr9mv();
  var tmp0 = Deflate$delegate;
  var tmp = KProperty0;
  // Inline function 'kotlin.getValue' call
  getPropertyCallableRef('Deflate', 0, tmp, _get_Deflate_$ref_5609qt(), null);
  return tmp0.v1();
}
var Deflate$delegate;
function Deflate(windowBits) {
  _init_properties_Deflate_kt__jbr9mv();
  return DeflaterNative(windowBits);
}
function Deflate$delegate$lambda() {
  _init_properties_Deflate_kt__jbr9mv();
  return Deflate(15);
}
function _get_Deflate_$ref_5609qt() {
  return constructCallableReference(function () {
    return get_Deflate();
  }, 0, 0, 3);
}
var properties_initialized_Deflate_kt_5ek8zp;
function _init_properties_Deflate_kt__jbr9mv() {
  if (!properties_initialized_Deflate_kt_5ek8zp) {
    properties_initialized_Deflate_kt_5ek8zp = true;
    Deflate$delegate = lazy(Deflate$delegate$lambda);
  }
}
function DeflaterNative(windowBits) {
  return new DeflaterPortable(windowBits);
}
//region block: post-declaration
protoOf(DeflaterPortable).lw = uncompress_0;
//endregion
//region block: init
Companion_instance = new Companion();
Companion_instance_0 = new Companion_0();
Companion_instance_2 = new Companion_2();
//endregion
//region block: exports
export {
  get_Deflate as get_Deflate2a0lyute7oxjd,
  uncompress_1 as uncompress206ry1d3pfta2,
};
//endregion

//# sourceMappingURL=korlibs-compression-root-korlibs-compression.mjs.map
