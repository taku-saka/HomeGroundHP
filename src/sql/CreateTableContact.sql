CREATE TABLE `contact` (
  `id` int(11) NOT NULL COMMENT 'ID',
  `name` varchar(30) NOT NULL COMMENT '氏名',
  `email` varchar(50) NOT NULL COMMENT 'メールアドレス',
  `subject` varchar(30) NOT NULL COMMENT '件名',
  `message` varchar(1500) NOT NULL COMMENT '問い合わせ内容',
  `create_time` timestamp NOT NULL DEFAULT current_timestamp() COMMENT '作成時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- テーブルのインデックス `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- ダンプしたテーブルの AUTO_INCREMENT
--

--
-- テーブルの AUTO_INCREMENT `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID';
