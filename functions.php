<?php

// WordPress Theme Functions and Hooks

// Enqueue styles and scripts
function theme_enqueue_styles() {
    wp_enqueue_style('style', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'theme_enqueue_styles');

// Register a custom menu
function register_my_menu() {
    register_nav_menu('header-menu', __('Header Menu'));
}
add_action('init', 'register_my_menu');

// Add theme support for featured images
function my_theme_setup() {
    add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'my_theme_setup');

// Custom widget area
function my_widgets_init() {
    register_sidebar(array(
        'name'          => __('Sidebar', 'text_domain'),
        'id'            => 'sidebar-1',
        'before_widget' => '<div>',
        'after_widget'  => '</div>',
        'before_title'  => '<h2>',
        'after_title'   => '</h2>',
    ));
}
add_action('widgets_init', 'my_widgets_init');

?>