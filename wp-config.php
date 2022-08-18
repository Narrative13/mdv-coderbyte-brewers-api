<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'xYA!l@$6e<,fX3pof;P&4,9RuWl9kKO>h@q;1h2sl@f|P:Z~eK#M)Ug{H6r!]7&d' );
define( 'SECURE_AUTH_KEY',  'c|ob m}!BADMX3j,-eP+l^RAr~mgN_09~5v(q7&xy_qQKO8wkq*_?i0GmbH4p(I*' );
define( 'LOGGED_IN_KEY',    'EU{:!?oghc$#xnepxuP-{h^<WnXcJ[4N>Ys+Bq]-2:<2,Vlxi.#c5Y:TLgUtZuN(' );
define( 'NONCE_KEY',        'gH:D7E-rc+G20(W`wh6P;<CQ.*Yi1@m|Qr0>9T>BLB!vg|_d<t,svK5QK]]6bUOr' );
define( 'AUTH_SALT',        'U(3F^6{7nOc4_^J*z:mxkV@W;}*PY4@27tkatd_mcL#lri8hrG/@yZ^^%IX7|%3)' );
define( 'SECURE_AUTH_SALT', 'a~F&_0FLu!cUy>deOKTTRw_~xk7N8vBmd8LdMl#9DFo4u%_f[$6tk:XVnNDJXv@`' );
define( 'LOGGED_IN_SALT',   '9$o{1a{8nq4eu7T`?$>#m&mr{DlR}}CkP{SaS;x/ZOc^]0Fswd6 1R%=6a_Z%R!k' );
define( 'NONCE_SALT',       '4$]]u[-r2Y!-_b6U_dFc(&LJj]|H]ob[vWFQ+BUvC~_>oYZV+(SBHE=dM}P7/}}>' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
