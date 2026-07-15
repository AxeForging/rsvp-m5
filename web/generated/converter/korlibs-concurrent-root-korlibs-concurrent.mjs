import {
  IllegalStateException_init_$Create$3394faf8tdm0h as IllegalStateException_init_$Create$,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  throwUninitializedPropertyAccessException14fok093f3k3t as throwUninitializedPropertyAccessException,
  startCoroutineUninterceptedOrReturnNonGeneratorVersion1y4ov8ufx72uh as startCoroutineUninterceptedOrReturnNonGeneratorVersion,
  Companion_instance1co2nkledm2ru as Companion_instance,
  createFailure8paxfkfa5dc7 as createFailure,
  _Result___init__impl__xyqfz810za1hm0unrcw as _Result___init__impl__xyqfz8,
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  AbstractCoroutineContextElement2rpehg0hv5szw as AbstractCoroutineContextElement,
  Key_instance1cfwgdmm6vbbh as Key_instance,
  protoOf180f3jzyo7rfj as protoOf,
  getxe4seun860fg as get,
  minusKey2uxs00uz5ceqp as minusKey,
  releaseInterceptedContinuation17jnf0xkuoovi as releaseInterceptedContinuation,
  ContinuationInterceptor2624y0vaqwxwf as ContinuationInterceptor,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID3gxj6tk5isa35 as VOID,
  Result__exceptionOrNull_impl_p6xea92zjvgyei8ws1 as Result__exceptionOrNull_impl_p6xea9,
  throwOnFailure24snjmtlqgzo8 as throwOnFailure,
  _Result___get_value__impl__bjfvqgfu6uyyvgx74d as _Result___get_value__impl__bjfvqg,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  printStackTrace18lnx7a39cni as printStackTrace,
  Continuation1aa2oekvx7jm7 as Continuation,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
//endregion
//region block: pre-declaration
initMetadataForClass(runBlockingNoSuspensions$1$context$1, VOID, VOID, AbstractCoroutineContextElement, [ContinuationInterceptor], [1]);
initMetadataForClass(runBlockingNoSuspensions$1, VOID, VOID, VOID, [Continuation]);
//endregion
function runBlockingNoSuspensions(callback) {
  var completed = {_v: false};
  var rresult = {_v: null};
  var resultEx = {_v: null};
  var suspendCount = {_v: 0};
  startCoroutineUndispatched(callback, new runBlockingNoSuspensions$1(suspendCount, resultEx, completed, rresult));
  if (!completed._v)
    throw IllegalStateException_init_$Create$('runBlockingNoSuspensions was not completed synchronously! suspendCount=' + suspendCount._v);
  if (!(resultEx._v == null))
    throw ensureNotNull(resultEx._v);
  var tmp;
  if (rresult._v == null) {
    throwUninitializedPropertyAccessException('rresult');
  } else {
    tmp = rresult._v;
  }
  return tmp;
}
function startCoroutineUndispatched(_this__u8e3s4, completion) {
  $l$block: {
    // Inline function 'korlibs.io.async.startDirect' call
    var tmp;
    try {
      // Inline function 'korlibs.io.async.withCoroutineContext' call
      completion.v8();
      // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
      tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(_this__u8e3s4, completion);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure(e));
        completion.a9(tmp$ret$6);
        break $l$block;
      } else {
        throw $p;
      }
    }
    var value = tmp;
    if (!(value === get_COROUTINE_SUSPENDED())) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$8 = _Result___init__impl__xyqfz8(value);
      completion.a9(tmp$ret$8);
    }
  }
}
function _get_unitInstance__yoa8mq($this) {
  return Unit_instance;
}
function runBlockingNoSuspensions$1$context$1($suspendCount) {
  this.eu_1 = $suspendCount;
  AbstractCoroutineContextElement.call(this, Key_instance);
  this.du_1 = Key_instance;
}
protoOf(runBlockingNoSuspensions$1$context$1).u1 = function () {
  return this.du_1;
};
protoOf(runBlockingNoSuspensions$1$context$1).d9 = function (continuation) {
  // Inline function 'kotlin.also' call
  var _unary__edvuaz = this.eu_1._v;
  this.eu_1._v = _unary__edvuaz + 1 | 0;
  return continuation;
};
function runBlockingNoSuspensions$1($suspendCount, $resultEx, $completed, $rresult) {
  this.gu_1 = $resultEx;
  this.hu_1 = $completed;
  this.iu_1 = $rresult;
  var tmp = this;
  tmp.fu_1 = new runBlockingNoSuspensions$1$context$1($suspendCount);
}
protoOf(runBlockingNoSuspensions$1).v8 = function () {
  return this.fu_1;
};
protoOf(runBlockingNoSuspensions$1).ju = function (result) {
  var exception = Result__exceptionOrNull_impl_p6xea9(result);
  if (!(exception == null)) {
    this.gu_1._v = exception;
    this.hu_1._v = true;
    printStackTrace(exception);
  } else {
    // Inline function 'kotlin.getOrThrow' call
    throwOnFailure(result);
    var tmp0_elvis_lhs = _Result___get_value__impl__bjfvqg(result);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      _get_unitInstance__yoa8mq(this);
      var tmp_0 = Unit_instance;
      var tmp_1;
      if (!(Unit_instance == null)) {
        tmp_1 = Unit_instance;
      } else {
        tmp_1 = THROW_CCE();
      }
      tmp = tmp_1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var rvalue = tmp;
    this.iu_1._v = rvalue;
    this.hu_1._v = true;
  }
};
protoOf(runBlockingNoSuspensions$1).a9 = function (result) {
  return this.ju(result);
};
//region block: post-declaration
protoOf(runBlockingNoSuspensions$1$context$1).c9 = get;
protoOf(runBlockingNoSuspensions$1$context$1).bg = minusKey;
protoOf(runBlockingNoSuspensions$1$context$1).e9 = releaseInterceptedContinuation;
//endregion
//region block: exports
export {
  runBlockingNoSuspensions as runBlockingNoSuspensions25hsuevf2mle,
};
//endregion

//# sourceMappingURL=korlibs-concurrent-root-korlibs-concurrent.mjs.map
