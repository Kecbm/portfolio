import React from "react";

//  Número total de botões (onde cada botão é uma página)
const MAX_ITEMS = 5;

//  Botões visiveis a direita e a esqueda
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Pagination = ({ limit, total, offset }) => {
    //  Página atual
    const current = offset ? (offset / limit) + 1 : 1;

    //  Número total de Páginas
    const pages = Math.ceil(total / limit);

    //  Primeiro botão visivel
    const first = Math.max(current - MAX_LEFT, 1);

    //  ESTOU EM 15 MIN - https://www.youtube.com/watch?v=v91BLoapVDw

    return <div>Paginação</div>
}

export default Pagination;
