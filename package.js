Package.describe({
    summary: "Date range picker component for Twitter Bootstrap 3",
    "name": "loftsteinn:bootstrap3-daterangepicker",
    version: "2.0.9",
    git: "https://github.com/oskarszoon/meteor-bootstrap-daterangepicker"
});

Package.on_use(function(api) {
    api.use('momentjs:moment@2.9.0', 'client');
    api.add_files([
        'lib/bootstrap-daterangepicker/daterangepicker-bs3.css',
        'lib/bootstrap-daterangepicker/daterangepicker.js'
    ], 'client');
});
