Package.describe({
    summary: "Date range picker component for Twitter Bootstrap 3",
    "name": "loftsteinn:bootstrap3-daterangepicker",
    version: "0.3.1",
    git: "https://github.com/oskarszoon/meteor-bootstrap-daterangepicker"
});

Package.on_use(function(api) {
    api.use('mrt:moment@2.8.1', 'client');
    api.add_files([
        'lib/bootstrap-daterangepicker/daterangepicker-bs3.css',
        'lib/bootstrap-daterangepicker/daterangepicker.js'
    ], 'client');
});