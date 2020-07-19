drop table IF EXISTS `user`;
create table  `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `age` int(5) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
 
-- ----------------------------
-- Records of tb_user
-- ----------------------------
insert into `user` VALUES ('1', 'laowang', 18);
insert into `user` VALUES ('2', 'laoli', 20);
insert into `user` VALUES ('3', 'laowang2', 38);
insert into `user` VALUES ('4', 'laoli2', 200);