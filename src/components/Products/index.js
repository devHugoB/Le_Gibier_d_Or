import React from 'react'
import { 
    ProductsContainer, 
    ProductsHeading, 
    ProductWrapper, 
    ProductCard, 
    ProductImg, 
    ProductInfo, 
    ProductTitle, 
    ProductDesc, 
    ProductPrice, 
    ProductBtn 
} from './ProductsElements'

const Products = ({heading, data, isImg}) => {
    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>
                {data.map((product, index) => {
                    return(
                        <ProductCard key={index}>
                            <ProductImg src={product.img} isImg={isImg} />
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price} €</ProductPrice>
                                <ProductBtn to={product.path}>{product.button}</ProductBtn>
                            </ProductInfo>
                        </ProductCard>
                    )
                })}
            </ProductWrapper>
        </ProductsContainer>
    )
}

export default Products
