import {
  VOID3gxj6tk5isa35 as VOID,
  UnsupportedOperationException_init_$Create$2v432udyumtzy as UnsupportedOperationException_init_$Create$,
  protoOf180f3jzyo7rfj as protoOf,
  objectCreate1ve4bgxiu4x98 as objectCreate,
  RuntimeException_init_$Create$o9kf8z9n0set as RuntimeException_init_$Create$,
  toString1pkumu07cwy4m as toString,
  IllegalStateException_init_$Create$3394faf8tdm0h as IllegalStateException_init_$Create$,
  copyOfwy6h3t5vzqpl as copyOf,
  fill3lmv1pckd4inv as fill,
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
initMetadataForClass(ByteArrayBuilder, 'ByteArrayBuilder', ByteArrayBuilder_init_$Create$);
//endregion
var customEnvironments;
function unsupported(msg) {
  msg = msg === VOID ? 'unsupported' : msg;
  throw UnsupportedOperationException_init_$Create$(msg);
}
function ByteArrayBuilder_init_$Init$(initialCapacity, $this) {
  initialCapacity = initialCapacity === VOID ? 4096 : initialCapacity;
  ByteArrayBuilder.call($this, new Int8Array(initialCapacity), 0);
  return $this;
}
function ByteArrayBuilder_init_$Create$(initialCapacity) {
  return ByteArrayBuilder_init_$Init$(initialCapacity, objectCreate(protoOf(ByteArrayBuilder)));
}
function ensure($this, expected) {
  if ($this.bk_1.length < expected) {
    if (!$this.ck_1)
      throw RuntimeException_init_$Create$('ByteArrayBuffer configured to not grow!');
    var newSize = imul($this.bk_1.length + 7 | 0, 5);
    var realNewSize = newSize < 0 ? 1073741823 : newSize;
    if (newSize < 0 && expected > realNewSize) {
      // Inline function 'kotlin.error' call
      var message = "ByteArrayBuffer can't grow that much";
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp = $this;
    var tmp_0 = $this.bk_1;
    // Inline function 'kotlin.math.max' call
    var tmp$ret$1 = Math.max(expected, realNewSize);
    tmp.bk_1 = copyOf(tmp_0, tmp$ret$1);
  }
}
function ByteArrayBuilder(data, size, allowGrow) {
  size = size === VOID ? data.length : size;
  allowGrow = allowGrow === VOID ? true : allowGrow;
  this.bk_1 = data;
  this.ck_1 = allowGrow;
  this.dk_1 = size;
}
protoOf(ByteArrayBuilder).ek = function (value) {
  var oldPosition = this.dk_1;
  var newPosition = value;
  ensure(this, newPosition);
  this.dk_1 = newPosition;
  if (newPosition > oldPosition) {
    fill(this.bk_1, 0, oldPosition, newPosition);
  }
};
protoOf(ByteArrayBuilder).l = function () {
  return this.dk_1;
};
protoOf(ByteArrayBuilder).fk = function () {
  return copyOf(this.bk_1, this.dk_1);
};
//region block: init
customEnvironments = null;
//endregion
//region block: exports
export {
  ByteArrayBuilder_init_$Create$ as ByteArrayBuilder_init_$Create$23eei1jfx3acd,
  unsupported as unsupported198cz39rr1ztw,
  ByteArrayBuilder as ByteArrayBuilderyrflhqjz64ju,
};
//endregion

//# sourceMappingURL=korlibs-platform-root-korlibs-platform.mjs.map
