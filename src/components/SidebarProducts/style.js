import styled from 'styled-components';
import { MAP_COLORS } from '../../styles/variables';


export const Aside = styled.aside`
    position: fixed;
    top: 0;
    right: -2px;
    width: 300px;
    background-color: #fff;
    height: 100vh;
    z-index: 2;
    box-shadow: -2px 3px 3px #0000000d;
    padding: 25px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding-top: 120px;
    align-items: center;
    overflow-y: auto;
    overflow-x: hidden;
    transition: all 0.4s ease;
    transform: translateX(100%);
    @media (max-width: 600px) {
        position: relative;
        height: auto;
        margin-bottom: 20px;
        padding: 20px;
        width: 100%;
        transform: translateX(0%) !important;
    }
    &.active {
        transform: translateX(0%);
    }
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 10px;
        width: 100%;
        border-bottom: 1px solid #ccc;
    }
    .bt-close {
        border: 0;
        background: transparent;
        font-size: 40px;
        cursor: pointer;
        background: ${MAP_COLORS.colors.primary.normal};
        color: #fff;
        width: 50px;
        line-height: 50px;
        border-radius: 5px;
        height: 50px;
    }
    .list {
        padding: 15px 0 0;
        list-style: none;
        width: 100%;
        margin-bottom: 0;
        li {
            padding-bottom: 10px;
            font-size: 13px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            &:last-child {
                padding-bottom: 0;
            }
        }
        button {
            border: 0;
            padding: 0;
            cursor: pointer;
            background: transparent;
            color: red;
        }
    }
`;