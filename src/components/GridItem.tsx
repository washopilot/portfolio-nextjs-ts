import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { StaticImageData } from 'next/image';
import NextLink from 'next/link';
import ImgBlurAnimated from './ImgBlurAnimated';

interface IWorkGridItemProps {
    children: React.ReactNode;
    id: string;
    title: string;
    thumbnail: StaticImageData;
}

export const WorkGridItem = ({ children, id, title, thumbnail }: IWorkGridItemProps) => (
    <Box w="100%" textAlign="center">
        <NextLink href={`/works/${id}`} passHref legacyBehavior scroll={false}>
            <LinkBox cursor="pointer">
                <ImgBlurAnimated src={thumbnail} alt={title} className="grid-item-thumbnail" placeholder="blur" />
                <LinkOverlay href={`/works/${id}`}>
                    <Text mt={2} fontSize={20}>
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={14}>{children}</Text>
            </LinkBox>
        </NextLink>
    </Box>
);

export const GridItemStyle = () => (
    <Global
        styles={`
        .grid-item-thumbnail {
          border-radius: 12px;
        }
      `}
    />
);
