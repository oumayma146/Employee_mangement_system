-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : dim. 21 juil. 2024 à 11:21
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `shafaq`
--

-- --------------------------------------------------------

--
-- Structure de la table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2024_07_17_073934_create_personal_access_tokens_table', 1),
(5, '2024_07_17_075806_create_personal_access_tokens_table', 2),
(6, '2024_07_17_081830_create_permission_tables', 2);

-- --------------------------------------------------------

--
-- Structure de la table `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `model_has_roles`
--

INSERT INTO `model_has_roles` (`role_id`, `model_type`, `model_id`) VALUES
(1, 'App\\Models\\User', 1);

-- --------------------------------------------------------

--
-- Structure de la table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `guard_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'upload files', 'web', '2024-07-17 08:05:59', '2024-07-17 08:05:59'),
(2, 'delete files', 'web', '2024-07-17 08:05:59', '2024-07-17 08:05:59'),
(3, 'create folders', 'web', '2024-07-17 08:05:59', '2024-07-17 08:05:59'),
(4, 'delete folders', 'web', NULL, NULL),
(5, 'view files', 'web', NULL, NULL),
(6, 'view folders', 'web', NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'auth_token', 'bebbe8977fe9e33c48c1650a2ca22edf00084815cbe5fdfdf30526c989c858e6', '[\"*\"]', NULL, NULL, '2024-07-18 07:14:52', '2024-07-18 07:14:52'),
(2, 'App\\Models\\User', 1, 'auth_token', 'eb91031d036797512133cf24ad74e0dcd6c93c9f8e1e0c7712a37fc9169f0bd3', '[\"*\"]', NULL, NULL, '2024-07-18 07:15:29', '2024-07-18 07:15:29'),
(3, 'App\\Models\\User', 1, 'auth_token', '7095837ea3f61fb12a8fa0f9a988ecc5b8cea2fc0676319a6531dc63e380f635', '[\"*\"]', NULL, NULL, '2024-07-18 07:16:44', '2024-07-18 07:16:44'),
(4, 'App\\Models\\User', 1, 'auth_token', 'b4f3bad2e8a5b3a7f4b36967aa6f45079742f645d882fd014028de0086eff56a', '[\"*\"]', NULL, NULL, '2024-07-18 07:52:35', '2024-07-18 07:52:35'),
(5, 'App\\Models\\User', 1, 'auth_token', '3bfc3a32cd6de77105bf8442e7e17a91d608f606485c4d9cbe6a1ee8df80fbb3', '[\"*\"]', NULL, NULL, '2024-07-18 08:02:54', '2024-07-18 08:02:54'),
(6, 'App\\Models\\User', 1, 'auth_token', 'd0b86855bd6b4c3fde6704bfb036601181c988cb1cad691b69b1930fc51355b5', '[\"*\"]', NULL, NULL, '2024-07-18 08:09:10', '2024-07-18 08:09:10'),
(7, 'App\\Models\\User', 1, 'auth_token', 'f25272c64f02867859513f3c16bb24fa6830a8e940f560ac5700f2cd171403c6', '[\"*\"]', NULL, NULL, '2024-07-18 08:09:32', '2024-07-18 08:09:32'),
(8, 'App\\Models\\User', 1, 'auth_token', 'aa4f0f38773cf24ca3d382c6cd10d82ae6cdaa41033b7fa0c93ce96a9a294a10', '[\"*\"]', NULL, NULL, '2024-07-18 08:09:56', '2024-07-18 08:09:56'),
(9, 'App\\Models\\User', 1, 'munaf', 'fbf236726ace4eb88eb6940808bd243f3e9d7c157acd801da4f0f35ee18a89d3', '[\"*\"]', NULL, NULL, '2024-07-18 08:34:55', '2024-07-18 08:34:55'),
(10, 'App\\Models\\User', 1, 'munaf', 'a1cb349feaa414745e375fb1e591653c0a7a195de1fe9dbcc5e918688a7a49bf', '[\"*\"]', '2024-07-18 19:44:25', NULL, '2024-07-18 19:43:53', '2024-07-18 19:44:25'),
(11, 'App\\Models\\User', 1, 'munaf', 'aebc0b4af09174d0889d80334bc3b8c1aeb6e8195b3bd0bc2c18dea0affa6a27', '[\"*\"]', '2024-07-18 19:46:30', NULL, '2024-07-18 19:46:29', '2024-07-18 19:46:30'),
(12, 'App\\Models\\User', 1, 'munaf', 'b33a6bb1657f2b57b7962ff57b2adece0e5909bde91a4054208c2ae1abca4530', '[\"*\"]', '2024-07-18 19:58:57', NULL, '2024-07-18 19:58:56', '2024-07-18 19:58:57'),
(13, 'App\\Models\\User', 1, 'munaf', '04b56793ab47de51fdf45e8e22dc819332701c13a4bc5c581962de232e8bce8f', '[\"*\"]', '2024-07-18 20:05:13', NULL, '2024-07-18 20:05:11', '2024-07-18 20:05:13'),
(14, 'App\\Models\\User', 1, 'auth_token', '342ff184b6809c8223a1c911fe1756f9caafacd5fb6ef7c0d0c0c4016606dae6', '[\"*\"]', NULL, NULL, '2024-07-18 20:19:02', '2024-07-18 20:19:02'),
(15, 'App\\Models\\User', 1, 'auth_token', 'e048143baadd5214bfe774facc6500bd1a977ae931b5aa0b159eff5714f5115b', '[\"*\"]', NULL, NULL, '2024-07-18 20:19:22', '2024-07-18 20:19:22'),
(16, 'App\\Models\\User', 1, 'auth_token', '383cc464df578ced990866251a19e7704e647d19307eb61169c2510691633a04', '[\"*\"]', NULL, NULL, '2024-07-18 20:20:11', '2024-07-18 20:20:11'),
(17, 'App\\Models\\User', 1, 'auth_token', '635a7cd1bb76740b7e07cae89b54be2faaad7f1f835b0510f8d20d44e4f6d8bb', '[\"*\"]', '2024-07-18 20:56:25', NULL, '2024-07-18 20:21:58', '2024-07-18 20:56:25'),
(18, 'App\\Models\\User', 1, 'auth_token', 'ea0ed8a0254b1585a4709cb4686c9d168ce2e5c681b8e58be886a07f1497a2a8', '[\"*\"]', '2024-07-18 20:59:38', NULL, '2024-07-18 20:56:29', '2024-07-18 20:59:38'),
(19, 'App\\Models\\User', 1, 'auth_token', '13f1e7173f60e55ccf9173dafa63cb8304630f7a247d820352fc71a73942b9bd', '[\"*\"]', '2024-07-18 21:07:51', NULL, '2024-07-18 21:07:50', '2024-07-18 21:07:51'),
(20, 'App\\Models\\User', 1, 'auth_token', 'f000506e99a18a59ff89d91f970235b5343176d56ada9aeb5c58f160da6c2ec9', '[\"*\"]', '2024-07-18 21:08:20', NULL, '2024-07-18 21:08:13', '2024-07-18 21:08:20'),
(21, 'App\\Models\\User', 1, 'auth_token', 'ca0744cc71262be261096179ca3c5d1ec91ee423efdcb1db6df874691c79f447', '[\"*\"]', NULL, NULL, '2024-07-18 21:11:46', '2024-07-18 21:11:46'),
(22, 'App\\Models\\User', 1, 'auth_token', '7f4cc388cd90709c396f2c0e334f8de8a9d999e8d42c9074dcced7cf20012f1d', '[\"*\"]', '2024-07-18 22:06:56', NULL, '2024-07-18 21:45:56', '2024-07-18 22:06:56'),
(23, 'App\\Models\\User', 1, 'auth_token', 'ec1e468a660f949e889a92b62b3943d5982d5a3b8a1db3de7fc2e3a87ee138bb', '[\"*\"]', '2024-07-18 22:10:20', NULL, '2024-07-18 22:07:09', '2024-07-18 22:10:20'),
(24, 'App\\Models\\User', 1, 'auth_token', '166d6c88d19a9d9f94e1c35699a136cfeba3b7f92377a2ae2d7e7bf07bebff01', '[\"*\"]', '2024-07-18 22:38:55', NULL, '2024-07-18 22:38:45', '2024-07-18 22:38:55'),
(25, 'App\\Models\\User', 1, 'auth_token', '897fa18fc2fa239066aaf6f1ec9b7f635fb1f1d2fff6e4601919aa4bc18ce8b2', '[\"*\"]', '2024-07-18 22:44:16', NULL, '2024-07-18 22:44:14', '2024-07-18 22:44:16'),
(26, 'App\\Models\\User', 1, 'auth_token', 'dcc996e21438e3c6795a120726fffa11f8272ee055cfae19e9dacab5d918823d', '[\"*\"]', '2024-07-18 22:49:02', NULL, '2024-07-18 22:45:23', '2024-07-18 22:49:02'),
(27, 'App\\Models\\User', 1, 'auth_token', 'dca47c2c81d2e15dce3bada2bb2702abd874c0ce90fdfa2dbcbb0c9e167b6226', '[\"*\"]', '2024-07-18 22:56:09', NULL, '2024-07-18 22:55:16', '2024-07-18 22:56:09'),
(28, 'App\\Models\\User', 1, 'auth_token', 'de127d525f74178131e5628bfb0c796127cc61b713e90df41440fd83a26136b5', '[\"*\"]', '2024-07-18 23:24:01', NULL, '2024-07-18 22:57:18', '2024-07-18 23:24:01'),
(29, 'App\\Models\\User', 1, 'auth_token', 'bb243b47cc97b56859f7a3a9b3627eb8bc3af7bf47dd03706901f99417357d2e', '[\"*\"]', '2024-07-19 06:34:57', NULL, '2024-07-18 23:24:26', '2024-07-19 06:34:57'),
(30, 'App\\Models\\User', 1, 'auth_token', 'd499bb7420355bda6a20ef0e85861d6679284ba6258bbde854ebc85f917a7977', '[\"*\"]', NULL, NULL, '2024-07-19 09:00:49', '2024-07-19 09:00:49'),
(31, 'App\\Models\\User', 1, 'auth_token', '9c152b26d2d1041e6c95851e6282f2fe74a953fcb9f547802b9c2396ca4dd06e', '[\"*\"]', '2024-07-19 09:10:52', NULL, '2024-07-19 09:00:50', '2024-07-19 09:10:52'),
(32, 'App\\Models\\User', 1, 'auth_token', '219ede289733ef382605c4d3fe53fc8d94335f5bfecef3c7ccf92bec9a781cfe', '[\"*\"]', '2024-07-19 14:35:42', NULL, '2024-07-19 11:08:12', '2024-07-19 14:35:42'),
(33, 'App\\Models\\User', 1, 'auth_token', '9680c79fc6784b02b3980becd7ecc80fce9abca2800d29e8c4009934a181a915', '[\"*\"]', '2024-07-19 21:48:01', NULL, '2024-07-19 19:52:49', '2024-07-19 21:48:01'),
(34, 'App\\Models\\User', 1, 'auth_token', '4b7959e9e8c150979a2abffe1d069058564d14187a8c01f572d3e19adbae4079', '[\"*\"]', '2024-07-19 22:28:27', NULL, '2024-07-19 21:48:38', '2024-07-19 22:28:27'),
(35, 'App\\Models\\User', 2, 'auth_token', '24bc1eb057f2abf283df3b37b35fc8fef6e05e2dcf333823a61ce446fc91455a', '[\"*\"]', NULL, NULL, '2024-07-19 22:34:43', '2024-07-19 22:34:43'),
(36, 'App\\Models\\User', 1, 'auth_token', '70187219b6af29e6c8f932835089d7290cc718bb6d7e209b21c54c3ff42b217c', '[\"*\"]', '2024-07-19 23:39:18', NULL, '2024-07-19 22:36:58', '2024-07-19 23:39:18'),
(37, 'App\\Models\\User', 1, 'auth_token', '2fc7c31ce8b02f6386f2fa3460f07ca098ced2811ddf6114f82e28929c5accf8', '[\"*\"]', NULL, NULL, '2024-07-20 14:14:44', '2024-07-20 14:14:44'),
(38, 'App\\Models\\User', 1, 'auth_token', '52c2e64d3066644e156a944fa198d0fef3b6736a612977cafa5c3f8e8da2e076', '[\"*\"]', '2024-07-20 21:28:51', NULL, '2024-07-20 14:14:45', '2024-07-20 21:28:51'),
(39, 'App\\Models\\User', 2, 'auth_token', '1dd56c4d4ec8415c24ec5825f1e26cb1be50bb8673b14d006295ef430940e0ff', '[\"*\"]', '2024-07-20 21:29:24', NULL, '2024-07-20 21:29:20', '2024-07-20 21:29:24'),
(40, 'App\\Models\\User', 1, 'auth_token', '7ead6d26e8f7811ac9fd4f4ad17d2516c8f4b9ba21bd87327027a2cc3646445d', '[\"*\"]', '2024-07-20 21:29:59', NULL, '2024-07-20 21:29:58', '2024-07-20 21:29:59'),
(41, 'App\\Models\\User', 1, 'auth_token', 'cda470872594466efc440bcdef0cae19b52a620813769a3642400d00f527eabd', '[\"*\"]', '2024-07-21 06:39:40', NULL, '2024-07-21 06:11:17', '2024-07-21 06:39:40'),
(42, 'App\\Models\\User', 2, 'auth_token', 'cde524fcaddbea368d873165992b3417cead91f37459dfbec5d1335d5e196414', '[\"*\"]', '2024-07-21 06:43:12', NULL, '2024-07-21 06:43:00', '2024-07-21 06:43:12'),
(43, 'App\\Models\\User', 1, 'auth_token', 'e316e3a179d5c1759a29f56132254f849cb4220a2e9c4202f93c1d8fa8d8acc9', '[\"*\"]', '2024-07-21 07:06:02', NULL, '2024-07-21 06:43:27', '2024-07-21 07:06:02'),
(44, 'App\\Models\\User', 2, 'auth_token', '25306520fa1bb6ee97bc20b478100f9ee64c2126bdb196b56e053cbc17fe1552', '[\"*\"]', '2024-07-21 07:11:17', NULL, '2024-07-21 07:10:53', '2024-07-21 07:11:17'),
(45, 'App\\Models\\User', 1, 'auth_token', 'fc0ffe27de4c118634ab06503a74558dad7880d26ea9f7daf7d7a6e047f80895', '[\"*\"]', '2024-07-21 07:43:14', NULL, '2024-07-21 07:39:18', '2024-07-21 07:43:14');

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `guard_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `roles`
--

INSERT INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'web', '2024-07-17 08:42:14', '2024-07-17 08:42:14'),
(2, 'employee', 'web', '2024-07-17 08:42:14', '2024-07-17 08:42:14');

-- --------------------------------------------------------

--
-- Structure de la table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `role_has_permissions`
--

INSERT INTO `role_has_permissions` (`permission_id`, `role_id`) VALUES
(1, 1),
(1, 2),
(2, 1),
(2, 2),
(3, 1),
(3, 2),
(4, 1),
(5, 1),
(5, 2),
(6, 1),
(6, 2);

-- --------------------------------------------------------

--
-- Structure de la table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('2rPReC3fOB5UX1iiTGSdujLG9Pt8fMvOvnaRmkMo', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiVDQycEdZdHpqWjF6d1c5Q1NWOEo0NFc4UE9kd0RjbjNGcWtZa3FLaCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9zYW5jdHVtL2NzcmYtY29va2llIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721294081),
('370Ry0VdtbHTaONpFlHl4xjxloALjl5XmVDQZdsr', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiRGJjakhsQXpmd0tyR05RSHlQRDVYU0pRTEw3WTRoc2d5MTB6Vk96SCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721335750),
('a59wnbplqI1YUWLadQRZZGeKGEjBvvFR6mnqRhEy', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiY3VpZjdpSzVSQXcza0ZsdFJxME5hV0NzT0tCb0IxYW9BdUpHa0tmayI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721295561),
('adKwp7ryzPLcf0dhYqa7GVE0VLdItUKo6DQY1iQs', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiMzJFSGM1aWpid2lmSVNqMDJId0RHeGJ0WnlpZTBWNnBEazhUZWhKWiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721295648),
('BmLpF9CUUKDDGCsVZvg5RuKxgsD0Slg0YnyW0sOg', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiUXZCQ2JWZHUzRllEUGhyUDdNd3UzQkdieTB1ZlhIZnZCNjFKaUVzUCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721296152),
('bwZxgljqBjqec3T6KsLFHcUmDwujuF7TCEAdt7E3', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiNGJpeDF2TXBwb3FleERCcEJxWm9DbXA4ejZyaEtUVXlEUHpjQ0NQbiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721295275),
('c0xhcT8jFRd3FNQ950Cc2WRtmW35e9PChQwwPDf5', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiWWRzTzlJVEhIWWdhWHVLNTVvQzVhNlJNSnVISmdWaUlFbDNzV2hOWiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721336096),
('Co0lDL03UMUz9HcuGr3ttnG6LE1kmJX2VmevDiBg', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiMGhHVzFuVFpOQ1NYazR2ODlON2s3QmFtZm1BQTVPcTFUS0RhRGlSciI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721295566),
('DHyao0AcUtDDfIgRDWI77SKRx1lTXPJdBoo9Eh6p', NULL, '127.0.0.1', 'PostmanRuntime/7.40.0', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiaGFtQlNjajBZYUVyQ3lQYTRFZlBVU3g2alJzZ0pwTGdTRGVhMjFZZSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721255784),
('dvCN7q41CKuYjApwtKoIH5JfniRftojEod6UFICF', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiNGxUMHZNS2JtQXhiWTJONlhtb1E5dFBPUjhCdFVUdW04R2lmZ0ltTyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721295250),
('eJ6Prbevd3U6QXwxFixiFiTVcLlerVFUZPJ2w96M', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Avast/126.0.0.0', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiQXBXNjUwT2lhV0hEdktiVTdzZGtzZjBqdjU1dEl1aXJzZ3REZDY3diI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721336261),
('g6mHvmjE1URUiBHMU37yuVOK9js3EWHWXnV5Kviw', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiazhRU29MbTFWWXdRTm5RMEVqV1B6amRoQzEyQTdBaXBDdENwSjhuUiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721335952),
('GYp8J8Bveja9UdcHWFzQAr7FSBLnnc1pHg8gf2jN', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoid0N2Znd4Q0k3M0RvbllqTE1GcE1JVHU1Yjhja3pTQ0UxTTJ0dmhCciI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721295250),
('kOam25GuhQ6aSSfJMpcuDzB5GsW5P64U1xz6VSE2', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiVlVUOWVjalU5YWlKaGl3TUF6QW5VbjNjOWtiTUVBV1J0NkFxSnhqSSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721295507),
('ksVs2xSxNbbzVktfdeaoW9ttBxjODBqu3T1II0be', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiRUR6R01XbVlhZ29FWFNCMUY5NkJRMEVEbkpScWRVWGdXTFVNbHdybyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721296347),
('mZAWGD1D3MHLwys87FRY2NfsnsIVptcdTv8eVy3H', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoicndGSmZRRWF1M3dkZVhmem01TjVpb3N3SUNOS2lnM2dQNWpnTXV1cyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721296200),
('N4BdvmA2oAnVYFXXMzA3uuR8CdCfzkUJxuurqXau', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiS0tGcXV1RE1neTJCckdLdDRMU3FucW52VElqWWZsdTdnNkR1U2NDayI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721336057),
('Ox4Z9zaJpwGIzdspUP2TWV3GLgL4nK3zmAfeuUpo', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiU3dEY1doaXY0Tmg1SUNFWTBIN053ajRxTGk5b0tnb3dxTjZZanFhaSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721296128),
('qpgqS7rpnCGqYWWjZkZg3xTR7n7CBy6ioxMBp60A', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiRWNVM1B0QVZKZEhGM2dvRVF0RkwzQW55SjdIeFhPZERmQm9qZFBvTyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721295632),
('TSIhwcgOirqA7SMZWL0T4GpPy4JQt8oX6OQqYuwr', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiZTFjcGdUOUpJdWVxdzNNTE91MlF6cGliOGFvbXRtV2dQY1IwNkdlMyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721336106),
('Wh1tQFnZlXJxEfWwJ82uZqKIoWELCtumBt7gboqM', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiVDZ6MndFam81dENRVHNEQTFUNVlubzk0RUE2UEd1SThsS1dsOVI1SSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721333138),
('wLpDiZ7xO5rCzWskhe97wg2Q0ICAqFYs3VcHUtx3', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiWW9uNkl3VVRrTDNYYmZ5akhVcFRyeGpTN2U3cmZ4Rm9KY3pLWlptdCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721295250),
('xeVCPDCGutrJD56FQF31PZwLiFbX3bLf72vWVVFF', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiMVBrZEZkdDNBdkViUkJSQldhRlRFQ2lzUGlNOUkzaU5SYmF3bGNaNCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721295249),
('XPlujgyCjrYWgkCzBF8fdMcee6d1kRLnpaZTbIvc', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Avast/126.0.0.0', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiQmdVaHdNWTN3WUFTa3Q3Q3MwWnR0VUYzbWxxc2xhNWlYZVJxOUx0SiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721336267),
('YzfhDtxSph9ZTwUU0MfMhiXQHmc3dzfAZBJxA4AP', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoieUo5aW1NYmtlTlZXc2ZYMFZDeWtiN3IzZnpOa3hzMlI2dDh3ZllJVSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721336019);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Test User', 'test@example.com', NULL, '$2y$12$m3KxFQeSf/RtW3Z.ThXF3eKRY28aaIogcofMZ9Nln8LQ02LCqD2He', NULL, '2024-07-17 20:53:10', '2024-07-17 20:53:10'),
(2, 'oumaima', 'oumaima.loussaif97@gmail.com', NULL, '$2y$10$P43v9RRGdD/1oxb9W3GY4O9SImtz8DH8.7dGIQoYUyp8YBLkMRnIW', NULL, NULL, NULL),
(3, 'asma2', 'testd@example.com', NULL, '$2y$12$YJTDGVIB85cIeySrFHJoyOhEC4hEq3lnwrKjSKxRgi7vwVqWFQjsi', NULL, '2024-07-20 20:49:59', '2024-07-20 20:58:40');

-- --------------------------------------------------------

--
-- Structure de la table `user_has_roles`
--

CREATE TABLE `user_has_roles` (
  `id` int(11) NOT NULL,
  `role_id` int(100) NOT NULL,
  `user_id` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `user_has_roles`
--

INSERT INTO `user_has_roles` (`id`, `role_id`, `user_id`) VALUES
(1, 1, 1),
(2, 2, 2),
(4, 2, 3);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Index pour la table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Index pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Index pour la table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Index pour la table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Index pour la table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Index pour la table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Index pour la table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`);

--
-- Index pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Index pour la table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`);

--
-- Index pour la table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Index pour la table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Index pour la table `user_has_roles`
--
ALTER TABLE `user_has_roles`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT pour la table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `user_has_roles`
--
ALTER TABLE `user_has_roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
