/*
 Navicat MySQL Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 100134
 Source Host           : localhost:3306
 Source Schema         : finca

 Target Server Type    : MySQL
 Target Server Version : 100134
 File Encoding         : 65001

 Date: 17/07/2018 18:23:22
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for fincas
-- ----------------------------
DROP TABLE IF EXISTS `fincas`;
CREATE TABLE `fincas`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `descripcion` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `idpersona` int(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 29 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of fincas
-- ----------------------------
INSERT INTO `fincas` VALUES (20, 'srere', 'rere', 3);
INSERT INTO `fincas` VALUES (21, 'cuba', 'ffff', 4);
INSERT INTO `fincas` VALUES (24, 'Girasole', 'Esonosepuededecir', 1);
INSERT INTO `fincas` VALUES (25, 'Ruby', 'eso no se dice', 1);
INSERT INTO `fincas` VALUES (26, 'Mambo', 'qlq', 1);
INSERT INTO `fincas` VALUES (27, 'problema', 'problema', 1);
INSERT INTO `fincas` VALUES (28, 'quiero', 'ver', 1);

-- ----------------------------
-- Table structure for personas
-- ----------------------------
DROP TABLE IF EXISTS `personas`;
CREATE TABLE `personas`  (
  `idpersona` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `nombre` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `apellido` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `direccion` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `ciudad` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `cedula` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `telefono` int(12) NULL DEFAULT NULL,
  `tipo` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`idpersona`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of personas
-- ----------------------------
INSERT INTO `personas` VALUES (1, '1', '1', 'robert', 'frias', 'alvares', 'sfm', '402-2651328-7', 6, 'administrador');
INSERT INTO `personas` VALUES (2, '2', '2', 'Fabio', '3', '3', '3', '3', 6, 'empleado');
INSERT INTO `personas` VALUES (3, '3', '3', 'Yinet', '2', '2', '2', '2', 6, 'empleado');
INSERT INTO `personas` VALUES (4, '4', '4', 'Ariel', '6', '6', '6', '6', 6, 'empleado');

-- ----------------------------
-- Table structure for tareas
-- ----------------------------
DROP TABLE IF EXISTS `tareas`;
CREATE TABLE `tareas`  (
  `idtarea` int(255) NOT NULL AUTO_INCREMENT,
  `finca` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `descripcion` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `fecha` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `idpersona` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `activa` char(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`idtarea`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 24 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of tareas
-- ----------------------------
INSERT INTO `tareas` VALUES (21, 'Girasole', '2018-07-19', 'Limpiar zona A', '2', 'false');
INSERT INTO `tareas` VALUES (22, 'Girasole', 'Limpiar zona A', '2018-07-19', '4', 'true');
INSERT INTO `tareas` VALUES (23, 'Girasole', 'Limpiar zona A', '2018-07-19', '3', 'true');

SET FOREIGN_KEY_CHECKS = 1;
