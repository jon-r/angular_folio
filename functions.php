<?php
function my_scripts() {
  wp_enqueue_script('angularjs',get_stylesheet_directory_uri() . '/node_modules/angular/angular.js','1.5.5');
  wp_enqueue_script('angularjs-route',get_stylesheet_directory_uri() . '/node_modules/angular-route/angular-route.js',['angularjs'],'1.5.5');
  wp_enqueue_script('jr-script',get_stylesheet_directory_uri() . '/lib/js/script.js',['angularjs','angularjs-route']);

  wp_localize_script('jr-script', 'src', [ 'templates' => trailingslashit(get_template_directory_uri()).'templates/' ] );

}
add_action( 'wp_enqueue_scripts', 'my_scripts' );
