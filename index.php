<?php

/**
 * Plugin Name: JS Advancers - React on the Frontend
 * Description: 
 * Version: 1.0.0
 * Author: js-advancers
 * Text Domain: js-advancers
 */

NAMESPACE jsadvancers\react_on_the_frontend;

add_action( 'init', __NAMESPACE__.'\register_block_assets' );

function register_block_assets() {

    // register the main JS file that houses all our blocks
    wp_register_script(
        'block-js',
        plugins_url( '/build/index.js', __FILE__ ),
        ['wp-blocks', 'wp-element', 'wp-components', 'wp-editor', 'wp-i18n']
    );

    // register our block styles
    wp_register_style(
        'block-style',
        plugins_url( '/style.css', __FILE__ ),
        []    
    );

    // register our editor styles
    wp_register_style(
        'block-editor-style',
        plugins_url( '/editor.css', __FILE__ ),
        []
    );

    // register our block
    register_block_type( 'jsadvancers/data-visualisatioin', array(
        'editor_script' => 'block-js',
        'editor_style' => 'block-editor-style',
        'style' => 'block-style'
    ));

    // enqueue frontend javascript

    if ( ! is_admin() ) {
        wp_enqueue_script(
            __NAMESPACE__.'\frontend-script', 
            plugins_url('/build/frontend.js', __FILE__ ), 
            ['wp-element','wp-dom-ready', 'wp-api-fetch']
        );
    }

}



