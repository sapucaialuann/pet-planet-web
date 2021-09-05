import styled from 'styled-components';

import { withTheme } from '@material-ui/core/styles';

export const ContainerAccommodation = withTheme(styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;

    @media(max-width: 768px) {
        flex-direction: column;
    }

    .container-page {
        flex: 1;
        overflow-x: hidden;
        overflow-y: scroll;
        padding: 45px 30px;
    }
`);

export const ContentAccommodation = withTheme(styled.div`
    max-width: 1200px;
    width: 100%;
    margin: auto;

    p {
        color: ${props => props.theme.palette.description.secondary.light};
    }

    .container-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        column-gap: 10px;
        row-gap: 15px;
    }
`);

export const ItemCard = withTheme(styled.div`
    .card-container {
        padding: 0;
    }

    .image-item {
        height: 200px;
    }
`);