<?php
function my_scripts() {
  //DEV angular version
  wp_enqueue_script('angularjs',get_stylesheet_directory_uri() . '/node_modules/angular/angular.js','1.5.5');
  wp_enqueue_script('angularjs-route',get_stylesheet_directory_uri() . '/node_modules/angular-route/angular-route.js',['angularjs'],'1.5.5');
  wp_enqueue_script('angularjs-sanitize',get_stylesheet_directory_uri() . '/node_modules/angular-sanitize/angular-sanitize.js',['angularjs'],'1.5.5');

  //scripts
  wp_enqueue_script('jr-script',get_stylesheet_directory_uri() . '/lib/js/script.js',['angularjs','angularjs-route']);

  //typkit
  wp_enqueue_script( 'jr_typekit', '//use.typekit.net/qgo6zhu.js', false,'');


  wp_localize_script('jr-script', 'src', [ 'templates' => trailingslashit(get_template_directory_uri()).'templates/' ] );

}
add_action( 'wp_enqueue_scripts', 'my_scripts' );

function theme_typekit_inline() {
  if ( wp_script_is( 'theme_typekit', 'done' ) ) { ?>
  	<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
<?php }
}
add_action( 'wp_head', 'theme_typekit_inline' );

add_shortcode("jr-demo", "jr_modules");
function jr_modules($atts) {
  global $jr_page;
  $a = shortcode_atts([
    'id' => '404',
    'cached'=> false
  ], $atts);
  $name = 'demos/'.$a['id'].'.php';
  $file = locate_template($name);
  if ($file != '') {
    ob_start();
    include($file);
    $output_string=ob_get_contents();;
    ob_end_clean();

    return $output_string;

  } else {
    echo "[check $name]";
  }
}
