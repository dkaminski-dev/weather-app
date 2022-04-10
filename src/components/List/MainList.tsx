import styled from "styled-components";

interface Props
{
    children: React.ReactNode;
}

const Box = styled.div`
    display: flex;
    flex-direction: column;
`;

const MainList = ( props: Props ) =>
{
    return (
        <Box>
            {props.children}
        </Box>
    );
}

export default MainList;