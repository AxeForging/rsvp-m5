import {
  VOID3gxj6tk5isa35 as VOID,
  CoroutineImpl2sn3kjnwmfr10 as CoroutineImpl,
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  protoOf180f3jzyo7rfj as protoOf,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  isInterface3d6p8outrmvmk as isInterface,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  constructCallableReference23y65rf941mch as constructCallableReference,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  initMetadataForCoroutine1i7lbatuf5bnt as initMetadataForCoroutine,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  objectCreate1ve4bgxiu4x98 as objectCreate,
  IllegalArgumentException_init_$Create$1mgk48flhjim3 as IllegalArgumentException_init_$Create$,
  Long2qws0ah9gnpki as Long,
  compare2uud5j30pw5xc as compare,
  convertToIntofdoxh9bstof as convertToInt,
  until1jbpn0z3f8lbg as until,
  ClosedRangehokgr73im9z3 as ClosedRange,
  contains2c50nlxg7en7o as contains,
  fromInt1lka3ktyu79a4 as fromInt,
  add85si75olwt6n as add,
  toString1pkumu07cwy4m as toString,
  UnsupportedOperationException_init_$Create$10i6u4jjpoi9k as UnsupportedOperationException_init_$Create$,
} from './kotlin-kotlin-stdlib.mjs';
import {
  CoroutineScopefcb5f5dwqcas as CoroutineScope,
  withContextqz5k6d9p9xx5 as withContext,
} from './kotlinx-coroutines-core.mjs';
import {
  ByteArrayBuilder_init_$Create$23eei1jfx3acd as ByteArrayBuilder_init_$Create$,
  ByteArrayBuilderyrflhqjz64ju as ByteArrayBuilder,
} from './korlibs-platform-root-korlibs-platform.mjs';
import { arraycopy3czrd9re36wzt as arraycopy } from './korlibs-memory-root-korlibs-memory.mjs';
import { Mixin3lmkm5hum2vdj as Mixin } from './korlibs-datastructure-core-root-korlibs-datastructure-core.mjs';
//region block: imports
//endregion
//region block: pre-declaration
initMetadataForLambda(toAsync$o$read$slambda, CoroutineImpl, VOID, [1]);
initMetadataForCoroutine($readCOROUTINE$, CoroutineImpl);
initMetadataForClass(toAsync$1, VOID, VOID, VOID, VOID, [1, 3, 0]);
initMetadataForLambda(toAsync$o$write$slambda, CoroutineImpl, VOID, [1]);
initMetadataForCoroutine($writeCOROUTINE$, CoroutineImpl);
initMetadataForClass(toAsync$2, VOID, VOID, VOID, VOID, [1, 3, 0]);
initMetadataForClass(SyncStreamBase, 'SyncStreamBase', SyncStreamBase);
initMetadataForClass(MemorySyncStreamBase, 'MemorySyncStreamBase', MemorySyncStreamBase_init_$Create$, SyncStreamBase);
initMetadataForClass(SyncStream, 'SyncStream');
//endregion
var EMPTY_BYTE_ARRAY;
function toAsync(_this__u8e3s4, dispatcher) {
  dispatcher = dispatcher === VOID ? null : dispatcher;
  _init_properties_SyncAsync_ext_kt__inwu1q();
  return new toAsync$1(_this__u8e3s4, dispatcher);
}
function toAsync_0(_this__u8e3s4, dispatcher) {
  dispatcher = dispatcher === VOID ? null : dispatcher;
  _init_properties_SyncAsync_ext_kt__inwu1q();
  return new toAsync$2(_this__u8e3s4, dispatcher);
}
function toAsync$o$read$slambda(this$0, $buffer, $offset, $len, resultContinuation) {
  this.dr_1 = this$0;
  this.er_1 = $buffer;
  this.fr_1 = $offset;
  this.gr_1 = $len;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(toAsync$o$read$slambda).ir = function ($this$withContext, $completion) {
  var tmp = this.jr($this$withContext, $completion);
  tmp.r8_1 = Unit_instance;
  tmp.s8_1 = null;
  return tmp.x8();
};
protoOf(toAsync$o$read$slambda).g9 = function (p1, $completion) {
  return this.ir((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(toAsync$o$read$slambda).x8 = function () {
  var suspendResult = this.r8_1;
  $sm: do
    try {
      var tmp = this.p8_1;
      if (tmp === 0) {
        this.q8_1 = 1;
        return this.dr_1.kr_1.vj(this.er_1, this.fr_1, this.gr_1);
      } else if (tmp === 1) {
        throw this.s8_1;
      }
    } catch ($p) {
      var e = $p;
      throw e;
    }
   while (true);
};
protoOf(toAsync$o$read$slambda).jr = function ($this$withContext, completion) {
  var i = new toAsync$o$read$slambda(this.dr_1, this.er_1, this.fr_1, this.gr_1, completion);
  i.hr_1 = $this$withContext;
  return i;
};
function toAsync$o$read$slambda_0(this$0, $buffer, $offset, $len, resultContinuation) {
  var i = new toAsync$o$read$slambda(this$0, $buffer, $offset, $len, resultContinuation);
  return constructCallableReference(function ($this$withContext, $completion) {
    return i.ir($this$withContext, $completion);
  }, 1);
}
function $readCOROUTINE$(_this__u8e3s4, buffer, offset, len, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.ur_1 = _this__u8e3s4;
  this.vr_1 = buffer;
  this.wr_1 = offset;
  this.xr_1 = len;
}
protoOf($readCOROUTINE$).x8 = function () {
  var suspendResult = this.r8_1;
  $sm: do
    try {
      var tmp = this.p8_1;
      switch (tmp) {
        case 0:
          this.q8_1 = 3;
          this.ur_1;
          var dispatcher = this.ur_1.lr_1;
          if (!(dispatcher == null)) {
            this.p8_1 = 1;
            suspendResult = withContext(dispatcher, toAsync$o$read$slambda_0(this.ur_1, this.vr_1, this.wr_1, this.xr_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }
            continue $sm;
          } else {
            var tmp_0 = this;
            tmp_0.yr_1 = this.ur_1.kr_1.vj(this.vr_1, this.wr_1, this.xr_1);
            this.p8_1 = 2;
            continue $sm;
          }

        case 1:
          this.yr_1 = suspendResult;
          this.p8_1 = 2;
          continue $sm;
        case 2:
          return this.yr_1;
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
function toAsync$1($this_toAsync, $dispatcher) {
  this.lr_1 = $dispatcher;
  this.kr_1 = $this_toAsync;
}
protoOf(toAsync$1).zr = function (buffer, offset, len, $completion) {
  var tmp = new $readCOROUTINE$(this, buffer, offset, len, $completion);
  tmp.r8_1 = Unit_instance;
  tmp.s8_1 = null;
  return tmp.x8();
};
function toAsync$o$write$slambda(this$0, $buffer, $offset, $len, resultContinuation) {
  this.is_1 = this$0;
  this.js_1 = $buffer;
  this.ks_1 = $offset;
  this.ls_1 = $len;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(toAsync$o$write$slambda).ir = function ($this$withContext, $completion) {
  var tmp = this.jr($this$withContext, $completion);
  tmp.r8_1 = Unit_instance;
  tmp.s8_1 = null;
  return tmp.x8();
};
protoOf(toAsync$o$write$slambda).g9 = function (p1, $completion) {
  return this.ir((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(toAsync$o$write$slambda).x8 = function () {
  var suspendResult = this.r8_1;
  $sm: do
    try {
      var tmp = this.p8_1;
      if (tmp === 0) {
        this.q8_1 = 1;
        this.is_1.ns_1.ps(this.js_1, this.ks_1, this.ls_1);
        return Unit_instance;
      } else if (tmp === 1) {
        throw this.s8_1;
      }
    } catch ($p) {
      var e = $p;
      throw e;
    }
   while (true);
};
protoOf(toAsync$o$write$slambda).jr = function ($this$withContext, completion) {
  var i = new toAsync$o$write$slambda(this.is_1, this.js_1, this.ks_1, this.ls_1, completion);
  i.ms_1 = $this$withContext;
  return i;
};
function toAsync$o$write$slambda_0(this$0, $buffer, $offset, $len, resultContinuation) {
  var i = new toAsync$o$write$slambda(this$0, $buffer, $offset, $len, resultContinuation);
  return constructCallableReference(function ($this$withContext, $completion) {
    return i.ir($this$withContext, $completion);
  }, 1);
}
function $writeCOROUTINE$(_this__u8e3s4, buffer, offset, len, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.ys_1 = _this__u8e3s4;
  this.zs_1 = buffer;
  this.at_1 = offset;
  this.bt_1 = len;
}
protoOf($writeCOROUTINE$).x8 = function () {
  var suspendResult = this.r8_1;
  $sm: do
    try {
      var tmp = this.p8_1;
      switch (tmp) {
        case 0:
          this.q8_1 = 3;
          this.ys_1;
          var dispatcher = this.ys_1.os_1;
          if (!(dispatcher == null)) {
            this.p8_1 = 1;
            suspendResult = withContext(dispatcher, toAsync$o$write$slambda_0(this.ys_1, this.zs_1, this.at_1, this.bt_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }
            continue $sm;
          } else {
            var tmp_0 = this;
            this.ys_1.ns_1.ps(this.zs_1, this.at_1, this.bt_1);
            tmp_0.ct_1 = Unit_instance;
            this.p8_1 = 2;
            continue $sm;
          }

        case 1:
          this.ct_1 = suspendResult;
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
function toAsync$2($this_toAsync, $dispatcher) {
  this.os_1 = $dispatcher;
  this.ns_1 = $this_toAsync;
}
protoOf(toAsync$2).dt = function (buffer, offset, len, $completion) {
  var tmp = new $writeCOROUTINE$(this, buffer, offset, len, $completion);
  tmp.r8_1 = Unit_instance;
  tmp.s8_1 = null;
  return tmp.x8();
};
var properties_initialized_SyncAsync_ext_kt_cwobuk;
function _init_properties_SyncAsync_ext_kt__inwu1q() {
  if (!properties_initialized_SyncAsync_ext_kt_cwobuk) {
    properties_initialized_SyncAsync_ext_kt_cwobuk = true;
    EMPTY_BYTE_ARRAY = new Int8Array(0);
  }
}
function MemorySyncStream(data) {
  return (new MemorySyncStreamBase(data)).ft();
}
function MemorySyncStreamBase_init_$Init$(initialCapacity, $this) {
  initialCapacity = initialCapacity === VOID ? 4096 : initialCapacity;
  MemorySyncStreamBase.call($this, ByteArrayBuilder_init_$Create$(initialCapacity));
  return $this;
}
function MemorySyncStreamBase_init_$Create$(initialCapacity) {
  return MemorySyncStreamBase_init_$Init$(initialCapacity, objectCreate(protoOf(MemorySyncStreamBase)));
}
function MemorySyncStreamBase(data) {
  SyncStreamBase.call(this);
  this.ht_1 = data;
}
protoOf(MemorySyncStreamBase).it = function () {
  return this.ht_1.l();
};
protoOf(MemorySyncStreamBase).jt = function (position) {
  if (compare(position, new Long(0, 0)) < 0)
    throw IllegalArgumentException_init_$Create$('Invalid position ' + position.toString());
};
protoOf(MemorySyncStreamBase).kt = function (position, buffer, offset, len) {
  this.jt(position);
  var ipos = convertToInt(position);
  // Inline function 'kotlin.ranges.contains' call
  var this_0 = until(0, this.it());
  if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), position))
    return 0;
  var tmp0 = this.it();
  // Inline function 'kotlin.math.min' call
  var b = ipos + len | 0;
  var end = Math.min(tmp0, b);
  // Inline function 'kotlin.math.max' call
  var a = end - ipos | 0;
  var actualLen = Math.max(a, 0);
  arraycopy(this.ht_1.bk_1, ipos, buffer, offset, actualLen);
  return actualLen;
};
protoOf(MemorySyncStreamBase).lt = function (position, buffer, offset, len) {
  this.jt(position);
  var tmp = this.ht_1;
  var tmp0 = this.ht_1.l();
  // Inline function 'kotlin.Long.plus' call
  var tmp$ret$0 = add(position, fromInt(len));
  // Inline function 'kotlin.math.max' call
  var b = convertToInt(tmp$ret$0);
  var tmp$ret$1 = Math.max(tmp0, b);
  tmp.ek(tmp$ret$1);
  arraycopy(buffer, offset, this.ht_1.bk_1, convertToInt(position), len);
};
protoOf(MemorySyncStreamBase).v3 = function () {
  return Unit_instance;
};
protoOf(MemorySyncStreamBase).toString = function () {
  return 'MemorySyncStreamBase(' + this.ht_1.l() + ')';
};
function openSync(_this__u8e3s4, mode) {
  mode = mode === VOID ? 'r' : mode;
  return (new MemorySyncStreamBase(new ByteArrayBuilder(_this__u8e3s4))).nt(new Long(0, 0));
}
function SyncStream(base, position) {
  position = position === VOID ? new Long(0, 0) : position;
  this.ot_1 = new Mixin();
  this.pt_1 = base;
  this.qt_1 = this.pt_1.et_1;
  this.rt_1 = this.pt_1.mt();
  this.st_1 = position;
  this.tt_1 = position;
  this.ut_1 = position;
  this.vt_1 = new Long(0, 0);
}
protoOf(SyncStream).wt = function (value) {
  if (this.rt_1)
    this.st_1 = value;
  else {
    this.xt(value);
  }
};
protoOf(SyncStream).yt = function () {
  return this.rt_1 ? this.st_1 : this.zt();
};
protoOf(SyncStream).au = function (value) {
  if (this.rt_1)
    this.tt_1 = value;
  else {
    this.xt(value);
  }
};
protoOf(SyncStream).bu = function () {
  return this.rt_1 ? this.tt_1 : this.zt();
};
protoOf(SyncStream).xt = function (value) {
  var tmp;
  if (this.rt_1) {
    this.wt(value);
    tmp = Unit_instance;
  } else {
    this.ut_1 = value;
    tmp = Unit_instance;
  }
  return tmp;
};
protoOf(SyncStream).zt = function () {
  return this.rt_1 ? this.yt() : this.ut_1;
};
protoOf(SyncStream).vj = function (buffer, offset, len) {
  var read = this.pt_1.kt(this.yt(), buffer, offset, len);
  // Inline function 'kotlin.Long.plus' call
  var this_0 = this.yt();
  var tmp$ret$0 = add(this_0, fromInt(read));
  this.wt(tmp$ret$0);
  return read;
};
protoOf(SyncStream).ps = function (buffer, offset, len) {
  this.pt_1.lt(this.bu(), buffer, offset, len);
  // Inline function 'kotlin.Long.plus' call
  var this_0 = this.bu();
  var tmp$ret$0 = add(this_0, fromInt(len));
  this.au(tmp$ret$0);
};
protoOf(SyncStream).v3 = function () {
  return this.pt_1.v3();
};
protoOf(SyncStream).toString = function () {
  return 'SyncStream(' + toString(this.pt_1) + ', ' + this.zt().toString() + ')';
};
function SyncStreamBase() {
  this.et_1 = new Int8Array(16);
}
protoOf(SyncStreamBase).mt = function () {
  return false;
};
protoOf(SyncStreamBase).kt = function (position, buffer, offset, len) {
  throw UnsupportedOperationException_init_$Create$();
};
protoOf(SyncStreamBase).lt = function (position, buffer, offset, len) {
  throw UnsupportedOperationException_init_$Create$();
};
protoOf(SyncStreamBase).v3 = function () {
  return Unit_instance;
};
protoOf(SyncStreamBase).nt = function (position) {
  return new SyncStream(this, position);
};
protoOf(SyncStreamBase).ft = function (position, $super) {
  position = position === VOID ? new Long(0, 0) : position;
  return $super === VOID ? this.nt(position) : $super.nt.call(this, position);
};
//region block: exports
export {
  MemorySyncStream as MemorySyncStream1uv927me2xl9s,
  openSync as openSync2m3qn99fqytu0,
  toAsync as toAsync26jtc2k5wi4gn,
  toAsync_0 as toAsync2pa2d6thtq8t4,
};
//endregion

//# sourceMappingURL=korlibs-io-stream-root-korlibs-io-stream.mjs.map
