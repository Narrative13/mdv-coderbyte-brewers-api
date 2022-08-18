<?php
// Exit if accessed directly
if (!defined('ABSPATH'))
    exit;

// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:

if (!function_exists('chld_thm_cfg_locale_css')):
    function chld_thm_cfg_locale_css($uri)
    {
        if (empty($uri) && is_rtl() && file_exists(get_template_directory() . '/rtl.css'))
            $uri = get_template_directory_uri() . '/rtl.css';
        return $uri;
    }
endif;
add_filter('locale_stylesheet_uri', 'chld_thm_cfg_locale_css');

if (!function_exists('chld_thm_cfg_parent_css')):
    function chld_thm_cfg_parent_css()
    {
        wp_enqueue_style('chld_thm_cfg_parent', trailingslashit(get_template_directory_uri()) . 'style.css', array());
    }
endif;
add_action('wp_enqueue_scripts', 'chld_thm_cfg_parent_css', 10);

// END ENQUEUE PARENT ACTION

// custom code

// create custom post type
add_action('init', 'register_brewery_cpt');
function register_brewery_cpt()
{
    register_post_type('brewery', [
        'label' => 'Breweries',
        'public' => true,
        'capability_type' => 'post'
    ]);
}

// get breweries from api

// hooks for both authendticated and non auth users
add_action('wp_ajax_nopriv_get_breweries_from_api', 'get_breweries_from_api');
add_action('wp_ajax_get_breweries_from_api', 'get_breweries_from_api');
function get_breweries_from_api()
{
    $file = get_stylesheet_directory() . '/report.txt';
    $current_page = (!empty($_POST['current_page']) ? $_POST['current_page'] : 1);
    $breweries = [];

    $results = wp_remote_retrieve_body(wp_remote_get('https://api.openbrewerydb.org/breweries/?page=' . $current_page . '&per_page=50'));
    file_put_contents($file, "Current Page: " . $current_page . "\n\n", FILE_APPEND);

    $results = json_decode($results);

    // show in console
    // echo "<script>console.log(" . json_encode(var_export($results, true)) . ");</script>";

    // terminate if not an array or if array is empty
    if (!is_array($results) || empty($results)) {
        return false;
    }

    $breweries[] = $results;
    foreach ($breweries[0] as $brewery) {

        $brewery_slug = sanitize_title($brewery->name . '-' . $brewery->id);

        $brewery_exists = get_page_by_path($brewery_slug, 'OBJECT', 'brewery');

        // prevents duplicates
        if ($brewery_exists === null) {

            // takes the data and creates new poste
            $inserted_brewery = wp_insert_post([
                'post_name' => $brewery_slug,
                'post_title' => $brewery_slug,
                'post_type' => 'brewery',
                'post_status' => 'publish'
            ]);

            if (is_wp_error($inserted_brewery)) {
                // terminate if cant insert brewery
                continue;
            }

            $fillArray = [
                'field_62fda9bb16231' => 'name',
                'field_62fda9c116232' => 'brewery_type',
                'field_62fda9cd16233' => 'street',
                'field_62fda9d216234' => 'city',
                'field_62fda9dd16235' => 'state',
                'field_62fda9e016236' => 'postal_code',
                'field_62fda9fd16237' => 'country',
                'field_62fdaa0316238' => 'longitude',
                'field_62fdaa2716239' => 'latitude',
                'field_62fdaa33ccc5a' => 'phone',
                'field_62fdaa3accc5b' => 'website',
                'field_62fdaa44ccc5c' => 'updated_at',
            ];

            // inserts brewery into wp
            foreach ($fillArray as $key => $name) {
                update_field($key, $brewery->$name, $inserted_brewery);
            }
            ;
        }
        else {

            $brewery_exists_id = $brewery_exists->ID;
            $brewery_exists_timestamps = get_field('updated_at', $brewery_exists_id);

            if ($brewery->updated_at >= $brewery_exists_timestamps) {
                //update post if has newer timestamp
                update_field($key, $brewery->$name, $brewery_exists_id);
            }

        }
        ;
    }
    ;

    $current_page = $current_page + 1;
    wp_remote_post(admin_url('admin-ajax.php?action=get_breweries_from_api'), [
        'blocking' => 'false',
        // only for localhost
        'sslverify' => false,
        'body' => [
            'current_page' => $current_page
        ]
    ]);
}
