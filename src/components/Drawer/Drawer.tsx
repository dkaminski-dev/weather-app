import styled from "styled-components";

interface Props
{
    children: React.ReactNode;
}

const DrawerBox = styled.div`
    width: 300px;
`;

export const Drawer = ( props: Props ) =>
{
    return (
        <DrawerBox>
            {props.children}
        </DrawerBox>
    );
}