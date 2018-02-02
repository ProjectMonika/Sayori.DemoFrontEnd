var supportsOurES6 = (function() {
    try {
        new Function("() => null;");
        new Function("const foo = null;");
        new Function("let foo = null;");

        if (!window.Promise) {
            return false;
        }
        else {
            return true;
        }
    }
    catch (err) {
        return false;
    }
})();

if (supportsOurES6) {
    window.allowPassThrough = true;
    console.log('Browser supports ECMAScript 6');
}
else {
    window.allowPassThrough = false;
    console.error('Browser does not support ECMAScript 6. Use a different browser');

    setTimeout(function() {
        var toasts = [];

        function makeToast(text) {
            // This actually broke Materialize.
            for (let oldToast of toasts) oldToast.dismiss();

            toasts.push(M.toast({ html: text }));
        }
        makeToast(`Do you keep seeing this loading screen? If so, your browser does not support <a href="https://es6-features.org">ECMAScript 6</a>.`);
    }, 5000);
}
