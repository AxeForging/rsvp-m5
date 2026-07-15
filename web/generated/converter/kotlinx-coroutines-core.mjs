import {
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  protoOf180f3jzyo7rfj as protoOf,
  Element2gr7ezmxqaln7 as Element,
  Continuation1aa2oekvx7jm7 as Continuation,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID3gxj6tk5isa35 as VOID,
  Key_instance1cfwgdmm6vbbh as Key_instance,
  equals2au1ep9vhcato as equals,
  toString1pkumu07cwy4m as toString,
  IllegalStateException_init_$Create$3394faf8tdm0h as IllegalStateException_init_$Create$,
  intercepted2ogpsikxxj4u0 as intercepted,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  Result__exceptionOrNull_impl_p6xea92zjvgyei8ws1 as Result__exceptionOrNull_impl_p6xea9,
  _Result___get_value__impl__bjfvqgfu6uyyvgx74d as _Result___get_value__impl__bjfvqg,
  toString30pk9tzaqopn as toString_0,
  hashCodeq5arwsb9dgti as hashCode,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  Companion_instance1co2nkledm2ru as Companion_instance,
  _Result___init__impl__xyqfz810za1hm0unrcw as _Result___init__impl__xyqfz8,
  createFailure8paxfkfa5dc7 as createFailure,
  AbstractCoroutineContextKey9xr9r6wlj5bm as AbstractCoroutineContextKey,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  AbstractCoroutineContextElement2rpehg0hv5szw as AbstractCoroutineContextElement,
  getxe4seun860fg as get,
  minusKey2uxs00uz5ceqp as minusKey,
  ContinuationInterceptor2624y0vaqwxwf as ContinuationInterceptor,
  RuntimeException_init_$Create$26pgvmc7l1w8f as RuntimeException_init_$Create$,
  addSuppressedu5jwjfvsc039 as addSuppressed,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  Long2qws0ah9gnpki as Long,
  ArrayDeque_init_$Create$2it6kiwkurn66 as ArrayDeque_init_$Create$,
  compare2uud5j30pw5xc as compare,
  add85si75olwt6n as add,
  subtract16cg4lfi29fq9 as subtract,
  RuntimeException1r3t0zl97011n as RuntimeException,
  RuntimeException_init_$Init$9z9enfjx6krz as RuntimeException_init_$Init$,
  captureStack1fzi4aczwc4hg as captureStack,
  Error3ofk6owajcepa as Error_0,
  Error_init_$Init$2fm9v6ydoirlz as Error_init_$Init$,
  StringBuilder_init_$Create$3pb07k1b5jr7z as StringBuilder_init_$Create$,
  throwUninitializedPropertyAccessException14fok093f3k3t as throwUninitializedPropertyAccessException,
  ArrayList_init_$Create$3o344dm0ee4ws as ArrayList_init_$Create$,
  CancellationException3b36o9qz53rgr as CancellationException,
  isInterface3d6p8outrmvmk as isInterface,
  ArrayList3it5z8td81qkl as ArrayList,
  IllegalStateException_init_$Create$3hmmy2q9mdx3a as IllegalStateException_init_$Create$_0,
  plusolev77jfy5r9 as plus,
  get6d5x931vk0s as get_0,
  fold36i9psb7d5v48 as fold,
  minusKeyyqanvso9aovh as minusKey_0,
  anyToString3ho3k49fc56mj as anyToString,
  constructCallableReference23y65rf941mch as constructCallableReference,
  Exceptiondt2hlxn7j7vw as Exception,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  createCoroutineUnintercepted3gya308dmbbtg as createCoroutineUnintercepted,
  startCoroutineUninterceptedOrReturnNonGeneratorVersionyfrrvzbtl8bf as startCoroutineUninterceptedOrReturnNonGeneratorVersion,
  getKClassFromExpression348iqjl4fnx2f as getKClassFromExpression,
  UnsupportedOperationException_init_$Create$2v432udyumtzy as UnsupportedOperationException_init_$Create$,
  CancellationException_init_$Init$1px0yi52gywqo as CancellationException_init_$Init$,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  HashSet_init_$Create$3asy16ygqlwn1 as HashSet_init_$Create$,
  RuntimeException_init_$Init$24zelexl34ubl as RuntimeException_init_$Init$_0,
  LinkedHashSet_init_$Create$2y9omcalkfydw as LinkedHashSet_init_$Create$,
} from './kotlin-kotlin-stdlib.mjs';
import {
  atomic$int$11d5swdyn6j0pu as atomic$int$1,
  atomic$boolean$1iggki4z65a2h as atomic$boolean$1,
  atomic$ref$130aurmcwdfdf1 as atomic$ref$1,
} from './kotlinx-atomicfu.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
initMetadataForInterface(ParentJob, 'ParentJob', VOID, VOID, [Element], [0]);
initMetadataForClass(JobSupport, 'JobSupport', VOID, VOID, [Element, ParentJob], [0]);
initMetadataForInterface(CoroutineScope, 'CoroutineScope');
initMetadataForClass(AbstractCoroutine, 'AbstractCoroutine', VOID, JobSupport, [Element, Continuation, CoroutineScope], [0]);
initMetadataForClass(ScopeCoroutine, 'ScopeCoroutine', VOID, AbstractCoroutine, VOID, [0]);
initMetadataForClass(DispatchedCoroutine, 'DispatchedCoroutine', VOID, ScopeCoroutine, VOID, [0]);
initMetadataForClass(SchedulerTask, 'SchedulerTask');
initMetadataForClass(DispatchedTask, 'DispatchedTask', VOID, SchedulerTask);
initMetadataForClass(CancellableContinuationImpl, 'CancellableContinuationImpl', VOID, DispatchedTask, [Continuation]);
initMetadataForClass(CompletedExceptionally, 'CompletedExceptionally');
initMetadataForClass(CompletedWithCancellation, 'CompletedWithCancellation');
initMetadataForObject(Key, 'Key', VOID, AbstractCoroutineContextKey);
initMetadataForClass(CoroutineDispatcher, 'CoroutineDispatcher', VOID, AbstractCoroutineContextElement, [ContinuationInterceptor]);
initMetadataForObject(Key_0, 'Key');
initMetadataForClass(EventLoop, 'EventLoop', VOID, CoroutineDispatcher);
initMetadataForObject(ThreadLocalEventLoop, 'ThreadLocalEventLoop');
initMetadataForClass(CompletionHandlerException, 'CompletionHandlerException', VOID, RuntimeException);
initMetadataForClass(CoroutinesInternalError, 'CoroutinesInternalError', VOID, Error_0);
initMetadataForObject(Key_1, 'Key');
initMetadataForObject(NonDisposableHandle, 'NonDisposableHandle');
initMetadataForInterface(Incomplete, 'Incomplete');
initMetadataForClass(Empty, 'Empty', VOID, VOID, [Incomplete]);
initMetadataForClass(LockFreeLinkedListNode, 'LockFreeLinkedListNode', LockFreeLinkedListNode);
initMetadataForClass(LockFreeLinkedListHead, 'LockFreeLinkedListHead', LockFreeLinkedListHead, LockFreeLinkedListNode);
initMetadataForClass(NodeList, 'NodeList', NodeList, LockFreeLinkedListHead, [Incomplete]);
initMetadataForClass(JobNode, 'JobNode', VOID, LockFreeLinkedListNode, [Incomplete]);
initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
initMetadataForClass(Finishing, 'Finishing', VOID, SynchronizedObject, [Incomplete]);
initMetadataForClass(ChildCompletion, 'ChildCompletion', VOID, JobNode);
initMetadataForClass(InactiveNodeList, 'InactiveNodeList', VOID, VOID, [Incomplete]);
initMetadataForClass(InvokeOnCompletion, 'InvokeOnCompletion', VOID, JobNode);
initMetadataForClass(InvokeOnCancelling, 'InvokeOnCancelling', VOID, JobNode);
initMetadataForClass(ChildHandleNode, 'ChildHandleNode', VOID, JobNode);
initMetadataForClass(IncompleteStateBox, 'IncompleteStateBox');
initMetadataForClass(TimeoutCancellationException, 'TimeoutCancellationException', VOID, CancellationException);
initMetadataForObject(ExceptionSuccessfullyProcessed, 'ExceptionSuccessfullyProcessed', VOID, Exception);
initMetadataForClass(DispatchedContinuation, 'DispatchedContinuation', VOID, DispatchedTask, [Continuation]);
initMetadataForClass(Symbol, 'Symbol');
initMetadataForClass(UnconfinedEventLoop, 'UnconfinedEventLoop', UnconfinedEventLoop, EventLoop);
initMetadataForClass(UndispatchedCoroutine, 'UndispatchedCoroutine', VOID, ScopeCoroutine, VOID, [0]);
initMetadataForClass(JobCancellationException, 'JobCancellationException', VOID, CancellationException);
initMetadataForObject(TaskContext, 'TaskContext');
initMetadataForClass(DiagnosticCoroutineContextException, 'DiagnosticCoroutineContextException', VOID, RuntimeException);
initMetadataForClass(ListClosed, 'ListClosed', VOID, LockFreeLinkedListNode);
initMetadataForClass(CommonThreadLocal, 'CommonThreadLocal', CommonThreadLocal);
//endregion
function AbstractCoroutine(parentContext, initParentJob, active) {
  JobSupport.call(this, active);
  if (initParentJob) {
    this.nk(parentContext.c9(Key_instance_2));
  }
  this.qk_1 = parentContext.dg(this);
}
protoOf(AbstractCoroutine).v8 = function () {
  return this.qk_1;
};
protoOf(AbstractCoroutine).rk = function () {
  return protoOf(JobSupport).rk.call(this);
};
protoOf(AbstractCoroutine).sk = function (value) {
};
protoOf(AbstractCoroutine).tk = function (cause, handled) {
};
protoOf(AbstractCoroutine).uk = function () {
  return get_classSimpleName(this) + ' was cancelled';
};
protoOf(AbstractCoroutine).vk = function (state) {
  if (state instanceof CompletedExceptionally) {
    this.tk(state.wk_1, state.yk());
  } else {
    this.sk(state);
  }
};
protoOf(AbstractCoroutine).a9 = function (result) {
  var state = this.zk(toState(result));
  if (state === get_COMPLETING_WAITING_CHILDREN())
    return Unit_instance;
  this.al(state);
};
protoOf(AbstractCoroutine).al = function (state) {
  return this.bl(state);
};
protoOf(AbstractCoroutine).cl = function (exception) {
  handleCoroutineException(this.qk_1, exception);
};
protoOf(AbstractCoroutine).dl = function () {
  var tmp0_elvis_lhs = get_coroutineName(this.qk_1);
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return protoOf(JobSupport).dl.call(this);
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var coroutineName = tmp;
  return '"' + coroutineName + '":' + protoOf(JobSupport).dl.call(this);
};
function withContext(context, block, $completion) {
  var tmp$ret$0;
  $l$block_0: {
    var oldContext = $completion.v8();
    var newContext = newCoroutineContext(oldContext, context);
    ensureActive(newContext);
    if (newContext === oldContext) {
      var coroutine = new ScopeCoroutine(newContext, $completion);
      tmp$ret$0 = startUndispatchedOrReturn(coroutine, coroutine, block);
      break $l$block_0;
    }
    if (equals(newContext.c9(Key_instance), oldContext.c9(Key_instance))) {
      var coroutine_0 = new UndispatchedCoroutine(newContext, $completion);
      // Inline function 'kotlinx.coroutines.withCoroutineContext' call
      coroutine_0.qk_1;
      tmp$ret$0 = startUndispatchedOrReturn(coroutine_0, coroutine_0, block);
      break $l$block_0;
    }
    var coroutine_1 = new DispatchedCoroutine(newContext, $completion);
    startCoroutineCancellable(block, coroutine_1, coroutine_1);
    tmp$ret$0 = coroutine_1.gm();
  }
  return tmp$ret$0;
}
function trySuspend($this) {
  // Inline function 'kotlinx.atomicfu.loop' call
  var this_0 = $this.fm_1;
  while (true) {
    switch (this_0.kotlinx$atomicfu$value) {
      case 0:
        if ($this.fm_1.atomicfu$compareAndSet(0, 1))
          return true;
        break;
      case 2:
        return false;
      default:
        // Inline function 'kotlin.error' call

        var message = 'Already suspended';
        throw IllegalStateException_init_$Create$(toString(message));
    }
  }
}
function tryResume($this) {
  // Inline function 'kotlinx.atomicfu.loop' call
  var this_0 = $this.fm_1;
  while (true) {
    switch (this_0.kotlinx$atomicfu$value) {
      case 0:
        if ($this.fm_1.atomicfu$compareAndSet(0, 2))
          return true;
        break;
      case 1:
        return false;
      default:
        // Inline function 'kotlin.error' call

        var message = 'Already resumed';
        throw IllegalStateException_init_$Create$(toString(message));
    }
  }
}
function DispatchedCoroutine(context, uCont) {
  ScopeCoroutine.call(this, context, uCont);
  this.fm_1 = atomic$int$1(0);
}
protoOf(DispatchedCoroutine).bl = function (state) {
  this.al(state);
};
protoOf(DispatchedCoroutine).al = function (state) {
  if (tryResume(this))
    return Unit_instance;
  resumeCancellableWith(intercepted(this.km_1), recoverResult(state, this.km_1));
};
protoOf(DispatchedCoroutine).gm = function () {
  if (trySuspend(this))
    return get_COROUTINE_SUSPENDED();
  var state = unboxState(this.gl());
  if (state instanceof CompletedExceptionally)
    throw state.wk_1;
  return state;
};
function _get_parentHandle__f8dcex($this) {
  return $this.mm_1.kotlinx$atomicfu$value;
}
function CancellableContinuationImpl() {
}
protoOf(CancellableContinuationImpl).nm = function () {
  var tmp0_elvis_lhs = _get_parentHandle__f8dcex(this);
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return Unit_instance;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var handle = tmp;
  handle.om();
  this.mm_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
};
function CompletedExceptionally(cause, handled) {
  handled = handled === VOID ? false : handled;
  this.wk_1 = cause;
  this.xk_1 = atomic$boolean$1(handled);
}
protoOf(CompletedExceptionally).yk = function () {
  return this.xk_1.kotlinx$atomicfu$value;
};
protoOf(CompletedExceptionally).pm = function () {
  return this.xk_1.atomicfu$compareAndSet(false, true);
};
protoOf(CompletedExceptionally).toString = function () {
  return get_classSimpleName(this) + '[' + this.wk_1.toString() + ']';
};
function toState(_this__u8e3s4, onCancellation) {
  onCancellation = onCancellation === VOID ? null : onCancellation;
  // Inline function 'kotlin.fold' call
  var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
  var tmp;
  if (exception == null) {
    var it = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
    tmp = !(onCancellation == null) ? new CompletedWithCancellation(it, onCancellation) : it;
  } else {
    tmp = new CompletedExceptionally(exception);
  }
  return tmp;
}
function CompletedWithCancellation(result, onCancellation) {
  this.qm_1 = result;
  this.rm_1 = onCancellation;
}
protoOf(CompletedWithCancellation).toString = function () {
  return 'CompletedWithCancellation(result=' + toString_0(this.qm_1) + ', onCancellation=' + toString(this.rm_1) + ')';
};
protoOf(CompletedWithCancellation).hashCode = function () {
  var result = this.qm_1 == null ? 0 : hashCode(this.qm_1);
  result = imul(result, 31) + hashCode(this.rm_1) | 0;
  return result;
};
protoOf(CompletedWithCancellation).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof CompletedWithCancellation))
    return false;
  var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
  if (!equals(this.qm_1, tmp0_other_with_cast.qm_1))
    return false;
  if (!equals(this.rm_1, tmp0_other_with_cast.rm_1))
    return false;
  return true;
};
function recoverResult(state, uCont) {
  var tmp;
  if (state instanceof CompletedExceptionally) {
    // Inline function 'kotlin.Companion.failure' call
    var exception = recoverStackTrace(state.wk_1, uCont);
    tmp = _Result___init__impl__xyqfz8(createFailure(exception));
  } else {
    // Inline function 'kotlin.Companion.success' call
    tmp = _Result___init__impl__xyqfz8(state);
  }
  return tmp;
}
function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
  return it instanceof CoroutineDispatcher ? it : null;
}
function Key() {
  Key_instance_0 = this;
  var tmp = Key_instance;
  AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
}
var Key_instance_0;
function Key_getInstance() {
  if (Key_instance_0 == null)
    new Key();
  return Key_instance_0;
}
function CoroutineDispatcher() {
  Key_getInstance();
  AbstractCoroutineContextElement.call(this, Key_instance);
}
protoOf(CoroutineDispatcher).tm = function (context) {
  return true;
};
protoOf(CoroutineDispatcher).d9 = function (continuation) {
  return new DispatchedContinuation(this, continuation);
};
protoOf(CoroutineDispatcher).e9 = function (continuation) {
  var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
  dispatched.bn();
};
protoOf(CoroutineDispatcher).toString = function () {
  return get_classSimpleName(this) + '@' + get_hexAddress(this);
};
function handleCoroutineException(context, exception) {
  try {
    var tmp23_safe_receiver = context.c9(Key_instance_1);
    if (tmp23_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      tmp23_safe_receiver.cn(context, exception);
      return Unit_instance;
    }
  } catch ($p) {
    if ($p instanceof Error) {
      var t = $p;
      handleUncaughtCoroutineException(context, handlerException(exception, t));
      return Unit_instance;
    } else {
      throw $p;
    }
  }
  handleUncaughtCoroutineException(context, exception);
}
function Key_0() {
}
var Key_instance_1;
function Key_getInstance_0() {
  return Key_instance_1;
}
function handlerException(originalException, thrownException) {
  if (originalException === thrownException)
    return originalException;
  // Inline function 'kotlin.apply' call
  var this_0 = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
  addSuppressed(this_0, originalException);
  return this_0;
}
function CoroutineScope() {
}
function delta($this, unconfined) {
  return unconfined ? new Long(0, 1) : new Long(1, 0);
}
function EventLoop() {
  CoroutineDispatcher.call(this);
  this.en_1 = new Long(0, 0);
  this.fn_1 = false;
  this.gn_1 = null;
}
protoOf(EventLoop).hn = function () {
  var tmp0_elvis_lhs = this.gn_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return false;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var queue = tmp;
  var tmp1_elvis_lhs = queue.ke();
  var tmp_0;
  if (tmp1_elvis_lhs == null) {
    return false;
  } else {
    tmp_0 = tmp1_elvis_lhs;
  }
  var task = tmp_0;
  task.jn();
  return true;
};
protoOf(EventLoop).kn = function (task) {
  var tmp0_elvis_lhs = this.gn_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    // Inline function 'kotlin.also' call
    var this_0 = ArrayDeque_init_$Create$();
    this.gn_1 = this_0;
    tmp = this_0;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var queue = tmp;
  queue.ie(task);
};
protoOf(EventLoop).ln = function () {
  return compare(this.en_1, delta(this, true)) >= 0;
};
protoOf(EventLoop).mn = function () {
  var tmp27_safe_receiver = this.gn_1;
  var tmp0_elvis_lhs = tmp27_safe_receiver == null ? null : tmp27_safe_receiver.n();
  return tmp0_elvis_lhs == null ? true : tmp0_elvis_lhs;
};
protoOf(EventLoop).nn = function (unconfined) {
  this.en_1 = add(this.en_1, delta(this, unconfined));
  if (!unconfined)
    this.fn_1 = true;
};
protoOf(EventLoop).on = function (unconfined) {
  this.en_1 = subtract(this.en_1, delta(this, unconfined));
  if (compare(this.en_1, new Long(0, 0)) > 0)
    return Unit_instance;
  // Inline function 'kotlinx.coroutines.assert' call
  if (this.fn_1) {
    this.pn();
  }
};
protoOf(EventLoop).pn = function () {
};
function ThreadLocalEventLoop() {
  ThreadLocalEventLoop_instance = this;
  this.qn_1 = commonThreadLocal(new Symbol('ThreadLocalEventLoop'));
}
protoOf(ThreadLocalEventLoop).rn = function () {
  var tmp0_elvis_lhs = this.qn_1.tn();
  var tmp;
  if (tmp0_elvis_lhs == null) {
    // Inline function 'kotlin.also' call
    var this_0 = createEventLoop();
    ThreadLocalEventLoop_getInstance().qn_1.l4(this_0);
    tmp = this_0;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
};
var ThreadLocalEventLoop_instance;
function ThreadLocalEventLoop_getInstance() {
  if (ThreadLocalEventLoop_instance == null)
    new ThreadLocalEventLoop();
  return ThreadLocalEventLoop_instance;
}
function CompletionHandlerException(message, cause) {
  RuntimeException_init_$Init$(message, cause, this);
  captureStack(this, CompletionHandlerException);
}
function CoroutinesInternalError(message, cause) {
  Error_init_$Init$(message, cause, this);
  captureStack(this, CoroutinesInternalError);
}
function Key_1() {
}
var Key_instance_2;
function Key_getInstance_1() {
  return Key_instance_2;
}
function ParentJob() {
}
function NonDisposableHandle() {
}
protoOf(NonDisposableHandle).om = function () {
};
protoOf(NonDisposableHandle).sl = function (cause) {
  return false;
};
protoOf(NonDisposableHandle).toString = function () {
  return 'NonDisposableHandle';
};
var NonDisposableHandle_instance;
function NonDisposableHandle_getInstance() {
  return NonDisposableHandle_instance;
}
function ensureActive(_this__u8e3s4) {
  var tmp41_safe_receiver = _this__u8e3s4.c9(Key_instance_2);
  if (tmp41_safe_receiver == null)
    null;
  else {
    ensureActive_0(tmp41_safe_receiver);
  }
}
function invokeOnCompletion(_this__u8e3s4, invokeImmediately, handler) {
  invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
  var tmp;
  if (_this__u8e3s4 instanceof JobSupport) {
    tmp = _this__u8e3s4.ol(invokeImmediately, handler);
  } else {
    var tmp_0 = handler.yn();
    tmp = _this__u8e3s4.nl(tmp_0, invokeImmediately, JobNode$invoke$ref(handler));
  }
  return tmp;
}
function ensureActive_0(_this__u8e3s4) {
  if (!_this__u8e3s4.rk())
    throw _this__u8e3s4.kl();
}
function get_COMPLETING_ALREADY() {
  _init_properties_JobSupport_kt__68f172();
  return COMPLETING_ALREADY;
}
var COMPLETING_ALREADY;
function get_COMPLETING_WAITING_CHILDREN() {
  _init_properties_JobSupport_kt__68f172();
  return COMPLETING_WAITING_CHILDREN;
}
var COMPLETING_WAITING_CHILDREN;
function get_COMPLETING_RETRY() {
  _init_properties_JobSupport_kt__68f172();
  return COMPLETING_RETRY;
}
var COMPLETING_RETRY;
function get_TOO_LATE_TO_CANCEL() {
  _init_properties_JobSupport_kt__68f172();
  return TOO_LATE_TO_CANCEL;
}
var TOO_LATE_TO_CANCEL;
function get_SEALED() {
  _init_properties_JobSupport_kt__68f172();
  return SEALED;
}
var SEALED;
function get_EMPTY_NEW() {
  _init_properties_JobSupport_kt__68f172();
  return EMPTY_NEW;
}
var EMPTY_NEW;
function get_EMPTY_ACTIVE() {
  _init_properties_JobSupport_kt__68f172();
  return EMPTY_ACTIVE;
}
var EMPTY_ACTIVE;
function Empty(isActive) {
  this.zn_1 = isActive;
}
protoOf(Empty).rk = function () {
  return this.zn_1;
};
protoOf(Empty).ao = function () {
  return null;
};
protoOf(Empty).toString = function () {
  return 'Empty{' + (this.zn_1 ? 'Active' : 'New') + '}';
};
function Incomplete() {
}
function NodeList() {
  LockFreeLinkedListHead.call(this);
}
protoOf(NodeList).rk = function () {
  return true;
};
protoOf(NodeList).ao = function () {
  return this;
};
protoOf(NodeList).eo = function (state) {
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$();
  this_0.v7('List{');
  this_0.v7(state);
  this_0.v7('}[');
  var first = true;
  // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
  var cur = this.fo_1;
  while (!equals(cur, this)) {
    var node = cur;
    if (node instanceof JobNode) {
      if (first) {
        first = false;
      } else
        this_0.v7(', ');
      this_0.u7(node);
    }
    cur = cur.fo_1;
  }
  this_0.v7(']');
  return this_0.toString();
};
protoOf(NodeList).toString = function () {
  return get_DEBUG() ? this.eo('Active') : protoOf(LockFreeLinkedListHead).toString.call(this);
};
function JobNode() {
  LockFreeLinkedListNode.call(this);
}
protoOf(JobNode).ko = function () {
  var tmp = this.xn_1;
  if (!(tmp == null))
    return tmp;
  else {
    throwUninitializedPropertyAccessException('job');
  }
};
protoOf(JobNode).rk = function () {
  return true;
};
protoOf(JobNode).ao = function () {
  return null;
};
protoOf(JobNode).om = function () {
  return this.ko().pl(this);
};
protoOf(JobNode).toString = function () {
  return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.ko()) + ']';
};
function _set_exceptionsHolder__tqm22h($this, value) {
  $this.ro_1.kotlinx$atomicfu$value = value;
}
function _get_exceptionsHolder__nhszp($this) {
  return $this.ro_1.kotlinx$atomicfu$value;
}
function allocateList($this) {
  return ArrayList_init_$Create$(4);
}
function finalizeFinishingState($this, state, proposedUpdate) {
  // Inline function 'kotlinx.coroutines.assert' call
  // Inline function 'kotlinx.coroutines.assert' call
  // Inline function 'kotlinx.coroutines.assert' call
  var tmp46_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
  var proposedException = tmp46_safe_receiver == null ? null : tmp46_safe_receiver.wk_1;
  var wasCancelling;
  // Inline function 'kotlinx.coroutines.internal.synchronized' call
  // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
  wasCancelling = state.so();
  var exceptions = state.to(proposedException);
  var finalCause = getFinalRootCause($this, state, exceptions);
  if (!(finalCause == null)) {
    addSuppressedExceptions($this, finalCause, exceptions);
  }
  var finalException = finalCause;
  var finalState = finalException == null ? proposedUpdate : finalException === proposedException ? proposedUpdate : new CompletedExceptionally(finalException);
  if (!(finalException == null)) {
    var handled = cancelParent($this, finalException) || $this.zl(finalException);
    if (handled) {
      (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).pm();
    }
  }
  if (!wasCancelling) {
    $this.wl(finalException);
  }
  $this.vk(finalState);
  var casSuccess = $this.lk_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
  // Inline function 'kotlinx.coroutines.assert' call
  completeStateFinalization($this, state, finalState);
  return finalState;
}
function getFinalRootCause($this, state, exceptions) {
  if (exceptions.n()) {
    if (state.so()) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      return new JobCancellationException(null == null ? $this.uk() : null, null, $this);
    }
    return null;
  }
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.collections.firstOrNull' call
    var _iterator__ex2g4s = exceptions.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      if (!(element instanceof CancellationException)) {
        tmp$ret$1 = element;
        break $l$block;
      }
    }
    tmp$ret$1 = null;
  }
  var firstNonCancellation = tmp$ret$1;
  if (!(firstNonCancellation == null))
    return firstNonCancellation;
  var first = exceptions.m(0);
  if (first instanceof TimeoutCancellationException) {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s_0 = exceptions.i();
      while (_iterator__ex2g4s_0.j()) {
        var element_0 = _iterator__ex2g4s_0.k();
        var tmp;
        if (!(element_0 === first)) {
          tmp = element_0 instanceof TimeoutCancellationException;
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$3 = element_0;
          break $l$block_0;
        }
      }
      tmp$ret$3 = null;
    }
    var detailedTimeoutException = tmp$ret$3;
    if (!(detailedTimeoutException == null))
      return detailedTimeoutException;
  }
  return first;
}
function addSuppressedExceptions($this, rootCause, exceptions) {
  if (exceptions.l() <= 1)
    return Unit_instance;
  var seenExceptions = identitySet(exceptions.l());
  var unwrappedCause = unwrap(rootCause);
  var _iterator__ex2g4s = exceptions.i();
  while (_iterator__ex2g4s.j()) {
    var exception = _iterator__ex2g4s.k();
    var unwrapped = unwrap(exception);
    var tmp;
    var tmp_0;
    if (!(unwrapped === rootCause) && !(unwrapped === unwrappedCause)) {
      tmp_0 = !(unwrapped instanceof CancellationException);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = seenExceptions.h(unwrapped);
    } else {
      tmp = false;
    }
    if (tmp) {
      addSuppressed(rootCause, unwrapped);
    }
  }
}
function tryFinalizeSimpleState($this, state, update) {
  // Inline function 'kotlinx.coroutines.assert' call
  // Inline function 'kotlinx.coroutines.assert' call
  if (!$this.lk_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
    return false;
  $this.wl(null);
  $this.vk(update);
  completeStateFinalization($this, state, update);
  return true;
}
function completeStateFinalization($this, state, update) {
  var tmp47_safe_receiver = $this.fl();
  if (tmp47_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    tmp47_safe_receiver.om();
    $this.el(NonDisposableHandle_instance);
  }
  var tmp48_safe_receiver = update instanceof CompletedExceptionally ? update : null;
  var cause = tmp48_safe_receiver == null ? null : tmp48_safe_receiver.wk_1;
  if (state instanceof JobNode) {
    try {
      state.lo(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        $this.cl(new CompletionHandlerException('Exception in completion handler ' + state.toString() + ' for ' + $this.toString(), ex));
      } else {
        throw $p;
      }
    }
  } else {
    var tmp49_safe_receiver = state.ao();
    if (tmp49_safe_receiver == null)
      null;
    else {
      notifyCompletion($this, tmp49_safe_receiver, cause);
    }
  }
}
function notifyCancelling($this, list, cause) {
  $this.wl(cause);
  list.jo(4);
  // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
  var exception = null;
  // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
  var cur = list.fo_1;
  while (!equals(cur, list)) {
    var node = cur;
    var tmp;
    if (node instanceof JobNode) {
      tmp = node.yn();
    } else {
      tmp = false;
    }
    if (tmp) {
      try {
        node.lo(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var ex = $p;
          var tmp50_safe_receiver = exception;
          var tmp_0;
          if (tmp50_safe_receiver == null) {
            tmp_0 = null;
          } else {
            // Inline function 'kotlin.apply' call
            addSuppressed(tmp50_safe_receiver, ex);
            tmp_0 = tmp50_safe_receiver;
          }
          if (tmp_0 == null) {
            // Inline function 'kotlin.run' call
            exception = new CompletionHandlerException('Exception in completion handler ' + node.toString() + ' for ' + $this.toString(), ex);
          }
        } else {
          throw $p;
        }
      }
    }
    cur = cur.fo_1;
  }
  var tmp51_safe_receiver = exception;
  if (tmp51_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    $this.cl(tmp51_safe_receiver);
  }
  cancelParent($this, cause);
}
function cancelParent($this, cause) {
  if ($this.xl())
    return true;
  var isCancellation = cause instanceof CancellationException;
  var parent = $this.fl();
  if (parent === null || parent === NonDisposableHandle_instance) {
    return isCancellation;
  }
  return parent.sl(cause) || isCancellation;
}
function notifyCompletion($this, $receiver, cause) {
  $receiver.jo(1);
  // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
  var exception = null;
  // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
  var cur = $receiver.fo_1;
  while (!equals(cur, $receiver)) {
    var node = cur;
    var tmp;
    if (node instanceof JobNode) {
      tmp = true;
    } else {
      tmp = false;
    }
    if (tmp) {
      try {
        node.lo(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var ex = $p;
          var tmp50_safe_receiver = exception;
          var tmp_0;
          if (tmp50_safe_receiver == null) {
            tmp_0 = null;
          } else {
            // Inline function 'kotlin.apply' call
            addSuppressed(tmp50_safe_receiver, ex);
            tmp_0 = tmp50_safe_receiver;
          }
          if (tmp_0 == null) {
            // Inline function 'kotlin.run' call
            exception = new CompletionHandlerException('Exception in completion handler ' + node.toString() + ' for ' + $this.toString(), ex);
          }
        } else {
          throw $p;
        }
      }
    }
    cur = cur.fo_1;
  }
  var tmp51_safe_receiver = exception;
  if (tmp51_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    $this.cl(tmp51_safe_receiver);
  }
}
function startInternal($this, state) {
  if (state instanceof Empty) {
    if (state.zn_1)
      return 0;
    if (!$this.lk_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
      return -1;
    $this.jl();
    return 1;
  } else {
    if (state instanceof InactiveNodeList) {
      if (!$this.lk_1.atomicfu$compareAndSet(state, state.uo_1))
        return -1;
      $this.jl();
      return 1;
    } else {
      return 0;
    }
  }
}
function promoteEmptyToNodeList($this, state) {
  var list = new NodeList();
  var update = state.zn_1 ? list : new InactiveNodeList(list);
  $this.lk_1.atomicfu$compareAndSet(state, update);
}
function promoteSingleToNodeList($this, state) {
  state.no(new NodeList());
  // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.nextNode' call
  var list = state.fo_1;
  $this.lk_1.atomicfu$compareAndSet(state, list);
}
function cancelMakeCompleting($this, cause) {
  // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
  while (true) {
    var state = $this.gl();
    var tmp;
    if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
      tmp = true;
    } else {
      var tmp_0;
      if (state instanceof Finishing) {
        tmp_0 = state.vo();
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    if (tmp) {
      return get_COMPLETING_ALREADY();
    }
    var proposedUpdate = new CompletedExceptionally(createCauseException($this, cause));
    var finalState = tryMakeCompleting($this, state, proposedUpdate);
    if (!(finalState === get_COMPLETING_RETRY()))
      return finalState;
  }
}
function createCauseException($this, cause) {
  var tmp;
  if (cause == null ? true : cause instanceof Error) {
    var tmp_0;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp_0 = new JobCancellationException(null == null ? $this.uk() : null, null, $this);
    } else {
      tmp_0 = cause;
    }
    tmp = tmp_0;
  } else {
    tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).ul();
  }
  return tmp;
}
function makeCancelling($this, cause) {
  var causeExceptionCache = null;
  // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
  while (true) {
    var tmp0 = $this.gl();
    $l$block: {
      if (tmp0 instanceof Finishing) {
        // Inline function 'kotlinx.coroutines.internal.synchronized' call
        // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
        if (tmp0.wo())
          return get_TOO_LATE_TO_CANCEL();
        var wasCancelling = tmp0.so();
        if (!(cause == null) || !wasCancelling) {
          var tmp0_elvis_lhs = causeExceptionCache;
          var tmp;
          if (tmp0_elvis_lhs == null) {
            // Inline function 'kotlin.also' call
            var this_0 = createCauseException($this, cause);
            causeExceptionCache = this_0;
            tmp = this_0;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var causeException = tmp;
          tmp0.xo(causeException);
        }
        // Inline function 'kotlin.takeIf' call
        var this_1 = tmp0.yo();
        var tmp_0;
        if (!wasCancelling) {
          tmp_0 = this_1;
        } else {
          tmp_0 = null;
        }
        var notifyRootCause = tmp_0;
        if (notifyRootCause == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          notifyCancelling($this, tmp0.oo_1, notifyRootCause);
        }
        return get_COMPLETING_ALREADY();
      } else {
        if (!(tmp0 == null) ? isInterface(tmp0, Incomplete) : false) {
          var tmp0_elvis_lhs_0 = causeExceptionCache;
          var tmp_1;
          if (tmp0_elvis_lhs_0 == null) {
            // Inline function 'kotlin.also' call
            var this_2 = createCauseException($this, cause);
            causeExceptionCache = this_2;
            tmp_1 = this_2;
          } else {
            tmp_1 = tmp0_elvis_lhs_0;
          }
          var causeException_0 = tmp_1;
          if (tmp0.rk()) {
            if (tryMakeCancelling($this, tmp0, causeException_0))
              return get_COMPLETING_ALREADY();
          } else {
            var finalState = tryMakeCompleting($this, tmp0, new CompletedExceptionally(causeException_0));
            if (finalState === get_COMPLETING_ALREADY()) {
              // Inline function 'kotlin.error' call
              var message = 'Cannot happen in ' + toString(tmp0);
              throw IllegalStateException_init_$Create$(toString(message));
            } else if (finalState === get_COMPLETING_RETRY()) {
              break $l$block;
            } else
              return finalState;
          }
        } else {
          return get_TOO_LATE_TO_CANCEL();
        }
      }
    }
  }
}
function getOrPromoteCancellingList($this, state) {
  var tmp0_elvis_lhs = state.ao();
  var tmp;
  if (tmp0_elvis_lhs == null) {
    var tmp_0;
    if (state instanceof Empty) {
      tmp_0 = new NodeList();
    } else {
      if (state instanceof JobNode) {
        promoteSingleToNodeList($this, state);
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.error' call
        var message = 'State should have list: ' + toString(state);
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    tmp = tmp_0;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function tryMakeCancelling($this, state, rootCause) {
  // Inline function 'kotlinx.coroutines.assert' call
  // Inline function 'kotlinx.coroutines.assert' call
  var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return false;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var list = tmp;
  var cancelling = new Finishing(list, false, rootCause);
  if (!$this.lk_1.atomicfu$compareAndSet(state, cancelling))
    return false;
  notifyCancelling($this, list, rootCause);
  return true;
}
function tryMakeCompleting($this, state, proposedUpdate) {
  if (!(!(state == null) ? isInterface(state, Incomplete) : false))
    return get_COMPLETING_ALREADY();
  var tmp;
  var tmp_0;
  var tmp_1;
  if (state instanceof Empty) {
    tmp_1 = true;
  } else {
    tmp_1 = state instanceof JobNode;
  }
  if (tmp_1) {
    tmp_0 = !(state instanceof ChildHandleNode);
  } else {
    tmp_0 = false;
  }
  if (tmp_0) {
    tmp = !(proposedUpdate instanceof CompletedExceptionally);
  } else {
    tmp = false;
  }
  if (tmp) {
    if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
      return proposedUpdate;
    }
    return get_COMPLETING_RETRY();
  }
  return tryMakeCompletingSlowPath($this, state, proposedUpdate);
}
function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
  var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return get_COMPLETING_RETRY();
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var list = tmp;
  var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
  var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
  var notifyRootCause;
  // Inline function 'kotlinx.coroutines.internal.synchronized' call
  // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
  if (finishing.vo())
    return get_COMPLETING_ALREADY();
  finishing.zo(true);
  if (!(finishing === state)) {
    if (!$this.lk_1.atomicfu$compareAndSet(state, finishing))
      return get_COMPLETING_RETRY();
  }
  // Inline function 'kotlinx.coroutines.assert' call
  var wasCancelling = finishing.so();
  var tmp65_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
  if (tmp65_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    finishing.xo(tmp65_safe_receiver.wk_1);
  }
  // Inline function 'kotlin.takeIf' call
  var this_0 = finishing.yo();
  var tmp_0;
  if (!wasCancelling) {
    tmp_0 = this_0;
  } else {
    tmp_0 = null;
  }
  notifyRootCause = tmp_0;
  if (notifyRootCause == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    notifyCancelling($this, list, notifyRootCause);
  }
  var child = nextChild($this, list);
  if (!(child == null) && tryWaitForChild($this, finishing, child, proposedUpdate))
    return get_COMPLETING_WAITING_CHILDREN();
  list.jo(2);
  var anotherChild = nextChild($this, list);
  if (!(anotherChild == null) && tryWaitForChild($this, finishing, anotherChild, proposedUpdate))
    return get_COMPLETING_WAITING_CHILDREN();
  return finalizeFinishingState($this, finishing, proposedUpdate);
}
function _get_exceptionOrNull__b3j7js($this, $receiver) {
  var tmp67_safe_receiver = $receiver instanceof CompletedExceptionally ? $receiver : null;
  return tmp67_safe_receiver == null ? null : tmp67_safe_receiver.wk_1;
}
function tryWaitForChild($this, state, child, proposedUpdate) {
  var $this_0 = $this;
  var state_0 = state;
  var child_0 = child;
  var proposedUpdate_0 = proposedUpdate;
  $l$1: do {
    $l$0: do {
      var handle = invokeOnCompletion(child_0.ep_1, false, new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0));
      if (!(handle === NonDisposableHandle_instance))
        return true;
      var tmp0_elvis_lhs = nextChild($this_0, child_0);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var nextChild_0 = tmp;
      var tmp0 = $this_0;
      var tmp1 = state_0;
      var tmp3 = proposedUpdate_0;
      $this_0 = tmp0;
      state_0 = tmp1;
      child_0 = nextChild_0;
      proposedUpdate_0 = tmp3;
      continue $l$0;
    }
     while (false);
  }
   while (true);
}
function continueCompleting($this, state, lastChild, proposedUpdate) {
  // Inline function 'kotlinx.coroutines.assert' call
  var waitChild = nextChild($this, lastChild);
  if (!(waitChild == null) && tryWaitForChild($this, state, waitChild, proposedUpdate))
    return Unit_instance;
  state.oo_1.jo(2);
  var waitChildAgain = nextChild($this, lastChild);
  if (!(waitChildAgain == null) && tryWaitForChild($this, state, waitChildAgain, proposedUpdate)) {
    return Unit_instance;
  }
  var finalState = finalizeFinishingState($this, state, proposedUpdate);
  $this.bl(finalState);
}
function nextChild($this, $receiver) {
  var cur = $receiver;
  $l$loop: while (true) {
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.isRemoved' call
    if (!cur.ho_1) {
      break $l$loop;
    }
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.prevNode' call
    cur = cur.go_1;
  }
  $l$loop_0: while (true) {
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.nextNode' call
    cur = cur.fo_1;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.isRemoved' call
    if (cur.ho_1)
      continue $l$loop_0;
    if (cur instanceof ChildHandleNode)
      return cur;
    if (cur instanceof NodeList)
      return null;
  }
}
function stateString($this, state) {
  var tmp;
  if (state instanceof Finishing) {
    tmp = state.so() ? 'Cancelling' : state.vo() ? 'Completing' : 'Active';
  } else {
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.rk() ? 'Active' : 'New';
    } else {
      if (state instanceof CompletedExceptionally) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
  }
  return tmp;
}
function Finishing(list, isCompleting, rootCause) {
  SynchronizedObject.call(this);
  this.oo_1 = list;
  this.po_1 = atomic$boolean$1(isCompleting);
  this.qo_1 = atomic$ref$1(rootCause);
  this.ro_1 = atomic$ref$1(null);
}
protoOf(Finishing).ao = function () {
  return this.oo_1;
};
protoOf(Finishing).zo = function (value) {
  this.po_1.kotlinx$atomicfu$value = value;
};
protoOf(Finishing).vo = function () {
  return this.po_1.kotlinx$atomicfu$value;
};
protoOf(Finishing).fp = function (value) {
  this.qo_1.kotlinx$atomicfu$value = value;
};
protoOf(Finishing).yo = function () {
  return this.qo_1.kotlinx$atomicfu$value;
};
protoOf(Finishing).wo = function () {
  return _get_exceptionsHolder__nhszp(this) === get_SEALED();
};
protoOf(Finishing).so = function () {
  return !(this.yo() == null);
};
protoOf(Finishing).rk = function () {
  return this.yo() == null;
};
protoOf(Finishing).to = function (proposedException) {
  var eh = _get_exceptionsHolder__nhszp(this);
  var tmp;
  if (eh == null) {
    tmp = allocateList(this);
  } else {
    if (eh instanceof Error) {
      // Inline function 'kotlin.also' call
      var this_0 = allocateList(this);
      this_0.h(eh);
      tmp = this_0;
    } else {
      if (eh instanceof ArrayList) {
        tmp = eh instanceof ArrayList ? eh : THROW_CCE();
      } else {
        // Inline function 'kotlin.error' call
        var message = 'State is ' + toString_0(eh);
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  var list = tmp;
  var rootCause = this.yo();
  if (rootCause == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    list.o2(0, rootCause);
  }
  if (!(proposedException == null) && !equals(proposedException, rootCause)) {
    list.h(proposedException);
  }
  _set_exceptionsHolder__tqm22h(this, get_SEALED());
  return list;
};
protoOf(Finishing).xo = function (exception) {
  var rootCause = this.yo();
  if (rootCause == null) {
    this.fp(exception);
    return Unit_instance;
  }
  if (exception === rootCause)
    return Unit_instance;
  var eh = _get_exceptionsHolder__nhszp(this);
  if (eh == null) {
    _set_exceptionsHolder__tqm22h(this, exception);
  } else {
    if (eh instanceof Error) {
      if (exception === eh)
        return Unit_instance;
      // Inline function 'kotlin.apply' call
      var this_0 = allocateList(this);
      this_0.h(eh);
      this_0.h(exception);
      _set_exceptionsHolder__tqm22h(this, this_0);
    } else {
      if (eh instanceof ArrayList) {
        (eh instanceof ArrayList ? eh : THROW_CCE()).h(exception);
      } else {
        // Inline function 'kotlin.error' call
        var message = 'State is ' + toString_0(eh);
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
};
protoOf(Finishing).toString = function () {
  return 'Finishing[cancelling=' + this.so() + ', completing=' + this.vo() + ', rootCause=' + toString_0(this.yo()) + ', exceptions=' + toString_0(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.oo_1.toString() + ']';
};
function ChildCompletion(parent, state, child, proposedUpdate) {
  JobNode.call(this);
  this.kp_1 = parent;
  this.lp_1 = state;
  this.mp_1 = child;
  this.np_1 = proposedUpdate;
}
protoOf(ChildCompletion).lo = function (cause) {
  continueCompleting(this.kp_1, this.lp_1, this.mp_1, this.np_1);
};
protoOf(ChildCompletion).yn = function () {
  return false;
};
function JobSupport(active) {
  this.lk_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
  this.mk_1 = atomic$ref$1(null);
}
protoOf(JobSupport).u1 = function () {
  return Key_instance_2;
};
protoOf(JobSupport).el = function (value) {
  this.mk_1.kotlinx$atomicfu$value = value;
};
protoOf(JobSupport).fl = function () {
  return this.mk_1.kotlinx$atomicfu$value;
};
protoOf(JobSupport).nk = function (parent) {
  // Inline function 'kotlinx.coroutines.assert' call
  if (parent == null) {
    this.el(NonDisposableHandle_instance);
    return Unit_instance;
  }
  parent.il();
  var handle = parent.vl(this);
  this.el(handle);
  if (this.hl()) {
    handle.om();
    this.el(NonDisposableHandle_instance);
  }
};
protoOf(JobSupport).gl = function () {
  return this.lk_1.kotlinx$atomicfu$value;
};
protoOf(JobSupport).rk = function () {
  var state = this.gl();
  var tmp;
  if (!(state == null) ? isInterface(state, Incomplete) : false) {
    tmp = state.rk();
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(JobSupport).hl = function () {
  var tmp = this.gl();
  return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
};
protoOf(JobSupport).il = function () {
  // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
  while (true) {
    var state = this.gl();
    var tmp52_subject = startInternal(this, state);
    if (tmp52_subject === 0)
      return false;
    else if (tmp52_subject === 1)
      return true;
  }
};
protoOf(JobSupport).jl = function () {
};
protoOf(JobSupport).kl = function () {
  var state = this.gl();
  var tmp;
  if (state instanceof Finishing) {
    var tmp54_safe_receiver = state.yo();
    var tmp0_elvis_lhs = tmp54_safe_receiver == null ? null : this.ll(tmp54_safe_receiver, get_classSimpleName(this) + ' is cancelling');
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = 'Job is still new or active: ' + this.toString();
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    tmp = tmp_0;
  } else {
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      // Inline function 'kotlin.error' call
      var message_0 = 'Job is still new or active: ' + this.toString();
      throw IllegalStateException_init_$Create$(toString(message_0));
    } else {
      if (state instanceof CompletedExceptionally) {
        tmp = this.ml(state.wk_1);
      } else {
        tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
      }
    }
  }
  return tmp;
};
protoOf(JobSupport).ll = function (_this__u8e3s4, message) {
  var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
    tmp = new JobCancellationException(message == null ? this.uk() : message, _this__u8e3s4, this);
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
};
protoOf(JobSupport).ml = function (_this__u8e3s4, message, $super) {
  message = message === VOID ? null : message;
  return $super === VOID ? this.ll(_this__u8e3s4, message) : $super.ll.call(this, _this__u8e3s4, message);
};
protoOf(JobSupport).nl = function (onCancelling, invokeImmediately, handler) {
  var tmp;
  if (onCancelling) {
    tmp = new InvokeOnCancelling(handler);
  } else {
    tmp = new InvokeOnCompletion(handler);
  }
  return this.ol(invokeImmediately, tmp);
};
protoOf(JobSupport).ol = function (invokeImmediately, node) {
  node.xn_1 = this;
  var tmp$ret$0;
  $l$block_1: {
    // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList' call
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = this.gl();
      if (state instanceof Empty) {
        if (state.zn_1) {
          if (this.lk_1.atomicfu$compareAndSet(state, node)) {
            tmp$ret$0 = true;
            break $l$block_1;
          }
        } else {
          promoteEmptyToNodeList(this, state);
        }
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          var list = state.ao();
          if (list == null) {
            promoteSingleToNodeList(this, state instanceof JobNode ? state : THROW_CCE());
          } else {
            var tmp;
            if (node.yn()) {
              var tmp55_safe_receiver = state instanceof Finishing ? state : null;
              var rootCause = tmp55_safe_receiver == null ? null : tmp55_safe_receiver.yo();
              var tmp_0;
              if (rootCause == null) {
                tmp_0 = list.io(node, 5);
              } else {
                if (invokeImmediately) {
                  node.lo(rootCause);
                }
                return NonDisposableHandle_instance;
              }
              tmp = tmp_0;
            } else {
              tmp = list.io(node, 1);
            }
            if (tmp) {
              tmp$ret$0 = true;
              break $l$block_1;
            }
          }
        } else {
          tmp$ret$0 = false;
          break $l$block_1;
        }
      }
    }
  }
  var added = tmp$ret$0;
  if (added)
    return node;
  else if (invokeImmediately) {
    var tmp_1 = this.gl();
    var tmp56_safe_receiver = tmp_1 instanceof CompletedExceptionally ? tmp_1 : null;
    node.lo(tmp56_safe_receiver == null ? null : tmp56_safe_receiver.wk_1);
  }
  return NonDisposableHandle_instance;
};
protoOf(JobSupport).pl = function (node) {
  // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
  while (true) {
    var state = this.gl();
    if (state instanceof JobNode) {
      if (!(state === node))
        return Unit_instance;
      if (this.lk_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return Unit_instance;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        if (!(state.ao() == null)) {
          node.mo();
        }
        return Unit_instance;
      } else {
        return Unit_instance;
      }
    }
  }
};
protoOf(JobSupport).ql = function () {
  return false;
};
protoOf(JobSupport).uk = function () {
  return 'Job was cancelled';
};
protoOf(JobSupport).rl = function (parentJob) {
  this.tl(parentJob);
};
protoOf(JobSupport).sl = function (cause) {
  if (cause instanceof CancellationException)
    return true;
  return this.tl(cause) && this.yl();
};
protoOf(JobSupport).tl = function (cause) {
  var finalState = get_COMPLETING_ALREADY();
  if (this.ql()) {
    finalState = cancelMakeCompleting(this, cause);
    if (finalState === get_COMPLETING_WAITING_CHILDREN())
      return true;
  }
  if (finalState === get_COMPLETING_ALREADY()) {
    finalState = makeCancelling(this, cause);
  }
  var tmp;
  if (finalState === get_COMPLETING_ALREADY()) {
    tmp = true;
  } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
    tmp = true;
  } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
    tmp = false;
  } else {
    this.bl(finalState);
    tmp = true;
  }
  return tmp;
};
protoOf(JobSupport).ul = function () {
  var state = this.gl();
  var tmp;
  if (state instanceof Finishing) {
    tmp = state.yo();
  } else {
    if (state instanceof CompletedExceptionally) {
      tmp = state.wk_1;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        // Inline function 'kotlin.error' call
        var message = 'Cannot be cancelling child in this state: ' + toString(state);
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp = null;
      }
    }
  }
  var rootCause = tmp;
  var tmp0_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
  return tmp0_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp0_elvis_lhs;
};
protoOf(JobSupport).zk = function (proposedUpdate) {
  // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
  while (true) {
    var tmp0 = this.gl();
    $l$block: {
      var finalState = tryMakeCompleting(this, tmp0, proposedUpdate);
      if (finalState === get_COMPLETING_ALREADY())
        throw IllegalStateException_init_$Create$_0('Job ' + this.toString() + ' is already complete or completing, ' + ('but is being completed with ' + toString_0(proposedUpdate)), _get_exceptionOrNull__b3j7js(this, proposedUpdate));
      else if (finalState === get_COMPLETING_RETRY()) {
        break $l$block;
      } else
        return finalState;
    }
  }
};
protoOf(JobSupport).vl = function (child) {
  // Inline function 'kotlin.also' call
  var this_0 = new ChildHandleNode(child);
  this_0.xn_1 = this;
  var node = this_0;
  var tmp$ret$2;
  $l$block_1: {
    // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList' call
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = this.gl();
      if (state instanceof Empty) {
        if (state.zn_1) {
          if (this.lk_1.atomicfu$compareAndSet(state, node)) {
            tmp$ret$2 = true;
            break $l$block_1;
          }
        } else {
          promoteEmptyToNodeList(this, state);
        }
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          var list = state.ao();
          if (list == null) {
            promoteSingleToNodeList(this, state instanceof JobNode ? state : THROW_CCE());
          } else {
            var addedBeforeCancellation = list.io(node, 7);
            var tmp;
            if (addedBeforeCancellation) {
              tmp = true;
            } else {
              var addedBeforeCompletion = list.io(node, 3);
              var latestState = this.gl();
              var tmp_0;
              if (latestState instanceof Finishing) {
                tmp_0 = latestState.yo();
              } else {
                // Inline function 'kotlinx.coroutines.assert' call
                var tmp69_safe_receiver = latestState instanceof CompletedExceptionally ? latestState : null;
                tmp_0 = tmp69_safe_receiver == null ? null : tmp69_safe_receiver.wk_1;
              }
              var rootCause = tmp_0;
              node.lo(rootCause);
              var tmp_1;
              if (addedBeforeCompletion) {
                // Inline function 'kotlinx.coroutines.assert' call
                tmp_1 = true;
              } else {
                return NonDisposableHandle_instance;
              }
              tmp = tmp_1;
            }
            if (tmp) {
              tmp$ret$2 = true;
              break $l$block_1;
            }
          }
        } else {
          tmp$ret$2 = false;
          break $l$block_1;
        }
      }
    }
  }
  var added = tmp$ret$2;
  if (added)
    return node;
  var tmp_2 = this.gl();
  var tmp70_safe_receiver = tmp_2 instanceof CompletedExceptionally ? tmp_2 : null;
  node.lo(tmp70_safe_receiver == null ? null : tmp70_safe_receiver.wk_1);
  return NonDisposableHandle_instance;
};
protoOf(JobSupport).cl = function (exception) {
  throw exception;
};
protoOf(JobSupport).wl = function (cause) {
};
protoOf(JobSupport).xl = function () {
  return false;
};
protoOf(JobSupport).yl = function () {
  return true;
};
protoOf(JobSupport).zl = function (exception) {
  return false;
};
protoOf(JobSupport).vk = function (state) {
};
protoOf(JobSupport).bl = function (state) {
};
protoOf(JobSupport).toString = function () {
  return this.am() + '@' + get_hexAddress(this);
};
protoOf(JobSupport).am = function () {
  return this.dl() + '{' + stateString(this, this.gl()) + '}';
};
protoOf(JobSupport).dl = function () {
  return get_classSimpleName(this);
};
function boxIncomplete(_this__u8e3s4) {
  _init_properties_JobSupport_kt__68f172();
  var tmp;
  if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
    tmp = new IncompleteStateBox(_this__u8e3s4);
  } else {
    tmp = _this__u8e3s4;
  }
  return tmp;
}
function InactiveNodeList(list) {
  this.uo_1 = list;
}
protoOf(InactiveNodeList).ao = function () {
  return this.uo_1;
};
protoOf(InactiveNodeList).rk = function () {
  return false;
};
protoOf(InactiveNodeList).toString = function () {
  return get_DEBUG() ? this.uo_1.eo('New') : anyToString(this);
};
function InvokeOnCompletion(handler) {
  JobNode.call(this);
  this.sp_1 = handler;
}
protoOf(InvokeOnCompletion).lo = function (cause) {
  return this.sp_1(cause);
};
protoOf(InvokeOnCompletion).yn = function () {
  return false;
};
function InvokeOnCancelling(handler) {
  JobNode.call(this);
  this.xp_1 = handler;
  this.yp_1 = atomic$boolean$1(false);
}
protoOf(InvokeOnCancelling).lo = function (cause) {
  if (this.yp_1.atomicfu$compareAndSet(false, true))
    this.xp_1(cause);
};
protoOf(InvokeOnCancelling).yn = function () {
  return true;
};
function ChildHandleNode(childJob) {
  JobNode.call(this);
  this.ep_1 = childJob;
}
protoOf(ChildHandleNode).lo = function (cause) {
  return this.ep_1.rl(this.ko());
};
protoOf(ChildHandleNode).sl = function (cause) {
  return this.ko().sl(cause);
};
protoOf(ChildHandleNode).yn = function () {
  return true;
};
function unboxState(_this__u8e3s4) {
  _init_properties_JobSupport_kt__68f172();
  var tmp74_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
  var tmp0_elvis_lhs = tmp74_safe_receiver == null ? null : tmp74_safe_receiver.zp_1;
  return tmp0_elvis_lhs == null ? _this__u8e3s4 : tmp0_elvis_lhs;
}
function IncompleteStateBox(state) {
  this.zp_1 = state;
}
var properties_initialized_JobSupport_kt_5iq8a4;
function _init_properties_JobSupport_kt__68f172() {
  if (!properties_initialized_JobSupport_kt_5iq8a4) {
    properties_initialized_JobSupport_kt_5iq8a4 = true;
    COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
    COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
    COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
    TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
    SEALED = new Symbol('SEALED');
    EMPTY_NEW = new Empty(false);
    EMPTY_ACTIVE = new Empty(true);
  }
}
function JobNode$invoke$ref(p0) {
  return constructCallableReference(function (p0_0) {
    p0.lo(p0_0);
    return Unit_instance;
  }, 1, 0, 2, 'invoke', [p0]);
}
function TimeoutCancellationException() {
}
function handleUncaughtCoroutineException(context, exception) {
  var _iterator__ex2g4s = get_platformExceptionHandlers().i();
  while (_iterator__ex2g4s.j()) {
    var handler = _iterator__ex2g4s.k();
    try {
      handler.cn(context, exception);
    } catch ($p) {
      if ($p instanceof ExceptionSuccessfullyProcessed) {
        var _unused_var__etf5q3 = $p;
        return Unit_instance;
      } else {
        if ($p instanceof Error) {
          var t = $p;
          propagateExceptionFinalResort(handlerException(exception, t));
        } else {
          throw $p;
        }
      }
    }
  }
  try {
    addSuppressed(exception, new DiagnosticCoroutineContextException(context));
  } catch ($p_0) {
    if ($p_0 instanceof Error) {
      var e = $p_0;
    } else {
      throw $p_0;
    }
  }
  propagateExceptionFinalResort(exception);
}
function ExceptionSuccessfullyProcessed() {
}
function get_UNDEFINED() {
  _init_properties_DispatchedContinuation_kt__tnmqc0();
  return UNDEFINED;
}
var UNDEFINED;
function get_REUSABLE_CLAIMED() {
  _init_properties_DispatchedContinuation_kt__tnmqc0();
  return REUSABLE_CLAIMED;
}
var REUSABLE_CLAIMED;
function _get_reusableCancellableContinuation__9qex09($this) {
  var tmp = $this.an_1.kotlinx$atomicfu$value;
  return tmp instanceof CancellableContinuationImpl ? tmp : null;
}
function DispatchedContinuation(dispatcher, continuation) {
  DispatchedTask.call(this, -1);
  this.wm_1 = dispatcher;
  this.xm_1 = continuation;
  this.ym_1 = get_UNDEFINED();
  this.zm_1 = threadContextElements(this.v8());
  this.an_1 = atomic$ref$1(null);
}
protoOf(DispatchedContinuation).v8 = function () {
  return this.xm_1.v8();
};
protoOf(DispatchedContinuation).aq = function () {
  // Inline function 'kotlinx.atomicfu.loop' call
  var this_0 = this.an_1;
  while (true) {
    if (!(this_0.kotlinx$atomicfu$value === get_REUSABLE_CLAIMED()))
      return Unit_instance;
  }
};
protoOf(DispatchedContinuation).bn = function () {
  this.aq();
  var tmp148_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
  if (tmp148_safe_receiver == null)
    null;
  else {
    tmp148_safe_receiver.nm();
  }
};
protoOf(DispatchedContinuation).bq = function () {
  var state = this.ym_1;
  // Inline function 'kotlinx.coroutines.assert' call
  this.ym_1 = get_UNDEFINED();
  return state;
};
protoOf(DispatchedContinuation).cq = function () {
  return this;
};
protoOf(DispatchedContinuation).a9 = function (result) {
  var context = this.xm_1.v8();
  var state = toState(result);
  if (this.wm_1.tm(context)) {
    this.ym_1 = state;
    this.in_1 = 0;
    this.wm_1.um(context, this);
  } else {
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
      // Inline function 'kotlinx.coroutines.assert' call
      var eventLoop = ThreadLocalEventLoop_getInstance().rn();
      if (false && eventLoop.mn()) {
        break $l$block;
      }
      var tmp;
      if (eventLoop.ln()) {
        this.ym_1 = state;
        this.in_1 = 0;
        eventLoop.kn(this);
        tmp = true;
      } else {
        // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
        eventLoop.nn(true);
        try {
          this.v8();
          // Inline function 'kotlinx.coroutines.withCoroutineContext' call
          this.zm_1;
          this.xm_1.a9(result);
          $l$loop: while (eventLoop.hn()) {
          }
        } catch ($p) {
          if ($p instanceof Error) {
            var e = $p;
            this.dq(e, null);
          } else {
            throw $p;
          }
        }
        finally {
          eventLoop.on(true);
        }
        tmp = false;
      }
    }
  }
};
protoOf(DispatchedContinuation).eq = function (takenState, cause) {
  if (takenState instanceof CompletedWithCancellation) {
    takenState.rm_1(cause);
  }
};
protoOf(DispatchedContinuation).toString = function () {
  return 'DispatchedContinuation[' + this.wm_1.toString() + ', ' + toDebugString(this.xm_1) + ']';
};
function resumeCancellableWith(_this__u8e3s4, result, onCancellation) {
  onCancellation = onCancellation === VOID ? null : onCancellation;
  _init_properties_DispatchedContinuation_kt__tnmqc0();
  var tmp;
  if (_this__u8e3s4 instanceof DispatchedContinuation) {
    // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith' call
    var state = toState(result, onCancellation);
    if (_this__u8e3s4.wm_1.tm(_this__u8e3s4.v8())) {
      _this__u8e3s4.ym_1 = state;
      _this__u8e3s4.in_1 = 1;
      _this__u8e3s4.wm_1.um(_this__u8e3s4.v8(), _this__u8e3s4);
    } else {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().rn();
        if (false && eventLoop.mn()) {
          break $l$block;
        }
        var tmp_0;
        if (eventLoop.ln()) {
          _this__u8e3s4.ym_1 = state;
          _this__u8e3s4.in_1 = 1;
          eventLoop.kn(_this__u8e3s4);
          tmp_0 = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.nn(true);
          try {
            var tmp$ret$5;
            $l$block_0: {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
              var job = _this__u8e3s4.v8().c9(Key_instance_2);
              if (!(job == null) && !job.rk()) {
                var cause = job.kl();
                _this__u8e3s4.eq(state, cause);
                // Inline function 'kotlin.coroutines.resumeWithException' call
                // Inline function 'kotlin.Companion.failure' call
                var tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure(cause));
                _this__u8e3s4.a9(tmp$ret$7);
                tmp$ret$5 = true;
                break $l$block_0;
              }
              tmp$ret$5 = false;
            }
            if (!tmp$ret$5) {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
              _this__u8e3s4.xm_1;
              // Inline function 'kotlinx.coroutines.withContinuationContext' call
              _this__u8e3s4.zm_1;
              _this__u8e3s4.xm_1.a9(result);
            }
            $l$loop: while (eventLoop.hn()) {
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              _this__u8e3s4.dq(e, null);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.on(true);
          }
          tmp_0 = false;
        }
      }
    }
    tmp = Unit_instance;
  } else {
    _this__u8e3s4.a9(result);
    tmp = Unit_instance;
  }
  return tmp;
}
var properties_initialized_DispatchedContinuation_kt_2siadq;
function _init_properties_DispatchedContinuation_kt__tnmqc0() {
  if (!properties_initialized_DispatchedContinuation_kt_2siadq) {
    properties_initialized_DispatchedContinuation_kt_2siadq = true;
    UNDEFINED = new Symbol('UNDEFINED');
    REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
  }
}
function DispatchedTask(resumeMode) {
  SchedulerTask.call(this);
  this.in_1 = resumeMode;
}
protoOf(DispatchedTask).eq = function (takenState, cause) {
};
protoOf(DispatchedTask).fq = function (state) {
  return state;
};
protoOf(DispatchedTask).gq = function (state) {
  var tmp151_safe_receiver = state instanceof CompletedExceptionally ? state : null;
  return tmp151_safe_receiver == null ? null : tmp151_safe_receiver.wk_1;
};
protoOf(DispatchedTask).jn = function () {
  // Inline function 'kotlinx.coroutines.assert' call
  var taskContext = get_taskContext(this);
  var fatalException = null;
  try {
    var tmp = this.cq();
    var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    var continuation = delegate.xm_1;
    // Inline function 'kotlinx.coroutines.withContinuationContext' call
    delegate.zm_1;
    var context = continuation.v8();
    var state = this.bq();
    var exception = this.gq(state);
    var job = exception == null && get_isCancellableMode(this.in_1) ? context.c9(Key_instance_2) : null;
    if (!(job == null) && !job.rk()) {
      var cause = job.kl();
      this.eq(state, cause);
      // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
      // Inline function 'kotlin.Companion.failure' call
      var exception_0 = recoverStackTrace(cause, continuation);
      var tmp$ret$4 = _Result___init__impl__xyqfz8(createFailure(exception_0));
      continuation.a9(tmp$ret$4);
    } else {
      if (!(exception == null)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure(exception));
        continuation.a9(tmp$ret$6);
      } else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var value = this.fq(state);
        var tmp$ret$8 = _Result___init__impl__xyqfz8(value);
        continuation.a9(tmp$ret$8);
      }
    }
  } catch ($p) {
    if ($p instanceof Error) {
      var e = $p;
      fatalException = e;
    } else {
      throw $p;
    }
  }
  finally {
    // Inline function 'kotlin.runCatching' call
    var tmp_0;
    try {
      // Inline function 'kotlinx.coroutines.afterTask' call
      // Inline function 'kotlin.Companion.success' call
      tmp_0 = _Result___init__impl__xyqfz8(Unit_instance);
    } catch ($p_0) {
      var tmp_1;
      if ($p_0 instanceof Error) {
        var e_0 = $p_0;
        // Inline function 'kotlin.Companion.failure' call
        tmp_1 = _Result___init__impl__xyqfz8(createFailure(e_0));
      } else {
        throw $p_0;
      }
      tmp_0 = tmp_1;
    }
    var result = tmp_0;
    this.dq(fatalException, Result__exceptionOrNull_impl_p6xea9(result));
  }
};
protoOf(DispatchedTask).dq = function (exception, finallyException) {
  if (exception === null && finallyException === null)
    return Unit_instance;
  if (!(exception === null) && !(finallyException === null)) {
    addSuppressed(exception, finallyException);
  }
  var cause = exception == null ? finallyException : exception;
  var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + toString(this) + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
  handleCoroutineException(this.cq().v8(), reason);
};
function get_isCancellableMode(_this__u8e3s4) {
  return _this__u8e3s4 === 1 || _this__u8e3s4 === 2;
}
function ScopeCoroutine(context, uCont) {
  AbstractCoroutine.call(this, context, true, true);
  this.km_1 = uCont;
}
protoOf(ScopeCoroutine).xl = function () {
  return true;
};
protoOf(ScopeCoroutine).bl = function (state) {
  resumeCancellableWith(intercepted(this.km_1), recoverResult(state, this.km_1));
};
protoOf(ScopeCoroutine).al = function (state) {
  this.km_1.a9(recoverResult(state, this.km_1));
};
function Symbol(symbol) {
  this.hq_1 = symbol;
}
protoOf(Symbol).toString = function () {
  return '<' + this.hq_1 + '>';
};
function startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation) {
  onCancellation = onCancellation === VOID ? null : onCancellation;
  // Inline function 'kotlinx.coroutines.intrinsics.runSafely' call
  try {
    var tmp = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
    // Inline function 'kotlin.Companion.success' call
    var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_instance);
    resumeCancellableWith(tmp, tmp$ret$2, onCancellation);
  } catch ($p) {
    if ($p instanceof Error) {
      var e = $p;
      dispatcherFailure(completion, e);
    } else {
      throw $p;
    }
  }
  return Unit_instance;
}
function dispatcherFailure(completion, e) {
  // Inline function 'kotlin.Companion.failure' call
  var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
  completion.a9(tmp$ret$0);
  throw e;
}
function startUndispatchedOrReturn(_this__u8e3s4, receiver, block) {
  var tmp$ret$0;
  $l$block_0: {
    // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
    var tmp;
    try {
      // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
      tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(block, receiver, _this__u8e3s4);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        tmp_0 = new CompletedExceptionally(e);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var result = tmp;
    if (result === get_COROUTINE_SUSPENDED()) {
      tmp$ret$0 = get_COROUTINE_SUSPENDED();
      break $l$block_0;
    }
    var state = _this__u8e3s4.zk(result);
    if (state === get_COMPLETING_WAITING_CHILDREN()) {
      tmp$ret$0 = get_COROUTINE_SUSPENDED();
      break $l$block_0;
    }
    var tmp_1;
    if (state instanceof CompletedExceptionally) {
      var tmp_2;
      state.wk_1;
      if (true) {
        throw recoverStackTrace(state.wk_1, _this__u8e3s4.km_1);
      } else {
        if (result instanceof CompletedExceptionally) {
          throw recoverStackTrace(result.wk_1, _this__u8e3s4.km_1);
        } else {
          tmp_2 = result;
        }
      }
      tmp_1 = tmp_2;
    } else {
      tmp_1 = unboxState(state);
    }
    tmp$ret$0 = tmp_1;
  }
  return tmp$ret$0;
}
var counter;
function get_DEBUG() {
  return DEBUG;
}
var DEBUG;
function get_classSimpleName(_this__u8e3s4) {
  var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).aa();
  return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
}
function get_hexAddress(_this__u8e3s4) {
  // Inline function 'kotlin.js.asDynamic' call
  var result = _this__u8e3s4.__debug_counter;
  if (!(typeof result === 'number')) {
    counter = counter + 1 | 0;
    result = counter;
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.__debug_counter = result;
  }
  return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
}
function propagateExceptionFinalResort(exception) {
  console.error(exception.toString());
}
function createEventLoop() {
  return new UnconfinedEventLoop();
}
function UnconfinedEventLoop() {
  EventLoop.call(this);
}
protoOf(UnconfinedEventLoop).um = function (context, block) {
  unsupported();
};
function unsupported() {
  throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
}
function toDebugString(_this__u8e3s4) {
  return toString(_this__u8e3s4);
}
function newCoroutineContext(_this__u8e3s4, addedContext) {
  return _this__u8e3s4.dg(addedContext);
}
function UndispatchedCoroutine(context, uCont) {
  ScopeCoroutine.call(this, context, uCont);
}
protoOf(UndispatchedCoroutine).al = function (state) {
  return this.km_1.a9(recoverResult(state, this.km_1));
};
function get_coroutineName(_this__u8e3s4) {
  return null;
}
function JobCancellationException(message, cause, job) {
  CancellationException_init_$Init$(message, cause, this);
  captureStack(this, JobCancellationException);
  this.qq_1 = job;
}
protoOf(JobCancellationException).toString = function () {
  return protoOf(CancellationException).toString.call(this) + '; job=' + toString(this.qq_1);
};
protoOf(JobCancellationException).equals = function (other) {
  var tmp;
  if (other === this) {
    tmp = true;
  } else {
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof JobCancellationException) {
      tmp_2 = other.message == this.message;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = equals(other.qq_1, this.qq_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(other.cause, this.cause);
    } else {
      tmp_0 = false;
    }
    tmp = tmp_0;
  }
  return tmp;
};
protoOf(JobCancellationException).hashCode = function () {
  var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.qq_1) | 0, 31);
  var tmp0_safe_receiver = this.cause;
  var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
  return tmp + (tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs) | 0;
};
function SchedulerTask() {
}
function get_taskContext(_this__u8e3s4) {
  return TaskContext_instance;
}
function TaskContext() {
}
var TaskContext_instance;
function TaskContext_getInstance() {
  return TaskContext_instance;
}
function identitySet(expectedSize) {
  return HashSet_init_$Create$(expectedSize);
}
function get_platformExceptionHandlers_() {
  _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
  return platformExceptionHandlers_;
}
var platformExceptionHandlers_;
function get_platformExceptionHandlers() {
  _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
  return get_platformExceptionHandlers_();
}
function DiagnosticCoroutineContextException(context) {
  RuntimeException_init_$Init$_0(toString(context), this);
  captureStack(this, DiagnosticCoroutineContextException);
}
var properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx;
function _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf() {
  if (!properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx) {
    properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx = true;
    // Inline function 'kotlin.collections.mutableSetOf' call
    platformExceptionHandlers_ = LinkedHashSet_init_$Create$();
  }
}
function LockFreeLinkedListHead() {
  LockFreeLinkedListNode.call(this);
}
function LockFreeLinkedListNode() {
  this.fo_1 = this;
  this.go_1 = this;
  this.ho_1 = false;
}
protoOf(LockFreeLinkedListNode).io = function (node, permissionsBitmask) {
  var prev = this.go_1;
  var tmp;
  if (prev instanceof ListClosed) {
    tmp = ((prev.uq_1 & permissionsBitmask) === 0 && prev.io(node, permissionsBitmask));
  } else {
    node.fo_1 = this;
    node.go_1 = prev;
    prev.fo_1 = node;
    this.go_1 = node;
    tmp = true;
  }
  return tmp;
};
protoOf(LockFreeLinkedListNode).jo = function (forbiddenElementsBit) {
  this.io(new ListClosed(forbiddenElementsBit), forbiddenElementsBit);
};
protoOf(LockFreeLinkedListNode).mo = function () {
  if (this.ho_1)
    return false;
  var prev = this.go_1;
  var next = this.fo_1;
  prev.fo_1 = next;
  next.go_1 = prev;
  this.ho_1 = true;
  return true;
};
protoOf(LockFreeLinkedListNode).no = function (node) {
  if (!(this.fo_1 === this))
    return false;
  this.io(node, -2147483648);
  return true;
};
function ListClosed(forbiddenElementsBitmask) {
  LockFreeLinkedListNode.call(this);
  this.uq_1 = forbiddenElementsBitmask;
}
function unwrap(exception) {
  return exception;
}
function recoverStackTrace(exception, continuation) {
  return exception;
}
function SynchronizedObject() {
}
function threadContextElements(context) {
  return 0;
}
function CommonThreadLocal() {
  this.sn_1 = null;
}
protoOf(CommonThreadLocal).tn = function () {
  return this.sn_1;
};
protoOf(CommonThreadLocal).l4 = function (value) {
  this.sn_1 = value;
};
function commonThreadLocal(name) {
  return new CommonThreadLocal();
}
//region block: post-declaration
protoOf(JobSupport).dg = plus;
protoOf(JobSupport).c9 = get_0;
protoOf(JobSupport).cg = fold;
protoOf(JobSupport).bg = minusKey_0;
protoOf(CoroutineDispatcher).c9 = get;
protoOf(CoroutineDispatcher).bg = minusKey;
//endregion
//region block: init
Key_instance_1 = new Key_0();
Key_instance_2 = new Key_1();
NonDisposableHandle_instance = new NonDisposableHandle();
counter = 0;
DEBUG = false;
TaskContext_instance = new TaskContext();
//endregion
//region block: exports
export {
  withContext as withContextqz5k6d9p9xx5,
  CoroutineScope as CoroutineScopefcb5f5dwqcas,
};
//endregion

//# sourceMappingURL=kotlinx-coroutines-core.mjs.map
