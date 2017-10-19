function dirname(path) {
    return path.substring(0, path.lastIndexOf('/'))
}
(function() {
    const main = document.getElementById('main');
    const router = new (class extends Router {
        constructor() {
            super(dirname(location.pathname), {extension:'.corgi'});
        }
        processFile(src) {
            return corgi.compile(src);
        }
        setPageContent(con) {
            main.setAttribute('file', location.hash.substring(1));
            main.innerHTML = con;
        }
    })();
    router.start(main);
})();
