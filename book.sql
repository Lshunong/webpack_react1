/*
Navicat MySQL Data Transfer

Source Server         : 本地连接
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2019-03-16 14:59:32
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `book`
-- ----------------------------
DROP TABLE IF EXISTS `book`;
CREATE TABLE `book` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of book
-- ----------------------------
INSERT INTO `book` VALUES ('8', 'ES6入门');
INSERT INTO `book` VALUES ('2', '水浒传');
INSERT INTO `book` VALUES ('1', '三国演义');
INSERT INTO `book` VALUES ('4', '西游记');
INSERT INTO `book` VALUES ('5', '十万个不为什么');
INSERT INTO `book` VALUES ('6', '从你的全世界路过');
INSERT INTO `book` VALUES ('9', '好好活着');
