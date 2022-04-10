import { Button } from "@mui/material";
import { observer } from "mobx-react";
import styled from "styled-components";

interface Props
{
    title: string;
    description: string;
    details: Map<string, string>;
    actions: { title: string, clicked: () => void }[];
}

const ListItemBox = styled.div`
    display: flex;

    width: 61%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-self: center;

    @media (max-width: 1000px) {
        flex-direction: column;
        justify-content: none;
        align-items: stretch;
    }

    padding: 30px;
    gap: 10px;
    border: 1px solid #1976d2;
    border-radius: 7px;
    margin: 10px;
`;

const HeaderBox = styled.div`
    font-size: 20px;
    align-self: center;
    width: 100px;
`;

const DescriptionBox = styled.div`
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 100px;
`;

const DetailBox = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    gap: 5px;
    width: 170px;
    align-self: center;
`;

const DetailItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const ActionBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 12px;
    gap: 12px;
`;

const MainListItem = observer( ( props: Props ) =>
{
    return (
        <ListItemBox>
            <HeaderBox>
                <span>{props.title}</span>
            </HeaderBox>
            <DescriptionBox>
                <span>{props.description}</span>
            </DescriptionBox>
            <DetailBox>
                {Array.from( props.details ).map( kv =>
                {
                    return (
                        <DetailItem>
                            <span>{kv[ 0 ]}</span>
                            <span>{kv[ 1 ]}</span>
                        </DetailItem>
                    );
                } )}
            </DetailBox>
            <ActionBox>
                {props.actions.map( action =>
                {
                    return (
                        <Button size="small" variant="contained" onClick={() => action.clicked()}>{action.title}</Button>
                    );
                } )}
            </ActionBox>
        </ListItemBox>
    );
} );

export default MainListItem;