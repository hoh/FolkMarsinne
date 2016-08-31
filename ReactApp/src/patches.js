/* Add Object.assign by monkey patching if the function does not exist */

export default function patch_object_assign() {
  if (Object.assign === undefined) {
    Object.assign = function (target) {
      for (var i=1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    }
  }
}
