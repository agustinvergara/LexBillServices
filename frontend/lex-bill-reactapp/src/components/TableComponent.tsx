import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Container } from '@mui/material';
import { ReactNode } from 'react';


interface TableComponentProps {
    titleTable?: string
    isTitle?: boolean
    titlesColumns: Array<string>
    tableContentRender: () => ReactNode
}


export const TableComponent: React.FC<TableComponentProps> = ({ titlesColumns, titleTable, isTitle, tableContentRender }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {/* {isTitle && (<div style={{ margin: "0.5rem" }}>
                <Typography variant="h6" >{titleTable}</Typography>
            </div>)} */}
            <Container style={{ paddingRight: 0}}>
                <TableContainer component={Paper} variant='outlined'>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {titlesColumns.map((title, idx) => (
                                    <TableCell key={idx}>{title}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableContentRender && tableContentRender()}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>

    )
}

