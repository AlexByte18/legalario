-- -------------------------------------------------------------
-- TablePlus 6.8.0(654)
--
-- https://tableplus.com/
--
-- Database: legalario
-- Generation Time: 2026-01-19 18:58:40.0390
-- -------------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


DROP TABLE IF EXISTS `cache`;
CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `cache_locks`;
CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `job_batches`;
CREATE TABLE `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `jobs`;
CREATE TABLE `jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint unsigned NOT NULL,
  `reserved_at` int unsigned DEFAULT NULL,
  `available_at` int unsigned NOT NULL,
  `created_at` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `password_reset_tokens`;
CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `sessions`;
CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `age` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2026_01_19_210720_add_new_fields_to_users_table', 2);

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('ulrApX24Bi5D8FTQdHqMvaKShKPiKJz4oNVRkjt2', NULL, '127.0.0.1', 'PostmanRuntime/7.51.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNGxRSWMzbkwybzJGWEh1TGVyT05hOVhBZzVsRnFJbXZVMk82cHhuUiI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMSI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1768862437);

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `country`, `age`) VALUES
(1, 'Test User', 'test@example.com', '2026-01-19 21:10:40', '$2y$12$RSO/GT1.IZS0dnNMYpuFr.PaIdwazIHhhVmlZ5TLdAUQwQOSLJjxK', '4HX6Hxq4tI', '2026-01-19 21:10:40', '2026-01-19 21:10:40', 'Burundi', 60),
(2, 'Dr. Orlo McDermott', 'oconnell.ozella@example.com', '2026-01-19 21:10:40', '$2y$12$RSO/GT1.IZS0dnNMYpuFr.PaIdwazIHhhVmlZ5TLdAUQwQOSLJjxK', '98Gh484ku8', '2026-01-19 21:10:40', '2026-01-19 21:10:40', 'Azerbaijan', 57),
(3, 'Dr. Jeffrey Koelpin', 'keebler.turner@example.com', '2026-01-19 21:10:40', '$2y$12$RSO/GT1.IZS0dnNMYpuFr.PaIdwazIHhhVmlZ5TLdAUQwQOSLJjxK', 'k6RzKdmNyK', '2026-01-19 21:10:40', '2026-01-19 21:10:40', 'Palau', 18),
(4, 'Jerad Grady Jr.', 'durgan.stephen@example.net', '2026-01-19 21:10:40', '$2y$12$RSO/GT1.IZS0dnNMYpuFr.PaIdwazIHhhVmlZ5TLdAUQwQOSLJjxK', '2WFUcyQjDX', '2026-01-19 21:10:40', '2026-01-19 21:10:40', 'Mozambique', 22),
(5, 'Grayson Bergstrom PhD', 'kuhn.rosalinda@example.org', '2026-01-19 21:10:40', '$2y$12$RSO/GT1.IZS0dnNMYpuFr.PaIdwazIHhhVmlZ5TLdAUQwQOSLJjxK', 'CMuozOUiNL', '2026-01-19 21:10:40', '2026-01-19 21:10:40', 'New Caledonia', 52),
(6, 'Mr. Nicolas Lang', 'sasha20@example.org', '2026-01-19 21:10:40', '$2y$12$RSO/GT1.IZS0dnNMYpuFr.PaIdwazIHhhVmlZ5TLdAUQwQOSLJjxK', '4khOhEDmMe', '2026-01-19 21:10:40', '2026-01-19 21:10:40', 'Saint Lucia', 44),
(7, 'Ms. Marilyne Nolan DVM', 'swisoky@example.org', '2026-01-19 21:10:40', '$2y$12$RSO/GT1.IZS0dnNMYpuFr.PaIdwazIHhhVmlZ5TLdAUQwQOSLJjxK', 'xlnh1e3vYi', '2026-01-19 21:10:40', '2026-01-19 21:10:40', 'Maldives', 55),
(8, 'Prof. Margarette Batz Jr.', 'hollie81@example.org', '2026-01-19 21:10:40', '$2y$12$RSO/GT1.IZS0dnNMYpuFr.PaIdwazIHhhVmlZ5TLdAUQwQOSLJjxK', 'wuJ3AKrhhU', '2026-01-19 21:10:40', '2026-01-19 21:10:40', 'Philippines', 89),
(9, 'Lauretta Rosenbaum', 'izaiah71@example.net', '2026-01-19 21:10:40', '$2y$12$RSO/GT1.IZS0dnNMYpuFr.PaIdwazIHhhVmlZ5TLdAUQwQOSLJjxK', 'gKDYLfqE5r', '2026-01-19 21:10:40', '2026-01-19 21:10:40', 'Luxembourg', 100),
(10, 'Prof. Ettie Casper IV', 'schmidt.saige@example.org', '2026-01-19 21:10:40', '$2y$12$RSO/GT1.IZS0dnNMYpuFr.PaIdwazIHhhVmlZ5TLdAUQwQOSLJjxK', 'U2UY1To5Jw', '2026-01-19 21:10:40', '2026-01-19 21:10:40', 'Madagascar', 56),
(11, 'Philip Wiegand', 'imurray@example.com', '2026-01-19 21:10:40', '$2y$12$RSO/GT1.IZS0dnNMYpuFr.PaIdwazIHhhVmlZ5TLdAUQwQOSLJjxK', 'ZuxO3dckND', '2026-01-19 21:10:40', '2026-01-19 21:10:40', 'United States Minor Outlying Islands', 59),
(20, 'test9', 'tes9@test.com', NULL, '$2y$12$fI2PtWtWS/oMH.NtRU1KE.j8Z/XbCfRn1Z7suZLT91JoFauL5PjO6', NULL, '2026-01-20 00:45:37', '2026-01-20 00:45:37', 'canada', 18),
(21, 'user test', 'test2@test.com', NULL, '$2y$12$q2V2Zn4wG7Ze1MM1i3vvo.ptxQFNTa8H3GHoPGFX.hAzf7oyJH65.', NULL, '2026-01-20 00:48:40', '2026-01-20 00:48:40', 'Canada', 18);



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;