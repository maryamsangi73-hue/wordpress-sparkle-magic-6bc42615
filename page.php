<?php

get_header();

// Start the Loop.
if ( have_posts() ) : while ( have_posts() ) : the_post();
    // Display the content of the single page.
    the_content();
endwhile; endif;

get_footer();

?>