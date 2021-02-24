import React from 'react';
import { Text, Rect, Image, Group, Circle } from 'react-konva';
import { CONFIGS_FOLDER } from '../../config/constants';
import useImage from 'use-image';
import PriceNumber from '../PriceNumber';

const FeaturedProduct = ({  text, image, price, type, onDelete, visibleClose }) => {

    const [productImage] = useImage(image, 'Anonymous');

    return (
        <React.Fragment>


            {/* Background */}
            
            <Rect
                x={0}
                shadowColor="#c7c50f"
                shadowBlur={1}
                shadowOpacity={1}
                shadowOffsetX={-10}
                shadowOffsetY={5}
                cornerRadius={10}
                y={0}
                width={CONFIGS_FOLDER.featuredProduct.size}
                height={CONFIGS_FOLDER.featuredProduct.height}
                fill="#e5e202"
            />
            {/* Imagem */}    
            <Image y={40} image={productImage} x={50}  left={50} 
                width={CONFIGS_FOLDER.featuredProduct.image} 
                height={CONFIGS_FOLDER.featuredProduct.image}/> 
            <Rect
                x={CONFIGS_FOLDER.featuredProduct.size - 110}
                cornerRadius={10}
                y={CONFIGS_FOLDER.featuredProduct.height - 50}
                shadowColor="#a00d0d"
                shadowBlur={1}
                shadowOpacity={1}
                shadowOffsetX={-5}
                shadowOffsetY={2}
                width={110}
                height={45}
                fill="red"
            />     
            {/* Descrição */}
            <Text 
                width={CONFIGS_FOLDER.featuredProduct.size}
                y={10}
                align="center"
                x={0}
                lineHeight={1.5}
                fontFamily="'Montserrat', sans-serif"
                fill="black"
                text={text} fontSize={16}/>
            

            {/* Flag */}        
            <Text
                fontSize={18}
                fill="white"
                strokeWidth={2}
                rotation={-20}
                stroke="red"
                strokeScaleEnabled
                fontFamily="'Sigmar One', cursive"
                y={CONFIGS_FOLDER.featuredProduct.height - 30} 
                x={5} text="IMBATÍVEL"/> 

            {/* Preço */}
            <PriceNumber price={price} type={type}/>


             { visibleClose && (
                <Group onClick={() => onDelete()}>

                    
                    <Circle
                        x={CONFIGS_FOLDER.featuredProduct.size - 15}
                        y={15}
                        width={30}
                        height={30} 
                        fill="red" ></Circle>
                    <Text 
                        text="X"
                        fill="white"
                        x={CONFIGS_FOLDER.featuredProduct.size - 20}
                        y={10}/>    
                </Group>  
            )}      
              
        </React.Fragment>
    )
};  

export default FeaturedProduct;

