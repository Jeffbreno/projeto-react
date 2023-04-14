import React from "react";
import { Image, Dimensions, StyleSheet } from "react-native";

import Texto from '../../../components/Texto';
import topo from '../../../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Topo({ titulo }) {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}>{titulo}</Texto>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        position: "relative",
        width: "100vw",
        height: 578 / 768 * width,
        fontFamily: "Montserrat",
    },
    titulo: {
        width: "100vw",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16,
    },
})