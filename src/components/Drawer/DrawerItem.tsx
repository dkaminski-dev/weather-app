import styled from "styled-components";

interface Props
{
    icon: React.ReactNode;
    text: string;
    clickAction?: () => void;
}

const ItemBox = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
    gap: 20px;
    cursor: pointer;
`;

export const DrawerItem = ( { icon, text, clickAction }: Props ) =>
{
    return (
        <ItemBox onClick={() => clickAction?.()}>
            {icon}
            <span>{text}</span>
        </ItemBox>
    );
}